import React from "react";
import { C, MONO } from "../../styles/theme";

export function Toast({ toast }) {
  if (!toast) return null;
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 animate-pop-in px-4">
      <div
        className="flex items-center gap-2.5 px-4 py-3 rounded-lg shadow-lg"
        style={{ background: C.card, border: `1px solid ${toast.color || C.green}55`, fontFamily: MONO }}
      >
        <span style={{ fontSize: 18 }}>{toast.emoji || "✨"}</span>
        <span style={{ color: C.text }} className="text-sm">
          {toast.message}
        </span>
      </div>
    </div>
  );
}
