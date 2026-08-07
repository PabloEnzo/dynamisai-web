import Reveal from "../Reveal";

const done = [
  "Clasificador de triaje ES/CA (84% urgencia, 76% categoría)",
  "Simulador de malla LoRa con física real (EU868, duty cycle 1%)",
  "Panel de mando web offline con mapa real (Sant Andreu de Llavaneres + Mataró)",
  "App ciudadana móvil PWA instalable, offline-first",
  "Voz a texto offline (Vosk WASM)",
  "Sistema de corroboración por zona geográfica",
  "Flujo de despacho de incidentes (nuevo / en ruta / resuelto)",
  "6 escenarios de demo (DANA, incendio, terremoto) en mapa real del Maresme",
  "Test adversarial (45 mensajes reales): 0 SOS no entregados",
  "Borrador solicitud NGI Zero (41.600 € / 6 tareas)",
];

const pending = [
  "Publicar repo en GitHub (pendiente de decisión de Pablo)",
  "Comprar hardware Heltec V4 + Tracker GPS (~155 €)",
  "Parser CAP + AEMET para activación automática",
  "Piloto real con municipio / protección civil",
  "Video de demo de 2:15 para NGI (grabable sin hardware salvo 1 escena)",
];

export default function FaroCurrentState() {
  const totalItems = done.length + pending.length;
  const progress = Math.round((done.length / totalItems) * 100);

  return (
    <section id="estado" className="py-28 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <p className="text-[#ea580c] text-sm font-semibold uppercase tracking-widest mb-3">
              Estado actual
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-5 leading-tight">
              Prototipo funcional,{" "}
              <span style={{ background: "linear-gradient(135deg, #ea580c, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                métricas probadas
              </span>
            </h2>
            <p className="text-[#4a6080] text-lg leading-relaxed">
              La demo de software está construida y validada. Los algoritmos de triaje y la simulación
              de malla LoRa están funcionando con datos reales de municipios del Maresme.
            </p>
          </div>
        </Reveal>

        <Reveal delay={50}>
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-semibold text-[#0a1628]">Progreso del prototipo</span>
              <span className="text-sm font-bold text-[#ea580c]">{progress}%</span>
            </div>
            <div className="h-2.5 bg-orange-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#ea580c] to-[#f97316] transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-xs text-[#8a9ab5] mt-1.5">{done.length} de {totalItems} ítems completados</p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          <Reveal delay={100}>
            <div className="bg-[#f8fbff] rounded-2xl border border-[#e0eaf8] p-6">
              <p className="text-sm font-semibold text-[#0a1628] mb-4 flex items-center gap-2">
                <span className="text-emerald-500 font-bold">Completado</span>
                <span className="text-xs text-[#8a9ab5]">({done.length} ítems)</span>
              </p>
              <ul className="flex flex-col gap-3">
                {done.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#4a6080]">
                    <span className="text-emerald-500 mt-0.5 shrink-0 font-bold text-base leading-none">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="bg-orange-50 rounded-2xl border border-orange-200 p-6">
              <p className="text-sm font-semibold text-[#0a1628] mb-4 flex items-center gap-2">
                <span className="text-orange-600 font-bold">Próximos pasos</span>
                <span className="text-xs text-[#8a9ab5]">({pending.length} ítems)</span>
              </p>
              <ul className="flex flex-col gap-3">
                {pending.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#4a6080]">
                    <span className="text-orange-400 mt-0.5 shrink-0">○</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-8 bg-gradient-to-r from-[#fff7ed] to-[#fffbeb] rounded-2xl border border-orange-200 p-6 flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="flex-1">
              <p className="font-bold text-[#0a1628] mb-1">Busca municipios piloto y colaboradores técnicos</p>
              <p className="text-sm text-[#4a6080]">
                Si representas un municipio, protección civil o eres técnico especialista en LoRa / sistemas de emergencia,
                nos encantaría hablar contigo.
              </p>
            </div>
            <a
              href="#contacto"
              className="shrink-0 px-6 py-2.5 rounded-xl bg-[#ea580c] hover:bg-[#c2410c] text-white font-semibold text-sm transition-all duration-200"
            >
              Hablar con el equipo →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
