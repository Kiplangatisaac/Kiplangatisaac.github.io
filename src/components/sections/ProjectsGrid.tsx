"use client";

import { useState } from "react";
import {
  ExternalLink,
  Github,
  Monitor,
} from "lucide-react";
import { motion } from "framer-motion";
import { PROJECTS, CATEGORY_LABELS, ProjectCategory } from "@/data/portfolio";

type Filter = "all" | ProjectCategory;

const CATEGORY_COLORS: Record<ProjectCategory, string> = {
  fullstack: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  ai: "bg-purple-500/10 text-purple-400 border-purple-500/30",
  systems: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  mobile: "bg-pink-500/10 text-pink-400 border-pink-500/30",
  web: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  "3d": "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
  architecture: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
};

const STATUS_CONFIG: Record<
  (typeof PROJECTS)[number]["status"],
  { bg: string; text: string; border: string }
> = {
  Active: { bg: "bg-[#76B900]/10", text: "text-[#76B900]", border: "border-[#76B900]/30" },
  "In Development": { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/30" },
  Prototyping: { bg: "bg-slate-500/10", text: "text-slate-400", border: "border-slate-500/30" },
  Completed: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/30" },
};

interface ProjectCardProps {
  project: (typeof PROJECTS)[number];
}

function ProjectCard({ project }: ProjectCardProps) {
  const status = STATUS_CONFIG[project.status];
  const catColor = CATEGORY_COLORS[project.category];

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="prox-card group relative rounded-2xl border border-white/10 bg-[rgba(24,24,27,0.5)] backdrop-blur overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 proj-img" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, rgba(118,185,0,0.35), transparent 60%), radial-gradient(circle at 70% 70%, rgba(118,185,0,0.15), transparent 60%), linear-gradient(135deg,#0f0f0f,#1a1a1a)" }}>
          <div className="absolute inset-0 grid-bg opacity-40" />
        </div>

        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className={`chip ${catColor}`}>
            {CATEGORY_LABELS[project.category]}
          </span>
          <span className="chip" style={{ borderColor: "rgba(255,255,255,0.15)", color: "#fff", background: "rgba(255,255,255,0.05)" }}>
            v1.0
          </span>
        </div>

        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded text-[10px] font-mono font-bold uppercase ${status.bg} ${status.text} ${status.border}`}>
            {project.status}
          </span>
        </div>

        <div className="absolute bottom-3 right-3 flex gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-black/60 backdrop-blur border border-white/10 hover:border-[#76B900]/60 flex items-center justify-center transition group"
              title="Live preview"
            >
              <ExternalLink className="w-4 h-4 text-white/90 group-hover:text-[#76B900]" />
              <div className="absolute inset-0 bg-[#76B900]/20 group-hover:bg-[#76B900]/40 transition rounded-lg" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-black/60 backdrop-blur border border-white/10 hover:border-[#76B900]/60 flex items-center justify-center transition group"
              title="GitHub repo"
            >
              <Github className="w-4 h-4 text-white/90 group-hover:text-[#76B900]" />
              <div className="absolute inset-0 bg-[#76B900]/20 group-hover:bg-[#76B900]/40 transition rounded-lg" />
            </a>
          )}
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-[#76B900] transition">
          {project.title}
        </h3>
        <p className="text-sm text-white/55 leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const [search, setSearch] = useState("");

  const filtered = PROJECTS.filter((p) => {
    const matchFilter = filter === "all" || p.category === filter;
    const q = search.toLowerCase();
    const matchSearch =
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.techStack.some((t) => t.toLowerCase().includes(q));
    return matchFilter && matchSearch;
  });

  const filterOptions: Array<{ label: string; value: Filter }> = [
    { label: "All", value: "all" },
    { label: "Full-Stack", value: "fullstack" },
    { label: "AI / ML", value: "ai" },
    { label: "Systems / C++", value: "systems" },
    { label: "Mobile", value: "mobile" },
    { label: "Web", value: "web" },
    { label: "3D / Game Dev", value: "3d" },
    { label: "Architecture", value: "architecture" },
  ];

  return (
    <section id="projects" className="relative py-24 lg:py-32 border-t border-white/10">
      <div className="grid-bg" />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 fade-up">
          <div>
            <div className="section-label mb-3">// 02 · PROJECTS</div>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
              Selected Work<span className="text-[#76B900]">.</span>
            </h2>
            <p className="mt-4 text-white/60 max-w-xl">
              A curated collection of systems, apps, and experiments. Filter by
              domain or search by keyword.
            </p>
          </div>
          <div className="relative w-full lg:w-64">
            <Monitor className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              id="searchInput"
              type="text"
              placeholder="Search projects..."
              className="input pl-10 pr-4 py-2.5 rounded-lg text-sm w-full font-mono"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="fade-up flex gap-2 mb-10 overflow-x-auto no-scrollbar pb-2">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilter(opt.value)}
              className={`px-4 py-2 rounded-full font-mono text-xs whitespace-nowrap transition ${
                filter === opt.value
                  ? "active bg-[#76B900]/15 text-[#a3e635] border-[#76B900]/60"
                  : "border border-white/10 hover:border-[#76B900]/50"
              }`}
            >
              {opt.label}
              {opt.value === "all" && (
                <span className="text-[#76B900]"> ({PROJECTS.length})</span>
              )}
            </button>
          ))}
        </div>

        <div id="projectGrid" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
          {filtered.length === 0 && (
            <div id="noResults" className="col-span-full text-center py-20 font-mono text-white/40">
              <div className="text-4xl mb-3">∅</div>
              <div>No projects match your filter.</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
