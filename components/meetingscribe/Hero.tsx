import Link from "next/link";
import Reveal from "../Reveal";

export default function MeetingScribeHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 bg-white pt-20">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #c0d8f0 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.4,
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-[#eef5ff] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <Reveal>
          <div className="flex justify-center mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-[#4a6080] hover:text-[#0055e0] transition-colors group"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver a DynamisAI
            </Link>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-300/60 bg-amber-50 text-amber-700 text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              En desarrollo activo
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight text-[#0a1628]">
            Meeting<span className="gradient-text">Scribe</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#4a6080] max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
            Transcribe, resume y extrae los puntos clave de tus reuniones — automáticamente.
          </p>
          <p className="text-base text-[#4a6080] max-w-xl mx-auto mb-10 leading-relaxed">
            Impulsado por modelos de IA propios. Todo corre en tu máquina. Tus datos nunca salen de tu equipo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#precios"
              className="px-8 py-3.5 rounded-xl bg-[#0055e0] hover:bg-[#0044cc] text-white font-semibold text-sm transition-all duration-200 hover:scale-105 animate-pulse-glow"
            >
              Ver planes y precios
            </a>
            <a
              href="#como-funciona"
              className="px-8 py-3.5 rounded-xl border border-[#0055e0]/30 hover:border-[#0055e0] text-[#0055e0] font-semibold text-sm transition-all duration-200 hover:bg-[#eef5ff]"
            >
              Cómo funciona →
            </a>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-16 flex flex-wrap justify-center gap-6">
            {[
              { value: "100%", label: "Privado — sin nube" },
              { value: "< 30s", label: "Resumen generado" },
              { value: "IA propia", label: "Sin APIs externas" },
              { value: "Multi-idioma", label: "ES, EN y más" },
            ].map((s) => (
              <div key={s.label} className="bg-white border border-[#b8d0f0] rounded-2xl px-6 py-4 text-center shadow-sm min-w-[120px]">
                <p className="text-xl font-bold text-[#0055e0]">{s.value}</p>
                <p className="text-xs text-[#4a6080] mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
