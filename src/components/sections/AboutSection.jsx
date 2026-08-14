import React from "react";
import { GraduationCap } from "lucide-react";
import { Section, SectionHeader, Reveal } from "../common";
import { ABOUT } from "../../data/about";
import { C, DISPLAY, MONO, BODY } from "../../styles/theme";

export function AboutSection({ onOpen }) {
  return (
    <Section id="sobre">
      <SectionHeader file="sobre.md" color={C.green} title="Quem está falando" subtitle="Antes de mais nada — um pouco sobre quem tá do outro lado dessa tela." />

      <Reveal>
        <div
          className="rounded-xl overflow-hidden grid md:grid-cols-3 cursor-pointer transition-transform hover:-translate-y-1 mb-6"
          style={{ background: C.card, border: `1px solid ${C.border}` }}
          onClick={() =>
            onOpen({
              icon: GraduationCap,
              color: C.green,
              title: ABOUT.name,
              subtitle: ABOUT.brand,
              desc: ABOUT.bio,
              extra: `${ABOUT.achievement}. ${ABOUT.extra}`,
              list: [ABOUT.email, ABOUT.github, ABOUT.linkedin, ABOUT.location],
              listLabel: "Contato",
            })
          }
        >
          <div className="p-6 flex flex-col items-center justify-center text-center" style={{ background: C.panel2, borderRight: `1px solid ${C.border}` }}>
            <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-3" style={{ background: C.panel }}>
              👩‍💻
            </div>
            <p style={{ fontFamily: DISPLAY, color: C.text }} className="font-bold">
              {ABOUT.name}
            </p>
            <p style={{ fontFamily: MONO, color: C.muted }} className="text-xs mt-1">
              {ABOUT.brand}
            </p>
          </div>
          <div className="md:col-span-2 p-6 flex flex-col justify-center gap-3">
            {[
              [ABOUT.age, C.green],
              [ABOUT.formation, C.blue],
              [ABOUT.role, C.purple],
              [ABOUT.achievement, C.amber],
            ].map(([txt, color], i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: color }} />
                <span style={{ color: C.text, fontFamily: BODY }} className="text-sm">
                  {txt}
                </span>
              </div>
            ))}
            <p style={{ color: C.mutedSoft, fontFamily: MONO }} className="text-xs mt-2">
              clique no card para ler a bio completa →
            </p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="grid sm:grid-cols-3 gap-4">
          {ABOUT.timeline.map((t, i) => (
            <div key={i} className="rounded-xl p-4" style={{ background: C.card, border: `1px solid ${C.border}` }}>
              <span style={{ fontFamily: MONO, color: C.amber }} className="text-xs tracking-widest uppercase">
                {t.year}
              </span>
              <h4 style={{ fontFamily: DISPLAY, color: C.text }} className="font-bold mt-1.5 mb-1">
                {t.label}
              </h4>
              <p style={{ color: C.muted, fontFamily: BODY }} className="text-xs leading-relaxed">
                {t.desc}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
