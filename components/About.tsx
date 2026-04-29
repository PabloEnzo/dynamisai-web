import Reveal from "./Reveal";

const values = [
  {
    title: "IA como núcleo",
    desc: "No integramos IA como una función extra. La construimos desde el interior de cada producto, entrenando modelos propios adaptados a cada necesidad.",
  },
  {
    title: "Investigación aplicada",
    desc: "Cada producto que desarrollamos es el resultado de investigación real. Entendemos la tecnología antes de usarla.",
  },
  {
    title: "Sin dependencias externas",
    desc: "Apostamos por arquitecturas propias. Nuestros modelos corren en infraestructura propia, sin APIs de terceros ni costes por token.",
  },
  {
    title: "Software para personas",
    desc: "La tecnología más avanzada solo tiene sentido si mejora el día a día de quien la usa. Diseñamos pensando en el usuario final.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="py-28 px-6 bg-[#f4f8ff]">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="max-w-2xl mb-16">
            <p className="text-[#0055e0] text-sm font-semibold uppercase tracking-widest mb-3">
              Quiénes somos
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-5 leading-tight">
              Una empresa nacida desde la{" "}
              <span className="gradient-text">curiosidad técnica</span>
            </h2>
            <p className="text-[#4a6080] text-lg leading-relaxed">
              DynamisAI nació con una premisa clara: el software del futuro no puede
              ser estático. Combinamos ingeniería de software rigurosa con inteligencia
              artificial desarrollada en casa para crear productos que aprenden,
              se adaptan y escalan.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="card-white rounded-2xl p-7 group h-full">
                <div className="w-8 h-[3px] rounded-full bg-gradient-to-r from-[#0055e0] to-[#00c8d8] mb-5" />
                <h3 className="text-[#0a1628] font-semibold text-lg mb-2 group-hover:text-[#0055e0] transition-colors">
                  {v.title}
                </h3>
                <p className="text-[#4a6080] text-sm leading-relaxed">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
