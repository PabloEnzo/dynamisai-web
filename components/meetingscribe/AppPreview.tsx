"use client";
import { useState } from "react";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/translations";

type AppTx = typeof t["es"]["meetingscribe"]["appPreview"];

/* ─── Sidebar ─────────────────────────────────────────── */
function Sidebar({ active, setActive, tx }: { active: string; setActive: (s: string) => void; tx: AppTx }) {
  return (
    <div className="w-[200px] shrink-0 flex flex-col h-full bg-[#f3f2f1] border-r border-[#e0e0e0]">
      {/* Logo */}
      <div className="px-4 py-3.5 border-b border-[#e0e0e0]">
        <span className="text-[13px] font-bold text-[#242424] tracking-tight">MeetingScribe</span>
      </div>
      {/* Nav */}
      <nav className="flex-1 p-2.5 flex flex-col gap-0.5">
        {tx.sidebarItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`flex items-center gap-2.5 px-2.5 py-2 rounded-md text-left w-full transition-all text-[12.5px] font-medium ${
              active === item.id
                ? "bg-[#5b5fc71a] text-[#444791]"
                : "text-[#616161] hover:bg-[#e8e8e8] hover:text-[#242424]"
            }`}
          >
            <span className={`text-[13px] w-5 ${active === item.id ? "text-[#5b5fc7]" : "opacity-70"}`}>
              {item.id === "dashboard" ? "⊞" : item.id === "record" ? "◉" : item.id === "history" ? "≡" : item.id === "friends" ? "·" : "⚙"}
            </span>
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
function Dashboard({ setActive, tx }: { setActive: (s: string) => void; tx: AppTx }) {
  const d = tx.dashboard;
  const meetings = tx.meetings;
  return (
    <div className="flex-1 overflow-auto bg-[#f5f5f5] p-6 flex flex-col gap-5">
      {/* Header */}
      <div>
        <h2 className="text-[18px] font-bold text-[#242424]">{d.greeting}</h2>
        <p className="text-[13px] text-[#616161] mt-0.5">{d.subtitle}</p>
      </div>
      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {d.stats.map((s) => (
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
          <p className="text-[14px] font-semibold text-[#242424]">{d.startRecording}</p>
          <p className="text-[12px] text-[#616161] mt-0.5">{d.startRecordingDesc}</p>
        </div>
        <button className="px-4 py-2 rounded-lg bg-[#5b5fc7] text-white text-[12.5px] font-bold shadow-sm whitespace-nowrap">
          {d.recordNow}
        </button>
      </div>
      {/* Recent meetings */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-[13px] font-bold text-[#242424]">{d.recentMeetings}</p>
          <button className="text-[12px] text-[#5b5fc7] hover:text-[#444791]" onClick={() => setActive("history")}>{d.viewAll}</button>
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
function History({ tx }: { tx: AppTx }) {
  const [selected, setSelected] = useState(0);
  const meetings = tx.meetings;
  const tasksList = tx.tasksList;
  const h = tx.history;
  const m = meetings[selected];
  return (
    <div className="flex-1 overflow-hidden flex bg-[#f5f5f5]">
      {/* List */}
      <div className="w-[240px] shrink-0 border-r border-[#e0e0e0] flex flex-col bg-white">
        <div className="px-4 py-3.5 border-b border-[#e0e0e0] flex items-center justify-between">
          <p className="text-[14px] font-bold text-[#242424]">{h.title}</p>
          <span className="text-[11px] text-[#a0a0a0] bg-[#f5f5f5] border border-[#e8e8e8] px-2 py-0.5 rounded-full">{meetings.length}</span>
        </div>
        <div className="p-3">
          <div className="flex items-center bg-[#f5f5f5] border border-[#e8e8e8] rounded-lg px-3 py-2 gap-2">
            <span className="text-[#a0a0a0] text-[12px]">⌕</span>
            <input className="bg-transparent text-[12px] text-[#242424] outline-none placeholder-[#a0a0a0] w-full" placeholder={h.search} readOnly />
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
              {h.export}
            </button>
            <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#10b981] text-[11.5px] text-[#10b981]">
              {h.public}
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-white rounded-[12px] border border-[#e8e8e8] p-4">
          <div className="flex items-center justify-between mb-2.5">
            <p className="text-[10.5px] font-bold text-[#616161] uppercase tracking-wider">{h.summary}</p>
            <span className="text-[9.5px] font-bold text-[#5b5fc7] bg-[#5b5fc714] px-2 py-0.5 rounded-full uppercase tracking-wide">KRON AI</span>
          </div>
          <p className="text-[12.5px] text-[#242424] leading-relaxed">{m.summary}</p>
        </div>

        {/* Tasks */}
        <div className="bg-white rounded-[12px] border border-[#e8e8e8] p-4">
          <p className="text-[10.5px] font-bold text-[#616161] uppercase tracking-wider mb-3">{h.tasks}</p>
          <ul className="flex flex-col gap-2.5">
            {tasksList.map((task, i) => (
              <li key={i} className={`flex items-start gap-2.5 ${task.done ? "opacity-60" : ""}`}>
                <span className={`text-[13px] mt-0.5 shrink-0 ${task.done ? "text-[#10b981]" : "text-[#a0a0a0]"}`}>{task.done ? "✓" : "○"}</span>
                <p className={`text-[12.5px] flex-1 ${task.done ? "line-through text-[#a0a0a0]" : "text-[#242424]"}`}>{task.text}</p>
                <span className="text-[11px] text-[#5b5fc7] font-medium whitespace-nowrap">→ {task.assignee}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Transcript */}
        <div className="bg-white rounded-[12px] border border-[#e8e8e8] p-4">
          <p className="text-[10.5px] font-bold text-[#616161] uppercase tracking-wider mb-2.5">{h.transcript}</p>
          <p className="text-[11.5px] text-[#616161] leading-relaxed line-clamp-4 whitespace-pre-line">
            {tx.transcript}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ─── Recording ───────────────────────────────────────── */
function Recording({ tx }: { tx: AppTx }) {
  const [state, setState] = useState<"idle" | "recording" | "paused" | "done">("idle");
  const [timer] = useState("00:00");
  const r = tx.recording;
  return (
    <div className="flex-1 overflow-auto bg-[#f5f5f5] p-6">
      <h2 className="text-[18px] font-bold text-[#242424] mb-6">{r.title}</h2>
      <div className="bg-white rounded-[16px] border border-[#e8e8e8] p-8 flex flex-col items-center gap-7 max-w-sm mx-auto">
        {/* Visualizer */}
        <div className={`w-40 h-40 rounded-full border-[3px] flex flex-col items-center justify-center transition-all duration-300 ${
          state === "recording"
            ? "border-[#f87171] shadow-[0_0_0_6px_rgba(248,113,113,0.1),0_0_0_14px_rgba(248,113,113,0.05)]"
            : "border-[#e0e0e0]"
        }`}>
          <span className="text-[28px] font-bold text-[#242424] tabular-nums tracking-wide">{timer}</span>
          {state === "recording" && <span className="text-[10px] font-bold text-[#f87171] mt-1">● {r.rec}</span>}
          {state === "paused" && <span className="text-[10px] font-bold text-[#f0a830] mt-1">⏸ {r.paused}</span>}
          {state === "idle" && <span className="text-[10px] text-[#a0a0a0] mt-1">{r.ready}</span>}
        </div>

        {/* Controls */}
        <div className="flex gap-2.5 flex-wrap justify-center">
          {state === "idle" && (
            <button onClick={() => setState("recording")} className="px-6 py-2.5 rounded-[10px] bg-[#f87171] text-white text-[13px] font-bold shadow-sm hover:bg-[#ef4444] transition-colors">
              {r.start}
            </button>
          )}
          {state === "recording" && <>
            <button onClick={() => setState("paused")} className="px-4 py-2 rounded-lg bg-[#5b5fc7] text-white text-[12px] font-semibold">{r.pause}</button>
            <button onClick={() => setState("done")} className="px-4 py-2 rounded-lg bg-[#f5f5f5] border border-[#e0e0e0] text-[#616161] text-[12px] font-semibold">{r.stop}</button>
          </>}
          {state === "paused" && <>
            <button onClick={() => setState("recording")} className="px-4 py-2 rounded-lg bg-[#5b5fc7] text-white text-[12px] font-semibold">{r.resume}</button>
            <button onClick={() => setState("done")} className="px-4 py-2 rounded-lg bg-[#f5f5f5] border border-[#e0e0e0] text-[#616161] text-[12px] font-semibold">{r.stop}</button>
          </>}
          {state === "done" && (
            <button className="px-6 py-2.5 rounded-[10px] bg-[#5b5fc7] text-white text-[13px] font-bold shadow-sm">
              {r.process}
            </button>
          )}
        </div>

        <p className="text-[12px] text-[#a0a0a0] text-center">
          {state === "idle" && r.hintIdle}
          {state === "recording" && r.hintRecording}
          {state === "paused" && r.hintPaused}
          {state === "done" && r.hintDone}
        </p>
      </div>
    </div>
  );
}

/* ─── Main component ──────────────────────────────────── */
export default function AppPreview() {
  const [active, setActive] = useState("dashboard");
  const { lang } = useLang();
  const tx = t[lang].meetingscribe.appPreview;

  const screenLabel = tx.screenLabel as Record<string, string>;

  return (
    <section className="py-28 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-[#0055e0] text-sm font-semibold uppercase tracking-widest mb-3">{tx.eyebrow}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a1628] mb-5 leading-tight">
            {tx.title[0]}
            <span className="gradient-text">{tx.title[1]}</span>
          </h2>
          <p className="text-[#4a6080] text-lg leading-relaxed">
            {tx.description}
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
                <span className="font-medium">MeetingScribe — {screenLabel[active]}</span>
              </div>
            </div>
          </div>

          {/* App body */}
          <div className="flex h-[520px]">
            <Sidebar active={active} setActive={setActive} tx={tx} />
            {active === "dashboard" && <Dashboard setActive={setActive} tx={tx} />}
            {active === "history" && <History tx={tx} />}
            {active === "record" && <Recording tx={tx} />}
            {(active === "friends" || active === "settings") && (
              <div className="flex-1 bg-[#f5f5f5] flex items-center justify-center flex-col gap-3">
                <span className="text-4xl">—</span>
                <p className="text-[#616161] text-sm font-medium">{tx.section} {screenLabel[active]}</p>
                <p className="text-[#a0a0a0] text-xs">{tx.comingSoon}</p>
              </div>
            )}
          </div>
        </div>

        <p className="text-center text-xs text-[#9ab0cc] mt-4">
          {tx.note}
        </p>
      </div>
    </section>
  );
}
