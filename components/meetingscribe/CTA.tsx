"use client";

export default function MeetingScribeCTA() {
  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="card-white rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-[#0055e0]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#eef5ff]/60 via-transparent to-[#e0f7fb]/40 pointer-events-none" />

          <div className="relative z-10">
            <div className="w-16 h-16 rounded-2xl bg-[#eef5ff] border border-[#b8d0f0] flex items-center justify-center text-3xl mx-auto mb-6">
              🎙️
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-4 leading-tight">
              Sé el primero en{" "}
              <span className="gradient-text">probarlo</span>
            </h2>
            <p className="text-[#4a6080] text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              MeetingScribe está en desarrollo activo. Déjanos tu email y te avisaremos
              en cuanto esté listo para el acceso anticipado.
            </p>

            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 rounded-xl bg-white border border-[#b8d0f0] text-[#0a1628] placeholder-[#9ab0cc] text-sm focus:outline-none focus:border-[#0055e0] transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-[#0055e0] hover:bg-[#0044cc] text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.02] whitespace-nowrap"
              >
                Avisarme →
              </button>
            </form>

            <p className="text-xs text-[#9ab0cc] mt-4">Sin spam. Solo te avisamos cuando lancemos.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
