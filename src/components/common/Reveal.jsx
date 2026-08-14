import React from "react";
import { useReveal } from "../../hooks/useReveal";

// Envolve qualquer conteúdo e o revela com fade + slide-up quando
// entra na viewport. Base de quase todas as animações de entrada do site.
export function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}
