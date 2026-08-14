import React from "react";

// Recebe uma lista de "pedaços" de confete já calculados (posição, cor,
// duração) e apenas renderiza — toda a lógica de disparo vive em
// hooks/useEasterEggs.js, mantendo este componente burro e reutilizável.
export function Confetti({ pieces }) {
  if (!pieces.length) return null;
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-sm confetti-piece"
          style={{
            left: `${p.left}%`,
            top: "-5%",
            width: p.size,
            height: p.size * 0.5,
            background: p.color,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
