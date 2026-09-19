"use client";
import Image from "next/image";
import Link from "next/link";
import Reveal from "../Reveal";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/translations";

export default function KronEcosystem() {
  const { lang } = useLang();
  const tx = t[lang].kron.ecosystem;

  return (
    <section id="ecosistema" className="py-28 px-6 bg-[#f4f8ff]">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="max-w-2xl mb-14">
            <p className="text-[#0055e0] text-sm font-semibold uppercase tracking-widest mb-3">{tx.eyebrow}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-5 leading-tight">
              {tx.title[0]}
              <span className="gradient-text">{tx.title[1]}</span>
            </h2>
            <p className="text-[#4a6080] text-lg leading-relaxed">{tx.description}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <dl className="lg:col-span-3 flex flex-col">
            {tx.points.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className={`py-6 ${i > 0 ? "border-t border-[#dbe7f6]" : "pt-0"}`}>
                  <dt className="text-[#0a1628] font-semibold text-base mb-2">{p.title}</dt>
                  <dd className="text-[#4a6080] text-[15px] leading-relaxed">{p.desc}</dd>
                </div>
              </Reveal>
            ))}
          </dl>

          <Reveal delay={120} className="lg:col-span-2">
            <div className="card-white rounded-2xl p-2">
              <p className="px-4 pt-4 pb-2 text-[11px] font-semibold text-[#9ab0cc] uppercase tracking-widest">
                {tx.productsLabel}
              </p>
              <ul className="flex flex-col">
                {tx.products.map((p) => (
                  <li key={p.name}>
                    <Link
                      href={p.href}
                      className="group flex items-start gap-4 rounded-xl px-4 py-4 hover:bg-[#f4f8ff] transition-colors"
                    >
                      {p.logo ? (
                        <Image
                          src={p.logo}
                          alt=""
                          width={40}
                          height={40}
                          className="w-10 h-10 shrink-0 rounded-xl object-contain"
                        />
                      ) : (
                        <span className="w-10 h-10 shrink-0 rounded-xl border-2 border-dashed border-[#b8d0f0] flex items-center justify-center text-[#9ab0cc] text-xl leading-none">
                          +
                        </span>
                      )}
                      <span className="flex-1 min-w-0">
                        <span className="flex items-center justify-between gap-2">
                          <span className="font-bold text-[#0a1628]">{p.name}</span>
                          <span
                            aria-hidden="true"
                            className="text-[#9ab0cc] group-hover:text-[#0055e0] group-hover:translate-x-0.5 transition"
                          >
                            →
                          </span>
                        </span>
                        <span className="block text-sm text-[#4a6080] leading-snug mt-0.5">{p.role}</span>
                        <span className="block text-xs text-[#9ab0cc] mt-1.5 tabular-nums">{p.spec}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
