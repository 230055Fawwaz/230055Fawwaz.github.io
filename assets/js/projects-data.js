/**
 * DATABASE PROYEK - ARSIP FAWWAZ YAQZHAN
 * Format: SCP Document Dossier Registry
 */
const PROJECTS_DATA = [
  {
    id: "capital-hub",
    itemNumber: "PROJ-07-CH",
    title: "Capital Hub - Advanced Personal Finance",
    status: "ACTIVE DEVELOPMENT",
    classification: "SAFE / ENTERPRISE READY",
    semester: "Semester 7",
    category: "web",
    role: "Fullstack Developer",
    shortDesc: "Sistem informasi lokal dan offline penuh untuk tata kelola keuangan pribadi modular (evolusi dari MyFinance).",
    techStack: ["Flask", "Python", "Jinja2", "SQLite", "JavaScript", "Chart.js", "Batch Automation"],
    githubUrl: "https://github.com/230055Fawwaz",
    featured: true,
    origin: "Pemecah masalah pribadi dalam mengatur cash flow dan investasi pemula.",
    contributions: [
      "Merancang arsitektur aplikasi modular menggunakan Flask Application Factory & Blueprints.",
      "Membangun wireframe, antarmuka low-fidelity, hingga sistem dashboard berbasis Chart.js.",
      "Menyusun logika bisnis klasifikasi pengeluaran, budgeting bulanan, dan audit histori keuangan.",
      "Mengintegrasikan skrip automasi batch untuk kemudahan inisialisasi lokal tanpa dependensi rumit."
    ],
    uniqueNote: "Proyek pertama yang dirancang untuk rilis publik dengan fokus pada privasi data 100% lokal tanpa cloud tracker.",
    addendum: `
      [LOG ENTRY 07-A]: Transisi dari sistem MyFinance versi 1 memerlukan perombakan skema database SQLite guna mendukung kalkulasi arus kas berulang dan visualisasi analitik multivariat.
      [LOG ENTRY 07-B]: Sistem dirancang zero-leakage; seluruh data finansial dienkripsi secara lokal di perangkat pengguna.
    `
  },
  {
    id: "tanyahukum-v2",
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
    origin: "Tugas proyek kolaboratif pengembangan asisten konsultasi hukum perdata berbasis AI.",
    contributions: [
      "Mengembangkan sistem autentikasi aman (Email OTP & Google OAuth SSO).",
      "Mengimplementasikan Role-Based Access Control (RBAC) untuk pengguna umum dan staf administrator.",
      "Membangun alur reset password aman dengan validasi token berbasis waktu via email.",
      "Mengintegrasikan endpoint profil pengguna dengan upload media dan sinkronisasi database PostgreSQL."
    ],
    uniqueNote: "Proyek kolaboratif lintas disiplin pertama yang mengintegrasikan LLM RAG, vector search (Pinecone), dan sistem pembayaran Midtrans.",
    addendum: `
      [LOG ENTRY 07-C]: Integrasi Gemini API memerlukan perumusan system prompt yang ketat guna membatasi yurisdiksi jawaban hanya pada KUHPerdata Indonesia.
      [LOG ENTRY 07-D]: Pipa CI/CD dibangun menggunakan GitHub Actions untuk menjamin stabilitas endpoint API sebelum pengujian bersama tim frontend.
    `
  },
  {
    id: "it-inventory",
    itemNumber: "PROJ-07-PEMI",
    title: "IT Inventory Management System",
    status: "OPERATIONAL / ARCHIVED",
    classification: "SAFE / INDUSTRIAL DEPLOYMENT",
    semester: "Semester 7 (Magang PEMI)",
    category: "web",
    role: "Fullstack Developer (IT Intern)",
    techStack: ["Flask", "Python", "MySQL", "Jinja2", "Vanilla JS", "Chart.js", "Batch Files"],
    githubUrl: "https://github.com/230055Fawwaz",
    featured: true,
    origin: "Proyek penugasan magang pada PT. EDS Manufacturing Indonesia (Yazaki Indonesia Group).",
    contributions: [
      "Merancang aplikasi inventaris terstruktur dengan multi-user privilege dan audit trail aset.",
      "Membuat fitur bulk import data Excel dan auto-suggestion untuk 50.000+ catatan spare part & hardware.",
      "Menyusun modul Obsolete Asset tracking untuk mengidentifikasi perangkat yang mendekati akhir siklus pakai.",
      "Melakukan migrasi dan deployment penuh ke infrastruktur server lokal on-premise perusahaan."
    ],
    uniqueNote: "Proyek perdana yang menghadapi kebutuhan riil stakeholder industri otomotif manufaktur skala internasional.",
    addendum: `
      [LOG ENTRY 07-E]: Rekonsiliasi 2.500+ baris data PostgreSQL produksi dengan spreadsheet procurement anggaran via formula analitik lanjutan.
      [LOG ENTRY 07-F]: Sanitasi 50.000+ baris data suku cadang IT di server MySQL live tanpa insiden downtime atau kehilangan integritas data.
    `
  },
  {
    id: "cli-networks-tool",
    itemNumber: "PROJ-NET-01",
    title: "CLI Networks Suite - Modern Terminal Utility",
    status: "DEPLOYED / RESEARCH",
    classification: "SAFE / NETWORK UTILITY",
    semester: "Eksplorasi Jaringan",
    category: "network",
    role: "CLI Tool Developer",
    techStack: ["Python", "Rich", "Socket", "ipaddress", "Argparse"],
    githubUrl: "https://github.com/230055Fawwaz",
    featured: true,
    origin: "Proyek eksplorasi mandiri untuk otomasi perhitungan subnetting dan diagnosis konektivitas.",
    contributions: [
      "Merancang parser CLI interaktif yang mendukung mode menu dan argumen command-line langsung.",
      "Mengembangkan mesin kalkulator VLSM/Subnetting berbasis modul ipaddress dengan tabel visual.",
      "Mengimplementasikan asynchronous port scanner multi-threaded untuk verifikasi servis aktif.",
      "Mendesain tampilan terminal modern dengan library Rich (progress bar, tabel berwarna, status indicator)."
    ],
    uniqueNote: "Membuktikan antarmuka command-line dapat disajikan secara elegan, intuitif, dan responsif tanpa bantuan browser.",
    addendum: `
      [LOG ENTRY NET-01]: Dirancang khusus untuk efisiensi diagnosa teknis sysadmin dan mahasiswa CCNA dalam menentukan network address, broadcast, and usable host range dalam hitungan milidetik.
    `
  },
  {
    id: "packet-crafting",
    itemNumber: "PROJ-NET-02",
    title: "Packet Crafting & Protocol Inspector",
    status: "RESEARCH ACTIVE",
    classification: "EUCLID / NETWORK SECURITY",
    semester: "Eksplorasi CCNA & Keamanan",
    category: "network",
    role: "Protocol & Security Engineer",
    techStack: ["Python", "Scapy", "Npcap", "Wireshark", "Raw Sockets"],
    githubUrl: "https://github.com/230055Fawwaz",
    featured: true,
    origin: "Eksperimen langsung untuk membedah paket data pada lapisan OSI Layer secara hands-on.",
    contributions: [
      "Menulis skrip penangkapan paket real-time (sniffing) dengan filter protokol spesifik (ARP, ICMP, DNS).",
      "Membuat modul rekonstruksi dan injeksi paket kustom untuk menguji ketahanan firewall lokal.",
      "Mengembangkan scanner deteksi host aktif melalui teknik ARP Ping terarah.",
      "Menyajikan ringkasan payload dan header biner ke dalam format log terstruktur."
    ],
    uniqueNote: "Menjembatani teori abstrak sertifikasi CCNA menjadi baris instruksi kode yang dapat diobservasi perilakunya di kawat jaringan.",
    addendum: `
      [LOG ENTRY NET-02]: Eksperimen dilakukan di lingkungan sandbox tertutup guna mencegah kebocoran transmisi paket di luar subnet laboratorium uji.
    `
  },
  {
    id: "myfinance",
    itemNumber: "PROJ-06-MF",
    title: "MyFinance v1 - Personal Budget Tracker",
    status: "ARCHIVED (UPGRADED)",
    classification: "SAFE / LEGACY SYSTEM",
    semester: "Semester 6",
    category: "web",
    role: "Fullstack Developer",
    techStack: ["Flask", "Python", "SQLite", "Chart.js", "Jinja2 HTML", "CSS", "Batch Files"],
    githubUrl: "https://github.com/230055Fawwaz/MyFinance",
    featured: false,
    origin: "Solusi pribadi untuk memantau pengeluaran bulanan mahasiswa secara terstruktur.",
    contributions: [
      "Merancang skema database relasional SQLite untuk kategori pengeluaran dan pemasukan.",
      "Membuat visualisasi pie-chart dan bar-chart pergerakan kas bulanan menggunakan Chart.js.",
      "Membangun antarmuka desktop-friendly yang dapat dijalankan secara instan dengan satu kali klik file batch."
    ],
    uniqueNote: "Proyek personal pertama yang secara konsisten dipakai dalam aktivitas harian dan mendasari lahirnya Capital Hub.",
    addendum: `
      [LOG ENTRY 06-A]: Sistem ini berhasil mencatat lebih dari 6 bulan transaksi pribadi sebelum arsitekturnya direfaktor menjadi Capital Hub.
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
    origin: "Inisiatif pembuatan asisten belajar cerdas khusus mata kuliah Jaringan Komputer & Komunikasi Data.",
    contributions: [
      "Mengonfigurasi model open-source Qwen 2.5 pada runtime lokal Ollama.",
      "Membangun sistem Retrieval-Augmented Generation (RAG) sederhana dengan penyimpanan vektor di SQLite.",
      "Membuat antarmuka web bergaya dialog konsol untuk interaksi tanya-jawab mahasiswa."
    ],
    uniqueNote: "Eksperimen batas kemampuan komputasi hardware lokal dalam memproses embedding dan inferensi LLM tanpa GPU server khusus.",
    addendum: `
      [LOG ENTRY 06-B]: Tingkat latency lokal yang tinggi memberikan wawasan mendalam mengenai kebutuhan kuantisasi model (4-bit quantization) untuk edge computing.
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
    origin: "Tugas rancang bangun infrastruktur jaringan enterprise berskala global.",
    contributions: [
      "Merancang topologi multi-region dengan integrasi Content Delivery Network (CDN) untuk distribusi aset game.",
      "Mengonfigurasi Next-Generation Firewall (NGFW) dengan aturan inspeksi paket mendalam (DPI).",
      "Melakukan simulasi failover jalur redundan untuk menjamin ketersediaan tinggi (high-availability)."
    ],
    uniqueNote: "Simulasi jaringan enterprise terlengkap yang mencakup pertukaran rute antar Autonomous Systems.",
    addendum: `
      [LOG ENTRY 06-C]: Berhasil memverifikasi penurunan latency distribusi traffic hingga 40% dalam topologi simulasi CDN terdistribusi.
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
    origin: "Rancangan jaringan toko ritel pintar berbasis otomasi sensor dan pengawasan terpusat.",
    contributions: [
      "Menentukan arsitektur hierarkis (Core, Distribution, Access) untuk integrasi perangkat IoT retail.",
      "Mengonfigurasi segregasi VLAN untuk memisahkan lalu lintas Point-of-Sale (POS) dari perangkat publik.",
      "Menguji transmisi telemetri sensor lingkungan dan kamera pengawas secara simultan."
    ],
    uniqueNote: "Penerapan teori CCNA SRWE dalam skenario pemisahan zona keamanan jaringan ritel.",
    addendum: `
      [LOG ENTRY 06-D]: Semua endpoint POS diisolasi di subnet khusus dengan access-list (ACL) ketat menuju database pusat.
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
    origin: "Pengembangan pengalaman virtual reality untuk mendukung kampanye kesehatan mental (SDGs 3.4).",
    contributions: [
      "Mengimplementasikan pergerakan karakter kinetik bebas mual (smooth locomotion) pada Meta Quest.",
      "Membangun sistem quest event trigger dan interaksi objek lingkungan virtual.",
      "Mengoptimalkan asset poligon dan pencahayaan untuk menjaga frame rate stabil di 72 FPS."
    ],
    uniqueNote: "Eksplorasi intensif grafika 3D dan spatial computing dengan tantangan deadline pengerjaan maraton.",
    addendum: `
      [LOG ENTRY 06-E]: Terbukti memberikan pengalaman visual relaksasi interaktif bagi para pengguna pengujian awal.
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
