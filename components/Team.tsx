"use client";
import Reveal from "./Reveal";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/translations";

export default function Team() {
  const { lang } = useLang();
  const tx = t[lang].team;
  const member = tx.members[0];

  return (
    <section id="equipo" className="py-28 px-6 bg-[#f4f8ff]">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="card-white rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-[1.25fr_0.75fr] gap-10 md:gap-16 items-center">
              <div>
                <p className="text-[#0055e0] text-sm font-semibold uppercase tracking-widest mb-3">
                  {tx.eyebrow}
                </p>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-7 leading-tight">
                  {tx.title[0]}
                  <span className="gradient-text">{tx.title[1]}</span>
                </h2>
                <div className="flex flex-col gap-4 max-w-2xl">
                  {tx.story.paragraphs.map((p, i) => (
                    <p
                      key={p}
                      className={
                        i === 0
                          ? "text-[#0a1628] text-lg leading-relaxed font-medium"
                          : "text-[#4a6080] text-[15px] leading-relaxed"
                      }
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-[#f8fbff] border border-[#e0eaf8] p-7">
                <p className="text-[#0a1628] font-bold text-lg leading-tight">{member.name}</p>
                <p className="text-[#0055e0] text-sm font-semibold mt-1">{member.role}</p>
                <a
                  href="#contacto"
                  className="inline-block mt-5 pt-5 border-t border-[#e0eaf8] w-full text-sm font-semibold text-[#0055e0] hover:text-[#0044cc] transition-colors"
                >
                  {tx.cta}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
