import Reveal from "../Reveal";

const steps = [
  {
    step: "01",
    title: "Abre MeetingScribe",
    desc: "Inicia la aplicación de escritorio antes de tu reunión. Compatible con cualquier plataforma de videoconferencia o reunión presencial.",
  },
  {
    step: "02",
    title: "Empieza a grabar",
    desc: "Con un clic, MeetingScribe comienza a capturar el audio y transcribir en tiempo real. Ves el texto aparecer al instante.",
  },
  {
    step: "03",
    title: "Finaliza la reunión",
    desc: "Al detener la grabación, la IA analiza la transcripción completa y genera el resumen, los puntos de acción y las decisiones tomadas.",
  },
  {
    step: "04",
    title: "Comparte o exporta",
    desc: "Revisa el resumen, edita si es necesario y envíalo a tu equipo o expórtalo a tus herramientas favoritas con un clic.",
  },
];

export default function MeetingScribeHowItWorks() {
  return (
    <section id="como-funciona" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <p className="text-[#0055e0] text-sm font-semibold uppercase tracking-widest mb-3">
              Cómo funciona
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-5 leading-tight">
              De la reunión al resumen{" "}
              <span className="gradient-text">en segundos</span>
            </h2>
            <p className="text-[#4a6080] text-lg leading-relaxed">
              Sin configuraciones complejas. Sin cuentas en la nube. Solo abre, graba y obtén tu resumen.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 80}>
              <div className="card-white rounded-2xl p-8 flex gap-5 group h-full">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#0055e0] to-[#00c8d8] flex items-center justify-center text-white font-bold text-sm">
                  {s.step}
                </div>
                <div>
                  <h3 className="text-[#0a1628] font-semibold text-lg mb-2 group-hover:text-[#0055e0] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-[#4a6080] text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
