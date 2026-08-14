import { useEffect, useState } from "react";

// Retorna o progresso de rolagem da página em porcentagem (0-100).
// Usado na barrinha de progresso fixa no topo da navegação.
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const html = document.documentElement;
      const scrollTop = html.scrollTop || document.body.scrollTop;
      const scrollHeight = (html.scrollHeight || document.body.scrollHeight) - html.clientHeight;
      setProgress(scrollHeight > 0 ? Math.min(100, (scrollTop / scrollHeight) * 100) : 0);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}
