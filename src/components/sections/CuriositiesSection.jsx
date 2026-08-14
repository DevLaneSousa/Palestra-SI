import React from "react";
import { Section, SectionHeader, Reveal } from "../common";
import { CURIOSITIES } from "../../data/curiosities";
import { C, DISPLAY, MONO, BODY } from "../../styles/theme";

export function CuriositiesSection({ onOpen, onBug }) {
  return (
    <Section id="curiosidades">
      <SectionHeader file="fun-facts.js" color={C.amber} title="Curiosidades do mundo da programação" subtitle="Pra descontrair — a origem real de alguns nomes e termos que a gente usa sem pensar." />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {CURIOSITIES.map((c, i) => (
          <Reveal key={c.id} delay={(i % 3) * 80}>
            <div
              onClick={() => {
                onOpen({ emoji: c.emoji, color: c.color, title: c.title, desc: c.desc, extra: c.extra });
                if (c.id === "bug") onBug();
              }}
              className="h-full rounded-xl p-5 cursor-pointer transition-all hover:-translate-y-1 hover:rotate-1"
              style={{ background: C.card, border: `1px solid ${C.border}` }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${c.color}88`)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
            >
              <div className="text-3xl mb-3">{c.emoji}</div>
              <h3 style={{ fontFamily: DISPLAY, color: C.text }} className="font-bold mb-2">
                {c.title}
              </h3>
              <p style={{ color: C.muted, fontFamily: BODY }} className="text-sm leading-relaxed">
                {c.desc}
              </p>
              <p style={{ color: c.color, fontFamily: MONO }} className="text-xs mt-3">
                clique pra saber mais →
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
