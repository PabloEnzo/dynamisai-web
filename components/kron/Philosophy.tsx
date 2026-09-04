"use client";
import Reveal from "../Reveal";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/translations";

export default function KronPhilosophy() {
  const { lang } = useLang();
  const tx = t[lang].kron.philosophy;

  return (
    <section className="py-28 px-6 bg-[#f4f8ff]">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {tx.reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <div className="card-white rounded-2xl p-7 group h-full">
                <h3 className="text-[#0a1628] font-semibold text-base mb-2 group-hover:text-[#0055e0] transition-colors">
                  {r.title}
                </h3>
                <p className="text-[#4a6080] text-sm leading-relaxed">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-10 rounded-3xl border border-[#0055e0]/15 bg-gradient-to-br from-[#eef5ff] to-white p-8 md:p-10">
            <p className="text-[#0a1628] text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
              {tx.quote}
            </p>
            <p className="text-[#0055e0] text-sm font-semibold mt-4">{tx.quoteAuthor}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
