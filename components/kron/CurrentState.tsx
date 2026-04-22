const completed = [
  "Arquitectura completa definida y estructurada",
  "ConformerASR — código del modelo completo (encoder, CTC head)",
  "MeetingSummarizer — arquitectura Seq2Seq implementada",
  "TaskExtractor — modelo de clasificación implementado",
  "Audio pipeline: preprocesado, Log-Mel features, VAD, SpecAugment",
  "KronTokenizer BPE (sentencepiece, vocab 8.000)",
  "FastAPI REST con todos los routers (/asr, /nlp, /pipeline, /health)",
  "Sistema de plugins con auto-discovery",
  "MeetingPipeline: ASR → summarize → extract tasks",
  "JobManager — jobs asíncronos con asyncio",
  "Almacenamiento SQLite/PostgreSQL con SQLAlchemy async",
  "Scripts de entrenamiento listos para los 3 modelos",
];

const pending = [
  "Entrenar tokenizer BPE con corpus en español/inglés",
  "Descargar y preparar datasets de audio (LibriSpeech, Common Voice ES)",
  "Entrenamiento del modelo ASR (~30M params) en GPU",
  "Validación y evaluación WER del ASR",
  "Entrenamiento del MeetingSummarizer en corpus de reuniones",
  "Entrenamiento del TaskExtractor",
  "Integración live con MeetingScribe desktop",
  "Pruebas end-to-end del pipeline completo",
];

export default function KronCurrentState() {
  return (
    <section className="py-28 px-6 bg-[#f4f8ff]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-[#0055e0] text-sm font-semibold uppercase tracking-widest mb-3">Estado actual</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-5 leading-tight">
            Fase 0{" "}
            <span className="gradient-text">completada</span>
          </h2>
          <p className="text-[#4a6080] text-lg leading-relaxed">
            Los fundamentos están construidos. La arquitectura completa está en código.
            El siguiente paso es el entrenamiento de los modelos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Done */}
          <div className="card-white rounded-2xl p-7">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#ecfdf5] border border-[#a7f3d0] flex items-center justify-center text-sm">✓</div>
              <p className="font-bold text-[#0a1628]">Completado — Fase 0</p>
            </div>
            <ul className="flex flex-col gap-3">
              {completed.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-[#059669] text-sm shrink-0 mt-0.5 font-bold">✓</span>
                  <span className="text-[#4a6080] text-sm leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pending */}
          <div className="card-white rounded-2xl p-7">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-sm">⏳</div>
              <p className="font-bold text-[#0a1628]">Próximas fases</p>
            </div>
            <ul className="flex flex-col gap-3">
              {pending.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="text-[#f0a830] text-sm shrink-0 mt-0.5">○</span>
                  <span className="text-[#4a6080] text-sm leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Progress bar visual */}
        <div className="mt-10 card-white rounded-2xl p-7">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-semibold text-[#0a1628]">Progreso global del proyecto</p>
            <span className="text-sm font-bold text-[#0055e0]">~25%</span>
          </div>
          <div className="w-full h-2.5 bg-[#e0eaf8] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#0055e0] to-[#00c8d8]"
              style={{ width: "25%" }}
            />
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs text-[#4a6080]">Arquitectura ✓</span>
            <span className="text-xs text-[#4a6080]">Entrenamiento</span>
            <span className="text-xs text-[#4a6080]">Integración</span>
            <span className="text-xs text-[#4a6080]">Producción</span>
          </div>
        </div>
      </div>
    </section>
  );
}
