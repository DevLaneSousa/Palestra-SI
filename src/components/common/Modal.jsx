import React, { useEffect } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { TrafficLights } from "./TrafficLights";
import { C, DISPLAY, MONO, BODY } from "../../styles/theme";

// Modal genérico usado por todas as seções clicáveis do site.
// Recebe um objeto `item` flexível: { icon | emoji, color, title, subtitle,
// desc, extra, list, listLabel, images }. Cada seção decide o que preencher.
export function Modal({ item, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!item) return null;
  const Icon = item.icon;
  const color = item.color || C.blue;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 animate-fade-in" onClick={onClose}>
      <div className="absolute inset-0" style={{ background: "rgba(4,6,10,0.75)", backdropFilter: "blur(4px)" }} />
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl rounded-xl overflow-hidden animate-pop-in max-h-[85vh] overflow-y-auto"
        style={{ background: C.card, border: `1px solid ${C.border}`, boxShadow: "0 24px 60px rgba(0,0,0,0.5)" }}
      >
        <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: `1px solid ${C.borderSoft}`, background: C.panel2 }}>
          <div className="flex items-center gap-3">
            <TrafficLights />
            <span style={{ fontFamily: MONO, color: C.mutedSoft }} className="text-xs">
              info.peek
            </span>
          </div>
          <button onClick={onClose} aria-label="Fechar" className="p-1 rounded transition-colors hover:opacity-100" style={{ color: C.muted }}>
            <X size={16} />
          </button>
        </div>

        <div className="p-6 md:p-7">
          {item.images && (
            <div className={`grid gap-2 mb-5 -mt-1 ${item.images.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
              {item.images.map((src, i) => (
                <div key={i} className="rounded-lg overflow-hidden" style={{ aspectRatio: item.images.length > 1 ? "16/10" : "4/3", background: C.panel2 }}>
                  <img src={src} alt={`${item.title} — imagem ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          )}

          <div className="flex items-start gap-4 mb-4">
            {Icon && (
              <div className="shrink-0 w-11 h-11 rounded-lg flex items-center justify-center" style={{ background: `${color}22`, color }}>
                <Icon size={22} />
              </div>
            )}
            {item.emoji && (
              <div className="shrink-0 w-11 h-11 rounded-lg flex items-center justify-center text-2xl" style={{ background: `${color}22` }}>
                {item.emoji}
              </div>
            )}
            <div>
              <h3 style={{ fontFamily: DISPLAY, color: C.text }} className="text-xl font-bold leading-snug whitespace-pre-line">
                {item.title}
              </h3>
              {item.subtitle && (
                <p style={{ color, fontFamily: MONO }} className="text-xs mt-1">
                  {item.subtitle}
                </p>
              )}
            </div>
          </div>

          <p style={{ color: C.text, fontFamily: BODY }} className="text-sm leading-relaxed opacity-90 mb-4">
            {item.desc}
          </p>

          {item.extra && (
            <div className="rounded-lg p-3.5 mb-4" style={{ background: `${color}14`, border: `1px solid ${color}33` }}>
              <p style={{ color: C.text, fontFamily: BODY }} className="text-sm leading-relaxed">
                {item.extra}
              </p>
            </div>
          )}

          {item.list && (
            <div className="mt-2">
              <p style={{ fontFamily: MONO, color }} className="text-xs tracking-widest uppercase mb-2.5">
                {item.listLabel || "Para começar, aprenda"}
              </p>
              <ul className="space-y-2">
                {item.list.map((li, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} style={{ color, marginTop: 2 }} className="shrink-0" />
                    <span style={{ color: C.text, fontFamily: BODY }} className="text-sm leading-snug">
                      {li}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
