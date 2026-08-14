import { useEffect } from "react";

const SEQUENCE = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

// Escuta o Konami Code (↑ ↑ ↓ ↓ ← → ← → B A) em qualquer lugar da página
// e executa o callback quando a sequência é completada.
export function useKonamiCode(onUnlock) {
  useEffect(() => {
    let pos = 0;

    function onKeyDown(e) {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === SEQUENCE[pos]) {
        pos++;
        if (pos === SEQUENCE.length) {
          pos = 0;
          onUnlock();
        }
      } else {
        pos = key === SEQUENCE[0] ? 1 : 0;
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onUnlock]);
}
