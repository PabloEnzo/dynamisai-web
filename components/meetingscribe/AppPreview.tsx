const meetings = [
  { name: "Reunión de producto", date: "Hoy, 10:00", duration: "52 min", status: "done" },
  { name: "Llamada con cliente", date: "Hoy, 12:30", duration: "28 min", status: "done" },
  { name: "Daily standup", date: "Ayer, 09:15", duration: "15 min", status: "done" },
  { name: "Planning Q2", date: "Lun, 11:00", duration: "1h 20 min", status: "done" },
];

const transcript = [
  { speaker: "Pablo", color: "bg-[#0055e0]", text: "Necesitamos definir las prioridades para el Q2 antes de fin de mes." },
  { speaker: "Laura", color: "bg-[#00c8d8]", text: "Estoy de acuerdo. El foco debería estar en la integración con Notion y mejorar la precisión de transcripción." },
  { speaker: "Pablo", color: "bg-[#0055e0]", text: "Perfecto. ¿Podemos tener un prototipo para la siguiente semana?" },
  { speaker: "Laura", color: "bg-[#00c8d8]", text: "Sí, el jueves deberíamos tener algo funcional para revisar." },
];

const actions = [
  { text: "Entregar prototipo de integración Notion", owner: "Laura", due: "Jueves" },
  { text: "Revisar métricas de precisión de transcripción", owner: "Pablo", due: "Miércoles" },
  { text: "Preparar demo para el cliente", owner: "Equipo", due: "Viernes" },
];

export default function AppPreview() {
  return (
    <section className="py-28 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-[#0055e0] text-sm font-semibold uppercase tracking-widest mb-3">
            Vista previa
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-5 leading-tight">
            Así se ve{" "}
            <span className="gradient-text">MeetingScribe</span>
          </h2>
          <p className="text-[#4a6080] text-lg leading-relaxed">
            Una interfaz limpia y sin distracciones. Todo lo que necesitas, justo donde lo esperas.
          </p>
        </div>

        {/* App window mockup */}
        <div className="rounded-2xl border border-[#b8d0f0] shadow-2xl shadow-[#0055e0]/10 overflow-hidden">

          {/* Window chrome */}
          <div className="bg-[#f0f4fa] border-b border-[#dde8f5] px-4 py-3 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-2 px-4 py-1 rounded-lg bg-white border border-[#dde8f5] text-xs text-[#4a6080]">
                <span>🎙️</span>
                <span className="font-medium">MeetingScribe</span>
              </div>
            </div>
          </div>

          {/* App layout */}
          <div className="flex h-[520px] bg-white">

            {/* Sidebar */}
            <div className="w-60 shrink-0 bg-[#f8faff] border-r border-[#e0eaf8] flex flex-col">
              <div className="p-4 border-b border-[#e0eaf8]">
                <p className="text-xs font-bold text-[#0a1628] uppercase tracking-widest mb-3">Reuniones</p>
                <button className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-[#0055e0] text-white text-xs font-semibold">
                  <span>+</span> Nueva reunión
                </button>
              </div>
              <div className="flex-1 overflow-auto py-2">
                {meetings.map((m, i) => (
                  <div
                    key={i}
                    className={`px-4 py-3 cursor-pointer border-l-2 transition-colors ${
                      i === 0
                        ? "border-[#0055e0] bg-[#eef5ff]"
                        : "border-transparent hover:bg-[#f0f4fa]"
                    }`}
                  >
                    <p className={`text-xs font-semibold truncate ${i === 0 ? "text-[#0055e0]" : "text-[#0a1628]"}`}>
                      {m.name}
                    </p>
                    <p className="text-[10px] text-[#9ab0cc] mt-0.5">{m.date} · {m.duration}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-hidden">

              {/* Header */}
              <div className="px-6 py-4 border-b border-[#e0eaf8] flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-[#0a1628] text-sm">Reunión de producto</h3>
                  <p className="text-xs text-[#9ab0cc]">Hoy, 10:00 · 52 minutos · 2 participantes</p>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 rounded-lg bg-[#eef5ff] border border-[#0055e0]/20 text-[#0055e0] text-xs font-medium">
                    Exportar
                  </button>
                  <button className="px-3 py-1.5 rounded-lg bg-[#0055e0] text-white text-xs font-medium">
                    Compartir
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="px-6 pt-3 flex gap-4 border-b border-[#e0eaf8]">
                {["Resumen IA", "Transcripción", "Puntos de acción"].map((tab, i) => (
                  <button
                    key={tab}
                    className={`pb-2.5 text-xs font-semibold border-b-2 transition-colors ${
                      i === 0
                        ? "border-[#0055e0] text-[#0055e0]"
                        : "border-transparent text-[#9ab0cc] hover:text-[#4a6080]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Content area */}
              <div className="flex-1 overflow-auto p-6 flex gap-5">

                {/* Summary */}
                <div className="flex-1 flex flex-col gap-4">
                  <div className="card-white rounded-xl p-4">
                    <p className="text-xs font-bold text-[#0055e0] uppercase tracking-wider mb-2">📋 Resumen ejecutivo</p>
                    <p className="text-xs text-[#4a6080] leading-relaxed">
                      Se definieron las prioridades para el Q2: integración con Notion y mejora de precisión de transcripción. Se acordó tener un prototipo funcional para el jueves de la semana siguiente.
                    </p>
                  </div>

                  <div className="card-white rounded-xl p-4">
                    <p className="text-xs font-bold text-[#0055e0] uppercase tracking-wider mb-3">✅ Puntos de acción</p>
                    <ul className="flex flex-col gap-2">
                      {actions.map((a, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <div className="w-4 h-4 rounded border-2 border-[#b8d0f0] mt-0.5 shrink-0" />
                          <div>
                            <p className="text-xs text-[#0a1628]">{a.text}</p>
                            <p className="text-[10px] text-[#9ab0cc]">{a.owner} · {a.due}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Transcript preview */}
                <div className="w-56 shrink-0 card-white rounded-xl p-4 flex flex-col gap-3 overflow-hidden">
                  <p className="text-xs font-bold text-[#0055e0] uppercase tracking-wider">🎙 Transcripción</p>
                  {transcript.map((t, i) => (
                    <div key={i} className="flex gap-2">
                      <div className={`w-5 h-5 rounded-full ${t.color} shrink-0 flex items-center justify-center text-white text-[9px] font-bold mt-0.5`}>
                        {t.speaker[0]}
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold text-[#0a1628]">{t.speaker}</p>
                        <p className="text-[10px] text-[#4a6080] leading-relaxed line-clamp-3">{t.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Caption */}
        <p className="text-center text-xs text-[#9ab0cc] mt-4">
          * Vista previa de la interfaz — MeetingScribe está actualmente en desarrollo
        </p>
      </div>
    </section>
  );
}
