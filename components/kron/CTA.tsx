import Link from "next/link";
import Reveal from "../Reveal";

export default function KronCTA() {
  return (
    <section className="py-28 px-6 bg-[#f4f8ff]">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal>
          <div className="rounded-3xl bg-gradient-to-br from-[#0055e0] to-[#0044cc] p-12 md:p-16 relative overflow-hidden shadow-2xl shadow-[#0055e0]/25">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="w-12 h-[3px] rounded-full bg-white/40 mx-auto mb-8" />
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
                ¿Quieres ver KRON en acción?
              </h2>
              <p className="text-white/75 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                KRON impulsa MeetingScribe. Cuando el producto esté listo,
                podrás probarlo en primera persona — con IA 100% propia, sin enviar tus datos a ningún servidor externo.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/meetingscribe"
                  className="px-8 py-3.5 rounded-xl bg-white text-[#0055e0] font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
                >
                  Ver MeetingScribe →
                </Link>
                <a
                  href="/#contacto"
                  className="px-8 py-3.5 rounded-xl border border-white/30 hover:border-white/60 text-white font-semibold text-sm transition-all duration-200 hover:bg-white/10"
                >
                  Contactar con nosotros
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
