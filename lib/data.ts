export const profile = {
  name: "Mihir Shah",
  fullName: "Mihir Vilaskumar Shah",
  role: "Principal Engineer",
  company: "Tricon Infotech",
  location: "Bengaluru, India",
  email: "mihirvilasshah@gmail.com",
  phone: "+91 90950 51022",
  linkedin: "https://www.linkedin.com/in/mihirvilasshah/",
  instagram: "https://www.instagram.com/mihirvilasshah/",
  medium: "https://www.linkedin.com/in/mihirvilasshah/",
  startYear: 2018,
  years: "8+",
  available: "Open to principal & engineering-leadership conversations",
  tagline:
    "Architecting scalable systems. Leading high-impact engineering teams.",
} as const;

export const metrics = [
  {
    value: 8,
    suffix: "+",
    pad: 2,
    label: "Years shipping",
    detail: "Tricon Infotech · since July 2018",
  },
  {
    value: 4,
    suffix: "",
    pad: 2,
    label: "Projects led",
    detail: "End-to-end ownership",
  },
  {
    value: 18,
    suffix: "",
    pad: 2,
    label: "Projects contributed",
    detail: "Across EdTech, retail & AI",
  },
  {
    value: 48,
    suffix: "h",
    pad: 2,
    label: "POC to client win",
    detail: "IICE career-coach prototype",
  },
] as const;

export const principles = [
  {
    index: "01",
    title: "Craft is the baseline",
    body: "Angular, React, TypeScript and Node.js are home. Performance budgets, semantic markup and WCAG 2.1 AA aren't a phase at the end — they're the definition of done.",
    meta: "Angular · React · TypeScript · Node.js",
  },
  {
    index: "02",
    title: "Own the outcome",
    body: "Four projects led, eighteen contributed to. From a 48-hour POC that won the IICE engagement to enterprise AEM intranets — I stay accountable past the merge.",
    meta: "Architecture · estimation · delivery",
  },
  {
    index: "03",
    title: "Grow the people",
    body: "Mentorship through pairing, brainstorming sessions and deliberate learning paths. The best codebase is one a team can confidently own without me in the room.",
    meta: "Mentoring · technical direction",
  },
] as const;

export type TimelineKind = "code" | "lead";

export type TimelineItem = {
  year: string;
  kind: TimelineKind;
  title: string;
  org: string;
  body: string;
  tags: string[];
};

export const timeline: TimelineItem[] = [
  {
    year: "2026",
    kind: "lead",
    title: "Principal Engineer: scope, not just code",
    org: "Tricon Infotech · Bengaluru",
    body: "Leading delivery across a portfolio of 22 engagements — four owned end-to-end, eighteen contributed to. Technical direction, client conversations and estimation, while still shipping production code every week.",
    tags: ["Technical direction", "Delivery ownership", "Angular", "TypeScript"],
  },
  {
    year: "2025",
    kind: "code",
    title: "Speaking Coach — an AI pronunciation studio",
    org: "Tricon Infotech · Applied AI",
    body: "Built a story-driven speaking coach: React + Node on the surface, Azure Speech for real-time pronunciation scoring, Gemini for branching narratives and DALL·E for generated illustration.",
    tags: ["React", "Node.js", "Azure Speech", "Gemini", "DALL·E"],
  },
  {
    year: "2024",
    kind: "code",
    title: "Meta-tagging on a graph",
    org: "Tricon Infotech · Applied AI",
    body: "Automated metadata generation with LLM prompts, modelled tags and document relationships in Neo4j, and exposed semantic search through a Streamlit interface.",
    tags: ["Python", "LangChain", "Gemini", "Neo4j", "Streamlit"],
  },
  {
    year: "2023",
    kind: "lead",
    title: "The business layer",
    org: "Liverpool Business School · IMT Ghaziabad",
    body: "Completed an MBA (LJMU) and PGPM (IMT) alongside full-time delivery. Started framing engineering trade-offs in revenue, risk and time-to-market — not only story points.",
    tags: ["MBA", "PGPM", "Strategy", "Stakeholder comms"],
  },
  {
    year: "2022",
    kind: "code",
    title: "Three products, one LMS suite",
    org: "Tricon Infotech · MHE",
    body: "Shipped the Writing Assignment, Virtual Labs and Anatomy & Psychology Revealed libraries — Angular + Node.js, accessible UI, and code promoted through CI/CD into every environment.",
    tags: ["Angular", "Node.js", "LMS", "CI/CD", "WCAG"],
  },
  {
    year: "2021",
    kind: "lead",
    title: "Walmart AEM intranet",
    org: "Tricon Infotech · Enterprise content",
    body: "Designed and developed content-driven intranet sites on AEM/HTL. Balanced workload across the team, proposed design directions and published content live.",
    tags: ["AEM", "HTL / Sightly", "Team ops", "Content design"],
  },
  {
    year: "2020",
    kind: "code",
    title: "Edmentum Tutoring Services",
    org: "Tricon Infotech · EdTech",
    body: "Built the scheduling, session-tracking and tutor-feedback experience. Front-end architecture in Angular, WCAG 2.1 AA accessibility, backend API integration and Azure Pipelines.",
    tags: ["Angular", "WCAG 2.1 AA", "Azure Pipelines", "REST APIs"],
  },
  {
    year: "2019",
    kind: "lead",
    title: "Leading the Interest Inventory team",
    org: "Tricon Infotech · Edmentum",
    body: "Led the team behind the RIASEC-based career exploration platform for grades 6–12. Delivered an accessible Angular UI, CI/CD templates and architecture documentation end to end.",
    tags: ["Team lead", "Angular", ".NET", "WCAG 2.1 AA", "Architecture docs"],
  },
  {
    year: "2018",
    kind: "code",
    title: "First commit at Tricon. First paper published.",
    org: "Tricon Infotech · VIT Vellore",
    body: "Joined Tricon as an Associate Software Engineer. Published 'Authentication of Electronic Voting Machine using face recognition and RFID' in IJRASET, Vol. 6, Issue IV.",
    tags: ["Angular", "TypeScript", "IJRASET", "Research"],
  },
  {
    year: "2016",
    kind: "code",
    title: "Android, in the wild",
    org: "Glocal Technologies · Lucknow",
    body: "A four-week internship designing and building Olympia Fitness Zone — a fitness Android app with an emphasis on an intuitive, uncluttered interface.",
    tags: ["Android", "Java", "UI design"],
  },
  {
    year: "2014",
    kind: "lead",
    title: "VIT Vellore — where the foundation was poured",
    org: "Vellore Institute of Technology",
    body: "B.Tech in Computer Science (8.59 CGPA). Coordinated the IEEE-MTTS Android workshop and hackathon, and volunteered as a teacher at WHEEL Orphanage.",
    tags: ["B.Tech CSE", "8.59 CGPA", "IEEE-MTTS", "Community"],
  },
];

export type ProjectCategory = "Applied AI" | "EdTech" | "Enterprise" | "Commerce";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  role: string;
  summary: string;
  impact: string;
  stack: string[];
  art: "wave" | "graph" | "radial" | "lab" | "layers" | "badge";
};

export const projects: Project[] = [
  {
    slug: "speaking-coach",
    title: "Speaking Coach",
    category: "Applied AI",
    year: "2025",
    role: "Design & full-stack",
    summary:
      "A story-driven pronunciation coach with real-time speech analysis, branching AI narratives and generated illustration — learning that feels like play.",
    impact: "Azure Speech + Gemini + DALL·E in one feedback loop",
    stack: ["React", "Node.js", "Azure Speech", "Gemini", "DALL·E"],
    art: "wave",
  },
  {
    slug: "meta-tagging",
    title: "Meta-Tagging Graph",
    category: "Applied AI",
    year: "2024",
    role: "AI engineering",
    summary:
      "An LLM pipeline that writes metadata, then stores the relationships in Neo4j — turning a flat document store into a searchable knowledge graph.",
    impact: "Semantic search over a property graph",
    stack: ["Python", "LangChain", "Gemini", "Neo4j", "Streamlit"],
    art: "graph",
  },
  {
    slug: "interest-inventory",
    title: "Interest Inventory",
    category: "EdTech",
    year: "2019",
    role: "Team lead & frontend",
    summary:
      "The RIASEC-based career exploration platform for grades 6–12. Led the team, shaped the accessible Angular UI and documented the architecture end to end.",
    impact: "Team led · WCAG 2.1 AA · Azure CI/CD",
    stack: ["Angular", "C#", ".NET", "Azure Pipelines"],
    art: "radial",
  },
  {
    slug: "virtual-labs",
    title: "MHE Virtual Labs",
    category: "EdTech",
    year: "2022",
    role: "Frontend engineering",
    summary:
      "LMS-integrated lab simulations with a clean assignment flow. Built to drop into a customer's learning platform without a redesign.",
    impact: "One of three MHE libraries shipped",
    stack: ["Angular", "Node.js", "Bootstrap", "LMS"],
    art: "lab",
  },
  {
    slug: "walmart-aem",
    title: "Walmart AEM Intranet",
    category: "Enterprise",
    year: "2021",
    role: "Design, dev & workstream lead",
    summary:
      "Content-driven intranet sites on AEM. Designed within the content model, allocated workload across the team and took pages from draft to live.",
    impact: "Enterprise-scale content, shipped live",
    stack: ["AEM", "HTL / Sightly", "Content design"],
    art: "layers",
  },
  {
    slug: "shopify-badging",
    title: "Shopify Badging App",
    category: "Commerce",
    year: "2023",
    role: "Full-stack",
    summary:
      "A badge-issuing app that spans both sides of Shopify: Angular on the merchant surface, Node + MongoDB on the backend, Liquid and webhooks underneath.",
    impact: "End-to-end app with webhook automation",
    stack: ["Angular", "Node.js", "MongoDB", "Liquid", "Webhooks"],
    art: "badge",
  },
];

export const stackGroups = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "C++"],
  },
  {
    label: "Frontend",
    items: ["Angular 2+", "React", "HTML", "SCSS", "WCAG 2.1 AA"],
  },
  {
    label: "Backend & data",
    items: ["Node.js", "PostgreSQL", "MongoDB", "Neo4j", "MySQL"],
  },
  {
    label: "Platform",
    items: ["Azure", "AWS", "AEM", "Git", "CI/CD"],
  },
] as const;

export const socialTiles = [
  {
    label: "Calligraphy studies",
    caption: "Ink, nibs & slow Sundays",
    icon: "pen",
    gradient: "from-[#1c1b4b] via-[#37337d] to-[#8b7bff]",
  },
  {
    label: "Himalayan detours",
    caption: "Somewhere above the tree line",
    icon: "mountain",
    gradient: "from-[#102a2a] via-[#155e57] to-[#5eead4]",
  },
  {
    label: "Badminton Sundays",
    caption: "Rally first, brunch later",
    icon: "activity",
    gradient: "from-[#3f1d0a] via-[#9a3412] to-[#fdba74]",
  },
  {
    label: "Cinema nights",
    caption: "A very serious watchlist",
    icon: "film",
    gradient: "from-[#241036] via-[#6b21a8] to-[#f0abfc]",
  },
  {
    label: "Gujarat, home",
    caption: "Roots, food & family",
    icon: "pin",
    gradient: "from-[#33230a] via-[#a16207] to-[#fde68a]",
  },
  {
    label: "Filter coffee & commits",
    caption: "The Sunday deploy ritual",
    icon: "coffee",
    gradient: "from-[#1c1917] via-[#57534e] to-[#d6d3d1]",
  },
] as const;

export const credentials = [
  {
    title: "MBA",
    org: "Liverpool Business School · LJMU",
    years: "2021 — 2023",
  },
  {
    title: "PGPM",
    org: "Institute of Management Technology · Ghaziabad",
    years: "2021 — 2022",
  },
  {
    title: "B.Tech, CSE",
    org: "Vellore Institute of Technology",
    years: "2014 — 2018",
  },
  {
    title: "IJRASET publication",
    org: "EVM authentication · face recognition + RFID",
    years: "April 2018",
  },
] as const;
