const reasons = [
  {
    icon: "🔒",
    title: "Control total",
    desc: "Si dependes de OpenAI o cualquier otro proveedor, ellos controlan tus precios, tu disponibilidad y tus datos. Con KRON, controlamos cada capa del stack.",
  },
  {
    icon: "💰",
    title: "Sin coste por token",
    desc: "Las APIs externas cobran por cada llamada. KRON corre en nuestro servidor: coste fijo, sin sorpresas, sin límites artificiales de uso.",
  },
  {
    icon: "🏗️",
    title: "Diseñada para escalar",
    desc: "KRON no es un modelo monolítico. Es un sistema modular con pipeline de plugins: cada producto nuevo de DynamisAI puede conectarse sin reescribir nada.",
  },
  {
    icon: "📦",
    title: "Propiedad intelectual",
    desc: "Cada peso entrenado es nuestro. No cedemos datos a terceros para mejorar sus modelos. Lo que entrenamos con nuestros datos, nos pertenece.",
  },
];

export default function KronPhilosophy() {
  return (
    <section className="py-28 px-6 bg-[#f4f8ff]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-[#0055e0] text-sm font-semibold uppercase tracking-widest mb-3">Por qué</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-5 leading-tight">
            ¿Por qué construir la IA{" "}
            <span className="gradient-text">desde cero?</span>
          </h2>
          <p className="text-[#4a6080] text-lg leading-relaxed">
            Usar la API de OpenAI es fácil. Construir la tuya propia es difícil.
            Elegimos lo difícil porque las razones importan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reasons.map((r) => (
            <div key={r.title} className="card-white rounded-2xl p-7 group">
              <div className="w-12 h-12 rounded-xl bg-[#eef5ff] flex items-center justify-center text-2xl mb-4">
                {r.icon}
              </div>
              <h3 className="text-[#0a1628] font-semibold text-base mb-2 group-hover:text-[#0055e0] transition-colors">
                {r.title}
              </h3>
              <p className="text-[#4a6080] text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-10 rounded-3xl border border-[#0055e0]/15 bg-gradient-to-br from-[#eef5ff] to-white p-8 md:p-10">
          <p className="text-[#0a1628] text-lg md:text-xl font-medium leading-relaxed max-w-3xl">
            "KRON no es solo la IA de MeetingScribe. Es la base sobre la que construiremos
            todos los productos de DynamisAI. Un cerebro compartido que aprende y mejora
            con cada producto que desarrollamos."
          </p>
          <p className="text-[#0055e0] text-sm font-semibold mt-4">— DynamisAI</p>
        </div>
      </div>
    </section>
  );
}
