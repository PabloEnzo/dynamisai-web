import Reveal from "../Reveal";

const steps = [
  {
    num: "01",
    title: "El ciudadano envía un SOS",
    description:
      "Desde la app móvil PWA (funciona sin internet), el ciudadano envía un mensaje de emergencia. Puede escribir o usar voz offline. El mensaje se clasifica localmente en el dispositivo.",
    accent: "bg-orange-100 text-orange-700 border-orange-200",
  },
  {
    num: "02",
    title: "La malla LoRa lo transmite",
    description:
      "El mensaje salta de nodo en nodo por la red LoRa (radio de largo alcance, bajo consumo). Sin internet. Sin cobertura móvil. Funciona con batería durante días. Cada nodo repite el mensaje hasta que llega al puesto de mando.",
    accent: "bg-amber-100 text-amber-700 border-amber-200",
  },
  {
    num: "03",
    title: "La IA local hace el triaje",
    description:
      "Un clasificador ligero (< 500 KB, inferencia < 1 ms) analiza cada mensaje: urgencia (SOS, alta, media, baja) y categoría (rescate, incendio, médico, derrumbe...). Bilingüe ES/CA. Corre en el servidor local del municipio, sin enviar datos fuera.",
    accent: "bg-red-100 text-red-700 border-red-200",
  },
  {
    num: "04",
    title: "El PM coordina desde el panel",
    description:
      "El puesto de mando ve un mapa en tiempo real con todas las alertas priorizadas por triaje, agrupadas por zona geográfica. El gestor puede despachar recursos, responder a ciudadanos y actualizar el estado de cada incidente.",
    accent: "bg-orange-100 text-orange-700 border-orange-200",
  },
];

export default function FaroHowItWorks() {
  return (
    <section id="como-funciona" className="py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <p className="text-[#ea580c] text-sm font-semibold uppercase tracking-widest mb-3">
              Cómo funciona
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-5 leading-tight">
              Del ciudadano al puesto de mando,{" "}
              <span style={{ background: "linear-gradient(135deg, #ea580c, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                sin internet
              </span>
            </h2>
            <p className="text-[#4a6080] text-lg leading-relaxed">
              FARO combina tres tecnologías que se complementan: radio LoRa para la conectividad,
              IA local para el triaje, y un panel web offline para la coordinación.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-orange-100 hidden md:block" />

          <div className="flex flex-col gap-10">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 120}>
                <div className="relative flex gap-8 items-start">
                  <div className={`relative z-10 w-16 h-16 rounded-2xl border-2 flex items-center justify-center text-xl font-bold shrink-0 ${step.accent}`}>
                    {step.num}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-[#0a1628] mb-2">{step.title}</h3>
                    <p className="text-[#4a6080] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200}>
          <div className="mt-16 bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl border border-orange-200 p-8">
            <p className="text-sm font-semibold text-[#ea580c] uppercase tracking-wider mb-4">Sistema de corroboración</p>
            <p className="text-[#0a1628] font-medium mb-2">
              Detección automática de incidentes — sin vigilancia
            </p>
            <p className="text-[#4a6080] text-sm leading-relaxed max-w-2xl">
              Cuando 2 o más reportes de la misma categoría llegan desde una zona de ~700 m,
              FARO los agrupa y marca el incidente como <strong>confirmado</strong>.
              Esto permite detección temprana sin necesidad de monitorizar a ningún ciudadano individualmente.
              Solo reportes voluntarios dentro de la red.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
