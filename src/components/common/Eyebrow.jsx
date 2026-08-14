import React from "react";
import { C, MONO } from "../../styles/theme";

export function Eyebrow({ children, color = C.amber }) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <span className="w-1.5 h-1.5 rounded-full animate-pulse-soft" style={{ background: color }} />
      <span style={{ fontFamily: MONO, color: C.muted }} className="text-xs tracking-widest uppercase">
        {children}
      </span>
    </div>
  );
}
