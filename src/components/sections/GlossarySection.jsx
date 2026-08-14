import React from "react";
import { BookOpen } from "lucide-react";
import { Section, SectionHeader, Reveal } from "../common";
import { GLOSSARY } from "../../data/glossary";
import { C, MONO } from "../../styles/theme";

const CHIP_COLORS = [C.green, C.blue, C.purple, C.amber, C.pink];

export function GlossarySection({ onOpen }) {
  return (
    <Section id="glossario" dark>
      <SectionHeader file="glossario.md" color={C.blue} title="Termos que você vai ouvir (traduzidos)" subtitle="Clique em qualquer termo pra ver o significado com calma." />
      <div className="flex flex-wrap gap-3">
        {GLOSSARY.map((g, i) => (
          <Reveal key={g.term} delay={(i % 5) * 50}>
            <button
              onClick={() => onOpen({ icon: BookOpen, color: CHIP_COLORS[i % CHIP_COLORS.length], title: g.term, desc: g.def })}
              className="px-4 py-2.5 rounded-lg transition-all hover:-translate-y-0.5"
              style={{ background: C.card, border: `1px solid ${C.border}`, fontFamily: MONO, color: C.text }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${C.blue}88`)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
            >
              <span style={{ color: C.blue }}>{"<"}</span>
              {g.term}
              <span style={{ color: C.blue }}>{" />"}</span>
            </button>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
