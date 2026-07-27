export const site = {
  name: "Eniyan Yosuva",
  shortName: "Eniyan.",
  email: "eniyanyosuva11@gmail.com",
  tagline: "Building agents that reason, retrieve, and remember.",
  hero: "Shipping intelligent systems. From smart contracts to LLM pipelines. now building agents that reason, retrieve, and remember.",
  status: "Open to opportunities",
  about: [
    "I'm a Computer Science Engineering student at VIT-AP University, focused on AI, Machine Learning, Blockchain, and Software Engineering.",
    "My work spans intelligent systems, developer tools, cloud infrastructure, smart contracts, and high-performance applications — built with a bias toward shipping.",
    "I like problems where the stack has to think for itself: agents that scaffold code, protocols that need to be hardened, and infrastructure that has to be fast and reliable.",
  ],
  social: {
    github: "https://github.com/eniyos",
    x: "https://x.com/eniyos",
    linkedin: "https://www.linkedin.com/in/eniyanyosuva",
  },
} as const;

export type Project = {
  title: string;
  description: string;
  tags: string[];
  status: "live" | "wip" | "concept";
  href?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Anchor Sentinel",
    description:
      "Detect critical Solana smart contract vulnerabilities before deployment.",
    tags: ["Solana", "Rust", "Anchor", "Security"],
    status: "live",
    href: "https://github.com/Eniyanyosuva/anchor-sentinel",
    image: "/images/anchor-sentinel.jpg",
  },
  {
    title: "Oprepo",
    description:
      "Developer–repository matchmaker. Analyzes developer skills and interests to recommend open-source projects and issues they'll love contributing to.",
    tags: ["Next.js", "NestJS", "Python", "ML"],
    status: "wip",
    image: "/images/oprepo.jpeg",
    href: "https://github.com/eniyos/oprepo",
  },
  {
    title: "Backbeatin",
    description:
      "A single-binary Rust tool that automatically verifies Restic and Borg backups can actually be restored, with cryptographic proof and webhook alerts.",
    tags: ["Rust", "Docker", "DevOps", "Security"],
    status: "wip",
    image: "/images/backbeatin.jpg",
    href: "https://github.com/eniyos/backbeatin",
  },
  {
    title: "CampusOps",
    description:
      "Trustless campus event escrow on Solana. Attendees pay with confidence — organizers receive funds only when events complete.",
    tags: ["Solana", "Anchor", "Next.js", "Express"],
    status: "live",
    href: "https://github.com/eniyos/campusops",
    image: "/images/campusops.jpg",
  },
];

/* Work-domain filter tabs (matches zerith's source). "Featured" is the
 * default selection. The other tags are presentational — we don't yet
 * filter; clicking a tab just changes the highlighted one. */
export const workTabs: { label: string; value: string }[] = [
  { label: "Featured", value: "featured" },
  { label: "Web", value: "web" },
  { label: "Infra", value: "infra" },
  { label: "App", value: "app" },
  { label: "Web3", value: "web3" },
  { label: "Agents", value: "agents" },
  { label: "UI/UX", value: "uiux" },
  { label: "ML", value: "ml" },
  { label: "Notes", value: "notes" },
];

export type Stat = {
  id: string;
  value: string;
  label: string;
  sub: { value: string; label: string }[];
  dark?: boolean;
};

export const stats: Stat[] = [
  {
    id: "blockchain",
    value: "12+",
    label: "projects shipped across AI, Web3, and systems",
    sub: [
      { value: "5+", label: "AI / ML projects" },
      { value: "3", label: "Web3 protocols" },
    ],
    dark: true,
  },
  {
    id: "agentic-ai",
    value: "67%",
    label: "score on a leading long-context memory eval",
    sub: [
      { value: "30+", label: "workflows automated" },
      { value: "13+", label: "agents deployed" },
    ],
  },
  {
    id: "infra",
    value: "10K",
    label: "peak throughput on a multi-chain indexer",
    sub: [
      { value: "<300ms", label: "p99 query latency" },
      { value: "99.9%", label: "uptime sustained" },
    ],
  },
  {
    id: "tokenomics",
    value: "4.5B",
    label: "tokens staked across protocol designs",
    sub: [
      { value: "18.1%", label: "staker APY" },
      { value: "2", label: "mainnet audits" },
    ],
  },
];

export type Achievement = {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  href?: string;
  badge: string;
};

export const achievements: Achievement[] = [
  {
    title: "Rust Fundamentals",
    issuer: "Duke University",
    date: "Dec 2025",
    credentialId: "X6ZPWSJI0Y1A",
    href: "https://www.coursera.org/account/accomplishments/verify/X6ZPWSJI0Y1A",
    badge: "Rust",
  },
  {
    title: "Cryptography I",
    issuer: "Stanford University",
    date: "Aug 2025",
    credentialId: "9CIVXLPZPC0F",
    href: "https://www.coursera.org/account/accomplishments/verify/9CIVXLPZPC0F",
    badge: "Security",
  },
  {
    title: "The Blockchain",
    issuer: "UC Irvine · Coursera",
    date: "Jul 2025",
    credentialId: "NKYUHB9JNDZN",
    href: "https://www.coursera.org/account/accomplishments/verify/NKYUHB9JNDZN",
    badge: "Blockchain",
  },
  {
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    date: "Jul 2025",
    credentialId: "21QRAJOM8FJG",
    badge: "Frontend",
  },
  {
    title: "Neural Networks and Deep Learning",
    issuer: "DeepLearning.AI",
    date: "Jun 2025",
    credentialId: "WL5SGHEV3DV4",
    href: "https://www.coursera.org/account/accomplishments/verify/WL5SGHEV3DV4",
    badge: "AI/ML",
  },
  {
    title: "GEN AI Using IBM Watsonx",
    issuer: "IBM",
    date: "Jun 2025",
    credentialId: "3ae34318abb7449282a8bb6ee022d6e0",
    href: "https://courses.adroitprolearn.skillsnetwork.site/certificates/3ae34318abb7449282a8bb6ee022d6e0",
    badge: "GenAI",
  },
];

export const coreAreas: string[] = [
  "Artificial Intelligence & Machine Learning",
  "Deep Learning",
  "Reinforcement Learning",
  "Blockchain & Web3",
  "Smart Contract Development",
  "Rust & Systems Programming",
  "Cloud Computing & AWS",
  "Data Structures & Algorithms",
  "Software Architecture",
];
