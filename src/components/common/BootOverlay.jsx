import React, { useEffect, useState } from "react";
import { C, MONO } from "../../styles/theme";

const BOOT_LINES = ["$ whoami", "> kailane@fireframe", "$ cat boas-vindas.txt", "> carregando apresentação interativa..."];

// Tela de "boot" exibida por ~1.75s ao carregar a página (ver App.jsx),
// simulando um terminal ligando antes de revelar o site.
export function BootOverlay({ visible }) {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (shown >= BOOT_LINES.length) return;
    const t = setTimeout(() => setShown((s) => s + 1), 340);
    return () => clearTimeout(t);
  }, [shown]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-500 ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      style={{ background: C.bg }}
    >
      <div style={{ fontFamily: MONO }} className="text-sm md:text-base">
        {BOOT_LINES.slice(0, shown).map((l, i) => (
          <p key={i} className="mb-1" style={{ color: l.startsWith("$") ? C.muted : C.green }}>
            {l}
          </p>
        ))}
        <span className="inline-block w-2.5 h-4 align-middle animate-blink" style={{ background: C.green }} />
      </div>
    </div>
  );
}
