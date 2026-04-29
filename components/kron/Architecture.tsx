import Reveal from "../Reveal";

const models = [
  {
    name: "ConformerASR",
    params: "~30M parámetros",
    role: "Reconocimiento de voz",
    initials: "ASR",
    color: "#0055e0",
    lightColor: "#eef5ff",
    borderColor: "#b8d0f0",
    desc: "Arquitectura Conformer (CNN + Transformer) optimizada para transcripción de audio en reuniones. Entrena sobre datos de audio en español e inglés con decodificación CTC Beam Search.",
    details: ["Encoder Conformer multicapa", "CTC Head para decodificación", "Log-Mel features (80 bins)", "SpecAugment para robustez", "VAD integrado"],
  },
  {
    name: "MeetingSummarizer",
    params: "~15M parámetros",
    role: "Resumen de reuniones",
    initials: "NLP",
    color: "#7c3aed",
    lightColor: "#f5f3ff",
    borderColor: "#ddd6fe",
    desc: "Modelo Seq2Seq Transformer entrenado específicamente para condensar transcripciones de reuniones en resúmenes ejecutivos concisos con los puntos clave.",
    details: ["Arquitectura Encoder-Decoder", "Tokenizer BPE (vocab 8.000)", "Fine-tuning en datos de reuniones", "Multiidioma (ES + EN)"],
  },
  {
    name: "TaskExtractor",
    params: "~8M parámetros",
    role: "Extracción de tareas",
    initials: "EXT",
    color: "#059669",
    lightColor: "#ecfdf5",
    borderColor: "#a7f3d0",
    desc: "Modelo de clasificación y extracción de entidades entrenado para detectar compromisos, tareas asignadas y decisiones dentro del texto de una transcripción.",
    details: ["Clasificación de secuencias", "NER para detectar asignados", "Extracción de fechas/plazos", "Confianza por tarea"],
  },
];

const layers = [
  { label: "Productos (MeetingScribe, futuros...)", color: "#0055e0" },
  { label: "FastAPI REST — /v1/asr, /v1/nlp, /v1/pipeline", color: "#4a6080" },
  { label: "Sistema de plugins (auto-discovery)", color: "#4a6080" },
  { label: "Pipeline: ASR → Summarize → Extract Tasks", color: "#4a6080" },
  { label: "Modelos KRON (PyTorch)", color: "#7c3aed" },
  { label: "Servidor propio — sin datos externos", color: "#059669" },
];

export default function KronArchitecture() {
  return (
    <section id="arquitectura" className="py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <p className="text-[#0055e0] text-sm font-semibold uppercase tracking-widest mb-3">Arquitectura</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-5 leading-tight">
              Tres modelos,{" "}
              <span className="gradient-text">un pipeline</span>
            </h2>
            <p className="text-[#4a6080] text-lg leading-relaxed">
              KRON no es un modelo único. Es un sistema de tres modelos especializados que
              trabajan en cadena: audio entra, resumen e tareas salen.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {models.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <div
                className="rounded-2xl border p-6 hover:shadow-lg transition-shadow duration-300 h-full"
                style={{ borderColor: m.borderColor, backgroundColor: m.lightColor }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xs font-bold mb-4 shadow-sm tracking-wider"
                  style={{ backgroundColor: m.color, color: "white" }}
                >
                  {m.initials}
                </div>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-[#0a1628] font-bold text-lg">{m.name}</h3>
                  <span
                    className="text-[11px] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap mt-1"
                    style={{ color: m.color, backgroundColor: "white", border: `1px solid ${m.borderColor}` }}
                  >
                    {m.params}
                  </span>
                </div>
                <p className="text-sm font-medium mb-3" style={{ color: m.color }}>{m.role}</p>
                <p className="text-[#4a6080] text-sm leading-relaxed mb-4">{m.desc}</p>
                <ul className="flex flex-col gap-1.5">
                  {m.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-xs text-[#4a6080]">
                      <span className="shrink-0 font-bold" style={{ color: m.color }}>›</span>
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="max-w-2xl mx-auto">
            <p className="text-center text-xs font-semibold text-[#4a6080] uppercase tracking-widest mb-6">Stack completo</p>
            <div className="flex flex-col gap-2">
              {layers.map((l, i) => (
                <div
                  key={i}
                  className="rounded-xl px-5 py-3 text-sm font-medium text-center transition-all duration-200 hover:scale-[1.02]"
                  style={{
                    backgroundColor: l.color + "12",
                    border: `1px solid ${l.color}30`,
                    color: l.color,
                  }}
                >
                  {l.label}
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <span className="inline-flex items-center gap-2 text-xs text-[#4a6080] bg-[#f4f8ff] border border-[#e0eaf8] rounded-full px-4 py-2">
                Autenticación via API Key · SQLite / PostgreSQL · Jobs asíncronos
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
