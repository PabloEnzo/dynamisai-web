const plans = [
  {
    name: "Starter",
    price: "15",
    period: "/ mes",
    desc: "Perfecto para freelancers y profesionales que quieren dejar de tomar notas.",
    features: [
      "Hasta 10 reuniones / mes",
      "Transcripción automática",
      "Resumen con IA",
      "Exportar a TXT y PDF",
      "Historial 30 días",
    ],
    notIncluded: [
      "Puntos de acción IA",
      "Integraciones externas",
      "Soporte prioritario",
    ],
    cta: "Empezar gratis 14 días",
    highlight: false,
  },
  {
    name: "Pro",
    price: "29",
    period: "/ mes",
    desc: "Para equipos que quieren sacar el máximo partido a cada reunión.",
    features: [
      "Reuniones ilimitadas",
      "Transcripción automática",
      "Resumen con IA",
      "Puntos de acción IA",
      "Exportar a Notion, Slack, Jira",
      "Historial ilimitado",
      "Multi-idioma (ES, EN, FR, DE)",
    ],
    notIncluded: [
      "Soporte prioritario",
    ],
    cta: "Empezar gratis 14 días",
    highlight: true,
    badge: "Más popular",
  },
  {
    name: "Business",
    price: "49",
    period: "/ mes por usuario",
    desc: "Para empresas que necesitan privacidad máxima y gestión de equipo.",
    features: [
      "Todo lo de Pro",
      "Panel de administración",
      "Gestión de equipos y roles",
      "SSO / integración con directorio",
      "Modelo IA personalizable",
      "Soporte prioritario 24/7",
      "Onboarding dedicado",
    ],
    notIncluded: [],
    cta: "Contactar con ventas",
    highlight: false,
  },
];

export default function MeetingScribePricing() {
  return (
    <section id="precios" className="py-28 px-6 bg-[#f4f8ff]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-5">
          <p className="text-[#0055e0] text-sm font-semibold uppercase tracking-widest mb-3">
            Precios
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-5 leading-tight">
            Planes simples y{" "}
            <span className="gradient-text">sin sorpresas</span>
          </h2>
          <p className="text-[#4a6080] text-lg leading-relaxed">
            14 días de prueba gratuita en todos los planes. Sin tarjeta de crédito.
          </p>
        </div>

        {/* Status notice */}
        <div className="mb-12 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          MeetingScribe está en desarrollo — los precios son orientativos y pueden cambiar antes del lanzamiento.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 flex flex-col ${
                plan.highlight
                  ? "bg-[#0055e0] text-white shadow-xl shadow-[#0055e0]/25 scale-[1.02]"
                  : "card-white"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#00c8d8] text-white text-xs font-bold shadow-sm whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <p className={`text-sm font-semibold uppercase tracking-widest mb-1 ${plan.highlight ? "text-blue-200" : "text-[#0055e0]"}`}>
                  {plan.name}
                </p>
                <div className="flex items-end gap-1 mb-3">
                  <span className={`text-5xl font-bold ${plan.highlight ? "text-white" : "text-[#0a1628]"}`}>
                    €{plan.price}
                  </span>
                  <span className={`text-sm mb-2 ${plan.highlight ? "text-blue-200" : "text-[#4a6080]"}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-sm leading-relaxed ${plan.highlight ? "text-blue-100" : "text-[#4a6080]"}`}>
                  {plan.desc}
                </p>
              </div>

              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span className={`mt-0.5 shrink-0 font-bold ${plan.highlight ? "text-[#00c8d8]" : "text-[#0055e0]"}`}>✓</span>
                    <span className={plan.highlight ? "text-blue-50" : "text-[#4a6080]"}>{f}</span>
                  </li>
                ))}
                {plan.notIncluded.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm opacity-40">
                    <span className="mt-0.5 shrink-0">✕</span>
                    <span className={plan.highlight ? "text-blue-100" : "text-[#4a6080]"}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`w-full text-center px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02] ${
                  plan.highlight
                    ? "bg-white text-[#0055e0] hover:bg-blue-50"
                    : "bg-[#0055e0] text-white hover:bg-[#0044cc]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
