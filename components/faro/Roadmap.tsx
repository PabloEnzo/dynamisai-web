"use client";
import Reveal from "../Reveal";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/translations";

const phaseStyles = [
  { color: "border-emerald-400 bg-emerald-50", numColor: "bg-emerald-500 text-white", done: true },
  { color: "border-orange-400 bg-orange-50", numColor: "bg-orange-500 text-white", done: false },
  { color: "border-[#b8d0f0] bg-[#f4f8ff]", numColor: "bg-[#0055e0] text-white", done: false },
  { color: "border-[#b8d0f0] bg-[#f4f8ff]", numColor: "bg-[#0055e0] text-white", done: false },
  { color: "border-[#b8d0f0] bg-[#f4f8ff]", numColor: "bg-[#0055e0] text-white", done: false },
  { color: "border-[#b8d0f0] bg-[#f4f8ff]", numColor: "bg-[#4a6080] text-white", done: false },
];

export default function FaroRoadmap() {
  const { lang } = useLang();
  const tx = t[lang].faro.roadmap;

  return (
    <section className="py-28 px-6 bg-[#f8fbff]">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <p className="text-[#ea580c] text-sm font-semibold uppercase tracking-widest mb-3">
              {tx.eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-5 leading-tight">
              {tx.title[0]}
              <span style={{ background: "linear-gradient(135deg, #ea580c, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {tx.title[1]}
              </span>
            </h2>
            <p className="text-[#4a6080] text-lg leading-relaxed">
              {tx.description}
            </p>
          </div>
        </Reveal>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-orange-100 z-0 hidden md:block" />

          <div className="flex flex-col gap-8">
            {tx.phases.map((phase, i) => {
              const style = phaseStyles[i];
              return (
                <Reveal key={phase.num} delay={i * 100}>
                  <div className="relative flex gap-6 items-start">
                    <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${style.numColor} shadow-sm`}>
                      {style.done ? "✓" : phase.num}
                    </div>
                    <div className={`flex-1 rounded-2xl border p-5 ${style.color}`}>
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <p className="text-xs text-[#8a9ab5] font-medium">{phase.label}</p>
                        {style.done && (
                          <span className="text-xs font-semibold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200">
                            {tx.completedLabel}
                          </span>
                        )}
                      </div>
                      <h3 className="font-bold text-[#0a1628] mb-2">{phase.title}</h3>
                      <p className="text-sm text-[#4a6080] leading-relaxed">{phase.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
