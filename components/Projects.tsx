"use client";
import Link from "next/link";
import Reveal from "./Reveal";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/translations";

const projectStyles = [
  {
    key: "meetingscribe" as const,
    badgeClass: "bg-amber-50 border-amber-200 text-amber-700",
    dotClass: "bg-amber-400",
    tags: ["IA local", "Desktop App", "Transcripción", "B2B"],
    icon: "🎙️",
    iconBg: "bg-[#eef5ff] border-[#b8d0f0]",
    accentBar: "from-[#0055e0] to-[#00c8d8]",
    ctaClass: "bg-[#0055e0] hover:bg-[#0044cc]",
    checkClass: "text-[#0055e0]",
    href: "/meetingscribe",
  },
  {
    key: "faro" as const,
    badgeClass: "bg-orange-50 border-orange-200 text-orange-700",
    dotClass: "bg-orange-400",
    tags: ["Open Source", "LoRa mesh", "IA local", "Emergencias", "NGI Zero"],
    icon: "🔦",
    iconBg: "bg-orange-50 border-orange-200",
    accentBar: "from-[#ea580c] to-[#f97316]",
    ctaClass: "bg-[#ea580c] hover:bg-[#c2410c]",
    checkClass: "text-[#ea580c]",
    href: "/faro",
  },
];

export default function Projects() {
  const { lang } = useLang();
  const tx = t[lang].projects;

  return (
    <section id="proyectos" className="py-28 px-6 bg-white">
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

        <div className="flex flex-col gap-8">
          {projectStyles.map((style) => {
            const project = tx[style.key];
            return (
              <Reveal key={style.key}>
                <div className="card-white rounded-3xl overflow-hidden hover:scale-[1.005] transition-transform duration-300">
                  <div className={`h-1 w-full bg-gradient-to-r ${style.accentBar}`} />
                  <div className="p-8 md:p-10">
                    <div className="flex flex-col md:flex-row md:items-start gap-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center text-2xl shrink-0 ${style.iconBg}`}>
                            {style.icon}
                          </div>
                          <div>
                            <div className="flex items-center gap-3 flex-wrap">
                              <h3 className="text-2xl font-bold text-[#0a1628]">
                                {style.key === "meetingscribe" ? "MeetingScribe" : "FARO"}
                              </h3>
                              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${style.badgeClass}`}>
                                <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${style.dotClass}`} />
                                {project.status}
                              </span>
                            </div>
                            <p className="text-[#4a6080] text-sm mt-0.5">{project.tagline}</p>
                          </div>
                        </div>

                        <p className="text-[#4a6080] leading-relaxed mb-6 text-sm md:text-base">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {style.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full text-xs font-medium bg-[#eef5ff] border border-[#0055e0]/15 text-[#0055e0]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <Link
                          href={style.href}
                          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-semibold transition-all duration-200 hover:scale-[1.02] ${style.ctaClass}`}
                        >
                          {project.cta}
                        </Link>
                      </div>

                      <div className="md:w-68 shrink-0">
                        <div className="bg-[#f4f8ff] rounded-2xl p-5 border border-[#e0eaf8]">
                          <p className="text-xs font-semibold text-[#4a6080] uppercase tracking-wider mb-4">
                            {tx.characteristics}
                          </p>
                          <ul className="flex flex-col gap-3">
                            {project.features.map((f) => (
                              <li key={f} className="flex items-start gap-2.5 text-sm text-[#4a6080]">
                                <span className={`mt-0.5 shrink-0 font-bold ${style.checkClass}`}>✓</span>
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={100}>
          <div className="mt-6 rounded-2xl border border-dashed border-[#b0ccf0] p-6 flex items-center gap-4 bg-[#f8fbff]">
            <div className="w-10 h-10 rounded-xl bg-[#eef5ff] border border-[#b8d0f0] flex items-center justify-center text-xl shrink-0">⏳</div>
            <div>
              <p className="text-[#0a1628] font-semibold text-sm">{tx.moreProjects.title}</p>
              <p className="text-[#4a6080] text-sm">{tx.moreProjects.desc}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
