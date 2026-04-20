const features = [
  {
    icon: "📝",
    title: "Transcripción en tiempo real",
    desc: "Convierte el audio de tu reunión en texto con alta precisión mientras habláis. Compatible con múltiples hablantes.",
  },
  {
    icon: "🧠",
    title: "Resúmenes con IA",
    desc: "Al finalizar la reunión, MeetingScribe genera automáticamente un resumen ejecutivo con los temas clave tratados.",
  },
  {
    icon: "✅",
    title: "Puntos de acción",
    desc: "Detecta y extrae automáticamente las tareas, decisiones y compromisos adquiridos durante la reunión.",
  },
  {
    icon: "🔒",
    title: "100% privado y local",
    desc: "Todo el procesamiento ocurre en tu máquina. Ningún dato de tus reuniones se envía a servidores externos.",
  },
  {
    icon: "🗂️",
    title: "Historial de reuniones",
    desc: "Accede a todas tus transcripciones y resúmenes anteriores, organizados por fecha, proyecto o participantes.",
  },
  {
    icon: "🔗",
    title: "Integraciones de trabajo",
    desc: "Exporta resúmenes directamente a Notion, Slack, Jira o por email con un solo clic.",
  },
];

export default function MeetingScribeFeatures() {
  return (
    <section id="funcionalidades" className="py-28 px-6 bg-[#f4f8ff]">
      <div className="max-w-6xl mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="card-white rounded-2xl p-7 group">
              <div className="w-12 h-12 rounded-xl bg-[#eef5ff] flex items-center justify-center text-2xl mb-4">
                {f.icon}
              </div>
              <h3 className="text-[#0a1628] font-semibold text-base mb-2 group-hover:text-[#0055e0] transition-colors">
                {f.title}
              </h3>
              <p className="text-[#4a6080] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
