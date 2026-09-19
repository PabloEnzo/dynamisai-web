"use client";
import Reveal from "../Reveal";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/translations";

export default function KronCurrentState() {
  const { lang } = useLang();
  const tx = t[lang].kron.currentState;

  return (
    <section className="py-28 px-6 bg-white">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Reveal>
            <div className="card-white rounded-2xl p-7 h-full">
              <div className="flex items-center justify-between mb-5">
                <p className="font-bold text-[#0a1628]">{tx.phase0.label}</p>
                <span className="text-xs font-semibold text-[#059669] bg-[#ecfdf5] border border-[#a7f3d0] px-2.5 py-1 rounded-full">{tx.phase0.status}</span>
              </div>
              <ul className="flex flex-col gap-3">
                {tx.phase0.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#059669] text-sm shrink-0 mt-0.5 font-bold">✓</span>
                    <span className="text-[#4a6080] text-sm leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="card-white rounded-2xl p-7 h-full border-[#0055e0]/20">
              <div className="flex items-center justify-between mb-5">
                <p className="font-bold text-[#0a1628]">{tx.phase12.label}</p>
                <span className="text-xs font-semibold text-[#059669] bg-[#ecfdf5] border border-[#a7f3d0] px-2.5 py-1 rounded-full">{tx.phase12.status}</span>
              </div>
              <ul className="flex flex-col gap-3">
                {tx.phase12.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#059669] text-sm shrink-0 mt-0.5 font-bold">✓</span>
                    <span className="text-[#4a6080] text-sm leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="card-white rounded-2xl p-7 h-full">
              <div className="flex items-center justify-between mb-5">
                <p className="font-bold text-[#0a1628]">{tx.next.label}</p>
                <span className="text-xs font-semibold text-[#0055e0] bg-[#eef5ff] border border-[#0055e0]/30 px-2.5 py-1 rounded-full">{tx.next.status}</span>
              </div>
              <ul className="flex flex-col gap-3">
                {tx.next.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#f0a830] text-sm shrink-0 mt-0.5">○</span>
                    <span className="text-[#4a6080] text-sm leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
