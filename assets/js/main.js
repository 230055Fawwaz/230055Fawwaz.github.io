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

/* --- 1. Mobile Nav Toggle & Keyboard Accessibility --- */
function initMobileNav() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (!toggleBtn || !navMenu) return;

  // Set initial aria state
  toggleBtn.setAttribute('aria-expanded', 'false');

  function toggleMenu(forceClose = false) {
    const isOpen = forceClose ? false : !navMenu.classList.contains('is-open');
    if (isOpen) {
      navMenu.classList.add('is-open');
      toggleBtn.setAttribute('aria-expanded', 'true');
    } else {
      navMenu.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  }

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('is-open') && !navMenu.contains(e.target) && e.target !== toggleBtn) {
      toggleMenu(true);
    }
  });

  // Close with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('is-open')) {
      toggleMenu(true);
      toggleBtn.focus();
    }
  });
}

/* --- 2. Redacted Text Interactive Reveal (Mouse & Keyboard) --- */
function initRedactedText() {
  const redactedElements = document.querySelectorAll('.redacted');
  redactedElements.forEach(el => {
    // Accessibility attributes
    el.setAttribute('tabindex', '0');
    el.setAttribute('role', 'button');
    el.setAttribute('title', 'CLASSIFIED: Click or press Enter to declassify text.');
    el.setAttribute('aria-label', 'Classified text: click or press Enter to declassify');

    // Click / touch handler
    el.addEventListener('click', () => {
      el.classList.toggle('revealed');
    });

    // Keyboard handler (Enter or Space)
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        el.classList.toggle('revealed');
      }
    });
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
    } else if (currentPath !== 'proyek-detail.html' || href !== 'proyek.html') {
      // Keep proyek.html active if on proyek-detail.html, otherwise remove false actives
      if (href !== currentPath) {
        link.classList.remove('active');
      }
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
          <strong>[EMPTY ARCHIVE]</strong>
          No project files were found matching this classification category.
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

  const description = project.shortDesc || project.origin || 'Archived engineering project dossier.';

  return `
    <article class="dossier-card">
      <div>
        <div class="card-meta-bar">
          <span class="card-item-code">${escapeHtml(project.itemNumber)}</span>
          <span class="card-class-badge">${escapeHtml(project.classification)}</span>
        </div>
        <h3 class="card-title">${escapeHtml(project.title)}</h3>
        <p class="card-desc">${escapeHtml(description)}</p>
        <div class="tag-list">${tagsHtml}</div>
      </div>
      <div class="card-action-bar">
        ${githubBtn}
        <a href="proyek-detail.html?id=${encodeURIComponent(project.id)}" class="btn-dossier">
          Read Details &rarr;
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
    // If no ID provided, show the catalog selector fallback
    renderDetailFallback(container);
    return;
  }

  const project = getProjectById(projectId);
  if (!project) {
    container.innerHTML = `
      <div class="scp-warning-box">
        <strong>[AUTHORIZATION ERROR // 404 DATA NOT FOUND]</strong>
        Dossier with ID code "<code>${escapeHtml(projectId)}</code>" was not found in the archive or has been expunged.
      </div>
      <a href="proyek.html" class="btn-dossier">&larr; Back to Project Catalog</a>
    `;
    return;
  }

  // Update page title
  document.title = `${project.title} - Fawwaz SCP Dossier Archive`;

  // Render full SCP Series formatted dossier
  const contributionsList = project.contributions && project.contributions.length > 0
    ? project.contributions.map(c => `<li>${escapeHtml(c)}</li>`).join('')
    : `<li>Architectural logic implementation and system dependency integration.</li>`;

  const techStackBadges = project.techStack
    .map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`)
    .join(' ');

  const description = project.shortDesc || project.origin || 'Archived engineering project dossier.';

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
      <strong>PROJECT DOSSIER WARNING: CLASSIFICATION ${escapeHtml(project.classification)}</strong>
      This dossier contains technical records, architectural notes, and implementation development logs. Public access has been authorized for portfolio review.
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
        <div class="spec-label">Tech Stack</div>
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
      1. PROJECT SUMMARY &amp; BACKGROUND
    </h2>
    <p style="margin-bottom: 14px;"><strong>Operational Description:</strong> ${escapeHtml(description)}</p>
    <p style="margin-bottom: 20px;"><strong>Origin / Problem Statement:</strong> ${escapeHtml(project.origin || 'Technical exploration and problem-solving initiative.')}</p>

    <!-- Section 2: Contributions & Architecture -->
    <h2 style="font-family: var(--font-mono); font-size: 1.25rem; color: var(--scp-crimson); margin: 28px 0 12px;">
      2. CONTRIBUTION LOG &amp; SYSTEM IMPLEMENTATION
    </h2>
    <ul style="padding-left: 20px; margin-bottom: 24px;">
      ${contributionsList}
    </ul>

    <!-- Section 3: Addenda / Development Notes -->
    <h2 style="font-family: var(--font-mono); font-size: 1.25rem; color: var(--scp-crimson); margin: 28px 0 12px;">
      3. ADDENDUM / SPECIAL DEVELOPMENT NOTES
    </h2>
    <div class="addendum-box">
${escapeHtml(project.addendum || '[LOG ENTRY]: No technical anomalies recorded.')}
[UNIQUE NOTE]: ${escapeHtml(project.uniqueNote || 'Documented in official portfolio record.')}
    </div>

    <!-- Actions -->
    <div style="margin-top: 36px; padding-top: 20px; border-top: 2px solid var(--scp-border-light); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
      <a href="proyek.html" class="btn-dossier">&larr; Back to Project Catalog</a>
      ${project.githubUrl ? `<a href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noopener noreferrer" class="btn-dossier btn-dossier-secondary">Open GitHub Repository &rarr;</a>` : ''}
    </div>
  `;
}

function renderDetailFallback(container) {
  const all = getAllProjects();
  container.innerHTML = `
    <div class="scp-warning-box">
      <strong>[SELECT PROJECT DOSSIER]</strong>
      Please select a project dossier from the archive below to inspect in detail:
    </div>
    <div class="cards-grid">
      ${all.map(p => createProjectCardHtml(p)).join('')}
    </div>
  `;
}

/* --- 7. Contact Terminal & Direct Dispatch Relay --- */
function initContactTerminal() {
  const form = document.getElementById('scp-contact-form');
  const terminalLog = document.getElementById('terminal-response-log');
  if (!form || !terminalLog) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const sender = document.getElementById('input-sender')?.value || 'AGENT-UNKNOWN';
    const email = document.getElementById('input-email')?.value || '';
    const message = document.getElementById('input-message')?.value || '';

    // Construct mailto link with encoded subject & body
    const mailSubject = encodeURIComponent(`[Dossier Contact] Message from ${sender}`);
    const mailBody = encodeURIComponent(`From: ${sender} (${email})\n\nMessage Payload:\n${message}`);
    const mailtoUrl = `mailto:yaqzhanfawwaz@gmail.com?subject=${mailSubject}&body=${mailBody}`;

    terminalLog.innerHTML = `
      <div style="color: #39ff14; font-family: var(--font-mono); font-size: 0.8rem; margin-top: 14px; padding: 14px; background: #000; border: 1px solid #39ff14; line-height: 1.6;">
        &gt; TRANSMISSION PACKET ENCRYPTED [SUCCESS]<br>
        &gt; SENDER: ${escapeHtml(sender)} &lt;${escapeHtml(email)}&gt;<br>
        &gt; DISPATCH STATUS: READY FOR CARRIER RELAY.<br>
        <div style="margin-top: 10px; padding-top: 8px; border-top: 1px dashed #39ff14;">
          <a href="${mailtoUrl}" class="btn-dossier" style="background: #39ff14; color: #000; font-weight: 700; border-color: #39ff14; text-decoration: none; display: inline-block;">
            &gt;&gt; DISPATCH VIA EMAIL CLIENT NOW &rarr;
          </a>
        </div>
        <p style="margin-top: 8px; font-size: 0.72rem; color: #9ca3af;">
          *Clicking the button above opens your mail client directly addressed to <strong>yaqzhanfawwaz@gmail.com</strong> with your message pre-loaded.
        </p>
      </div>
    `;
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
