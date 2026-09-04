"use client";
import Reveal from "../Reveal";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/translations";

const modelStyles = [
  { color: "#0055e0", lightColor: "#eef5ff", borderColor: "#b8d0f0", initials: "ASR" },
  { color: "#7c3aed", lightColor: "#f5f3ff", borderColor: "#ddd6fe", initials: "NLP" },
  { color: "#059669", lightColor: "#ecfdf5", borderColor: "#a7f3d0", initials: "EXT" },
];

export default function KronArchitecture() {
  const { lang } = useLang();
  const tx = t[lang].kron.architecture;

  return (
    <section id="arquitectura" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <p className="text-[#0055e0] text-sm font-semibold uppercase tracking-widest mb-3">{tx.eyebrow}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-5 leading-tight">
              {tx.title[0]}
              <span className="gradient-text">{tx.title[1]}</span>
            </h2>
            <p className="text-[#4a6080] text-lg leading-relaxed">
              {tx.description}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {tx.models.map((m, i) => {
            const style = modelStyles[i];
            return (
              <Reveal key={m.name} delay={i * 100}>
                <div
                  className="rounded-2xl border p-6 hover:shadow-lg transition-shadow duration-300 h-full"
                  style={{ borderColor: style.borderColor, backgroundColor: style.lightColor }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xs font-bold mb-4 shadow-sm tracking-wider"
                    style={{ backgroundColor: style.color, color: "white" }}
                  >
                    {style.initials}
                  </div>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-[#0a1628] font-bold text-lg">{m.name}</h3>
                    <span
                      className="text-[11px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap mt-1"
                      style={{ color: style.color, backgroundColor: "white", border: `1px solid ${style.borderColor}` }}
                    >
                      {m.params}
                    </span>
                  </div>
                  <p className="text-sm font-medium mb-3" style={{ color: style.color }}>{m.role}</p>
                  <p className="text-[#4a6080] text-sm leading-relaxed mb-4">{m.desc}</p>
                  <ul className="flex flex-col gap-1.5">
                    {m.details.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-xs text-[#4a6080]">
                        <span className="shrink-0 font-bold" style={{ color: style.color }}>›</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="max-w-2xl mx-auto">
            <p className="text-center text-xs font-semibold text-[#4a6080] uppercase tracking-widest mb-6">{tx.stackLabel}</p>
            <div className="flex flex-col gap-2">
              {tx.layers.map((l, i) => (
                <div
                  key={i}
                  className="rounded-xl px-5 py-3 text-sm font-medium text-center transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    backgroundColor: l.color + "12",
                    border: `1px solid ${l.color}30`,
                    color: l.color,
                  }}
                >
                  {l.label}
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <span className="inline-flex items-center gap-2 text-xs text-[#4a6080] bg-[#f4f8ff] border border-[#e0eaf8] rounded-full px-4 py-2">
                {tx.techNote}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
