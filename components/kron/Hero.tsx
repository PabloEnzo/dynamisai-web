import Link from "next/link";
import Reveal from "../Reveal";

export default function KronHero() {
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0055e0]/30 bg-[#eef5ff] text-[#0055e0] text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0055e0] animate-pulse" />
              Investigación & Desarrollo
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight text-[#0a1628]">
            <span className="gradient-text">KRON</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#4a6080] max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
            La inteligencia artificial que construimos desde cero.
          </p>
          <p className="text-base text-[#4a6080] max-w-xl mx-auto mb-10 leading-relaxed">
            Ningún API externo. Ningún proveedor de terceros. Cada modelo entrenado con nuestros datos,
            en nuestro hardware, bajo nuestro control total.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#arquitectura"
              className="px-8 py-3.5 rounded-xl bg-[#0055e0] hover:bg-[#0044cc] text-white font-semibold text-sm transition-all duration-200 hover:scale-105 animate-pulse-glow"
            >
              Ver arquitectura técnica
            </a>
            <a
              href="#roadmap"
              className="px-8 py-3.5 rounded-xl border border-[#0055e0]/30 hover:border-[#0055e0] text-[#0055e0] font-semibold text-sm transition-all duration-200 hover:bg-[#eef5ff]"
            >
              Roadmap →
            </a>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-16 flex flex-wrap justify-center gap-6">
            {[
              { value: "~53M", label: "Parámetros totales" },
              { value: "3", label: "Modelos propios" },
              { value: "0", label: "APIs externas" },
              { value: "100%", label: "PyTorch propio" },
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
