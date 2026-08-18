import React, { useState } from "react";
import { Terminal, Menu } from "lucide-react";
import { NAV_ITEMS } from "../../data/nav";
import { C, MONO } from "../../styles/theme";

export function Nav({ progress }) {
  const [open, setOpen] = useState(false);

  function goTo(id) {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <div className="sticky top-0 z-40 w-full">
      <div style={{ background: C.panel, borderBottom: `1px solid ${C.borderSoft}` }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 px-4 md:px-8 overflow-hidden">
          <div className="flex items-center gap-2 py-3 pr-3 shrink-0">
            <Terminal size={16} style={{ color: C.green }} />
            <span style={{ fontFamily: MONO, color: C.text }} className="text-sm font-medium hidden sm:inline">
              si-calouros
            </span>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1 min-w-0 overflow-hidden">
            {NAV_ITEMS.map((n) => (
              <button
                key={n.id}
                onClick={() => goTo(n.id)}
                style={{ fontFamily: MONO, borderRight: `1px solid ${C.borderSoft}`, color: C.muted }}
                className="px-2.5 py-3 text-[10px] lg:text-[11px] whitespace-nowrap transition-colors hover:text-white"
                onMouseEnter={(e) => (e.currentTarget.style.color = C.green)}
                onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
              >
                {n.label}
              </button>
            ))}
          </div>

          <button className="md:hidden py-3 text-white" onClick={() => setOpen((o) => !o)} aria-label="Menu">
            <Menu size={20} />
          </button>
        </div>

        {open && (
          <div className="md:hidden flex flex-col" style={{ borderTop: `1px solid ${C.borderSoft}` }}>
            {NAV_ITEMS.map((n) => (
              <button
                key={n.id}
                onClick={() => goTo(n.id)}
                style={{ fontFamily: MONO, color: C.muted, borderBottom: `1px solid ${C.borderSoft}` }}
                className="px-4 py-3 text-xs text-left"
              >
                {n.label}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="h-0.5 w-full" style={{ background: C.borderSoft }}>
        <div
          className="h-full"
          style={{ width: `${progress}%`, background: `linear-gradient(90deg, ${C.green}, ${C.blue}, ${C.purple})`, transition: "width 100ms linear" }}
        />
      </div>
    </div>
  );
}
