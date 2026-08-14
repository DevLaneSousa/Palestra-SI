import { useRef } from "react";

// Carrossel simples baseado em scroll nativo (funciona com swipe no
// celular de graça). Os botões apenas deslocam o scroll por um "cartão"
// de largura aproximada — não há necessidade de estado de índice.
export function useCarousel() {
  const trackRef = useRef(null);

  function scrollBy(direction) {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8 * direction;
    el.scrollBy({ left: amount, behavior: "smooth" });
  }

  return { trackRef, scrollBy };
}
