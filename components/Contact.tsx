"use client";
import { useState } from "react";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/translations";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const { lang } = useLang();
  const tx = t[lang].contact;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="py-28 px-6 bg-[#f4f8ff]">
      <div className="max-w-6xl mx-auto">
        <div className="card-white rounded-3xl p-10 md:p-16 relative overflow-hidden">
          {/* Decorative top line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-[#0055e0]/40 to-transparent" />

          <div className="relative flex flex-col md:flex-row gap-12 items-start">
            {/* Left */}
            <div className="flex-1">
              <p className="text-[#0055e0] text-sm font-semibold uppercase tracking-widest mb-3">
                {tx.eyebrow}
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-5 leading-tight">
                {tx.title[0]}
                <span className="gradient-text">{tx.title[1]}</span>
              </h2>
              <p className="text-[#4a6080] text-lg leading-relaxed mb-8">
                {tx.description}
              </p>

              <a
                href="mailto:consulting@dynamisai.es"
                className="inline-flex items-center gap-3 text-[#4a6080] hover:text-[#0055e0] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#eef5ff] border border-[#0055e0]/15 flex items-center justify-center text-lg group-hover:border-[#0055e0]/40 transition-colors">
                  ✉️
                </div>
                <span className="text-sm">consulting@dynamisai.es</span>
              </a>
            </div>

            {/* Right: form */}
            <div className="flex-1 w-full">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#ecfdf5] border border-[#a7f3d0] flex items-center justify-center text-3xl">
                    ✓
                  </div>
                  <p className="text-[#0a1628] font-bold text-xl">{tx.success.title}</p>
                  <p className="text-[#4a6080] text-sm max-w-xs">
                    {tx.success.desc}{" "}
                    <strong>{email || tx.success.yourEmail}</strong>.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-sm text-[#0055e0] hover:underline"
                  >
                    {tx.success.another}
                  </button>
                </div>
              ) : (
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="text"
                      placeholder={tx.form.name}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="flex-1 px-4 py-3 rounded-xl bg-white border border-[#e0eaf8] text-[#0a1628] placeholder-[#9ab0cc] text-sm focus:outline-none focus:border-[#0055e0]/60 transition-colors"
                    />
                    <input
                      type="email"
                      placeholder={tx.form.email}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="flex-1 px-4 py-3 rounded-xl bg-white border border-[#e0eaf8] text-[#0a1628] placeholder-[#9ab0cc] text-sm focus:outline-none focus:border-[#0055e0]/60 transition-colors"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder={tx.form.subject}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="px-4 py-3 rounded-xl bg-white border border-[#e0eaf8] text-[#0a1628] placeholder-[#9ab0cc] text-sm focus:outline-none focus:border-[#0055e0]/60 transition-colors"
                  />
                  <textarea
                    rows={4}
                    placeholder={tx.form.message}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="px-4 py-3 rounded-xl bg-white border border-[#e0eaf8] text-[#0a1628] placeholder-[#9ab0cc] text-sm focus:outline-none focus:border-[#0055e0]/60 transition-colors resize-none"
                  />

                  {status === "error" && (
                    <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-xl px-4 py-2.5">
                      {tx.error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="px-6 py-3.5 rounded-xl bg-[#0055e0] hover:bg-[#0044cc] text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {status === "loading" ? tx.form.sending : tx.form.send}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
