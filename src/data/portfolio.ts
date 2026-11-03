export type ProjectCategory =
  | "fullstack"
  | "ai"
  | "systems"
  | "mobile"
  | "web"
  | "3d"
  | "architecture";

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  techStack: string[];
  liveUrl: string | null;
  githubUrl: string | null;
  status: "Active" | "In Development" | "Prototyping" | "Completed";
  statusColor: "green" | "emerald" | "amber" | "slate";
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  startingRate: string;
}

export interface Contact {
  email: string;
  phone: string;
  whatsapp: string;
  github: string;
  linkedin: string;
  facebook: string;
  instagram: string;
}

export interface Profile {
  name: string;
  alias: string;
  headline: string;
  bio: string;
  status: string;
  skills: string[];
}

/* ------------------------------------------------------------------ */
/*  Profile                                                           */
/* ------------------------------------------------------------------ */
export const PROFILE: Profile = {
  name: "Isaac Kiplangat",
  alias: "Sixtus",
  headline: "Computer Science Student & Full-Stack/Systems Engineer",
  bio:
    "Undergraduate at Kirinyaga University bridging software engineering, " +
    "artificial intelligence, low-level system architecture, and cybersecurity. " +
    "Available for freelance technical services.",
  status: "Available for Hire",
  skills: [
    "C++",
    "Rust",
    "Go",
    "Java",
    "Python",
    "JavaScript",
    "TypeScript",
    "FastAPI",
    "React/Next.js",
    "Docker",
    "Linux Administration",
    "Cybersecurity Auditing",
    "3D Modeling (Blender, Unreal Engine 5)",
  ],
};

/* ------------------------------------------------------------------ */
/*  Contact                                                           */
/* ------------------------------------------------------------------ */
export const CONTACT: Contact = {
  email: "your.email@example.com",
  phone: "+254700000000",
  whatsapp: "https://wa.me/254700000000",
  github: "https://github.com/isaackiplangat",
  linkedin: "https://linkedin.com/in/isaackiplangat",
  facebook: "https://facebook.com/isaackiplangat",
  instagram: "https://instagram.com/isaackiplangat",
};

/* ------------------------------------------------------------------ */
/*  Services                                                          */
/* ------------------------------------------------------------------ */
export const SERVICES: Service[] = [
  {
    id: "srv-01",
    title: "Software & Web Development",
    description:
      "Full-stack web applications, PWA development, and API creation using React, Python (FastAPI), JavaScript, and backend system architecture.",
    icon: "Code",
    startingRate: "From $40/hr",
  },
  {
    id: "srv-02",
    title: "Data Annotation & AI QA",
    description:
      "High-quality data privacy auditing, PII review, and quality assurance for AI model training pipelines.",
    icon: "Database",
    startingRate: "From $15/hr",
  },
  {
    id: "srv-03",
    title: "Technical Writing & Editing",
    description:
      "Clear, precise documentation, system architecture proposals, and technical editing for software projects.",
    icon: "FileText",
    startingRate: "From $25/hr",
  },
  {
    id: "srv-04",
    title: "Virtual Assistance & Transcription",
    description:
      "Reliable digital organization, transcription of technical or general audio, and workflow management.",
    icon: "Headphones",
    startingRate: "From $12/hr",
  },
];

/* ------------------------------------------------------------------ */
/*  Projects                                                          */
/* ------------------------------------------------------------------ */
export const PROJECTS: Project[] = [
  {
    id: "prj-01",
    title: "Campus Connect",
    category: "fullstack",
    description:
      "A full-stack campus communication PWA for Kirinyaga University featuring real-time A/V conferencing, club directories, and a grounded AI assistant.",
    techStack: ["FastAPI", "Groq", "JavaScript", "WebRTC", "PWA"],
    liveUrl: "https://campus-connect.isaackiplangat.github.io",
    githubUrl: "https://github.com/isaackiplangat/campus-connect",
    status: "In Development",
    statusColor: "amber",
  },
  {
    id: "prj-02",
    title: "Local AI Assistant & RAG Engine",
    category: "ai",
    description:
      "Cross-platform desktop AI assistant with a dashboard UI, integrating SQLite-vec and FTS5 hybrid search, ONNX embeddings, and AST parsing.",
    techStack: ["C++", "Rust", "SQLite-vec", "ONNX Runtime", "Tree-sitter"],
    liveUrl: null,
    githubUrl: "https://github.com/isaackiplangat/local-ai-rag",
    status: "Active",
    statusColor: "green",
  },
  {
    id: "prj-03",
    title: "3D Environment Reconstruction Pipeline",
    category: "3d",
    description:
      "Pipeline integrating DJI Zenmuse L3 LiDAR point clouds with OpenUSD for game stage design and visualization.",
    techStack: ["OpenUSD", "Blender", "NVIDIA Omniverse", "Godot", "Unreal Engine 5"],
    liveUrl: null,
    githubUrl: "https://github.com/isaackiplangat/3d-reconstruction",
    status: "Prototyping",
    statusColor: "slate",
  },
  {
    id: "prj-04",
    title: "FarmLink & SokoLink Architectures",
    category: "architecture",
    description:
      "Proposed architectural models for Kenyan e-commerce and agricultural marketplace platforms integrating escrow payments and logistics.",
    techStack: ["System Design", "Cloud Architecture", "E-commerce"],
    liveUrl: null,
    githubUrl: "https://github.com/isaackiplangat/market-architectures",
    status: "Completed",
    statusColor: "emerald",
  },
];

/* ------------------------------------------------------------------ */
/*  Category display labels                                           */
/* ------------------------------------------------------------------ */
export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  fullstack: "FULL-STACK",
  ai: "AI / ML",
  systems: "SYSTEMS / C++",
  mobile: "MOBILE",
  web: "WEB",
  "3d": "3D / GAME DEV",
  architecture: "SYSTEM ARCHITECTURE",
};
