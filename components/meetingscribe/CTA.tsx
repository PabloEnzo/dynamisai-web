"use client";
import Reveal from "../Reveal";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/translations";

export default function MeetingScribeCTA() {
  const { lang } = useLang();
  const tx = t[lang].meetingscribe.cta;

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="card-white rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-br from-[#eef5ff]/60 via-transparent to-[#e0f7fb]/40 pointer-events-none" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-4 leading-tight">
                {tx.title[0]}
                <span className="gradient-text">{tx.title[1]}</span>
              </h2>
              <p className="text-[#4a6080] text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                {tx.description}
              </p>

              <form
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder={tx.placeholder}
                  className="flex-1 px-4 py-3 rounded-xl bg-white border border-[#b8d0f0] text-[#0a1628] placeholder-[#9ab0cc] text-sm focus:outline-none focus:border-[#0055e0] transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#0055e0] hover:bg-[#0044cc] text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.02] whitespace-nowrap"
                >
                  {tx.button}
                </button>
              </form>

              <p className="text-xs text-[#9ab0cc] mt-4">{tx.note}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
