/**
 * PROJECT DATABASE - FAWWAZ YAQZHAN ARCHIVE
 * Format: SCP Document Dossier Registry
 * 
 * ============================================================================
 * PANDUAN PENAMBAHAN GAMBAR & SCREENSHOT:
 * ============================================================================
 * 1. Simpan file gambar Anda di folder: assets/images/projects/
 * 2. thumbnail:
 *    - Ditampilkan pada KARTU DAFTAR PROYEK (di index.html & proyek.html).
 *    - Contoh: thumbnail: "assets/images/projects/myfinance-thumb.png"
 *    - Jika dikosongkan (""), kartu akan tampil elegan tanpa gambar.
 * 3. screenshots:
 *    - Ditampilkan pada HALAMAN DETAIL PROYEK (proyek-detail.html).
 *    - Merupakan array screenshot yang dapat diklik untuk diperbesar (lightbox).
 *    - Format:
 *      screenshots: [
 *        {
 *          url: "assets/images/projects/myfinance-overview.png",
 *          caption: "EXHIBIT 01: Overview Dashboard & Cash Flow Tracker"
 *        },
 *        {
 *          url: "assets/images/projects/myfinance-analytics.png",
 *          caption: "EXHIBIT 02: Monthly Expense Breakdown Chart"
 *        }
 *      ]
 *    - Jika array kosong ([]), halaman detail akan menampilkan status arsip teks biasa.
 * ============================================================================
 */
const PROJECTS_DATA = [
  {
    id: "channel-youtube",
    itemNumber: "PROJ-07-YT-VI",
    title: "Gaming Content Channel [REDACTED]",
    status: "ACTIVE BROADCAST",
    classification: "DIGITAL MEDIA | GAMEPLAY PRODUCTION & CURATION",
    semester: "Semester 7 (Est. April 2026)",
    category: "other",
    role: "Solo Content Creator & Video Editor",
    techStack: ["Video Editing", "OBS Studio", "Gameplay Capture", "Audio Mastering", "Content Curation", "Thumbnail Design"],
    githubUrl: "NDA",
    featured: true,
    thumbnail: "", // Masukkan path thumbnail kartu di sini, misal: "assets/images/projects/youtube-thumb.png"
    screenshots: [
      // Masukkan screenshot halaman detail di sini:
      // {
      //   url: "assets/images/projects/youtube-preview.png",
      //   caption: "EXHIBIT 01: Channel Production Telemetry & Analytics Dashboard"
      // }
    ],
    shortDesc: "A pseudonymously operated gaming content channel launched in April 2026, curating long-form gameplay, tactical walkthroughs, and mechanical analysis across indie, roguelike, and survival titles.",
    origin: "An independent digital broadcasting and creative production experiment initiated to explore gameplay analysis, video editing workflows, and audience retention while maintaining complete creator pseudonymity.",
    contributions: [
      "Independently managed the full production lifecycle: high-resolution gameplay capture, audio mastering, pacing optimization, and video rendering.",
      "Researched and produced deep-dive gameplay showcases and strategic walkthroughs for niche indie, roguelike, and tactical titles (Balatro, Darkwood, NIMRODS, Terraria, PlateUp!, Rebel Inc).",
      "Streamlined capture workflows and input monitoring across both PC and mobile gaming environments (including Corebound, Blood Strike, and The Perfect Tower II).",
      "Designed tailored thumbnail assets, pacing structures, and metadata tags to optimize viewer engagement while preserving personal privacy."
    ],
    uniqueNote: "Operated as a strictly confidential solo venture with public identity and direct channel identifiers withheld [REDACTED] to maintain creative independence and discretion.",
    addendum: `
      [LOG ENTRY 07-YT-VI-01]: Channel launched on April 5, 2026 under confidential creator moniker.
      [LOG ENTRY 07-YT-VI-02]: Active game catalog indexed: NIMRODS: Guncraft Survivor, Magic Archery, The Perfect Tower II, Corebound (Mobile), Terraria, Blood Strike, Balatro, Rebel Inc: Escalation, PlateUp!, Caves Roguelike, Darkwood.
      [LOG ENTRY 07-YT-VI-03]: Identity redaction protocols enforced per creator privacy directives.
    `
  },
  {
    id: "capital-hub",
    itemNumber: "PROJ-07-IS-FI",
    title: "Capital Hub - Personal Financial Desktop App",
    status: "COMPLETED / RELEASE READY",
    classification: "SOFTWARE ENGINEERING | DESKTOP EXECUTABLE | PERSONAL FINANCE",
    semester: "Semester 7 (August 2026 – Present)",
    category: "exe",
    role: "Fullstack Developer & App Pentester",
    techStack: ["Python", "Flask", "pywebview", "Nuitka", "SQLite", "Chart.js", "Batch Files"],
    githubUrl: "NDA",
    featured: true,
    thumbnail: "", // Masukkan path thumbnail kartu di sini, misal: "assets/images/projects/capitalhub-thumb.png"
    screenshots: [
      // Masukkan screenshot halaman detail di sini:
      // {
      //   url: "assets/images/projects/capitalhub-preview.png",
      //   caption: "EXHIBIT 01: Main Application Interface & Forecasting Panel"
      // }
    ],
    shortDesc: "An offline-first standalone Windows executable application engineered to record personal financial transactions, multi-wallet cash flow, and dynamic Chart.js analytics.",
    origin: "An evolutionary upgrade from MyFinance, engineered to eliminate browser runtime and environment dependencies by compiling Python Flask into a secure, self-contained native Windows desktop executable (.exe).",
    contributions: [
      "Architected an offline-first Windows desktop executable using Flask bundled via Nuitka C-transpilation and pywebview, eliminating external browser runtime dependencies.",
      "Engineered multi-wallet cash flow tracking, budget allocations, and interactive Chart.js visualizations backed by a local SQLite relational database.",
      "Conducted application-level penetration testing, input sanitization audits, and SQLite schema hardening to safeguard local financial records against unauthorized tampering.",
      "Automated developer initialization and compilation pipelines using custom Windows Batch (.bat) scripts."
    ],
    uniqueNote: "Debut standalone executable (.exe) application and largest personal project to date, featuring local-first privacy, zero cloud transmission, and integrated donationware support.",
    addendum: `
      [LOG ENTRY 07-IS-FI-01]: Transpiled and compiled standalone Windows executable via Nuitka and pywebview GUI wrapper.
      [LOG ENTRY 07-IS-FI-02]: Local SQLite database schema secured; penetration tests verified resilience against local injection vectors.
      [LOG ENTRY 07-IS-FI-03]: Production release candidate validated; final staging checks completed for public distribution.
    `
  },
  {
    id: "it-inventory",
    itemNumber: "PROJ-07-IS-INV",
    title: "IT Asset Inventory System (PT. PEMI – Yazaki Group)",
    status: "DEPLOYED & OPERATIONAL",
    classification: "INFORMATION SYSTEM | ENTERPRISE HARDWARE LIFECYCLE",
    semester: "Semester 7 (July 2026 – August 2026)",
    category: "web",
    role: "Fullstack Developer (IT Intern)",
    techStack: ["Python", "Flask", "Flask-SQLAlchemy", "MySQL", "JavaScript", "Chart.js", "HTML5/CSS3", "Batch Scripting"],
    githubUrl: "NDA",
    featured: true,
    thumbnail: "", // Masukkan path thumbnail kartu di sini
    screenshots: [],
    shortDesc: "A modular, enterprise-grade inventory system engineered to monitor hardware lifecycles, manage asset migrations, and automate obsolete equipment flagging across corporate intranet servers.",
    origin: "Industrial internship capstone project developed on-site at PT. EDS Manufacturing Indonesia (PEMI) - Yazaki Group to digitize internal IT hardware inventory audits and equipment tracking.",
    contributions: [
      "Architected a modular backend using Flask (Application Factory pattern & Blueprints) and MySQL via Flask-SQLAlchemy, deployed securely onto the company's local intranet server.",
      "Engineered an automated hardware lifecycle tracking algorithm to flag aging workstations and peripherals exceeding operational depreciation thresholds.",
      "Implemented high-volume Excel bulk import/export workflows with dynamic form modals, auto-complete suggestions to prevent duplicate asset tagging, and CSRF token protection.",
      "Constructed an interactive telemetry dashboard using Vanilla JavaScript and Chart.js displaying real-time hardware status distributions and departmental asset allocation.",
      "Performed database sanitization and audit reconciliation across 50,000+ active manufacturing inventory and PostgreSQL database records."
    ],
    uniqueNote: "Enterprise software project successfully deployed to live corporate intranet servers, directly supporting daily IT operations and hardware depreciation audits at Yazaki Indonesia Group.",
    addendum: `
      [LOG ENTRY 07-IS-INV-01]: Flask Application Factory with blueprint modular routing established on internal intranet server.
      [LOG ENTRY 07-IS-INV-02]: Lifecycle depreciation tracker validated against 50,000+ corporate hardware asset records with zero database corruption.
      [LOG ENTRY 07-IS-INV-03]: Deployed on-premises under corporate confidentiality guidelines [CLASSIFIED ASSET RECORDS].
    `
  },
  {
    id: "tanyahukum",
    itemNumber: "PROJ-06-AI-CH",
    title: "TanyaHukum - AI Legal Assistant",
    status: "ACTIVE COLLABORATION",
    classification: "ARTIFICIAL INTELLIGENCE | AI CHATBOT",
    semester: "Semester 6",
    category: "ai",
    role: "Backend Engineer",
    techStack: ["Node.js", "Express", "Next.js", "PostgreSQL (Supabase)", "Pinecone", "Gemini API", "Midtrans"],
    githubUrl: "https://github.com/davidchristt/TanyaHukum",
    featured: false,
    thumbnail: "", // Masukkan path thumbnail kartu di sini
    screenshots: [
      // {
      //   url: "assets/images/projects/tanyahukum-preview.png",
      //   caption: "EXHIBIT 01: AI Legal Consultation Interface & Query Flow"
      // }
    ],
    shortDesc: "An intelligent legal consultation platform utilizing AI retrieval and robust backend authentication for civil law inquiries.",
    origin: "Collaborative academic capstone project to develop an intelligent legal consultation assistant for civil law inquiries.",
    contributions: [
      "Engineered robust authentication services featuring Email OTP verification and Google OAuth SSO.",
      "Implemented Role-Based Access Control (RBAC) separating public users from administrative management tiers.",
      "Built a time-sensitive tokenized password reset flow distributed via automated email relay.",
      "Integrated user profile endpoints with multimedia asset uploads and PostgreSQL database synchronization."
    ],
    uniqueNote: "Engineered secure token-based authentication workflows and vector database connectivity for high-accuracy legal information retrieval.",
    addendum: `
      [LOG ENTRY 06-AI-CH-01]: Authentication gateway operational. OTP generation and password renewal channels passed verification protocols.
      [LOG ENTRY 06-AI-CH-02]: Vector embedding database synchronized with civil law query indexes.
    `
  },
  {
    id: "myfinance",
    itemNumber: "PROJ-06-IS-FI",
    title: "MyFinance - Personal Budget Tracker",
    status: "ARCHIVED",
    classification: "INFORMATION SYSTEM | FINANCE",
    semester: "Semester 6",
    category: "web",
    role: "Fullstack Developer",
    techStack: ["Flask", "Python", "SQLite", "Chart.js", "Jinja2 HTML", "CSS", "Batch Files"],
    githubUrl: "https://github.com/230055Fawwaz/MyFinance",
    featured: true,
    thumbnail: "assets/images/projects/myfinance-cover.png",
    screenshots: [
      // {
      //   url: "assets/images/projects/myfinance-dashboard.png",
      //   caption: "EXHIBIT 01: Interactive Cash Flow & Expense Dashboard"
      // }
    ],
    shortDesc: "Lightweight financial dashboard engineered to track, categorize, and visualize monthly student cash flows with Chart.js.",
    origin: "Personal software solution developed to systematically record and analyze monthly student expenditures.",
    contributions: [
      "Designed normalized SQLite relational database schemas for expense categorization and cash flow entries.",
      "Engineered interactive pie and bar charts visualizing monthly expenditure distribution using Chart.js.",
      "Built a responsive, desktop-friendly web interface launched instantly via batch file automation."
    ],
    uniqueNote: "First foundational software project consistently utilized in daily routines, maintaining zero downtime across local execution runs.",
    addendum: `
      [LOG ENTRY 06-IS-FI-01]: SQLite relational integrity verified with automated transaction rollbacks.
      [LOG ENTRY 06-IS-FI-02]: Dynamic charting pipelines benchmarked with sub-100ms render latency.
    `
  },
  {
    id: "chatbot-jkkd",
    itemNumber: "PROJ-06-AI-CH",
    title: "Chatbot JKKD - Local RAG AI",
    status: "ARCHIVED",
    classification: "ARTIFICIAL INTELLIGENCE | AI CHATBOT",
    semester: "Semester 6",
    category: "ai",
    role: "Fullstack & AI Engineer",
    techStack: ["Python", "Flask", "Ollama", "Qwen 2.5", "SQLite-Vector", "HTML/CSS/JS"],
    githubUrl: "https://github.com/230055Fawwaz",
    featured: false,
    thumbnail: "", // Masukkan path thumbnail kartu di sini
    screenshots: [
      // {
      //   url: "assets/images/projects/chatbot-jkkd-preview.png",
      //   caption: "EXHIBIT 01: Offline RAG Terminal Interface & Quantized Query Pipeline"
      // }
    ],
    shortDesc: "Edge-computed RAG AI study companion running open-source Qwen 2.5 via Ollama for computer networks coursework.",
    origin: "Academic initiative to build an intelligent study companion tailored for Computer Networks & Data Communication coursework.",
    contributions: [
      "Configured and served the open-source Qwen 2.5 language model on a local hardware runtime via Ollama.",
      "Constructed an on-device Retrieval-Augmented Generation (RAG) pipeline utilizing SQLite-based vector storage.",
      "Designed a retro console-inspired chat interface for student query interactions."
    ],
    uniqueNote: "Completely private and offline architecture ensuring academic data remains strictly on local premises without external API leaks.",
    addendum: `
      [LOG ENTRY 06-AI-CH-01]: Local Ollama runtime linked with Qwen 2.5 quantization.
      [LOG ENTRY 06-AI-CH-02]: RAG retrieval prompt template verified against Cisco CCNA course syllabus materials.
    `
  },
  {
    id: "enterprise-game-cdn",
    itemNumber: "PROJ-06-CN-CDN",
    title: "Global Game Enterprise Architecture & CDN",
    status: "ARCHIVED",
    classification: "COMPUTER NETWORK | SIMULATION",
    semester: "Semester 6",
    category: "network",
    role: "Network Architect",
    techStack: ["GNS3", "NGFW (Fortinet/PFSense)", "BGP", "OSPF", "CDN Proxy"],
    githubUrl: "https://github.com/230055Fawwaz/tugas-jaringan-komputer",
    featured: false,
    thumbnail: "", // Masukkan path thumbnail kartu di sini
    screenshots: [
      // {
      //   url: "assets/images/projects/enterprise-cdn-topology.png",
      //   caption: "EXHIBIT 01: Multi-Region BGP Network Topology Simulation"
      // }
    ],
    shortDesc: "Multi-region enterprise network simulation featuring BGP routing, NGFW packet inspection, and edge CDN distribution.",
    origin: "Capstone network engineering assignment designing enterprise-grade global network infrastructure.",
    contributions: [
      "Designed multi-region topology integrated with Content Delivery Network (CDN) edge nodes for global game asset distribution.",
      "Configured Next-Generation Firewalls (NGFW) with granular Deep Packet Inspection (DPI) security policies.",
      "Simulated multi-path redundant link failovers to ensure enterprise high-availability (HA) SLAs."
    ],
    uniqueNote: "Simulated multi-tier autonomous systems demonstrating dynamic BGP path selection and failover redundancy.",
    addendum: `
      [LOG ENTRY 06-CN-CDN-01]: Border Gateway Protocol (BGP) convergence achieved across multi-AS topologies.
      [LOG ENTRY 06-CN-CDN-02]: Deep packet inspection verified blocking simulated volumetric DDoS attacks.
    `
  },
  {
    id: "ritel-cerdas-iot",
    itemNumber: "PROJ-06-CN-IOT",
    title: "Smart Retail IoT Network Topology",
    status: "ARCHIVED",
    classification: "COMPUTER NETWORK | SIMULATION",
    semester: "Semester 6",
    category: "network",
    role: "Network Architect",
    techStack: ["Cisco Packet Tracer", "IoT Gateway", "VLAN Segmentation", "Access Point"],
    githubUrl: "https://github.com/230055Fawwaz/tugas-jaringan-komputer",
    featured: false,
    thumbnail: "", // Masukkan path thumbnail kartu di sini
    screenshots: [
      // {
      //   url: "assets/images/projects/ritel-iot-topology.png",
      //   caption: "EXHIBIT 01: Retail IoT Campus Topology & 802.1Q VLAN Schema"
      // }
    ],
    shortDesc: "Hierarchical campus network architecture integrating IoT sensor nodes and VLAN segmentation for retail environments.",
    origin: "Enterprise retail store network design featuring automated environmental sensor nodes and centralized surveillance.",
    contributions: [
      "Applied hierarchical campus design (Core, Distribution, Access) to integrate retail IoT endpoint devices.",
      "Configured isolated VLAN segmentation separating critical Point-of-Sale (POS) traffic from guest and management networks.",
      "Simulated simultaneous telemetry streaming across environmental IoT sensors and IP surveillance feeds."
    ],
    uniqueNote: "Strict 802.1Q VLAN encapsulation guaranteeing PCI-DSS compliant boundary isolation for point-of-sale data.",
    addendum: `
      [LOG ENTRY 06-CN-IOT-01]: IoT Gateway telemetry protocols mapped across Access and Distribution switch layers.
      [LOG ENTRY 06-CN-IOT-02]: ACL policies enforced restricting guest Wi-Fi access from internal POS subnets.
    `
  },
  {
    id: "mountain-journey-vr",
    itemNumber: "PROJ-06-GA-VR",
    title: "Mountain Journey - VR SDGs Experience",
    status: "ARCHIVED",
    classification: "GAME | VIRTUAL REALITY",
    semester: "Semester 6",
    category: "other",
    role: "Unity Developer",
    techStack: ["C#", "Unity 3D", "Meta Quest SDK", "VR Physics"],
    githubUrl: "https://github.com/Lukas166/mountain-journey-simulator",
    featured: false,
    thumbnail: "", // Masukkan path thumbnail kartu di sini
    screenshots: [
      // {
      //   url: "assets/images/projects/mountain-journey-vr.png",
      //   caption: "EXHIBIT 01: 3D Immersive Environment & Locomotion Mechanics"
      // }
    ],
    shortDesc: "Immersive 3D virtual reality mental health simulation built in Unity 3D aligned with UN SDG 3.4.",
    origin: "Spatial computing game development supporting global mental health awareness under UN SDG 3.4.",
    contributions: [
      "Built interactive quest event triggers and environmental physics interactions in Unity C#.",
      "Assisted fellow Unity engineer in implementing character locomotion and physical event triggers."
    ],
    uniqueNote: "Intensive 3D spatial computing sprint delivering interactive therapeutic virtual environments under marathon deadlines.",
    addendum: `
      [LOG ENTRY 06-GA-VR-01]: VR frame rate stabilized at 72fps to minimize user motion sickness.
      [LOG ENTRY 06-GA-VR-02]: Audio spatialization and meditative physics triggers integrated successfully.
    `
  },
  {
    id: "excel-dashboard",
    itemNumber: "PROJ-04-IS-FI",
    title: "Dashboard Keuangan Excel",
    status: "ARCHIVED",
    classification: "INFORMATION SYSTEM | FINANCE",
    semester: "Semester 4 & 5",
    category: "other",
    role: "Excel Architect",
    techStack: ["Microsoft Excel", "Pivot Tables", "Formulas", "Data Validation"],
    githubUrl: "https://github.com/230055Fawwaz/dashboard-keuangan-excel",
    featured: true,
    thumbnail: "", // Masukkan path thumbnail kartu di sini
    screenshots: [
      // {
      //   url: "assets/images/projects/excel-dashboard-sheet.png",
      //   caption: "EXHIBIT 01: Automated Financial Model & Dynamic Pivot Charts"
      // }
    ],
    shortDesc: "Interactive financial management spreadsheet featuring automated cash flow tracking, Pivot tables, and dynamic dashboards.",
    origin: "Personal financial software solution developed to systematically log, categorize, and review personal cash flow and expenses.",
    contributions: [
      "Engineered automated spreadsheet architecture utilizing advanced nested lookup functions and dynamic Pivot tables.",
      "Created visual dashboard summaries displaying category-wise burn rates and monthly savings targets."
    ],
    uniqueNote: "Structured financial model serving as the precursor specification for the later MyFinance web application.",
    addendum: `
      [LOG ENTRY 04-IS-FI-01]: Formula audit verified zero circular dependency warnings across all accounting sheets.
      [LOG ENTRY 04-IS-FI-02]: Dashboard automated reconciliation validated against bank statements.
    `
  }
];

// Helper functions for data access
function getAllProjects() {
  return PROJECTS_DATA;
}

function getFeaturedProjects() {
  return PROJECTS_DATA.filter(p => p.featured);
}

function getProjectById(id) {
  if (!id) return null;
  // Handle aliases and backward-compatibility
  let targetId = id === "excel-dahsboard" ? "excel-dashboard" : id;
  if (targetId === "Capital Hub") targetId = "capital-hub";
  if (targetId === "Channel Youtube") targetId = "channel-youtube";
  if (targetId === "IT Inventory" || targetId === "it-asset-inventory") targetId = "it-inventory";
  return PROJECTS_DATA.find(p => p.id === targetId || p.id.toLowerCase() === targetId.toLowerCase()) || null;
}
