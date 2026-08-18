import React, { useState } from "react";
import { Flame, X } from "lucide-react";
import { C, MONO } from "../../styles/theme";

// Aviso fixo de canto, lembrando que prática > teoria. Fica sobre o
// conteúdo (abaixo do modal) e some quando o aluno fecha.
export function PracticeBadge() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-30 max-w-[calc(100vw-2rem)]">
      <div
        className="animate-glow-pulse rounded-full flex items-center gap-2.5 pl-3.5 pr-2.5 py-2.5"
        style={{ background: C.card, border: `1px solid ${C.amber}55`, boxShadow: "0 8px 24px rgba(0,0,0,0.35)" }}
      >
        <Flame size={16} style={{ color: C.amber }} className="shrink-0 animate-pulse-soft" />
        <span style={{ fontFamily: MONO, color: C.text }} className="text-[11px] md:text-xs leading-snug">
          lembra-se, <strong style={{ color: C.amber }}>prática</strong> é mais importante do que estudar
        </span>
        <button
          onClick={() => setVisible(false)}
          aria-label="Fechar aviso"
          className="shrink-0 p-1 rounded-full transition-opacity hover:opacity-100"
          style={{ color: C.mutedSoft, opacity: 0.7 }}
        >
          <X size={13} />
        </button>
      </div>
    </div>
  );
}
