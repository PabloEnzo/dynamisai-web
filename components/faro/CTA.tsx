"use client";
import Link from "next/link";
import Reveal from "../Reveal";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/translations";

export default function FaroCTA() {
  const { lang } = useLang();
  const tx = t[lang].faro.cta;

  return (
    <section id="contacto" className="py-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden border border-orange-200">
            <div className="absolute inset-0 bg-gradient-to-br from-[#fff7ed] via-white to-[#fffbeb]" />
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: "radial-gradient(circle, #fbb97050 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />

            <div className="relative z-10 p-10 md:p-16 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-5 leading-tight">
                {tx.title[0]}
                <span style={{ background: "linear-gradient(135deg, #ea580c, #f97316, #fb923c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  {tx.title[1]}
                </span>
              </h2>

              <p className="text-[#4a6080] text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                {tx.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  href="/#contacto"
                  className="px-8 py-3.5 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white font-semibold text-sm transition-all duration-200 hover:scale-105"
                >
                  {tx.cta1}
                </Link>
                <Link
                  href="/kron"
                  className="px-8 py-3.5 rounded-xl border border-[#0055e0]/30 hover:border-[#0055e0] text-[#0055e0] font-semibold text-sm transition-all duration-200 hover:bg-[#eef5ff]"
                >
                  {tx.cta2}
                </Link>
              </div>

              <p className="text-sm text-[#8a9ab5]">
                {tx.footer}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
