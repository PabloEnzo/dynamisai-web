import Reveal from "../Reveal";

const incidents = [
  {
    date: "Nov 2024",
    name: "DANA Valencia",
    detail: "Las redes cayeron en minutos. Los ciudadanos no podían llamar a emergencias. La coordinación de rescate fue caótica durante horas.",
    risk: "Inundación",
    color: "bg-blue-50 border-blue-200 text-blue-700",
  },
  {
    date: "Abr 2025",
    name: "Apagón ibérico",
    detail: "Sin electricidad, sin internet, sin cobertura móvil en gran parte de España y Portugal durante horas. Las comunicaciones de emergencia dependían de radios analógicas.",
    risk: "Fallo eléctrico",
    color: "bg-yellow-50 border-yellow-200 text-yellow-700",
  },
  {
    date: "Recurrente",
    name: "Incendios forestales",
    detail: "En Maresme, Garraf y otras zonas, el humo y la saturación de red dificultan la coordinación entre voluntarios y protección civil en los momentos críticos.",
    risk: "Incendio",
    color: "bg-red-50 border-red-200 text-red-700",
  },
];

export default function FaroProblem() {
  return (
    <section className="py-28 px-6 bg-[#f8fbff]">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <p className="text-[#ea580c] text-sm font-semibold uppercase tracking-widest mb-3">
              El problema
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-5 leading-tight">
              En una emergencia real,{" "}
              <span style={{ background: "linear-gradient(135deg, #ea580c, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                las redes fallan
              </span>
            </h2>
            <p className="text-[#4a6080] text-lg leading-relaxed">
              Las catástrofes recientes han dejado claro que los sistemas de comunicación actuales dependen
              de infraestructuras frágiles. Cuando más se necesitan, son los primeros en caer.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {incidents.map((inc, i) => (
            <Reveal key={inc.name} delay={i * 100}>
              <div className="bg-white rounded-2xl border border-[#e0eaf8] p-6 h-full flex flex-col">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${inc.color}`}>
                    {inc.risk}
                  </span>
                  <span className="text-xs text-[#8a9ab5]">{inc.date}</span>
                </div>
                <h3 className="font-bold text-[#0a1628] mb-2">{inc.name}</h3>
                <p className="text-sm text-[#4a6080] leading-relaxed flex-1">{inc.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="bg-white rounded-3xl border border-orange-200 p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <p className="text-sm font-semibold text-[#ea580c] uppercase tracking-wider mb-3">La brecha que existe</p>
                <h3 className="text-2xl font-bold text-[#0a1628] mb-4 leading-snug">
                  Los sistemas oficiales no llegan al último kilómetro
                </h3>
                <p className="text-[#4a6080] leading-relaxed mb-4">
                  Los sistemas de alerta masiva (ES-Alert, sirenas) informan pero no permiten comunicación bidireccional.
                  Los cuerpos de emergencia tienen radio profesional, pero los ciudadanos y los voluntarios quedan sin canales.
                </p>
                <p className="text-[#4a6080] leading-relaxed">
                  FARO llena ese vacío: una capa de comunicación resiliente, barata y open source que funciona
                  sin internet, sin cobertura móvil y sin depender de ningún operador.
                </p>
              </div>
              <div className="md:w-64 shrink-0">
                <div className="bg-orange-50 rounded-2xl p-5 border border-orange-100">
                  <p className="text-xs font-semibold text-[#ea580c] uppercase tracking-wider mb-4">Coste de NO tenerlo</p>
                  <ul className="flex flex-col gap-3">
                    {[
                      "SOS que tardan minutos en llegar",
                      "Coordinación de rescate por teléfono saturado",
                      "Recursos enviados al lugar equivocado",
                      "Voluntarios aislados sin información",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#4a6080]">
                        <span className="text-red-400 mt-0.5 shrink-0 font-bold">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
