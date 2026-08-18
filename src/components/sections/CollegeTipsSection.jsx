import React from "react";
import { Section, SectionHeader, Reveal } from "../common";
import { COLLEGE_TIPS } from "../../data/collegeTips";
import { C, DISPLAY, BODY } from "../../styles/theme";

export function CollegeTipsSection({ onOpen }) {
  return (
    <Section id="faculdade">
      <SectionHeader
        file="faculdade.md"
        color={C.amber}
        title="Como aproveitar a faculdade da melhor forma?"
        subtitle="O diploma é só uma parte. Isso aqui é o que realmente diferencia um currículo no meio de centenas de outros."
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {COLLEGE_TIPS.map((t, i) => {
          const Icon = t.icon;
          return (
            <Reveal key={t.id} delay={(i % 3) * 80}>
              <div
                onClick={() => onOpen({ icon: t.icon, color: t.color, title: t.title, desc: t.desc })}
                className="h-full rounded-xl p-5 cursor-pointer transition-all hover:-translate-y-1"
                style={{ background: C.card, border: `1px solid ${C.border}` }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${t.color}88`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: `${t.color}22`, color: t.color }}>
                  <Icon size={18} />
                </div>
                <h3 style={{ fontFamily: DISPLAY, color: C.text }} className="font-bold mb-1.5">
                  {t.title}
                </h3>
                <p style={{ color: C.muted, fontFamily: BODY }} className="text-sm leading-relaxed">
                  {t.desc}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
