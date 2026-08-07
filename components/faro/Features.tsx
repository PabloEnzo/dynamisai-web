import Reveal from "../Reveal";

const features = [
  {
    initials: "LoRa",
    bg: "bg-orange-50",
    border: "border-orange-200",
    textColor: "text-orange-600",
    title: "Malla LoRa multi-salto",
    description:
      "Radio EU868 de largo alcance y bajo consumo. Los nodos se repiten mensajes en varios saltos hasta el puesto de mando. Sin infraestructura — un Raspberry Pi y un módulo LoRa bastan.",
  },
  {
    initials: "IA",
    bg: "bg-red-50",
    border: "border-red-200",
    textColor: "text-red-600",
    title: "Triaje con IA local",
    description:
      "Clasificador híbrido (modelo lineal + léxico de emergencia) en < 500 KB. Urgencia y categoría en < 1 ms. Bilingüe ES/CA. Sin conexión, sin servidor en la nube, sin latencia de red.",
  },
  {
    initials: "PWA",
    bg: "bg-amber-50",
    border: "border-amber-200",
    textColor: "text-amber-700",
    title: "App ciudadana offline",
    description:
      "Web app instalable en cualquier móvil (no hace falta app store). Funciona sin internet: triaje local, caché de mapas, voz a texto offline con Vosk WASM. Accesible y bilingüe.",
  },
  {
    initials: "MAP",
    bg: "bg-orange-50",
    border: "border-orange-200",
    textColor: "text-orange-600",
    title: "Panel de mando georreferenciado",
    description:
      "Mapa real del municipio (OSM) con todas las alertas en tiempo real. Pan/zoom vectorial, ficha de cada incidente, bandeja priorizada por triaje. Funciona sin internet en el servidor local.",
  },
  {
    initials: "MUL",
    bg: "bg-red-50",
    border: "border-red-200",
    textColor: "text-red-600",
    title: "Multi-riesgo y multi-municipio",
    description:
      "Cubre inundación, incendio forestal/urbano, terremoto/derrumbe, calor extremo y viento. Configurado con datos reales de OpenStreetMap. Escalable a varios municipios en la misma malla.",
  },
  {
    initials: "ALT",
    bg: "bg-amber-50",
    border: "border-amber-200",
    textColor: "text-amber-700",
    title: "Activación automática por alertas",
    description:
      "Se integra con feeds CAP oficiales (AEMET, IGN, EFFIS, SAIH). Al recibir una alerta, FARO pasa de modo dormido a vigilancia activa sin intervención manual del gestor.",
  },
];

export default function FaroFeatures() {
  return (
    <section className="py-28 px-6 bg-[#f8fbff]">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <p className="text-[#ea580c] text-sm font-semibold uppercase tracking-widest mb-3">
              Tecnología
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-5 leading-tight">
              Diseñado para funcionar{" "}
              <span style={{ background: "linear-gradient(135deg, #ea580c, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                en las peores condiciones
              </span>
            </h2>
            <p className="text-[#4a6080] text-lg leading-relaxed">
              Cada componente de FARO está elegido para ser robusto, barato y replicable
              por cualquier municipio sin dependencias externas.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="bg-white rounded-2xl border border-[#e0eaf8] p-6 h-full flex flex-col hover:border-orange-200 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center text-xs font-bold shrink-0 ${f.bg} ${f.border} ${f.textColor}`}>
                    {f.initials}
                  </div>
                  <h3 className="font-bold text-[#0a1628] text-sm leading-snug">{f.title}</h3>
                </div>
                <p className="text-sm text-[#4a6080] leading-relaxed flex-1">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={100}>
          <div className="mt-8 bg-white rounded-2xl border border-[#e0eaf8] p-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-1">
                <p className="font-bold text-[#0a1628] mb-1">Coste estimado por nodo: ~50-80 €</p>
                <p className="text-sm text-[#4a6080]">
                  Heltec WiFi LoRa 32 V4 (~30 €) + Heltec Wireless Tracker (~30 €) + caja exterior + batería.
                  Un municipio de 3.000 hab. puede estar cubierto con 8-12 nodos estratégicos.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                {[
                  { v: "< 500 KB", l: "Modelo IA" },
                  { v: "< 1 ms", l: "Triaje local" },
                  { v: "~80 €", l: "Por nodo" },
                ].map((s) => (
                  <div key={s.l} className="bg-orange-50 rounded-xl px-5 py-3 text-center border border-orange-100 min-w-[90px]">
                    <p className="font-bold text-[#ea580c] text-base">{s.v}</p>
                    <p className="text-xs text-[#4a6080] mt-0.5">{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
