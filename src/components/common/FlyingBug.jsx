import React from "react";

// Easter egg disparado ao clicar no card "Por que bug?" das curiosidades.
// `active` controla a montagem/desmontagem — a animação CSS (bug-fly, em
// styles/globals.css) cuida do trajeto e do fade-out ao final.
export function FlyingBug({ active }) {
  if (!active) return null;
  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <div className="bug-fly-path">
        <span className="inline-block bug-flap" style={{ fontSize: 34 }}>
          🪲
        </span>
      </div>
    </div>
  );
}
