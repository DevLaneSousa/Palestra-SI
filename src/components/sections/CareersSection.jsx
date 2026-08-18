import React from "react";
import { ChevronRight } from "lucide-react";
import { Section, SectionHeader, Reveal } from "../common";
import { CAREERS } from "../../data/careers";
import { C, DISPLAY, BODY } from "../../styles/theme";

export function CareersSection({ onOpen }) {
  return (
    <Section id="carreiras" dark>
      <SectionHeader
        file="carreiras.json"
        color={C.amber}
        title="Pra onde você pode ir depois de formado"
        subtitle="As principais trilhas de carreira em tecnologia. Clique em cada uma pra ver por onde começar."
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {CAREERS.map((c, i) => {
          const Icon = c.icon;
          return (
            <Reveal key={c.id} delay={(i % 3) * 70}>
              <div
                onClick={() =>
                  onOpen({
                    icon: c.icon,
                    color: c.color,
                    title: c.name,
                    subtitle: c.short,
                    desc: c.desc,
                    extra: c.extra,
                    list: c.start,
                  })
                }
                className="h-full rounded-xl p-5 cursor-pointer transition-all hover:-translate-y-1 group"
                style={{ background: C.card, border: `1px solid ${C.border}` }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${c.color}88`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110" style={{ background: `${c.color}22`, color: c.color }}>
                    <Icon size={18} />
                  </div>
                  <ChevronRight size={16} style={{ color: C.mutedSoft }} className="transition-transform group-hover:translate-x-1" />
                </div>
                <h3 style={{ fontFamily: DISPLAY, color: C.text }} className="font-bold mb-1.5">
                  {c.name}
                </h3>
                <p style={{ color: C.muted, fontFamily: BODY }} className="text-sm leading-relaxed">
                  {c.short}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
