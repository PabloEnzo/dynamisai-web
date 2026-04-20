export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 bg-white"
    >
      {/* Very subtle dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, #c0d8f0 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          opacity: 0.4,
        }}
      />

      {/* Soft colour wash */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-[#eef5ff] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight text-[#0a1628]">
          Software que{" "}
          <span className="gradient-text">piensa</span>
          {" "}contigo
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-[#4a6080] max-w-2xl mx-auto mb-10 leading-relaxed">
          En DynamisAI construimos productos de software donde la inteligencia artificial
          no es un añadido — es el núcleo. Cada línea de código diseñada para potenciar
          lo que las personas hacen mejor.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#proyectos"
            className="px-8 py-3.5 rounded-xl bg-[#0055e0] hover:bg-[#0044cc] text-white font-semibold text-sm transition-all duration-200 hover:scale-105 animate-pulse-glow"
          >
            Ver proyectos
          </a>
          <a
            href="#nosotros"
            className="px-8 py-3.5 rounded-xl border border-[#0055e0]/30 hover:border-[#0055e0] text-[#0055e0] font-semibold text-sm transition-all duration-200 hover:bg-[#eef5ff]"
          >
            Conocer más →
          </a>
        </div>

        {/* Feature chips */}
        <div className="mt-20 flex flex-wrap justify-center gap-3">
          {[
            { icon: "🧠", label: "IA integrada" },
            { icon: "⚡", label: "Alto rendimiento" },
            { icon: "🔒", label: "Privacidad primero" },
            { icon: "🚀", label: "Escalable" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white border border-[#0055e0]/30 shadow-sm rounded-xl px-5 py-2.5 flex items-center gap-2.5 text-sm text-[#0055e0] hover:border-[#00c8d8] hover:text-[#00a8d8] transition-all duration-200"
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-float opacity-40">
        <span className="text-xs text-[#4a6080]">scroll</span>
        <svg className="w-4 h-4 text-[#4a6080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
