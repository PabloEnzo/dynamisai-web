"use client";
import Reveal from "./Reveal";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/translations";

export default function Team() {
  const { lang } = useLang();
  const tx = t[lang].team;

  return (
    <section id="equipo" className="py-28 px-6 bg-[#f4f8ff]">
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
            <p className="text-[#4a6080] text-lg leading-relaxed">{tx.description}</p>
          </div>
        </Reveal>

        <div className="flex flex-col gap-6 max-w-3xl">
          {tx.members.map((member, i) => (
            <Reveal key={member.name} delay={i * 60}>
              <div className="card-white rounded-2xl p-7 md:p-8 flex flex-col sm:flex-row gap-6">
                <div className="w-20 h-20 shrink-0 rounded-2xl border-2 flex items-center justify-center text-2xl font-bold bg-[#eef5ff] text-[#0055e0] border-[#b8d0f0]">
                  {member.initials}
                </div>
                <div>
                  <p className="text-[#0a1628] font-bold text-xl leading-tight">{member.name}</p>
                  <p className="text-[#0055e0] text-sm font-medium mt-1">{member.role}</p>
                  <p className="text-[#4a6080] text-[15px] leading-relaxed mt-3">{member.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
