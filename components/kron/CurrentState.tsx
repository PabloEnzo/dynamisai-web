import Reveal from "../Reveal";

const completedPhase0 = [
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

const completedPhase1 = [
  "KronTokenizer entrenado (vocab 8k, FLEURS ES + MLS ES + LibriSpeech EN)",
  "Datasets de audio descargados y preparados para ASR",
  "Validación de calidad de datos completada",
  "ConformerASR entrenado — 100k steps, val loss 1.23",
  "Evaluación WER: 21,8% (MLS) / 36,6% (FLEURS), CER 7,8%",
  "Integración live MeetingScribe — endpoint + webm + auth verificado",
];

const pending = [
  "Preparación corpus de reuniones para el Summarizer",
  "Entrenamiento del MeetingSummarizer",
  "Entrenamiento del TaskExtractor",
  "Pruebas end-to-end del pipeline completo (ASR → resumen → tareas)",
];

export default function KronCurrentState() {
  return (
    <section className="py-28 px-6 bg-[#f4f8ff]">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <p className="text-[#0055e0] text-sm font-semibold uppercase tracking-widest mb-3">Estado actual</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-5 leading-tight">
              ASR entrenado,{" "}
              <span className="gradient-text">integración live</span>
            </h2>
            <p className="text-[#4a6080] text-lg leading-relaxed">
              El modelo de transcripción funciona en producción. MeetingScribe ya graba y transcribe en tiempo real con KRON. El siguiente paso es el Summarizer.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Reveal>
            <div className="card-white rounded-2xl p-7 h-full">
              <div className="flex items-center justify-between mb-5">
                <p className="font-bold text-[#0a1628]">Fase 0 — Fundamentos</p>
                <span className="text-xs font-semibold text-[#059669] bg-[#ecfdf5] border border-[#a7f3d0] px-2.5 py-1 rounded-full">Completado</span>
              </div>
              <ul className="flex flex-col gap-3">
                {completedPhase0.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#059669] text-sm shrink-0 mt-0.5 font-bold">✓</span>
                    <span className="text-[#4a6080] text-sm leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="card-white rounded-2xl p-7 h-full border-[#0055e0]/20">
              <div className="flex items-center justify-between mb-5">
                <p className="font-bold text-[#0a1628]">Fases 1-2 — Datos + ASR</p>
                <span className="text-xs font-semibold text-[#059669] bg-[#ecfdf5] border border-[#a7f3d0] px-2.5 py-1 rounded-full">Completado</span>
              </div>
              <ul className="flex flex-col gap-3">
                {completedPhase1.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="text-[#059669] text-sm shrink-0 mt-0.5 font-bold">✓</span>
                    <span className="text-[#4a6080] text-sm leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="card-white rounded-2xl p-7 h-full">
              <div className="flex items-center justify-between mb-5">
                <p className="font-bold text-[#0a1628]">Próximas fases</p>
                <span className="text-xs font-semibold text-[#0055e0] bg-[#eef5ff] border border-[#0055e0]/30 px-2.5 py-1 rounded-full">En curso</span>
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
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="mt-10 card-white rounded-2xl p-7">
            <div className="flex items-center justify-between mb-3">
              <p className="text-sm font-semibold text-[#0a1628]">Progreso global del proyecto</p>
              <span className="text-sm font-bold text-[#0055e0]">~45%</span>
            </div>
            <div className="w-full h-2.5 bg-[#e0eaf8] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#0055e0] to-[#00c8d8]"
                style={{ width: "45%" }}
              />
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-xs text-[#059669] font-medium">Arquitectura ✓</span>
              <span className="text-xs text-[#059669] font-medium">Datos ✓</span>
              <span className="text-xs text-[#4a6080]">Entrenamiento</span>
              <span className="text-xs text-[#4a6080]">Integración</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
