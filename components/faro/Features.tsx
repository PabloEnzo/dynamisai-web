"use client";
import Reveal from "../Reveal";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/translations";

const featureStyles = [
  { bg: "bg-orange-50", border: "border-orange-200", textColor: "text-orange-600" },
  { bg: "bg-red-50", border: "border-red-200", textColor: "text-red-600" },
  { bg: "bg-amber-50", border: "border-amber-200", textColor: "text-amber-700" },
  { bg: "bg-orange-50", border: "border-orange-200", textColor: "text-orange-600" },
  { bg: "bg-red-50", border: "border-red-200", textColor: "text-red-600" },
  { bg: "bg-amber-50", border: "border-amber-200", textColor: "text-amber-700" },
];

export default function FaroFeatures() {
  const { lang } = useLang();
  const tx = t[lang].faro.features;

  return (
    <section className="py-28 px-6 bg-[#f8fbff]">
      <div className="max-w-6xl mx-auto">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tx.items.map((f, i) => {
            const style = featureStyles[i];
            return (
              <Reveal key={f.title} delay={i * 80}>
                <div className="bg-white rounded-2xl border border-[#e0eaf8] p-6 h-full flex flex-col hover:border-orange-200 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center text-xs font-bold shrink-0 ${style.bg} ${style.border} ${style.textColor}`}>
                      {f.initials}
                    </div>
                    <h3 className="font-bold text-[#0a1628] text-sm leading-snug">{f.title}</h3>
                  </div>
                  <p className="text-sm text-[#4a6080] leading-relaxed flex-1">{f.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={100}>
          <div className="mt-8 bg-white rounded-2xl border border-[#e0eaf8] p-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1">
                <p className="font-bold text-[#0a1628] mb-1">{tx.cost.title}</p>
                <p className="text-sm text-[#4a6080]">{tx.cost.desc}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                {tx.stats.map((s) => (
                  <div key={s.l} className="bg-orange-50 rounded-xl px-5 py-3 text-center border border-orange-100 min-w-[90px]">
                    <p className="font-bold text-[#ea580c] text-base">{s.v}</p>
                    <p className="text-xs text-[#4a6080] mt-0.5">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
