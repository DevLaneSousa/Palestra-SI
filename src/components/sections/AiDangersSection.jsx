import React from "react";
import { Section, SectionHeader, Reveal } from "../common";
import { AI_DANGERS } from "../../data/aiDangers";
import { C, DISPLAY, BODY } from "../../styles/theme";

export function AiDangersSection({ onOpen }) {
  return (
    <Section id="ia-perigos" dark>
      <SectionHeader
        file="chatgpt.js"
        color={C.red}
        title="ChatGPT e seus perigos"
        subtitle="IA é uma ferramenta poderosa pra estudar e produzir mais — mas usada do jeito errado, ela atrapalha mais do que ajuda. Fique de olho nisso:"
      />
      <div className="grid sm:grid-cols-2 gap-4">
        {AI_DANGERS.map((d, i) => {
          const Icon = d.icon;
          return (
            <Reveal key={d.id} delay={(i % 2) * 90}>
              <div
                onClick={() => onOpen({ icon: d.icon, color: d.color, title: d.title, desc: d.desc })}
                className="h-full rounded-xl p-5 cursor-pointer transition-all hover:-translate-y-1 flex gap-4"
                style={{ background: C.card, border: `1px solid ${C.border}` }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${d.color}88`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${d.color}22`, color: d.color }}>
                  <Icon size={18} />
                </div>
                <div>
                  <h3 style={{ fontFamily: DISPLAY, color: C.text }} className="font-bold mb-1.5 text-base">
                    {d.title}
                  </h3>
                  <p style={{ color: C.muted, fontFamily: BODY }} className="text-sm leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
