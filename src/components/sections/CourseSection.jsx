import React from "react";
import { GraduationCap, Sparkles } from "lucide-react";
import { Section, SectionHeader, Reveal } from "../common";
import { COURSES } from "../../data/courses";
import { C, DISPLAY, MONO, BODY } from "../../styles/theme";

export function CourseSection({ onOpen }) {
  return (
    <Section id="curso" dark>
      <SectionHeader
        file="curso.tsx"
        color={C.blue}
        title="O que é Sistemas de Informação"
        subtitle="SI forma profissionais que ficam na ponte entre a tecnologia e o negócio: você aprende a programar e entender sistemas, mas também gestão e como a TI resolve problemas reais de uma empresa."
      />
      <div className="grid md:grid-cols-4 gap-4">
        {COURSES.map((c, i) => (
          <Reveal key={c.id} delay={i * 80}>
            <div
              onClick={() =>
                onOpen({
                  icon: GraduationCap,
                  color: c.color,
                  title: c.name.replace("\n", " "),
                  desc: c.desc,
                  extra: c.extra,
                })
              }
              className="h-full rounded-xl p-5 cursor-pointer transition-all hover:-translate-y-1"
              style={{
                background: c.highlight ? `linear-gradient(160deg, ${C.panel2}, ${C.card})` : C.card,
                border: c.highlight ? `1px solid ${c.color}55` : `1px solid ${C.border}`,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${c.color}88`)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = c.highlight ? `${c.color}55` : C.border)}
            >
              <div className="w-9 h-9 rounded-lg flex items-center justify-center mb-4" style={{ background: `${c.color}22`, color: c.color }}>
                {c.highlight ? <Sparkles size={18} /> : <span className="w-2 h-2 rounded-full" style={{ background: c.color }} />}
              </div>
              <h3 style={{ fontFamily: DISPLAY, color: C.text }} className="font-bold mb-2 whitespace-pre-line leading-snug">
                {c.name}
              </h3>
              <p style={{ color: C.muted, fontFamily: BODY }} className="text-sm leading-relaxed mb-3">
                {c.short}
              </p>
              {c.highlight && (
                <span style={{ fontFamily: MONO, color: c.color }} className="text-xs tracking-widest uppercase">
                  você está aqui
                </span>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
