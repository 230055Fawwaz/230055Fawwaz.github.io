/**
 * PROJECT DATABASE - FAWWAZ YAQZHAN ARCHIVE
 * Format: SCP Document Dossier Registry
 */
const PROJECTS_DATA = [
  {
    id: "tanyahukum",
    itemNumber: "PROJ-07-TH",
    title: "TanyaHukum - AI Legal Assistant",
    status: "ACTIVE COLLABORATION",
    classification: "EUCLID / AI AUGMENTED",
    semester: "Semester 7",
    category: "ai",
    role: "Backend Engineer",
    techStack: ["Node.js", "Express", "Next.js", "PostgreSQL (Supabase)", "Pinecone", "Gemini API", "Midtrans"],
    githubUrl: "https://github.com/230055Fawwaz",
    featured: true,
    origin: "Collaborative academic capstone project to develop an intelligent legal consultation assistant for civil law inquiries.",
    contributions: [
      "Engineered robust authentication services featuring Email OTP verification and Google OAuth SSO.",
      "Implemented Role-Based Access Control (RBAC) separating public users from administrative management tiers.",
      "Built a time-sensitive tokenized password reset flow distributed via automated email relay.",
      "Integrated user profile endpoints with multimedia asset uploads and PostgreSQL database synchronization."
    ],
    uniqueNote: "First cross-disciplinary collaborative project integrating LLM RAG pipelines, Pinecone vector indexing, and Midtrans payment gateway.",
    addendum: `
      [LOG ENTRY 07-C]: Gemini API integration required strict system prompt engineering to constrain legal reasoning strictly within Indonesian Civil Code (KUHPerdata) jurisdictions.
      [LOG ENTRY 07-D]: Automated CI/CD pipelines constructed via GitHub Actions ensured API endpoint integrity ahead of end-to-end frontend integration testing.
    `
  },
  {
    id: "it-inventory",
    itemNumber: "PROJ-07-PEMI",
    title: "IT Inventory Management System",
    status: "OPERATIONAL / ARCHIVED",
    classification: "SAFE / INDUSTRIAL DEPLOYMENT",
    semester: "Semester 7 (PEMI Internship)",
    category: "web",
    role: "Fullstack Developer (IT Intern)",
    techStack: ["Flask", "Python", "MySQL", "Jinja2", "Vanilla JS", "Chart.js", "Batch Files"],
    githubUrl: "https://github.com/230055Fawwaz",
    featured: true,
    origin: "Industrial internship project assigned at PT. EDS Manufacturing Indonesia (Yazaki Indonesia Group).",
    contributions: [
      "Architected a structured inventory application equipped with granular multi-user privileges and asset audit logs.",
      "Developed high-speed bulk Excel spreadsheet import pipelines and auto-suggestion query filters for 50,000+ spare parts & hardware entries.",
      "Engineered an Obsolete Asset tracking module to flag hardware nearing end-of-life and optimize replacement cycles.",
      "Orchestrated data migration and full production deployment onto on-premise company intranet servers."
    ],
    uniqueNote: "Debut industrial-scale software project engineered to meet strict corporate stakeholder requirements within an international automotive manufacturing group.",
    addendum: `
      [LOG ENTRY 07-E]: Successfully reconciled 2,500+ production PostgreSQL records against corporate procurement ledgers using advanced analytical formulas.
      [LOG ENTRY 07-F]: Sanitized and validated 50,000+ IT hardware records directly on live MySQL production servers with zero operational downtime or data degradation.
    `
  },
  {
    id: "myfinance",
    itemNumber: "PROJ-06-MF",
    title: "MyFinance - Personal Budget Tracker",
    status: "ARCHIVED (UPGRADED)",
    classification: "SAFE / LEGACY SYSTEM",
    semester: "Semester 6",
    category: "web",
    role: "Fullstack Developer",
    techStack: ["Flask", "Python", "SQLite", "Chart.js", "Jinja2 HTML", "CSS", "Batch Files"],
    githubUrl: "https://github.com/230055Fawwaz/MyFinance",
    featured: false,
    origin: "Personal software solution developed to systematically record and analyze monthly student expenditures.",
    contributions: [
      "Designed normalized SQLite relational database schemas for expense categorization and cash flow entries.",
      "Engineered interactive pie and bar charts visualizing monthly expenditure distribution using Chart.js.",
      "Built a responsive, desktop-friendly web interface launched instantly via batch file automation."
    ],
    uniqueNote: "First foundational software project consistently utilized in daily routines, serving as the direct architectural basis for Capital Hub.",
    addendum: `
      [LOG ENTRY 06-A]: Successfully recorded and managed more than 6 months of daily personal financial transactions prior to the architectural refactoring into Capital Hub.
    `
  },
  {
    id: "chatbot-jkkd",
    itemNumber: "PROJ-06-JKKD",
    title: "Chatbot JKKD - Local RAG AI",
    status: "COMPLETED TESTBED",
    classification: "EUCLID / EDGE AI",
    semester: "Semester 6",
    category: "ai",
    role: "Fullstack & AI Engineer",
    techStack: ["Python", "Flask", "Ollama", "Qwen 2.5", "SQLite-Vector", "HTML/CSS/JS"],
    githubUrl: "https://github.com/230055Fawwaz",
    featured: false,
    origin: "Academic initiative to build an intelligent study companion tailored for Computer Networks & Data Communication coursework.",
    contributions: [
      "Configured and served the open-source Qwen 2.5 language model on a local hardware runtime via Ollama.",
      "Constructed an on-device Retrieval-Augmented Generation (RAG) pipeline utilizing SQLite-based vector storage.",
      "Designed a retro console-inspired chat interface for student query interactions."
    ],
    uniqueNote: "Experimental benchmark evaluating consumer hardware boundaries in executing local embeddings and LLM inference without dedicated GPU servers.",
    addendum: `
      [LOG ENTRY 06-B]: High on-device latency highlighted crucial takeaways regarding model quantization (4-bit GGML/GGUF) and context window limits for edge deployments.
    `
  },
  {
    id: "enterprise-game-cdn",
    itemNumber: "PROJ-06-CDN",
    title: "Global Game Enterprise Architecture & CDN",
    status: "VERIFIED SIMULATION",
    classification: "SAFE / INFRASTRUCTURE BLUEPRINT",
    semester: "Semester 6",
    category: "network",
    role: "Network Architect",
    techStack: ["GNS3", "NGFW (Fortinet/PFSense)", "BGP", "OSPF", "CDN Proxy"],
    githubUrl: "https://github.com/230055Fawwaz",
    featured: false,
    origin: "Capstone network engineering assignment designing enterprise-grade global network infrastructure.",
    contributions: [
      "Designed multi-region topology integrated with Content Delivery Network (CDN) edge nodes for global game asset distribution.",
      "Configured Next-Generation Firewalls (NGFW) with granular Deep Packet Inspection (DPI) security policies.",
      "Simulated multi-path redundant link failovers to ensure enterprise high-availability (HA) SLAs."
    ],
    uniqueNote: "Most comprehensive enterprise network simulation conducted, orchestrating complex route exchanges across diverse Autonomous Systems.",
    addendum: `
      [LOG ENTRY 06-C]: Successfully verified a 40% reduction in traffic distribution latency under simulated multi-region CDN caching topologies.
    `
  },
  {
    id: "ritel-cerdas-iot",
    itemNumber: "PROJ-06-IOT",
    title: "Smart Retail IoT Network Topology",
    status: "VERIFIED SIMULATION",
    classification: "SAFE / IOT INFRASTRUCTURE",
    semester: "Semester 6",
    category: "network",
    role: "Network Architect",
    techStack: ["Cisco Packet Tracer", "IoT Gateway", "VLAN Segmentation", "Access Point"],
    githubUrl: "https://github.com/230055Fawwaz",
    featured: false,
    origin: "Enterprise retail store network design featuring automated environmental sensor nodes and centralized surveillance.",
    contributions: [
      "Applied hierarchical campus design (Core, Distribution, Access) to integrate retail IoT endpoint devices.",
      "Configured isolated VLAN segmentation separating critical Point-of-Sale (POS) traffic from guest and management networks.",
      "Simulated simultaneous telemetry streaming across environmental IoT sensors and IP surveillance feeds."
    ],
    uniqueNote: "Practical implementation of CCNA SRWE network security principles within real-world retail trust zone boundaries.",
    addendum: `
      [LOG ENTRY 06-D]: All POS endpoints were strictly isolated in dedicated subnets governed by inbound/outbound Access Control Lists (ACLs) to the central payment database.
    `
  },
  {
    id: "mountain-journey-vr",
    itemNumber: "PROJ-06-VR",
    title: "Mountain Journey - VR SDGs Experience",
    status: "COMPLETED",
    classification: "SAFE / SPATIAL COMPUTING",
    semester: "Semester 6",
    category: "other",
    role: "Unity Developer",
    techStack: ["C#", "Unity 3D", "Meta Quest SDK", "VR Physics"],
    githubUrl: "https://github.com/230055Fawwaz",
    featured: false,
    origin: "Spatial computing game development supporting global mental health awareness under UN SDG 3.4.",
    contributions: [
      "Implemented motion-sickness-free kinetic locomotion mechanics optimized for Meta Quest hardware.",
      "Built interactive quest event triggers and environmental physics interactions in Unity C#.",
      "Optimized polygon density and baked lighting setups to maintain a locked, stutter-free 72 FPS refresh rate.",
    ],
    uniqueNote: "Intensive 3D spatial computing sprint delivering interactive therapeutic virtual environments under marathon deadlines.",
    addendum: `
      [LOG ENTRY 06-E]: Testing confirmed significant positive user feedback regarding relaxing interactive atmospheric experiences during user evaluations.
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
  return PROJECTS_DATA.find(p => p.id === id) || null;
}
