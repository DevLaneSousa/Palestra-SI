import React from "react";
import { Section, SectionHeader, Reveal } from "../common";
import { CHALLENGES } from "../../data/challenges";
import { C, DISPLAY, BODY } from "../../styles/theme";

export function ChallengesSection({ onOpen }) {
  return (
    <Section id="desafios">
      <SectionHeader file="desafios.log" color={C.pink} title="Dificuldades comuns na área" subtitle="O que ninguém te conta no primeiro período — e que é importante saber desde já." />
      <div className="grid md:grid-cols-2 gap-4">
        {CHALLENGES.map((c, i) => {
          const Icon = c.icon;
          return (
            <Reveal key={c.id} delay={i * 80}>
              <div
                onClick={() => onOpen({ icon: c.icon, color: c.color, title: c.title, desc: c.desc, extra: c.tip })}
                className="h-full rounded-xl p-5 cursor-pointer transition-all hover:-translate-y-1 flex gap-4"
                style={{ background: C.card, border: `1px solid ${C.border}` }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${c.color}88`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${c.color}22`, color: c.color }}>
                  <Icon size={18} />
                </div>
                <div>
                  <h3 style={{ fontFamily: DISPLAY, color: C.text }} className="font-bold mb-1.5 text-base">
                    {c.title}
                  </h3>
                  <p style={{ color: C.muted, fontFamily: BODY }} className="text-sm leading-relaxed">
                    {c.desc}
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
