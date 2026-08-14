import React from "react";
import { Reveal } from "../../common";
import { CONCEPTS } from "../../../data/concepts";
import { C, DISPLAY, BODY } from "../../../styles/theme";

export function ConceptsGrid({ onOpen }) {
  return (
    <div className="grid md:grid-cols-3 gap-4 mb-16">
      {CONCEPTS.map((c, i) => {
        const Icon = c.icon;
        return (
          <Reveal key={c.id} delay={i * 90}>
            <div
              onClick={() => onOpen({ icon: c.icon, color: c.color, title: c.title, desc: c.desc, extra: c.extra })}
              className="h-full rounded-xl p-5 cursor-pointer transition-all hover:-translate-y-1"
              style={{ background: C.card, border: `1px solid ${C.border}` }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${c.color}88`)}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: `${c.color}22`, color: c.color }}>
                <Icon size={18} />
              </div>
              <h3 style={{ fontFamily: DISPLAY, color: C.text }} className="font-bold mb-2">
                {c.title}
              </h3>
              <p style={{ color: C.muted, fontFamily: BODY }} className="text-sm leading-relaxed line-clamp-3">
                {c.desc}
              </p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
