"use client";

import { useState, useEffect } from "react";
import React from "react";
import { Code, ArrowRight, Terminal, Monitor, RefreshCw, Zap } from "lucide-react";
import Link from "next/link";

type Word = string;

export default function Hero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [systemStatus, setSystemStatus] = useState<"booting" | "ready">("booting");
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  const words: Word[] = [
    "future",
    "stack",
    "systems",
    "products",
    "platforms",
    "experiences",
  ];

  useEffect(() => {
    // Simulate system boot sequence
    const bootLines = [
      ">_ System initializing...",
      ">_ Loading kernel modules... OK",
      ">_ Mounting filesystem... OK",
      ">_ Network interface eth0... UP",
      ">_ Authentication service... READY",
      ">_ All systems operational.",
    ];
    let i = 0;
    const interval = setInterval(() => {
      setTerminalLines((prev) => [...prev, bootLines[i]]);
      i++;
      if (i >= bootLines.length) {
        clearInterval(interval);
        setSystemStatus("ready");
      }
    }, 400);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const word = words[wordIdx];
    let timeout: NodeJS.Timeout;

    if (!deleting) {
      setCharIdx((c) => c + 1);
      if (charIdx === word.length) {
        setDeleting(true);
        timeout = setTimeout(() => {}, 1500);
      } else {
        timeout = setTimeout(() => {}, 90);
      }
    } else {
      setCharIdx((c) => c - 1);
      if (charIdx === 0) {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % words.length);
      } else {
        timeout = setTimeout(() => {}, 40);
      }
    }

    return () => clearTimeout(timeout);
  }, [wordIdx, charIdx, deleting]);

  const typedWord = words[wordIdx].slice(0, charIdx);

  const ctas = [
    {
      label: "View Architecture (Projects)",
      icon: Code,
      href: "#projects",
      variant: "glow" as const,
    },
    {
      label: "Initialize Contact (Hire Me)",
      icon: ArrowRight,
      href: "#contact",
      variant: "solid" as const,
    },
  ];

  const skillChips = [
    "Rust",
    "C++",
    "Next.js",
    "Python",
    "FastAPI",
    "TypeScript",
    "Go",
    "PostgreSQL",
    "PyTorch",
    "Docker",
  ];

  return (
    <section id="top" className="relative min-h-[90vh] pt-16 pb-24 overflow-hidden">
      {/* Background layers */}
      <div className="grid-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(118,185,0,0.10),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(118,185,0,0.08),transparent_45%),radial-gradient(circle_at_50%_90%,rgba(118,185,0,0.06),transparent_50%)]" />
      <div className="orb bg-[#76B900]/25 w-[600px] h-[600px] -top-[100px] -left-[100px]" />
      <div className="orb bg-[#76B900]/15 w-[500px] h-[500px] top-[200px] -right-[80px]" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left: Copy + Stats */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#76B900]/30 bg-[#76B900]/5 font-mono text-xs mb-6">
              <span className="pulse-dot"></span>
              <span className="text-white/70">System Online · Ready for Deployment</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
              Building the
              <br />
              <span className="relative inline-block">
                <span className="text-[#76B900]">{typedWord}</span>
                <span className="cursor" />
              </span>
              <br />
              one <span className="text-white/50">commit</span> at a time.
            </h1>

            <p className="text-base lg:text-lg text-white/60 max-w-2xl leading-relaxed mb-8">
              Welcome to my technical ecosystem. I architect performant software,
              train intelligent systems, and ship production-ready products —
              from low-level Rust to cloud-native full-stack apps and AI/ML
              pipelines.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              {ctas.map((c, i) => (
                <Link
                  key={i}
                  href={c.href}
                  className={`px-7 py-4 rounded-lg font-medium inline-flex items-center gap-2 ${
                    c.variant === "glow" ? "btn-glow" : "btn-solid"
                  } hover:scale-[1.02] transition-transform`}
                >
                  <c.icon className="w-4 h-4" />
                  {c.label}
                </Link>
              ))}
            </div>

            {/* Skill chips */}
            <div className="mt-10 flex flex-wrap gap-2">
              {skillChips.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">
              {[
                { num: "24+", label: "PROJECTS SHIPPED" },
                { num: "3yr", label: "EXPERIENCE" },
                { num: "99%", label: "CLIENT SATISFACTION" },
              ].map((s) => (
                <div key={s.num}>
                  <div className="stat-num text-3xl lg:text-4xl font-bold">
                    {s.num}
                  </div>
                  <div className="text-xs text-white/50 font-mono mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Interactive Terminal */}
          <div className="lg:col-span-6">
            <div className="relative scanline overflow-hidden rounded-2xl border border-white/10 bg-[rgba(24,24,27,0.85)] backdrop-blur-xl shadow-2xl group">
              {/* Terminal controls (interactive dots) */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-black/40">
                <div className="flex items-center gap-2">
                  <button className="w-3 h-3 rounded-full bg-red-500/80 hover:bg-red-500 transition" title="Close" />
                  <button className="w-3 h-3 rounded-full bg-yellow-500/80 hover:bg-yellow-500 transition" title="Minimize" />
                  <button className="w-3 h-3 rounded-full bg-[#76B900]/80 hover:bg-[#76B900] transition" title="Maximize" />
                </div>
                <div className="font-mono text-[11px] text-white/40">
                  ~/nexus — zsh
                </div>
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${systemStatus === "ready" ? "bg-[#76B900] animate-pulse" : "bg-amber-500 animate-pulse"}`} />
                  <span className="font-mono text-[11px] text-white/60">
                    {systemStatus === "ready" ? "● LIVE" : "● BOOTING"}
                  </span>
                </div>
              </div>
              {/* Terminal body */}
              <div className="p-5 font-mono text-[12px] leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
                {terminalLines.map((line, idx) => (
                  <div key={idx} className="mb-1">
                    {line.startsWith("$ ") ? (
                      <>
                        <span className="text-white/40">{line.slice(0, 2)}</span>{" "}
                        <span className="text-white">{line.slice(2)}</span>
                      </>
                    ) : line.startsWith("✓") ? (
                      <span className="text-[#76B900]">{line}</span>
                    ) : (
                      <span className="text-white/40">{line}</span>
                    )}
                  </div>
                ))}
                <div className="text-white/40 mt-2">$ _<span className="cursor" /></div>
              </div>

              {/* Interactive bottom bar */}
              <div className="px-4 py-3 border-t border-white/5 bg-black/20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <button
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 hover:border-[#76B900]/50 hover:bg-[#76B900]/10 transition text-xs font-mono"
                    onClick={() => {
                      setTerminalLines((prev) => [
                        ...prev,
                        "$ whoami",
                        "cs_undergrad · full_stack_engineer",
                      ]);
                    }}
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>whoami</span>
                  </button>
                  <button
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 hover:border-[#76B900]/50 hover:bg-[#76B900]/10 transition text-xs font-mono"
                    onClick={() => {
                      setTerminalLines((prev) => [
                        ...prev,
                        "$ cat stack.txt",
                        "→ Languages: Rust, Python, Go, C++, TS",
                        "→ Frontend: React, Next.js, Tailwind",
                        "→ Backend: Node, FastAPI, PostgreSQL",
                        "→ AI/ML: PyTorch, LangChain, OpenAI",
                        "→ Infra: Docker, AWS, Vercel",
                      ]);
                    }}
                  >
                    <Monitor className="w-3 h-3" />
                    <span>stack.txt</span>
                  </button>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-[#76B900]/30 bg-[#76B900]/5 text-xs font-mono">
                  <Zap className="w-3 h-3 text-[#76B900]" />
                  <span className="text-[#76B900]">System Stable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech marquee */}
      <div className="relative border-y border-white/5 bg-black/30 py-4 overflow-hidden mt-8">
        <div className="marquee">
          <div className="marquee-track font-mono text-sm text-white/40">
            {[
              "RUST",
              "PYTHON",
              "REACT",
              "NEXT.JS",
              "NODE.JS",
              "FASTAPI",
              "TYPESCRIPT",
              "GO",
              "C++",
              "PYTORCH",
              "DOCKER",
              "POSTGRESQL",
              "TAILWIND",
              "AWS",
            ].map((t, i) => (
              <React.Fragment key={t}>
                <span>{t}</span>
                <span className="text-[#76B900]">◆</span>
              </React.Fragment>
            ))}
          </div>
          <div className="marquee-track font-mono text-sm text-white/40" aria-hidden="true">
            {[
              "RUST",
              "PYTHON",
              "REACT",
              "NEXT.JS",
              "NODE.JS",
              "FASTAPI",
              "TYPESCRIPT",
              "GO",
              "C++",
              "PYTORCH",
              "DOCKER",
              "POSTGRESQL",
              "TAILWIND",
              "AWS",
            ].map((t, i) => (
              <React.Fragment key={t}>
                <span>{t}</span>
                <span className="text-[#76B900]">◆</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
