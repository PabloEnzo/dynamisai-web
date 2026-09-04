"use client";
import Reveal from "./Reveal";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/translations";

export default function Hero() {
  const { lang } = useLang();
  const tx = t[lang].hero;

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 bg-white"
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #c0d8f0 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.4,
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-[#eef5ff] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <Reveal>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight text-[#0a1628]">
            {tx.title[0]}
            <span className="gradient-text">{tx.title[1]}</span>
            {tx.title[2]}
          </h1>
          <p className="text-lg md:text-xl text-[#4a6080] max-w-2xl mx-auto mb-10 leading-relaxed">
            {tx.description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#proyectos"
              className="px-8 py-3.5 rounded-xl bg-[#0055e0] hover:bg-[#0044cc] text-white font-semibold text-sm transition-all duration-200 hover:scale-105 animate-pulse-glow"
            >
              {tx.viewProjects}
            </a>
            <a
              href="#nosotros"
              className="px-8 py-3.5 rounded-xl border border-[#0055e0]/30 hover:border-[#0055e0] text-[#0055e0] font-semibold text-sm transition-all duration-200 hover:bg-[#eef5ff]"
            >
              {tx.learnMore}
            </a>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-20 flex flex-wrap justify-center gap-3">
            {tx.tags.map((label) => (
              <div
                key={label}
                className="bg-white border border-[#0055e0]/30 shadow-sm rounded-xl px-5 py-2.5 text-sm text-[#0055e0] hover:border-[#00c8d8] hover:text-[#00a8d8] transition-all duration-200"
              >
                {label}
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-float opacity-40">
        <span className="text-xs text-[#4a6080]">{tx.scroll}</span>
        <svg className="w-4 h-4 text-[#4a6080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
