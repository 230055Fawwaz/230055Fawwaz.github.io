/**
 * PROJECT DATABASE - FAWWAZ YAQZHAN ARCHIVE
 * Format: SCP Document Dossier Registry
 */
const PROJECTS_DATA = [
  {
    id: "tanyahukum",
    itemNumber: "PROJ-07-AI-CH",
    title: "TanyaHukum - AI Legal Assistant",
    status: "ACTIVE COLLABORATION",
    classification: "ARTIFICIAL INTELLIGENCE | AI CHATBOT",
    semester: "Semester 7",
    category: "ai",
    role: "Backend Engineer",
    techStack: ["Node.js", "Express", "Next.js", "PostgreSQL (Supabase)", "Pinecone", "Gemini API", "Midtrans"],
    githubUrl: "https://github.com/davidchristt/TanyaHukum",
    featured: true,
    origin: "Collaborative academic capstone project to develop an intelligent legal consultation assistant for civil law inquiries.",
    contributions: [
      "Engineered robust authentication services featuring Email OTP verification and Google OAuth SSO.",
      "Implemented Role-Based Access Control (RBAC) separating public users from administrative management tiers.",
      "Built a time-sensitive tokenized password reset flow distributed via automated email relay.",
      "Integrated user profile endpoints with multimedia asset uploads and PostgreSQL database synchronization."
    ],
    uniqueNote: "Blank.",
    addendum: `
      [LOG ENTRY 07-AI-CH-01]: Blank.
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
    featured: false,
    origin: "Personal software solution developed to systematically record and analyze monthly student expenditures.",
    contributions: [
      "Designed normalized SQLite relational database schemas for expense categorization and cash flow entries.",
      "Engineered interactive pie and bar charts visualizing monthly expenditure distribution using Chart.js.",
      "Built a responsive, desktop-friendly web interface launched instantly via batch file automation."
    ],
    uniqueNote: "First foundational software project consistently utilized in daily routines.",
    addendum: `
      [LOG ENTRY 06-IS-FI-01]: Blank.
    `
  },
  {
    id: "chatbot-jkkd",
    itemNumber: "PROJ-06-AI-CH",
    title: "Chatbot JKKD - Local RAG AI",
    status: "COMPLETED TESTBED | ARCHIEVED",
    classification: "ARTIFICIAL INTELLIGENCE | AI CHATBOT",
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
    uniqueNote: "Blank.",
    addendum: `
      [LOG ENTRY 06-AI-CH-01]: Blank.
    `
  },
  {
    id: "enterprise-game-cdn",
    itemNumber: "PROJ-06-CN-CDN",
    title: "Global Game Enterprise Architecture & CDN",
    status: "ARCHIEVED",
    classification: "COMPUTER NETWORK | SIMULATION",
    semester: "Semester 6",
    category: "network",
    role: "Network Architect",
    techStack: ["GNS3", "NGFW (Fortinet/PFSense)", "BGP", "OSPF", "CDN Proxy"],
    githubUrl: "https://github.com/230055Fawwaz/tugas-jaringan-komputer",
    featured: false,
    origin: "Capstone network engineering assignment designing enterprise-grade global network infrastructure.",
    contributions: [
      "Designed multi-region topology integrated with Content Delivery Network (CDN) edge nodes for global game asset distribution.",
      "Configured Next-Generation Firewalls (NGFW) with granular Deep Packet Inspection (DPI) security policies.",
      "Simulated multi-path redundant link failovers to ensure enterprise high-availability (HA) SLAs."
    ],
    uniqueNote: "Blank",
    addendum: `
      [LOG ENTRY 06-CN-CDN-01]: Blank.
    `
  },
  {
    id: "ritel-cerdas-iot",
    itemNumber: "PROJ-06-CN-IOT",
    title: "Smart Retail IoT Network Topology",
    status: "ARCHIEVED",
    classification: "COMPUTER NETWORK | SIMULATION",
    semester: "Semester 6",
    category: "network",
    role: "Network Architect",
    techStack: ["Cisco Packet Tracer", "IoT Gateway", "VLAN Segmentation", "Access Point"],
    githubUrl: "https://github.com/230055Fawwaz/tugas-jaringan-komputer",
    featured: false,
    origin: "Enterprise retail store network design featuring automated environmental sensor nodes and centralized surveillance.",
    contributions: [
      "Applied hierarchical campus design (Core, Distribution, Access) to integrate retail IoT endpoint devices.",
      "Configured isolated VLAN segmentation separating critical Point-of-Sale (POS) traffic from guest and management networks.",
      "Simulated simultaneous telemetry streaming across environmental IoT sensors and IP surveillance feeds."
    ],
    uniqueNote: "Blank.",
    addendum: `
      [LOG ENTRY 06-CN-IOT-01]: Blank.
    `
  },
  {
    id: "mountain-journey-vr",
    itemNumber: "PROJ-06-GA-VR",
    title: "Mountain Journey - VR SDGs Experience",
    status: "ARCHIEVED",
    classification: "GAME | VIRTUAL REALITY",
    semester: "Semester 6",
    category: "other",
    role: "Unity Developer",
    techStack: ["C#", "Unity 3D", "Meta Quest SDK", "VR Physics"],
    githubUrl: "https://github.com/Lukas166/mountain-journey-simulator",
    featured: false,
    origin: "Spatial computing game development supporting global mental health awareness under UN SDG 3.4.",
    contributions: [
      "Built interactive quest event triggers and environmental physics interactions in Unity C#.",
      "Help another unity engineer to implement character motion.",
    ],
    uniqueNote: "Intensive 3D spatial computing sprint delivering interactive therapeutic virtual environments under marathon deadlines.",
    addendum: `
      [LOG ENTRY 06-GA-VR-01]: Blank.
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
