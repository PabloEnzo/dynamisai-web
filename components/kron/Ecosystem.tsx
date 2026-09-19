"use client";
import { useState, type CSSProperties } from "react";
import Link from "next/link";
import Reveal from "../Reveal";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/translations";

const LINE = "#b8d0f0";

const productStyles = [
  { accent: "#0055e0", light: "#eef5ff", border: "#b8d0f0", dashed: false },
  { accent: "#ea580c", light: "#fff7ed", border: "#fed7aa", dashed: false },
  { accent: "#4a6080", light: "#f4f8ff", border: "#b8d0f0", dashed: true },
];

// Column centres of a 3-column grid with a 24px gap.
const COL_EDGE = "calc((100% - 48px) / 6)";

export default function KronEcosystem() {
  const { lang } = useLang();
  const tx = t[lang].kron.ecosystem;
  const [active, setActive] = useState<number | null>(null);

  const activeProduct = active === null ? null : tx.products[active];
  const activeCaps = activeProduct
    ? activeProduct.uses.length > 0
      ? activeProduct.uses
      : tx.core.capabilities
    : null;
  const lineColor = active === null ? LINE : productStyles[active].accent;

  const line = (delay: number, extra: CSSProperties = {}): CSSProperties =>
    ({ backgroundColor: lineColor, "--d": `${delay}ms`, ...extra }) as CSSProperties;

  return (
    <section id="ecosistema" className="py-28 px-6 bg-[#f4f8ff]">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <p className="text-[#0055e0] text-sm font-semibold uppercase tracking-widest mb-3">{tx.eyebrow}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-5 leading-tight">
              {tx.title[0]}
              <span className="gradient-text">{tx.title[1]}</span>
            </h2>
            <p className="text-[#4a6080] text-lg leading-relaxed">{tx.description}</p>
          </div>
        </Reveal>

        <Reveal direction="none">
          {/* KRON core */}
          <div className="eco-item max-w-xl mx-auto rounded-3xl bg-gradient-to-br from-[#0055e0] to-[#003db3] px-8 py-9 text-center shadow-xl shadow-[#0055e0]/20">
            <p className="text-white font-black text-3xl tracking-[0.2em]">KRON</p>
            <p className="text-white/70 text-sm mt-1.5 mb-6">{tx.core.label}</p>
            <ul className="flex flex-wrap justify-center gap-2">
              {tx.core.capabilities.map((cap) => {
                const on = activeCaps?.includes(cap);
                const dim = activeCaps !== null && !on;
                return (
                  <li
                    key={cap}
                    className="text-xs font-medium rounded-full px-3 py-1.5 border transition-all duration-300"
                    style={{
                      backgroundColor: on ? "#ffffff" : "transparent",
                      color: on ? "#0055e0" : "#ffffff",
                      borderColor: on ? "#ffffff" : "rgba(255,255,255,0.3)",
                      opacity: dim ? 0.35 : 1,
                    }}
                  >
                    {cap}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Connectors: drawn once when the diagram enters the viewport */}
          <div className="md:hidden mx-auto my-0 h-10 w-px eco-line-v" style={line(250)} />
          <div className="relative hidden md:block h-16" aria-hidden="true">
            <div className="absolute left-1/2 top-0 h-8 w-px eco-line-v" style={line(250)} />
            <div
              className="absolute top-8 h-px eco-line-h"
              style={line(500, { left: COL_EDGE, right: COL_EDGE })}
            />
            {[COL_EDGE, "50%", `calc(100% - ${COL_EDGE})`].map((left, i) => (
              <div
                key={i}
                className="absolute top-8 h-8 w-px eco-line-v"
                style={line(750, {
                  left,
                  backgroundColor: active === null || active === i ? lineColor : LINE,
                })}
              />
            ))}
          </div>

          {/* Products */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tx.products.map((p, i) => {
              const s = productStyles[i];
              return (
                <div
                  key={p.name}
                  className={`eco-item rounded-2xl p-7 flex flex-col h-full ${
                    s.dashed ? "border-2 border-dashed bg-white/60" : "border bg-white"
                  }`}
                  style={
                    {
                      "--d": `${950 + i * 60}ms`,
                      borderColor: active === i ? s.accent : s.border,
                      boxShadow: active === i ? `0 8px 30px ${s.accent}1f` : "0 2px 12px rgba(0,60,180,0.06)",
                    } as CSSProperties
                  }
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <h3 className="text-[#0a1628] font-bold text-xl">{p.name}</h3>
                    <span
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-full border whitespace-nowrap"
                      style={{ color: s.accent, backgroundColor: s.light, borderColor: s.border }}
                    >
                      {p.status}
                    </span>
                  </div>
                  <p className="text-[#4a6080] text-sm leading-relaxed mb-6">{p.desc}</p>

                  {p.uses.length > 0 && (
                    <div className="mb-6">
                      <p className="text-[11px] font-semibold text-[#9ab0cc] uppercase tracking-widest mb-2.5">
                        {tx.usesLabel}
                      </p>
                      <ul className="flex flex-wrap gap-1.5">
                        {p.uses.map((u) => (
                          <li
                            key={u}
                            className="text-xs font-medium rounded-full px-2.5 py-1"
                            style={{ color: s.accent, backgroundColor: s.light }}
                          >
                            {u}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <Link
                    href={p.href}
                    className="mt-auto text-sm font-semibold transition-opacity hover:opacity-70"
                    style={{ color: s.accent }}
                  >
                    {p.cta}
                  </Link>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
