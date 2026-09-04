"use client";
import Reveal from "../Reveal";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/translations";

export default function MeetingScribeFeatures() {
  const { lang } = useLang();
  const tx = t[lang].meetingscribe.features;

  return (
    <section id="funcionalidades" className="py-28 px-6 bg-[#f4f8ff]">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tx.items.map((f, i) => (
            <Reveal key={f.title} delay={i * 70}>
              <div className="card-white rounded-2xl p-7 group h-full">
                <h3 className="text-[#0a1628] font-semibold text-base mb-2 group-hover:text-[#0055e0] transition-colors">
                  {f.title}
                </h3>
                <p className="text-[#4a6080] text-sm leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
