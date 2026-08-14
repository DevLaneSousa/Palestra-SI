import { useEffect, useState } from "react";
import { useKonamiCode } from "./useKonamiCode";
import { C } from "../styles/theme";

// Consolida os quatro easter eggs do site (confete, besouro voador, toast
// de feedback e Konami Code) em um único hook, mantendo o App.jsx livre
// de lógica de estado que não seja composição de seções.
export function useEasterEggs() {
  const [confetti, setConfetti] = useState([]);
  const [bugFlying, setBugFlying] = useState(false);
  const [toast, setToast] = useState(null);

  // easter egg: mensagem escondida no console pra quem abrir o devtools
  useEffect(() => {
    console.log(
      "%c🐛 Se você abriu o console, já tá com metade do instinto de dev.",
      "color:#3FB950; font-family: monospace; font-size: 13px; font-weight: bold;"
    );
    console.log(
      "%cPsst... tem um Konami Code escondido nessa página. ↑ ↑ ↓ ↓ ← → ← → B A",
      "color:#58A6FF; font-family: monospace; font-size: 12px;"
    );
  }, []);

  function showToast(t) {
    setToast(t);
    setTimeout(() => setToast(null), 3200);
  }

  function burstConfetti() {
    const colors = [C.green, C.blue, C.purple, C.amber, C.pink];
    const pieces = Array.from({ length: 46 }).map((_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      color: colors[i % colors.length],
      duration: 2.2 + Math.random() * 1.6,
      delay: Math.random() * 0.4,
      size: 6 + Math.random() * 6,
    }));
    setConfetti(pieces);
    setTimeout(() => setConfetti([]), 4200);
  }

  function triggerBug() {
    setBugFlying(true);
    showToast({ emoji: "🐛", message: 'Achamos um "bug" de verdade — ele já era em 1947.', color: C.green });
    setTimeout(() => setBugFlying(false), 4300);
  }

  // easter egg: Konami Code em qualquer lugar da página
  useKonamiCode(() => {
    burstConfetti();
    showToast({ emoji: "🏆", message: "Modo dev(a) sênior desbloqueado!", color: C.amber });
  });

  return { confetti, bugFlying, toast, burstConfetti, triggerBug };
}
