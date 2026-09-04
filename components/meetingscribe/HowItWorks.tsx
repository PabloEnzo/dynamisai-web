"use client";
import Reveal from "../Reveal";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/translations";

export default function MeetingScribeHowItWorks() {
  const { lang } = useLang();
  const tx = t[lang].meetingscribe.howItWorks;

  return (
    <section id="como-funciona" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <p className="text-[#0055e0] text-sm font-semibold uppercase tracking-widest mb-3">
              {tx.eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-5 leading-tight">
              {tx.title[0]}
              <span className="gradient-text">{tx.title[1]}</span>
            </h2>
            <p className="text-[#4a6080] text-lg leading-relaxed">
              {tx.description}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tx.steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 80}>
              <div className="card-white rounded-2xl p-8 flex gap-5 group h-full">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0055e0] to-[#00c8d8] flex items-center justify-center text-white font-bold text-sm">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-[#0a1628] font-semibold text-lg mb-2 group-hover:text-[#0055e0] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-[#4a6080] text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
