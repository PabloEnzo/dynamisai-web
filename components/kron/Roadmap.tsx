const phases = [
  {
    number: "0",
    title: "Fundamentos",
    status: "done",
    statusLabel: "Completado",
    desc: "Diseño completo de la arquitectura, implementación de los tres modelos en PyTorch, pipeline de audio, tokenizer BPE, API REST con FastAPI y sistema de plugins.",
    items: ["Arquitectura ConformerASR, Summarizer, TaskExtractor", "FastAPI + routers completos", "Plugin system con auto-discovery", "Training scripts listos"],
  },
  {
    number: "1",
    title: "Tokenizer & Datos",
    status: "current",
    statusLabel: "Siguiente",
    desc: "Entrenamiento del tokenizer BPE con corpus en español e inglés, descarga y preparación de los datasets de audio (CommonVoice ES, LibriSpeech EN) y corpus de texto de reuniones.",
    items: ["Entrenamiento KronTokenizer (vocab 8k)", "Descarga CommonVoice ES + LibriSpeech", "Preparación corpus reuniones para Summarizer", "Validación calidad datos"],
  },
  {
    number: "2",
    title: "Entrenamiento ASR",
    status: "upcoming",
    statusLabel: "Próximamente",
    desc: "Entrenamiento del modelo ConformerASR (~30M parámetros) en GPU propio. Evaluación con métrica WER (Word Error Rate) y fine-tuning para vocabulario de reuniones.",
    items: ["Entrenamiento en servidor propio (GPU)", "Optimización CTC Beam Search", "Evaluación WER español/inglés", "Fine-tuning en vocabulario técnico"],
  },
  {
    number: "3",
    title: "Entrenamiento NLP",
    status: "upcoming",
    statusLabel: "Próximamente",
    desc: "Entrenamiento del MeetingSummarizer (~15M params) y TaskExtractor (~8M params) sobre corpus anotado de reuniones. Validación de calidad de resúmenes y precisión de extracción.",
    items: ["MeetingSummarizer Seq2Seq entrenado", "TaskExtractor con NER", "Evaluación ROUGE para resúmenes", "Calibración de confianza por tarea"],
  },
  {
    number: "4",
    title: "Integración & Producción",
    status: "upcoming",
    statusLabel: "Próximamente",
    desc: "Integración live del pipeline KRON con MeetingScribe desktop. Tests end-to-end, optimización de latencia, Docker para despliegue y monitorización en producción.",
    items: ["Pipeline live ASR → Resumen → Tareas", "Integración MeetingScribe desktop", "Docker + servidor propio", "Latencia < 30s para resumen completo"],
  },
  {
    number: "5",
    title: "Multi-producto & Evolución",
    status: "future",
    statusLabel: "Futuro",
    desc: "KRON como cerebro de todos los productos DynamisAI. Nuevos modelos especializados según los casos de uso que vayan surgiendo, sistema de aprendizaje continuo y expansión multiidioma.",
    items: ["KRON como base para nuevos productos DynamisAI", "Modelos especializados por dominio", "Aprendizaje continuo con datos de usuarios", "Expansión a más idiomas"],
  },
];

const statusStyles: Record<string, { dot: string; badge: string; card: string; number: string }> = {
  done: {
    dot: "bg-[#059669]",
    badge: "bg-[#ecfdf5] border-[#a7f3d0] text-[#059669]",
    card: "border-[#a7f3d0] bg-white",
    number: "bg-[#059669] text-white",
  },
  current: {
    dot: "bg-[#0055e0] animate-pulse",
    badge: "bg-[#eef5ff] border-[#0055e0]/30 text-[#0055e0]",
    card: "border-[#0055e0]/40 bg-white shadow-md shadow-[#0055e0]/08",
    number: "bg-[#0055e0] text-white",
  },
  upcoming: {
    dot: "bg-[#f0a830]",
    badge: "bg-amber-50 border-amber-200 text-amber-700",
    card: "border-[#e0eaf8] bg-white",
    number: "bg-[#eef5ff] text-[#0055e0]",
  },
  future: {
    dot: "bg-[#9ab0cc]",
    badge: "bg-[#f4f8ff] border-[#d0dff0] text-[#4a6080]",
    card: "border-[#e8f0f8] bg-[#fafcff]",
    number: "bg-[#f4f8ff] text-[#9ab0cc]",
  },
};

import Reveal from "../Reveal";

export default function KronRoadmap() {
  return (
    <section id="roadmap" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <p className="text-[#0055e0] text-sm font-semibold uppercase tracking-widest mb-3">Roadmap</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-5 leading-tight">
              El camino que{" "}
              <span className="gradient-text">estamos recorriendo</span>
            </h2>
            <p className="text-[#4a6080] text-lg leading-relaxed">
              De la arquitectura al modelo entrenado, hasta el producto en manos de los usuarios.
              Aquí está el plan completo, fase por fase.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-[#059669] via-[#0055e0] to-[#e0eaf8] hidden md:block z-0" />

          <div className="flex flex-col gap-6">
            {phases.map((phase, i) => {
              const s = statusStyles[phase.status];
              return (
                <Reveal key={phase.number} delay={i * 60}>
                <div className="flex gap-6 items-start">
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center shrink-0 mt-5 relative z-10">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-base font-bold shadow-sm border-2 border-white ${s.number}`}>
                      {phase.status === "done" ? "✓" : phase.number}
                    </div>
                  </div>

                  {/* Card */}
                  <div className={`flex-1 rounded-2xl border p-6 transition-all duration-200 hover:shadow-md ${s.card}`}>
                    <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                      <div className="flex items-center gap-3">
                        <span className={`md:hidden w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${s.number}`}>
                          {phase.status === "done" ? "✓" : phase.number}
                        </span>
                        <h3 className="text-[#0a1628] font-bold text-lg">
                          Fase {phase.number}: {phase.title}
                        </h3>
                      </div>
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${s.badge}`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${s.dot}`} />
                        {phase.statusLabel}
                      </span>
                    </div>

                    <p className="text-[#4a6080] text-sm leading-relaxed mb-4">{phase.desc}</p>

                    <ul className="flex flex-wrap gap-2">
                      {phase.items.map((item) => (
                        <li
                          key={item}
                          className="text-xs px-3 py-1.5 rounded-full bg-[#f4f8ff] border border-[#e0eaf8] text-[#4a6080]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-12 rounded-2xl border border-dashed border-[#b0ccf0] p-6 bg-[#f8fbff] text-center">
          <p className="text-[#4a6080] text-sm">
            KRON es un proyecto en evolución constante. Las fases y plazos se ajustan según los aprendizajes que vamos obteniendo durante el proceso.
          </p>
        </div>
      </div>
    </section>
  );
}
