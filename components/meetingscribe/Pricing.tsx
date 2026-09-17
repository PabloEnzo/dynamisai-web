"use client";
import Link from "next/link";
import Reveal from "../Reveal";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/translations";

export default function MeetingScribePricing() {
  const { lang } = useLang();
  const tx = t[lang].meetingscribe.pricing;

  return (
    <section id="precios" className="py-28 px-6 bg-[#f4f8ff]">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="max-w-2xl mb-10">
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

        <Reveal delay={80}>
          <div className="card-white rounded-3xl p-10 md:p-14">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-1">
                <ul className="flex flex-col gap-4 mb-10">
                  {tx.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="text-[#0055e0] font-bold shrink-0 mt-0.5">✓</span>
                      <span className="text-[#4a6080] text-sm leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/#contacto"
                    className="px-7 py-3.5 rounded-xl bg-[#0055e0] hover:bg-[#0044cc] text-white font-semibold text-sm transition-all duration-200 hover:scale-105 text-center"
                  >
                    {tx.cta}
                  </Link>
                </div>

                <p className="text-[#9ab0cc] text-sm mt-5">
                  {tx.emailLabel}{" "}
                  <a href={`mailto:${tx.emailHint}`} className="text-[#0055e0] hover:underline">
                    {tx.emailHint}
                  </a>
                </p>
              </div>

              <div className="md:w-64 shrink-0 flex flex-col items-center justify-center text-center bg-[#f4f8ff] rounded-2xl border border-[#e0eaf8] p-8">
                <div className="text-4xl mb-3">🚀</div>
                <p className="text-[#0a1628] font-bold text-lg mb-2">{tx.notice}</p>
                <div className="w-1.5 h-1.5 rounded-full bg-[#f0a830] animate-pulse mx-auto" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
