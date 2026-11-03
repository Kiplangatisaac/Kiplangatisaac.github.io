"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  FileText,
  Headphones,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/data/portfolio";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Database,
  FileText,
  Headphones,
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 border-t border-white/10">
      <div className="grid-bg" />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="fade-up max-w-3xl">
          <div className="section-label mb-3">// 03 · SERVICES</div>
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
            Technical services for teams & founders<span className="text-[#76B900]">.</span>
          </h2>
          <p className="mt-4 text-white/60">
            Hire me for focused, high-quality engineering work. Transparent
            pricing, fast turnaround, clean code.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon] || Code;
            return (
              <motion.div
                key={service.id}
                whileHover={{ y: -4 }}
                className="service-card rounded-2xl p-6 border border-white/10 bg-[rgba(24,24,27,0.4)] backdrop-blur"
              >
                <div className="service-icon w-12 h-12 rounded-xl bg-[#76B900]/10 flex items-center justify-center mb-5 transition">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                  <span className="chip">{service.startingRate}</span>
                </div>
                <p className="text-sm text-white/55 leading-relaxed mb-5">
                  {service.description}
                </p>
                <button
                  className="text-sm font-mono text-[#76B900] hover:text-[#10B981] inline-flex items-center gap-1.5"
                >
                  Request service <ArrowRight className="w-3 h-3" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
