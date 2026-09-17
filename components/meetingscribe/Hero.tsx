"use client";
import Link from "next/link";
import Reveal from "../Reveal";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/translations";
import WaveCanvas from "./WaveCanvas";

export default function MeetingScribeHero() {
  const { lang } = useLang();
  const tx = t[lang].meetingscribe.hero;

  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 pt-20"
      style={{ background: "transparent" }}
    >
      <WaveCanvas />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <Reveal>
          <div className="flex justify-center mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-[#64748b] hover:text-[#4361ee] transition-colors group"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {tx.back}
            </Link>
          </div>

          <div className="flex justify-center mb-8">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium"
              style={{
                background: "rgba(67,97,238,0.08)",
                border: "1px solid rgba(67,97,238,0.22)",
                color: "#4361ee",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#4361ee" }}
              />
              {tx.badge}
            </div>
          </div>

          <h1
            className="text-6xl md:text-8xl font-bold leading-tight mb-6 tracking-tight"
            style={{
              background: "linear-gradient(135deg, #1e293b 0%, #4361ee 60%, #00c8d8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Waive
          </h1>

          <p className="text-xl md:text-2xl text-[#334155] max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
            {tx.subtitle}
          </p>
          <p className="text-base text-[#64748b] max-w-xl mx-auto mb-10 leading-relaxed">
            {tx.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#precios"
              className="px-8 py-3.5 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #4361ee, #3a0ca3)",
                boxShadow: "0 4px 20px rgba(67,97,238,0.35)",
              }}
            >
              {tx.cta1}
            </a>
            <a
              href="#como-funciona"
              className="px-8 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200"
              style={{
                background: "rgba(67,97,238,0.07)",
                border: "1.5px solid rgba(67,97,238,0.25)",
                color: "#4361ee",
              }}
            >
              {tx.cta2}
            </a>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-16 flex flex-wrap justify-center gap-5">
            {tx.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl px-6 py-4 text-center min-w-[120px]"
                style={{
                  background: "rgba(255,255,255,0.55)",
                  border: "1px solid rgba(67,97,238,0.14)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                }}
              >
                <p className="text-xl font-bold" style={{ color: "#4361ee" }}>{s.value}</p>
                <p className="text-xs text-[#64748b] mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
