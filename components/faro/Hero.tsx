import Link from "next/link";
import Reveal from "../Reveal";

export default function FaroHero() {
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
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-[#fff7ed] to-transparent pointer-events-none" />

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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-300/60 bg-orange-50 text-orange-700 text-sm font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
              Prototipo activo · Solicitud NGI Zero en curso
            </div>
          </div>

          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-3xl bg-orange-50 border border-orange-200 flex items-center justify-center text-4xl shadow-sm">
              🔦
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight text-[#0a1628]">
            <span style={{ background: "linear-gradient(135deg, #ea580c, #f97316, #fb923c)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>FARO</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#4a6080] max-w-2xl mx-auto mb-4 leading-relaxed font-medium">
            Comunicaciones de emergencia que funcionan cuando todo lo demás falla.
          </p>
          <p className="text-base text-[#4a6080] max-w-xl mx-auto mb-10 leading-relaxed">
            Malla LoRa de bajo coste + IA local de triaje. Sin internet, sin cobertura móvil, sin servidores externos.
            Para protección civil, municipios y ciudadanos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#como-funciona"
              className="px-8 py-3.5 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white font-semibold text-sm transition-all duration-200 hover:scale-105"
            >
              Ver cómo funciona
            </a>
            <a
              href="#estado"
              className="px-8 py-3.5 rounded-xl border border-[#ea580c]/30 hover:border-[#ea580c] text-[#ea580c] font-semibold text-sm transition-all duration-200 hover:bg-orange-50"
            >
              Estado del proyecto →
            </a>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-16 flex flex-wrap justify-center gap-6">
            {[
              { value: "23,6 s", label: "Latencia media SOS" },
              { value: "0", label: "SOS no entregados" },
              { value: "84 %", label: "Precisión triaje urgencia" },
              { value: "100 %", label: "Offline — sin internet" },
            ].map((s) => (
              <div key={s.label} className="bg-white border border-orange-200 rounded-2xl px-6 py-4 text-center shadow-sm min-w-[130px]">
                <p className="text-xl font-bold text-[#ea580c]">{s.value}</p>
                <p className="text-xs text-[#4a6080] mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
