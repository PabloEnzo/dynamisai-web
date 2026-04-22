"use client";
import { useState } from "react";

/* ─── Datos simulados ─────────────────────────────────── */
const meetings = [
  { title: "Reunión de producto Q2", date: "Hoy, 10:00", duration: "52 min", tasks: "3/5 tareas", summary: "Se definieron las prioridades para el Q2: integración con Notion y mejora de precisión de transcripción." },
  { title: "Llamada con cliente — Acme", date: "Hoy, 12:30", duration: "28 min", tasks: "1/2 tareas", summary: "Revisión del progreso del proyecto. El cliente solicita demo la semana siguiente." },
  { title: "Daily standup", date: "Ayer, 09:15", duration: "15 min", tasks: null, summary: "Bloqueos: integración API pendiente. Juan trabaja en ello hoy." },
  { title: "Planning sprint 14", date: "Lun, 11:00", duration: "1h 20 min", tasks: "5/8 tareas", summary: "Se estimaron 12 historias de usuario. Capacidad del equipo: 34 puntos." },
];

const tasks = [
  { text: "Entregar prototipo integración Notion", assignee: "Laura", done: true },
  { text: "Revisar métricas de precisión de transcripción", assignee: "Juan", done: false },
  { text: "Preparar demo para cliente Acme", assignee: "Equipo", done: false },
];

/* ─── Sidebar ─────────────────────────────────────────── */
function Sidebar({ active, setActive }: { active: string; setActive: (s: string) => void }) {
  const items = [
    { id: "dashboard", icon: "⊞", label: "Inicio" },
    { id: "record", icon: "◉", label: "Grabar" },
    { id: "history", icon: "≡", label: "Historial" },
    { id: "friends", icon: "👥", label: "Amigos" },
    { id: "settings", icon: "⚙", label: "Ajustes" },
  ];
  return (
    <div className="w-[200px] shrink-0 flex flex-col h-full bg-[#f3f2f1] border-r border-[#e0e0e0]">
      {/* Logo */}
      <div className="px-4 py-3.5 border-b border-[#e0e0e0]">
        <span className="text-[13px] font-bold text-[#242424] tracking-tight">MeetingScribe</span>
      </div>
      {/* Nav */}
      <nav className="flex-1 p-2.5 flex flex-col gap-0.5">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`flex items-center gap-2.5 px-2.5 py-2 rounded-md text-left w-full transition-all text-[12.5px] font-medium ${
              active === item.id
                ? "bg-[#5b5fc71a] text-[#444791]"
                : "text-[#616161] hover:bg-[#e8e8e8] hover:text-[#242424]"
            }`}
          >
            <span className={`text-[13px] w-5 ${active === item.id ? "text-[#5b5fc7]" : "opacity-70"}`}>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </nav>
      {/* User */}
      <div className="flex items-center gap-2 px-3 py-3 border-t border-[#e0e0e0]">
        <div className="w-7 h-7 rounded-full bg-[#5b5fc7] flex items-center justify-center text-white text-[11px] font-bold shrink-0 shadow-sm">J</div>
        <div className="flex-1 min-w-0">
          <p className="text-[11.5px] font-bold text-[#242424] truncate">Juan</p>
          <p className="text-[10px] text-[#a0a0a0] truncate">juan@dynamisai.es</p>
        </div>
        <span className="text-[13px] text-[#a0a0a0] hover:text-red-500 cursor-pointer">⇥</span>
      </div>
    </div>
  );
}

/* ─── Dashboard ───────────────────────────────────────── */
function Dashboard({ setActive }: { setActive: (s: string) => void }) {
  return (
    <div className="flex-1 overflow-auto bg-[#f5f5f5] p-6 flex flex-col gap-5">
      {/* Header */}
      <div>
        <h2 className="text-[18px] font-bold text-[#242424]">Hola, Juan 👋</h2>
        <p className="text-[13px] text-[#616161] mt-0.5">¿Listo para tu próxima reunión?</p>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { value: "2", label: "Reuniones hoy" },
          { value: "8", label: "Esta semana" },
          { value: "4", label: "Tareas pendientes" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-[10px] border border-[#e8e8e8] px-5 py-4 hover:border-[#5b5fc7] transition-colors">
            <p className="text-[26px] font-bold text-[#242424] leading-none">{s.value}</p>
            <p className="text-[11.5px] text-[#616161] font-medium mt-1">{s.label}</p>
          </div>
        ))}
      </div>
      {/* CTA card */}
      <div
        className="rounded-[12px] border border-[#5b5fc759] p-5 flex items-center gap-4 cursor-pointer"
        style={{ background: "linear-gradient(135deg, rgba(91,95,199,0.10) 0%, rgba(91,95,199,0.03) 100%)" }}
        onClick={() => setActive("record")}
      >
        <div className="w-11 h-11 rounded-full bg-[#5b5fc7] flex items-center justify-center text-white text-lg shrink-0 shadow-[0_0_14px_rgba(91,95,199,0.4)]">◉</div>
        <div className="flex-1">
          <p className="text-[14px] font-semibold text-[#242424]">Iniciar grabación</p>
          <p className="text-[12px] text-[#616161] mt-0.5">Transcribe y resume tu reunión automáticamente</p>
        </div>
        <button className="px-4 py-2 rounded-lg bg-[#5b5fc7] text-white text-[12.5px] font-bold shadow-sm whitespace-nowrap">
          Grabar ahora
        </button>
      </div>
      {/* Recent meetings */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-[13px] font-bold text-[#242424]">Reuniones recientes</p>
          <button className="text-[12px] text-[#5b5fc7] hover:text-[#444791]" onClick={() => setActive("history")}>Ver todas →</button>
        </div>
        <div className="flex flex-col gap-2">
          {meetings.slice(0, 3).map((m, i) => (
            <div key={i} className="bg-white rounded-[10px] border border-[#e8e8e8] px-4 py-3 flex items-center justify-between cursor-pointer hover:border-[#5b5fc7] hover:bg-[#fafafa] transition-all">
              <div className="flex-1 min-w-0 mr-3">
                <p className="text-[13px] font-bold text-[#242424] truncate">{m.title}</p>
                <p className="text-[11px] text-[#a0a0a0] mt-0.5">{m.date} · {m.duration}</p>
              </div>
              {m.tasks && (
                <span className="text-[10.5px] font-medium px-2.5 py-0.5 rounded-full bg-[#f0a83014] text-[#f0a830] border border-[#f0a83030] whitespace-nowrap">{m.tasks}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── History ─────────────────────────────────────────── */
function History() {
  const [selected, setSelected] = useState(0);
  const m = meetings[selected];
  return (
    <div className="flex-1 overflow-hidden flex bg-[#f5f5f5]">
      {/* List */}
      <div className="w-[240px] shrink-0 border-r border-[#e0e0e0] flex flex-col bg-white">
        <div className="px-4 py-3.5 border-b border-[#e0e0e0] flex items-center justify-between">
          <p className="text-[14px] font-bold text-[#242424]">Historial</p>
          <span className="text-[11px] text-[#a0a0a0] bg-[#f5f5f5] border border-[#e8e8e8] px-2 py-0.5 rounded-full">{meetings.length}</span>
        </div>
        <div className="p-3">
          <div className="flex items-center bg-[#f5f5f5] border border-[#e8e8e8] rounded-lg px-3 py-2 gap-2">
            <span className="text-[#a0a0a0] text-[12px]">⌕</span>
            <input className="bg-transparent text-[12px] text-[#242424] outline-none placeholder-[#a0a0a0] w-full" placeholder="Buscar reunión..." />
          </div>
        </div>
        <div className="flex-1 overflow-auto px-2 pb-2 flex flex-col gap-1">
          {meetings.map((m, i) => (
            <div
              key={i}
              onClick={() => setSelected(i)}
              className={`rounded-[10px] border px-3.5 py-3 cursor-pointer transition-all ${
                selected === i
                  ? "border-[#5b5fc7] bg-[#5b5fc70d]"
                  : "border-[#e8e8e8] bg-white hover:border-[#5b5fc7] hover:bg-[#fafafa]"
              }`}
            >
              <p className={`text-[12.5px] font-bold truncate ${selected === i ? "text-[#444791]" : "text-[#242424]"}`}>{m.title}</p>
              <p className="text-[10.5px] text-[#a0a0a0] mt-0.5">{m.date} · {m.duration}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Detail */}
      <div className="flex-1 overflow-auto p-5 flex flex-col gap-4">
        {/* Detail header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-[16px] font-bold text-[#242424]">{m.title}</h3>
            <p className="text-[12px] text-[#a0a0a0] mt-0.5">{m.date} · {m.duration}</p>
          </div>
          <div className="flex gap-2 shrink-0">
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#e8e8e8] text-[11.5px] text-[#616161] hover:border-[#5b5fc7] transition-colors">
              ↓ Exportar
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#10b981] text-[11.5px] text-[#10b981]">
              🌐 Pública
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white rounded-[12px] border border-[#e8e8e8] p-4">
          <div className="flex items-center justify-between mb-2.5">
            <p className="text-[10.5px] font-bold text-[#616161] uppercase tracking-wider">Resumen</p>
            <span className="text-[9.5px] font-bold text-[#5b5fc7] bg-[#5b5fc714] px-2 py-0.5 rounded-full uppercase tracking-wide">KRON AI</span>
          </div>
          <p className="text-[12.5px] text-[#242424] leading-relaxed">{m.summary}</p>
        </div>

        {/* Tasks */}
        <div className="bg-white rounded-[12px] border border-[#e8e8e8] p-4">
          <p className="text-[10.5px] font-bold text-[#616161] uppercase tracking-wider mb-3">Tareas</p>
          <ul className="flex flex-col gap-2.5">
            {tasks.map((t, i) => (
              <li key={i} className={`flex items-start gap-2.5 ${t.done ? "opacity-60" : ""}`}>
                <span className={`text-[13px] mt-0.5 shrink-0 ${t.done ? "text-[#10b981]" : "text-[#a0a0a0]"}`}>{t.done ? "✓" : "○"}</span>
                <p className={`text-[12.5px] flex-1 ${t.done ? "line-through text-[#a0a0a0]" : "text-[#242424]"}`}>{t.text}</p>
                <span className="text-[11px] text-[#5b5fc7] font-medium whitespace-nowrap">→ {t.assignee}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Transcript */}
        <div className="bg-white rounded-[12px] border border-[#e8e8e8] p-4">
          <p className="text-[10.5px] font-bold text-[#616161] uppercase tracking-wider mb-2.5">Transcripción</p>
          <p className="text-[11.5px] text-[#616161] leading-relaxed line-clamp-4">
            Juan: Necesitamos definir las prioridades para el Q2 antes de fin de mes.<br />
            Laura: Estoy de acuerdo. El foco debería estar en la integración con Notion y mejorar la precisión.<br />
            Juan: ¿Podemos tener un prototipo para la siguiente semana?<br />
            Laura: Sí, el jueves deberíamos tener algo funcional para revisar...
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Recording ───────────────────────────────────────── */
function Recording() {
  const [state, setState] = useState<"idle" | "recording" | "paused" | "done">("idle");
  const [timer] = useState("00:00");
  return (
    <div className="flex-1 overflow-auto bg-[#f5f5f5] p-6">
      <h2 className="text-[18px] font-bold text-[#242424] mb-6">Grabar reunión</h2>
      <div className="bg-white rounded-[16px] border border-[#e8e8e8] p-8 flex flex-col items-center gap-7 max-w-sm mx-auto">
        {/* Visualizer */}
        <div className={`w-40 h-40 rounded-full border-[3px] flex flex-col items-center justify-center transition-all duration-300 ${
          state === "recording"
            ? "border-[#f87171] shadow-[0_0_0_6px_rgba(248,113,113,0.1),0_0_0_14px_rgba(248,113,113,0.05)]"
            : "border-[#e0e0e0]"
        }`}>
          <span className="text-[28px] font-bold text-[#242424] tabular-nums tracking-wide">{timer}</span>
          {state === "recording" && <span className="text-[10px] font-bold text-[#f87171] mt-1">● REC</span>}
          {state === "paused" && <span className="text-[10px] font-bold text-[#f0a830] mt-1">⏸ PAUSADO</span>}
          {state === "idle" && <span className="text-[10px] text-[#a0a0a0] mt-1">Listo</span>}
        </div>

        {/* Controls */}
        <div className="flex gap-2.5 flex-wrap justify-center">
          {state === "idle" && (
            <button onClick={() => setState("recording")} className="px-6 py-2.5 rounded-[10px] bg-[#f87171] text-white text-[13px] font-bold shadow-sm hover:bg-[#ef4444] transition-colors">
              ● Iniciar grabación
            </button>
          )}
          {state === "recording" && <>
            <button onClick={() => setState("paused")} className="px-4 py-2 rounded-lg bg-[#5b5fc7] text-white text-[12px] font-semibold">⏸ Pausar</button>
            <button onClick={() => setState("done")} className="px-4 py-2 rounded-lg bg-[#f5f5f5] border border-[#e0e0e0] text-[#616161] text-[12px] font-semibold">■ Detener</button>
          </>}
          {state === "paused" && <>
            <button onClick={() => setState("recording")} className="px-4 py-2 rounded-lg bg-[#5b5fc7] text-white text-[12px] font-semibold">▶ Reanudar</button>
            <button onClick={() => setState("done")} className="px-4 py-2 rounded-lg bg-[#f5f5f5] border border-[#e0e0e0] text-[#616161] text-[12px] font-semibold">■ Detener</button>
          </>}
          {state === "done" && (
            <button className="px-6 py-2.5 rounded-[10px] bg-[#5b5fc7] text-white text-[13px] font-bold shadow-sm">
              ⚡ Procesar con KRON
            </button>
          )}
        </div>

        <p className="text-[12px] text-[#a0a0a0] text-center">
          {state === "idle" && "Pulsa para comenzar la transcripción automática"}
          {state === "recording" && "Grabando... habla con normalidad"}
          {state === "paused" && "Grabación en pausa"}
          {state === "done" && "Grabación finalizada — procesa para obtener el resumen"}
        </p>
      </div>
    </div>
  );
}

/* ─── Main component ──────────────────────────────────── */
export default function AppPreview() {
  const [active, setActive] = useState("dashboard");

  const screenLabel: Record<string, string> = {
    dashboard: "Inicio",
    record: "Grabar",
    history: "Historial",
    friends: "Amigos",
    settings: "Ajustes",
  };

  return (
    <section className="py-28 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-[#0055e0] text-sm font-semibold uppercase tracking-widest mb-3">Vista previa</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-5 leading-tight">
            Así se ve{" "}
            <span className="gradient-text">MeetingScribe</span>
          </h2>
          <p className="text-[#4a6080] text-lg leading-relaxed">
            Una interfaz limpia y sin distracciones. Todo lo que necesitas, justo donde lo esperas.
          </p>
        </div>

        {/* App window */}
        <div className="rounded-2xl border border-[#b8d0f0] shadow-2xl shadow-[#0055e0]/10 overflow-hidden">
          {/* Window chrome */}
          <div className="bg-[#ebebeb] border-b border-[#d0d0d0] px-4 py-2.5 flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="flex-1 flex justify-center">
              <div className="flex items-center gap-2 px-4 py-1 rounded-md bg-white border border-[#d0d0d0] text-[11px] text-[#616161] shadow-sm">
                <span>🎙️</span>
                <span className="font-medium">MeetingScribe — {screenLabel[active]}</span>
              </div>
            </div>
          </div>

          {/* App body */}
          <div className="flex h-[520px]">
            <Sidebar active={active} setActive={setActive} />
            {active === "dashboard" && <Dashboard setActive={setActive} />}
            {active === "history" && <History />}
            {active === "record" && <Recording />}
            {(active === "friends" || active === "settings") && (
              <div className="flex-1 bg-[#f5f5f5] flex items-center justify-center flex-col gap-3">
                <span className="text-4xl">{active === "friends" ? "👥" : "⚙️"}</span>
                <p className="text-[#616161] text-sm font-medium">Sección {screenLabel[active]}</p>
                <p className="text-[#a0a0a0] text-xs">Próximamente en la preview</p>
              </div>
            )}
          </div>
        </div>

        <p className="text-center text-xs text-[#9ab0cc] mt-4">
          * Vista previa interactiva — pulsa los elementos del menú lateral para navegar. MeetingScribe está en desarrollo activo.
        </p>
      </div>
    </section>
  );
}
