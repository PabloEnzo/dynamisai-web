"use client";

export default function Contact() {
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
                Contacto
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-5 leading-tight">
                ¿Tienes una idea?{" "}
                <span className="gradient-text">Hablemos.</span>
              </h2>
              <p className="text-[#4a6080] text-lg leading-relaxed mb-8">
                Si tienes un proyecto en mente, quieres saber más sobre MeetingScribe
                o simplemente quieres estar al tanto de lo que hacemos, escríbenos.
                Respondemos rápido.
              </p>

              <a
                href="mailto:hola@dynamisai.es"
                className="inline-flex items-center gap-3 text-[#4a6080] hover:text-[#0055e0] transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#eef5ff] border border-[#0055e0]/15 flex items-center justify-center text-lg group-hover:border-[#0055e0]/40 transition-colors">
                  ✉️
                </div>
                <span className="text-sm">hola@dynamisai.es</span>
              </a>
            </div>

            {/* Right: form */}
            <div className="flex-1 w-full">
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="flex-1 px-4 py-3 rounded-xl bg-white border border-[#e0eaf8] text-[#0a1628] placeholder-[#9ab0cc] text-sm focus:outline-none focus:border-[#0055e0]/60 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Tu email"
                    className="flex-1 px-4 py-3 rounded-xl bg-white border border-[#e0eaf8] text-[#0a1628] placeholder-[#9ab0cc] text-sm focus:outline-none focus:border-[#0055e0]/60 transition-colors"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Asunto"
                  className="px-4 py-3 rounded-xl bg-white border border-[#e0eaf8] text-[#0a1628] placeholder-[#9ab0cc] text-sm focus:outline-none focus:border-[#0055e0]/60 transition-colors"
                />
                <textarea
                  rows={4}
                  placeholder="Cuéntanos tu idea o pregunta..."
                  className="px-4 py-3 rounded-xl bg-white border border-[#e0eaf8] text-[#0a1628] placeholder-[#9ab0cc] text-sm focus:outline-none focus:border-[#0055e0]/60 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 rounded-xl bg-[#0055e0] hover:bg-[#0044cc] text-white font-semibold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-95"
                >
                  Enviar mensaje →
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
