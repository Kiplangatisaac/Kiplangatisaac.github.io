"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  MessageCircle,
  Send,
  Loader2,
} from "lucide-react";
import { CONTACT } from "@/data/portfolio";

const SOCIALS = [
  {
    name: "GitHub",
    url: CONTACT.github,
    icon: Github,
    color: "text-white/70 hover:text-[#76B900]",
  },
  {
    name: "LinkedIn",
    url: CONTACT.linkedin,
    icon: Linkedin,
    color: "text-white/70 hover:text-[#76B900]",
  },
  {
    name: "Facebook",
    url: CONTACT.facebook,
    icon: Facebook,
    color: "text-white/70 hover:text-[#76B900]",
  },
  {
    name: "Instagram",
    url: CONTACT.instagram,
    icon: Instagram,
    color: "text-white/70 hover:text-[#76B900]",
  },
  {
    name: "WhatsApp",
    url: CONTACT.whatsapp,
    icon: MessageCircle,
    color: "text-white/70 hover:text-[#76B900]",
  },
  {
    name: "Email",
    url: `mailto:${CONTACT.email}`,
    icon: Mail,
    color: "text-white/70 hover:text-[#76B900]",
  },
];

export default function ContactHub() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ message: string; type: "info" | "success" | "error" } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ message: "⏳ Transmitting...", type: "info" });

    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form));

    try {
      // TODO: Replace with your real backend endpoint
      // const res = await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(data),
      // });
      // if (!res.ok) throw new Error("Network error");

      await new Promise((r) => setTimeout(r, 1200));
      console.log("Contact form submission:", data);

      setStatus({ message: "✓ Transmission received. I'll respond within 24h.", type: "success" });
      form.reset();
    } catch {
      setStatus({ message: "✗ Transmission failed. Please email me directly.", type: "error" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 border-t border-white/10">
      <div className="grid-bg" />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info + Social */}
          <div className="fade-up">
            <div className="section-label mb-3">// 04 · CONTACT</div>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tight">
              Let's build something<span className="text-[#76B900]"> remarkable</span>.
            </h2>
            <p className="mt-5 text-white/60 max-w-lg">
              Whether you have a project in mind, want to collaborate, or just
              want to say hi — my inbox is open. I typically respond within 24
              hours.
            </p>

            {/* Contact info */}
            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/10 hover:border-[#76B900]/50 hover:bg-[#76B900]/5 transition group"
              >
                <div className="w-11 h-11 rounded-lg bg-[#76B900]/10 flex items-center justify-center group-hover:bg-[#76B900]/20 transition">
                  <Mail className="w-5 h-5 text-[#76B900]" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-mono text-white/40">EMAIL</div>
                  <div className="text-sm">{CONTACT.email}</div>
                </div>
                <span className="text-white/30 group-hover:text-[#76B900] transition">
                  →
                </span>
              </a>

              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-4 p-4 rounded-xl border border-white/10 hover:border-[#76B900]/50 hover:bg-[#76B900]/5 transition group"
              >
                <div className="w-11 h-11 rounded-lg bg-[#76B900]/10 flex items-center justify-center group-hover:bg-[#76B900]/20 transition">
                  <Phone className="w-5 h-5 text-[#76B900]" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-mono text-white/40">PHONE</div>
                  <div className="text-sm">{CONTACT.phone}</div>
                </div>
                <span className="text-white/30 group-hover:text-[#76B900] transition">
                  →
                </span>
              </a>
            </div>

            {/* Social grid */}
            <div className="mt-10">
              <div className="text-xs font-mono text-white/40 mb-4">
                // CONNECT EVERYWHERE
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-btn rounded-xl p-4 bg-[rgba(24,24,27,0.6)] flex flex-col items-center gap-2 ${s.color}`}
                  >
                    <s.icon className="w-5 h-5" />
                    <span className="text-[10px] font-mono">{s.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="fade-up">
            <form
              id="contactForm"
              onSubmit={handleSubmit}
              className="rounded-2xl p-6 lg:p-8 border border-white/10 bg-[rgba(24,24,27,0.6)] backdrop-blur"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="font-mono text-xs text-[#76B900]">
                    // SEND TRANSMISSION
                  </div>
                  <div className="text-lg font-semibold mt-1">
                    Direct Contact Form
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#76B900]/30 bg-[#76B900]/5 font-mono text-[10px]">
                  <span className="pulse-dot"></span>
                  <span className="text-white/80">SECURE</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-white/50 mb-1.5 block">
                    NAME *
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    className="input w-full px-4 py-3 rounded-lg text-sm"
                    placeholder="Ada Lovelace"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-white/50 mb-1.5 block">
                    EMAIL *
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    className="input w-full px-4 py-3 rounded-lg text-sm"
                    placeholder="you@domain.com"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="text-xs font-mono text-white/50 mb-1.5 block">
                  SUBJECT
                </label>
                <select name="subject" className="input w-full px-4 py-3 rounded-lg text-sm">
                  <option>Project Inquiry</option>
                  <option>Freelance Service</option>
                  <option>Collaboration</option>
                  <option>Job Opportunity</option>
                  <option>Just saying hi 👋</option>
                </select>
              </div>

              <div className="mt-4">
                <label className="text-xs font-mono text-white/50 mb-1.5 block">
                  MESSAGE *
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="input w-full px-4 py-3 rounded-lg text-sm resize-none"
                  placeholder="Tell me about your project, timeline, and budget..."
                ></textarea>
              </div>

              <div className="mt-5 flex items-center justify-between gap-4">
                <label className="flex items-center gap-2 text-xs text-white/60 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    className="accent-[#76B900]"
                  />
                  <span>I agree to be contacted about this inquiry.</span>
                </label>
              </div>

              <button
                type="submit"
                className={`mt-5 btn-solid w-full py-3.5 rounded-lg inline-flex items-center justify-center gap-2 ${
                  submitting ? "opacity-80 cursor-not-allowed" : ""
                }`}
                disabled={submitting}
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting...</span>
                  </>
                ) : (
                  <>
                    <span>Transmit Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              {status && (
                <div
                  id="formStatus"
                  className={`mt-4 text-sm font-mono text-center ${
                    status.type === "success"
                      ? "text-[#76B900]"
                      : status.type === "error"
                      ? "text-[#f87171]"
                      : "text-[#a3e635]"
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
