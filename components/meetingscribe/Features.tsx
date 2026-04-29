import Reveal from "../Reveal";

const features = [
  {
    title: "Transcripción en tiempo real",
    desc: "Convierte el audio de tu reunión en texto con alta precisión mientras habláis. Compatible con múltiples hablantes.",
  },
  {
    title: "Resúmenes con IA",
    desc: "Al finalizar la reunión, MeetingScribe genera automáticamente un resumen ejecutivo con los temas clave tratados.",
  },
  {
    title: "Puntos de acción",
    desc: "Detecta y extrae automáticamente las tareas, decisiones y compromisos adquiridos durante la reunión.",
  },
  {
    title: "100% privado y local",
    desc: "Todo el procesamiento ocurre en tu máquina. Ningún dato de tus reuniones se envía a servidores externos.",
  },
  {
    title: "Historial de reuniones",
    desc: "Accede a todas tus transcripciones y resúmenes anteriores, organizados por fecha, proyecto o participantes.",
  },
  {
    title: "Integraciones de trabajo",
    desc: "Exporta resúmenes directamente a Notion, Slack, Jira o por email con un solo clic.",
  },
];

export default function MeetingScribeFeatures() {
  return (
    <section id="funcionalidades" className="py-28 px-6 bg-[#f4f8ff]">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <p className="text-[#0055e0] text-sm font-semibold uppercase tracking-widest mb-3">
              Funcionalidades
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-5 leading-tight">
              Todo lo que necesitas para{" "}
              <span className="gradient-text">nunca perder el hilo</span>
            </h2>
            <p className="text-[#4a6080] text-lg leading-relaxed">
              MeetingScribe combina transcripción de alta calidad con inteligencia artificial
              para que puedas centrarte en la reunión, no en tomar notas.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 70}>
              <div className="card-white rounded-2xl p-7 group h-full">
                <div className="w-8 h-[3px] rounded-full bg-gradient-to-r from-[#0055e0] to-[#00c8d8] mb-5" />
                <h3 className="text-[#0a1628] font-semibold text-base mb-2 group-hover:text-[#0055e0] transition-colors">
                  {f.title}
                </h3>
                <p className="text-[#4a6080] text-sm leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
