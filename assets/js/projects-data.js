/**
 * PROJECT DATABASE - FAWWAZ YAQZHAN ARCHIVE
 * Format: SCP Document Dossier Registry
 */
const PROJECTS_DATA = [
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
  // Handle alias for backward-compatibility with excel-dahsboard typo
  const targetId = id === "excel-dahsboard" ? "excel-dashboard" : id;
  return PROJECTS_DATA.find(p => p.id === targetId) || null;
}
