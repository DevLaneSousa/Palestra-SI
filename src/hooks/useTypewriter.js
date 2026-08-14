import { useEffect, useState } from "react";

// Revela o texto informado caractere por caractere, no intervalo dado.
// Usado no snippet de código do Hero.
export function useTypewriter(text, speedMs = 55) {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i++;
      setTyped(text.slice(0, i));
      if (i >= text.length) clearInterval(t);
    }, speedMs);
    return () => clearInterval(t);
  }, [text, speedMs]);

  return typed;
}
