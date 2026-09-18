"use client";
import { useState } from "react";
import Reveal from "../Reveal";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/translations";

type Status = "idle" | "loading" | "success" | "error";

export default function MeetingScribeCTA() {
  const { lang } = useLang();
  const tx = t[lang].meetingscribe.cta;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, product: "Waive" }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

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

              {status === "success" ? (
                <p className="text-[#059669] font-semibold text-base">{tx.success}</p>
              ) : (
                <form
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                  onSubmit={handleSubmit}
                >
                  <input
                    type="email"
                    placeholder={tx.placeholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 rounded-xl bg-white border border-[#b8d0f0] text-[#0a1628] placeholder-[#9ab0cc] text-sm focus:outline-none focus:border-[#0055e0] transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="px-6 py-3 rounded-xl bg-[#0055e0] hover:bg-[#0044cc] text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.02] whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {status === "loading" ? tx.sending : tx.button}
                  </button>
                </form>
              )}

              {status === "error" && (
                <p className="text-sm text-red-500 mt-3">{tx.error}</p>
              )}

              <p className="text-xs text-[#9ab0cc] mt-4">{tx.note}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
