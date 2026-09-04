"use client";
import Link from "next/link";
import Reveal from "../Reveal";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/translations";

export default function KronCTA() {
  const { lang } = useLang();
  const tx = t[lang].kron.cta;

  return (
    <section className="py-28 px-6 bg-[#f4f8ff]">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <div className="rounded-3xl bg-gradient-to-br from-[#0055e0] to-[#0044cc] p-12 md:p-16 relative overflow-hidden shadow-2xl shadow-[#0055e0]/25">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
                {tx.title}
              </h2>
              <p className="text-white/75 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                {tx.description}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/meetingscribe"
                  className="px-8 py-3.5 rounded-xl bg-white text-[#0055e0] font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                  {tx.cta1}
                </Link>
                <a
                  href="/#contacto"
                  className="px-8 py-3.5 rounded-xl border border-white/30 hover:border-white/60 text-white font-semibold text-sm transition-all duration-200 hover:bg-white/10"
                >
                  {tx.cta2}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
