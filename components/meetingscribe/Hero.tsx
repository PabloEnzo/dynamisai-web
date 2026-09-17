"use client";
import Link from "next/link";
import Reveal from "../Reveal";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/translations";

const RINGS = [
  { size: 260,  rx: "55% 45% 60% 40% / 45% 55% 45% 55%", delay: 0,    dur: 5   },
  { size: 420,  rx: "48% 52% 55% 45% / 50% 48% 52% 50%", delay: 0.5,  dur: 5.5 },
  { size: 590,  rx: "52% 48% 45% 55% / 48% 52% 48% 52%", delay: 1,    dur: 6   },
  { size: 760,  rx: "45% 55% 50% 50% / 52% 48% 52% 48%", delay: 1.5,  dur: 6.5 },
  { size: 940,  rx: "50% 50% 55% 45% / 46% 54% 46% 54%", delay: 2,    dur: 7   },
  { size: 1120, rx: "53% 47% 48% 52% / 50% 50% 50% 50%", delay: 2.5,  dur: 7.5 },
];

export default function MeetingScribeHero() {
  const { lang } = useLang();
  const tx = t[lang].meetingscribe.hero;

  return (
    <section
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 pt-20"
      style={{ background: "linear-gradient(160deg, #eef1fb 0%, #e8edf8 100%)" }}
    >
      {/* Wave rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {RINGS.map((r, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: r.size,
              height: r.size * 0.88,
              borderRadius: r.rx,
              border: `1.5px solid rgba(67, 97, 238, ${Math.max(0.04, 0.14 - i * 0.02)})`,
              animation: `wave-ring-pulse ${r.dur}s ease-in-out ${r.delay}s infinite`,
            }}
          />
        ))}
      </div>

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
