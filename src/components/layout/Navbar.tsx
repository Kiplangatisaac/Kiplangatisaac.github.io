"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Terminal, Link as LinkIcon, Code, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#overview", label: "// Overview" },
    { href: "#projects", label: "// Projects" },
    { href: "#services", label: "// Services" },
    { href: "#contact", label: "// Contact" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="glass-strong border-b border-white/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
          {/* Left: Monogram logo */}
          <Link href="#top" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-[#76B900]/30 to-[#76B900]/5 border border-[#76B900]/40 flex items-center justify-center group-hover:border-[#76B900]/80 transition">
              <Terminal className="w-5 h-5 text-[#76B900]" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#76B900] animate-pulse" />
            </div>
            <div className="leading-tight">
              <div className="font-mono text-sm font-bold tracking-tight">
                {">"}_{" "}
                <span className="text-[#76B900]">IS</span>
              </div>
              <div className="font-mono text-[10px] text-white/40 tracking-widest">
                NEXUS v2.4 · LIVE
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-sm">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="nav-link text-white/70 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Status badge + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#76B900]/30 bg-[#76B900]/5 font-mono text-xs">
              <span className="pulse-dot"></span>
              <span className="text-white/80">System Online</span>
              <span className="text-white/30">|</span>
              <span className="text-[#76B900]">Available</span>
            </div>
            <Link
              href="#contact"
              className="btn-solid px-4 py-2 rounded-lg text-sm"
            >
              Hire Me <ArrowRight className="ml-1 w-3 h-3" />
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setIsOpen((o) => !o)}
            className="md:hidden w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center"
            aria-label="Menu"
          >
            <LinkIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobileMenu"
        className={`mobile-menu md:hidden absolute top-16 inset-x-0 glass-strong border-b border-white/10`}
      >
        <div className="px-5 py-6 flex flex-col gap-4 font-mono text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setIsOpen(false)}
              className="py-2 border-b border-white/5 text-white/80"
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-2 pt-2 border-t border-white/5">
            <span className="pulse-dot"></span>
            <span className="text-xs text-[#76B900]">Available for Hire</span>
          </div>
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="btn-solid px-4 py-3 rounded-lg text-center text-sm"
          >
            Request a Service →
          </Link>
        </div>
      </div>
    </header>
  );
}
