import React from "react";
import { Section, SectionHeader, Reveal, Eyebrow } from "../common";
import { STUDENT_QUESTIONS } from "../../data/studentQuestions";
import { C, DISPLAY, MONO, BODY } from "../../styles/theme";

export function QuestionsSection() {
  return (
    <Section id="perguntas" dark>
      <SectionHeader
        file="perguntas.md"
        color={C.purple}
        title="Abrindo espaço pra perguntas"
        subtitle="Separei algumas perguntas que costumam surgir. Se quiser, escolhe um número da lista e manda — ou pergunta a sua própria."
      />
      <div className="space-y-10">
        {STUDENT_QUESTIONS.map((group) => (
          <div key={group.id}>
            <Eyebrow color={group.color}>{group.title}</Eyebrow>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3.5">
              {group.questions.map((q, i) => (
                <Reveal key={i} delay={(i % 3) * 60}>
                  <div
                    className="h-full rounded-xl p-4 flex items-start gap-3 transition-all hover:-translate-y-1"
                    style={{ background: C.card, border: `1px solid ${C.border}` }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${group.color}88`)}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
                  >
                    <span
                      style={{ fontFamily: MONO, background: `${group.color}22`, color: group.color }}
                      className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                    >
                      {i + 1}
                    </span>
                    <p style={{ color: C.text, fontFamily: BODY }} className="text-sm leading-relaxed pt-0.5">
                      {q}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Reveal delay={80}>
        <p style={{ fontFamily: DISPLAY, color: C.mutedSoft }} className="text-sm mt-10 text-center">
          Nenhuma pergunta boba — só pergunta que não foi feita.
        </p>
      </Reveal>
    </Section>
  );
}
