"use client";
import { useState } from "react";
import Reveal from "../Reveal";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/translations";

// Column centres of a 3-column grid with a 32px gap.
const COL_EDGE = "calc((100% - 64px) / 6)";

function Check({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function KronCurrentState() {
  const { lang } = useLang();
  const tx = t[lang].kron.currentState;
  const [open, setOpen] = useState(false);

  const phases = [tx.phase0, tx.phase12, tx.next];
  const total = phases.reduce((n, p) => n + p.items.length, 0);

  return (
    <section className="py-28 px-6 bg-white">
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

        <Reveal>
          <div className="relative">
            <div
              className="absolute top-4 hidden md:block h-px bg-[#a7f3d0]"
              style={{ left: COL_EDGE, right: COL_EDGE }}
              aria-hidden="true"
            />
            <ol className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
              {phases.map((p) => (
                <li key={p.label} className="flex gap-4 md:flex-col md:items-center md:text-center">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-[#059669] text-white flex items-center justify-center ring-4 ring-white">
                    <Check className="w-4 h-4" />
                    <span className="sr-only">{p.status}</span>
                  </span>
                  <div>
                    <p className="font-bold text-[#0a1628] mb-1.5 md:mt-3">{p.label}</p>
                    <p className="text-[#4a6080] text-sm leading-relaxed max-w-xs">{p.summary}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="kron-milestones"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0055e0] hover:text-[#0044cc] rounded-lg px-3 py-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#0055e0]"
          >
            {open ? tx.hideAll : tx.showAll.replace("{n}", String(total))}
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div
          id="kron-milestones"
          className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#e0eaf8] mt-6">
              {phases.map((p) => (
                <ul key={p.label} className="flex flex-col gap-2">
                  <li className="text-[11px] font-semibold text-[#9ab0cc] uppercase tracking-widest mb-1">{p.label}</li>
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-[#4a6080] leading-snug">
                      <Check className="w-3.5 h-3.5 shrink-0 mt-px text-[#059669]" />
                      {item}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
