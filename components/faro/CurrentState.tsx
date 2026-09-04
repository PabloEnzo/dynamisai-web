"use client";
import Reveal from "../Reveal";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/translations";

export default function FaroCurrentState() {
  const { lang } = useLang();
  const tx = t[lang].faro.currentState;

  const totalItems = tx.done.length + tx.pending.length;
  const progress = Math.round((tx.done.length / totalItems) * 100);

  return (
    <section id="estado" className="py-28 px-6 bg-white">
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

        <Reveal delay={50}>
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-[#0a1628]">{tx.progress}</span>
              <span className="text-sm font-bold text-[#ea580c]">{progress}%</span>
            </div>
            <div className="h-2.5 bg-orange-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#ea580c] to-[#f97316] transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-xs text-[#8a9ab5] mt-1.5">
              {tx.done.length} {tx.of} {totalItems} {tx.itemsCompleted}
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          <Reveal delay={100}>
            <div className="bg-[#f8fbff] rounded-2xl border border-[#e0eaf8] p-6">
              <p className="text-sm font-semibold text-[#0a1628] mb-4 flex items-center gap-2">
                <span className="text-emerald-500 font-bold">{tx.completedLabel}</span>
                <span className="text-xs text-[#8a9ab5]">({tx.done.length} ítems)</span>
              </p>
              <ul className="flex flex-col gap-3">
                {tx.done.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#4a6080]">
                    <span className="text-emerald-500 mt-0.5 shrink-0 font-bold text-base leading-none">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="bg-orange-50 rounded-2xl border border-orange-200 p-6">
              <p className="text-sm font-semibold text-[#0a1628] mb-4 flex items-center gap-2">
                <span className="text-orange-600 font-bold">{tx.pendingLabel}</span>
                <span className="text-xs text-[#8a9ab5]">({tx.pending.length} ítems)</span>
              </p>
              <ul className="flex flex-col gap-3">
                {tx.pending.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#4a6080]">
                    <span className="text-orange-400 mt-0.5 shrink-0">○</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-8 bg-gradient-to-r from-[#fff7ed] to-[#fffbeb] rounded-2xl border border-orange-200 p-6 flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="flex-1">
              <p className="font-bold text-[#0a1628] mb-1">{tx.cta.title}</p>
              <p className="text-sm text-[#4a6080]">{tx.cta.desc}</p>
            </div>
            <a
              href="#contacto"
              className="shrink-0 px-6 py-2.5 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white font-semibold text-sm transition-all duration-200"
            >
              {tx.cta.button}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
