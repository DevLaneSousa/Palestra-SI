import React from "react";
import { C } from "../../styles/theme";

// Wrapper padrão de todas as seções: cuida do id (usado pela navegação),
// da largura máxima centralizada e da alternância de fundo panel/bg.
export function Section({ id, dark, children, className = "" }) {
  return (
    <section
      id={id}
      style={{ background: dark ? C.panel : C.bg }}
      className={`relative w-full py-20 md:py-24 px-6 md:px-12 lg:px-20 ${className}`}
    >
      <div className="max-w-6xl mx-auto relative">{children}</div>
    </section>
  );
}
