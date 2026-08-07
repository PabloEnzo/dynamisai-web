import Reveal from "../Reveal";

const phases = [
  {
    num: 1,
    label: "Actual",
    title: "Prototipo validado",
    description: "Demo funcional: triaje ES/CA, simulador LoRa, panel de mando offline, app ciudadana PWA. Métricas demostradas. Solicitud NGI Zero en borrador.",
    color: "border-emerald-400 bg-emerald-50",
    numColor: "bg-emerald-500 text-white",
    done: true,
  },
  {
    num: 2,
    label: "Próximo",
    title: "Publicación open source + hardware",
    description: "Repo público en GitHub/Codeberg (condición NGI Zero). Compra del primer kit hardware (~155 €). Test en entorno real con nodos físicos. Video de demo para la solicitud.",
    color: "border-orange-400 bg-orange-50",
    numColor: "bg-orange-500 text-white",
    done: false,
  },
  {
    num: 3,
    label: "6-12 meses",
    title: "NGI Zero Commons Fund",
    description: "Solicitud a la convocatoria general (reabre tras verano 2026). Presupuesto: 41.600 €. 6 tareas: triaje multilingüe, activación CAP, hardware kit estándar, piloto municipal, documentación.",
    color: "border-[#b8d0f0] bg-[#f4f8ff]",
    numColor: "bg-[#0055e0] text-white",
    done: false,
  },
  {
    num: 4,
    label: "12-18 meses",
    title: "Piloto municipal real",
    description: "Despliegue en un municipio real de Catalunya (objetivo: Maresme). Coordinación con protección civil local. Validación en simulacro oficial. Primeros usuarios reales.",
    color: "border-[#b8d0f0] bg-[#f4f8ff]",
    numColor: "bg-[#0055e0] text-white",
    done: false,
  },
  {
    num: 5,
    label: "18-30 meses",
    title: "UCPM KAPP (UE)",
    description: "Consorcio europeo (≥3 entidades, ≥3 países). Solicitud al mecanismo UCPM KAPP (500 k – 1 M€). Despliegue transfronterizo y estandarización como infraestructura crítica de resiliencia.",
    color: "border-[#b8d0f0] bg-[#f4f8ff]",
    numColor: "bg-[#0055e0] text-white",
    done: false,
  },
  {
    num: 6,
    label: "Horizonte",
    title: "Horizon Europe",
    description: "Investigación avanzada: compresión semántica de mensajes para LoRa, integración con satélite de emergencia, estándar de interoperabilidad europeo. Publicación académica.",
    color: "border-[#b8d0f0] bg-[#f4f8ff]",
    numColor: "bg-[#4a6080] text-white",
    done: false,
  },
];

export default function FaroRoadmap() {
  return (
    <section className="py-28 px-6 bg-[#f8fbff]">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <p className="text-[#ea580c] text-sm font-semibold uppercase tracking-widest mb-3">
              Hoja de ruta
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-5 leading-tight">
              Del prototipo a{" "}
              <span style={{ background: "linear-gradient(135deg, #ea580c, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                infraestructura europea
              </span>
            </h2>
            <p className="text-[#4a6080] text-lg leading-relaxed">
              Una ruta de financiación clara: NGI Zero primero (validación y primer despliegue),
              después UCPM para escalar, Horizon Europe para la investigación de largo plazo.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-orange-100 z-0 hidden md:block" />

          <div className="flex flex-col gap-8">
            {phases.map((phase, i) => (
              <Reveal key={phase.num} delay={i * 100}>
                <div className="relative flex gap-6 items-start">
                  <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${phase.numColor} shadow-sm`}>
                    {phase.done ? "✓" : phase.num}
                  </div>
                  <div className={`flex-1 rounded-2xl border p-5 ${phase.color}`}>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <p className="text-xs text-[#8a9ab5] font-medium">{phase.label}</p>
                      {phase.done && (
                        <span className="text-xs font-semibold text-emerald-600 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200">
                          Completado
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-[#0a1628] mb-2">{phase.title}</h3>
                    <p className="text-sm text-[#4a6080] leading-relaxed">{phase.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
