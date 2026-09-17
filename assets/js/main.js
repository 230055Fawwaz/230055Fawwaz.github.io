/**
 * SCP ARCHIVE SYSTEM SCRIPTS
 * Interactive modules for Dossier Navigation, Redacted Text, Project Catalog, and Detail Loader
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initRedactedText();
  initActiveNavLink();
  initFeaturedProjects();
  initProjectsCatalog();
  initProjectDetail();
  initContactTerminal();
});

/* --- 1. Mobile Nav Toggle --- */
function initMobileNav() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('is-open');
    });
  }
}

/* --- 2. Redacted Text Interactive Reveal --- */
function initRedactedText() {
  const redactedElements = document.querySelectorAll('.redacted');
  redactedElements.forEach(el => {
    // Reveal on click or touch
    el.addEventListener('click', () => {
      el.classList.toggle('revealed');
    });
    // Add title hint
    el.setAttribute('title', 'KLASIFIKASI: Klik untuk mendeklasifikasi teks.');
  });
}

/* --- 3. Active Nav Link Marker --- */
function initActiveNavLink() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* --- 4. Render Featured Projects on Home Page (index.html) --- */
function initFeaturedProjects() {
  const container = document.getElementById('featured-projects-container');
  if (!container || typeof getFeaturedProjects !== 'function') return;

  const featured = getFeaturedProjects();
  container.innerHTML = featured.map(p => createProjectCardHtml(p)).join('');
  initRedactedText();
}

/* --- 5. Render & Filter Projects on Projects Page (proyek.html) --- */
function initProjectsCatalog() {
  const container = document.getElementById('all-projects-container');
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!container || typeof getAllProjects !== 'function') return;

  const allProjects = getAllProjects();

  function renderList(category = 'all') {
    const filtered = category === 'all' 
      ? allProjects 
      : allProjects.filter(p => p.category === category);
    
    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="scp-warning-box" style="grid-column: 1 / -1;">
          <strong>[ARSIP KOSONG]</strong>
          Tidak ada berkas proyek yang ditemukan untuk kategori klasifikasi ini.
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map(p => createProjectCardHtml(p)).join('');
    initRedactedText();
  }

  // Initial render
  renderList('all');

  // Filter button event listeners
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-category');
      renderList(cat);
    });
  });
}

/* --- Helper: HTML Template for Project Card --- */
function createProjectCardHtml(project) {
  const tagsHtml = project.techStack
    .map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`)
    .join('');

  const githubBtn = project.githubUrl 
    ? `<a href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn-dossier btn-dossier-secondary">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
        GitHub
       </a>`
    : '';

  return `
    <article class="dossier-card">
      <div>
        <div class="card-meta-bar">
          <span class="card-item-code">${escapeHtml(project.itemNumber)}</span>
          <span class="card-class-badge">${escapeHtml(project.classification)}</span>
        </div>
        <h3 class="card-title">${escapeHtml(project.title)}</h3>
        <p class="card-desc">${escapeHtml(project.shortDesc)}</p>
        <div class="tag-list">${tagsHtml}</div>
      </div>
      <div class="card-action-bar">
        ${githubBtn}
        <a href="proyek-detail.html?id=${encodeURIComponent(project.id)}" class="btn-dossier">
          Baca Detail &rarr;
        </a>
      </div>
    </article>
  `;
}

/* --- 6. Dynamic Project Detail Loader (proyek-detail.html) --- */
function initProjectDetail() {
  const container = document.getElementById('project-detail-content');
  if (!container || typeof getProjectById !== 'function') return;

  const urlParams = new URLSearchParams(window.location.search);
  const projectId = urlParams.get('id');

  if (!projectId) {
    // If no ID provided, show the first project or catalog selector
    renderDetailFallback(container);
    return;
  }

  const project = getProjectById(projectId);
  if (!project) {
    container.innerHTML = `
      <div class="scp-warning-box">
        <strong>[KESALAHAN OTORISASI // 404 DATA NOT FOUND]</strong>
        Berkas berkode ID "<code>${escapeHtml(projectId)}</code>" tidak ditemukan dalam arsip atau telah dimusnahkan.
      </div>
      <a href="proyek.html" class="btn-dossier">&larr; Kembali ke Katalog Proyek</a>
    `;
    return;
  }

  // Update page title
  document.title = `${project.title} - Arsip SCP Dossier Fawwaz`;

  // Render full SCP Series formatted dossier
  const contributionsList = project.contributions && project.contributions.length > 0
    ? project.contributions.map(c => `<li>${escapeHtml(c)}</li>`).join('')
    : `<li>Implementasi logika arsitektural dan integrasi dependensi sistem.</li>`;

  const techStackBadges = project.techStack
    .map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`)
    .join(' ');

  container.innerHTML = `
    <!-- Top Dossier Identification -->
    <div class="dossier-header-strip">
      <div>
        <span class="dossier-item-tag">ITEM NUMBER: ${escapeHtml(project.itemNumber)}</span>
        <h1 class="dossier-title">${escapeHtml(project.title)}</h1>
      </div>
      <div class="stamp-box">
        STATUS: ${escapeHtml(project.status)}
      </div>
    </div>

    <!-- Security Warning Banner -->
    <div class="scp-warning-box">
      <strong>PERINGATAN DOKUMEN PROYEK: KLASIFIKASI ${escapeHtml(project.classification)}</strong>
      Dossier ini berisi rekaman teknis, catatan arsitektur, dan log pengembangan implementasi karya. Akses publik telah dideklasifikasi untuk peninjauan portofolio.
    </div>

    <!-- Project Technical Specifications Table -->
    <div class="scp-dossier-specbox">
      <div class="spec-row">
        <div class="spec-label">Item Code / ID</div>
        <div class="spec-value"><strong>${escapeHtml(project.itemNumber)}</strong> (${escapeHtml(project.id)})</div>
      </div>
      <div class="spec-row">
        <div class="spec-label">Object Classification</div>
        <div class="spec-value">${escapeHtml(project.classification)}</div>
      </div>
      <div class="spec-row">
        <div class="spec-label">Timeline / Period</div>
        <div class="spec-value">${escapeHtml(project.semester)}</div>
      </div>
      <div class="spec-row">
        <div class="spec-label">Role Assigned</div>
        <div class="spec-value">${escapeHtml(project.role)}</div>
      </div>
      <div class="spec-row">
        <div class="spec-label">Tech Stack Stack</div>
        <div class="spec-value">${techStackBadges}</div>
      </div>
      ${project.githubUrl ? `
      <div class="spec-row">
        <div class="spec-label">Repository Node</div>
        <div class="spec-value"><a href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noopener noreferrer" class="section-hyperlink">${escapeHtml(project.githubUrl)} &rarr;</a></div>
      </div>` : ''}
    </div>

    <!-- Section 1: Overview & Origin -->
    <h2 style="font-family: var(--font-mono); font-size: 1.25rem; color: var(--scp-crimson); margin: 28px 0 12px;">
      1. RINGKASAN & LATAR BELAKANG PROYEK
    </h2>
    <p style="margin-bottom: 14px;"><strong>Deskripsi Operasional:</strong> ${escapeHtml(project.shortDesc)}</p>
    <p style="margin-bottom: 20px;"><strong>Asal Muasal / Problem Statement:</strong> ${escapeHtml(project.origin || 'Kebutuhan pemecahan masalah dan eksplorasi teknologi.')}</p>

    <!-- Section 2: Contributions & Architecture -->
    <h2 style="font-family: var(--font-mono); font-size: 1.25rem; color: var(--scp-crimson); margin: 28px 0 12px;">
      2. LOG KONTRIBUSI & IMPLEMENTASI SISTEM
    </h2>
    <ul style="padding-left: 20px; margin-bottom: 24px;">
      ${contributionsList}
    </ul>

    <!-- Section 3: Addenda / Development Notes -->
    <h2 style="font-family: var(--font-mono); font-size: 1.25rem; color: var(--scp-crimson); margin: 28px 0 12px;">
      3. ADDENDUM / CATATAN KHUSUS PENGEMBANGAN
    </h2>
    <div class="addendum-box">
${escapeHtml(project.addendum || '[LOG ENTRY]: Tidak ada anomali teknis yang tercatat.')}
[CATATAN UNIK]: ${escapeHtml(project.uniqueNote || 'Tercatat dalam rekam jejak portofolio resmi.')}
    </div>

    <!-- Actions -->
    <div style="margin-top: 36px; padding-top: 20px; border-top: 2px solid var(--scp-border-light); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
      <a href="proyek.html" class="btn-dossier">&larr; Kembali ke Katalog Proyek</a>
      ${project.githubUrl ? `<a href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn-dossier btn-dossier-secondary">Buka Repositori GitHub &rarr;</a>` : ''}
    </div>
  `;
}

function renderDetailFallback(container) {
  const all = getAllProjects();
  container.innerHTML = `
    <div class="scp-warning-box">
      <strong>[PILIH BERKAS PROYEK]</strong>
      Silakan tentukan berkas proyek yang ingin Anda periksa secara mendalam dari arsip berikut:
    </div>
    <div class="cards-grid">
      ${all.map(p => createProjectCardHtml(p)).join('')}
    </div>
  `;
}

/* --- 7. Contact Terminal Simulation --- */
function initContactTerminal() {
  const form = document.getElementById('scp-contact-form');
  const terminalLog = document.getElementById('terminal-response-log');
  if (!form || !terminalLog) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const sender = document.getElementById('input-sender')?.value || 'AGENT-UNKNOWN';
    const message = document.getElementById('input-message')?.value || '';

    terminalLog.innerHTML = `
      <div style="color: #39ff14; font-family: var(--font-mono); font-size: 0.8rem; margin-top: 14px; padding: 12px; background: #000; border: 1px solid #39ff14;">
        &gt; TRANSMISSION INITIATED...<br>
        &gt; ENCRYPTING PACKET FROM: ${escapeHtml(sender)}<br>
        &gt; DISPATCHING MESSAGE TO FAWWAZ YAQZHAN [DIRECT MAIL RELAY]...<br>
        &gt; STATUS: 200 OK - TERIMA KASIH! PESAN BERHASIL DISIMPAN.<br>
        &gt; <i>Silakan juga hubungi langsung via email resmi: yaqzhanfawwaz@gmail.com</i>
      </div>
    `;
    form.reset();
  });
}

/* --- Utility: Sanitize text --- */
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
