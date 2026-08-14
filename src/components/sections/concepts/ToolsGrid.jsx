import React from "react";
import { Reveal, Eyebrow } from "../../common";
import { TOOLS } from "../../../data/tools";
import { C, DISPLAY, BODY } from "../../../styles/theme";

export function ToolsGrid({ onOpen }) {
  return (
    <>
      <Reveal>
        <Eyebrow color={C.green}>caixa-de-ferramentas.sh</Eyebrow>
        <h3 style={{ fontFamily: DISPLAY, color: C.text }} className="text-2xl font-bold mb-8">
          Ferramentas essenciais para começar
        </h3>
      </Reveal>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {TOOLS.map((t, i) => {
          const Icon = t.icon;
          return (
            <Reveal key={t.id} delay={(i % 4) * 60}>
              <div
                onClick={() => onOpen({ icon: t.icon, color: C.green, title: t.title, desc: t.desc, extra: t.why })}
                className="h-full rounded-xl p-4 text-center cursor-pointer transition-all hover:-translate-y-1"
                style={{ background: C.card, border: `1px solid ${C.border}` }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${C.green}88`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3" style={{ background: `${C.green}1A`, color: C.green }}>
                  <Icon size={18} />
                </div>
                <h4 style={{ fontFamily: DISPLAY, color: C.text }} className="font-semibold text-xs mb-1">
                  {t.title}
                </h4>
                <p style={{ color: C.mutedSoft, fontFamily: BODY }} className="text-xs leading-snug">
                  {t.desc}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </>
  );
}
