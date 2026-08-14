import React from "react";
import { Reveal, Eyebrow } from "../../common";
import { DEV_ENV } from "../../../data/devEnv";
import { C, DISPLAY, BODY } from "../../../styles/theme";

export function DevEnvGrid({ onOpen }) {
  return (
    <>
      <Reveal>
        <Eyebrow color={C.blue}>ambiente-de-dev.config</Eyebrow>
        <h3 style={{ fontFamily: DISPLAY, color: C.text }} className="text-2xl font-bold mb-8">
          O que é o "ambiente de desenvolvimento"
        </h3>
      </Reveal>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-16">
        {DEV_ENV.map((d, i) => {
          const Icon = d.icon;
          return (
            <Reveal key={d.id} delay={i * 60}>
              <div
                onClick={() => onOpen({ icon: d.icon, color: d.color, title: d.title, desc: d.desc })}
                className="h-full rounded-xl p-4 cursor-pointer transition-all hover:-translate-y-1 flex items-start gap-3"
                style={{ background: C.card, border: `1px solid ${C.border}` }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${d.color}88`)}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${d.color}22`, color: d.color }}>
                  <Icon size={16} />
                </div>
                <div>
                  <h4 style={{ fontFamily: DISPLAY, color: C.text }} className="font-semibold text-sm mb-1">
                    {d.title}
                  </h4>
                  <p style={{ color: C.muted, fontFamily: BODY }} className="text-xs leading-relaxed">
                    {d.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </>
  );
}
