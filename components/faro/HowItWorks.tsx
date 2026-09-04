"use client";
import Reveal from "../Reveal";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/translations";

const stepAccents = [
  "bg-orange-100 text-orange-700 border-orange-200",
  "bg-amber-100 text-amber-700 border-amber-200",
  "bg-red-100 text-red-700 border-red-200",
  "bg-orange-100 text-orange-700 border-orange-200",
];

export default function FaroHowItWorks() {
  const { lang } = useLang();
  const tx = t[lang].faro.howItWorks;

  return (
    <section id="como-funciona" className="py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <p className="text-[#ea580c] text-sm font-semibold uppercase tracking-widest mb-3">
              {tx.eyebrow}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-5 leading-tight">
              {tx.title[0]}
              <span style={{ background: "linear-gradient(135deg, #ea580c, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                {tx.title[1]}
              </span>
            </h2>
            <p className="text-[#4a6080] text-lg leading-relaxed">
              {tx.description}
            </p>
          </div>
        </Reveal>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-orange-100 hidden md:block" />

          <div className="flex flex-col gap-10">
            {tx.steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 120}>
                <div className="relative flex gap-8 items-start">
                  <div className={`relative z-10 w-16 h-16 rounded-2xl border-2 flex items-center justify-center text-xl font-bold shrink-0 ${stepAccents[i]}`}>
                    {step.num}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-[#0a1628] mb-2">{step.title}</h3>
                    <p className="text-[#4a6080] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200}>
          <div className="mt-16 bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl border border-orange-200 p-8">
            <p className="text-sm font-semibold text-[#ea580c] uppercase tracking-wider mb-4">{tx.corroboration.eyebrow}</p>
            <p className="text-[#0a1628] font-medium mb-2">
              {tx.corroboration.title}
            </p>
            <p
              className="text-[#4a6080] text-sm leading-relaxed max-w-2xl"
              dangerouslySetInnerHTML={{ __html: tx.corroboration.desc }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
