import React from "react";
import { Rocket, Github, Linkedin, MapPin } from "lucide-react";
import { Reveal } from "../common";
import { ABOUT } from "../../data/about";
import { C, DISPLAY, MONO, BODY } from "../../styles/theme";

export function Footer({ onBurst }) {
  return (
    <footer className="relative overflow-hidden" style={{ background: C.panel }}>
      <div className="absolute inset-0 opacity-40" style={{ background: `radial-gradient(circle at 30% 20%, ${C.green}22, transparent 55%)` }} />
      <div className="relative max-w-4xl mx-auto px-6 md:px-12 py-20 text-center">
        <Reveal>
          <div className="text-4xl mb-4">🚀</div>
          <h2 style={{ fontFamily: DISPLAY, color: C.text }} className="text-3xl md:text-4xl font-bold mb-4">
            Bora começar essa jornada?
          </h2>
          <p style={{ color: C.muted, fontFamily: BODY }} className="max-w-xl mx-auto mb-8">
            Bem-vindos ao curso — e boa jornada em Sistemas de Informação. Tudo o que foi contado aqui, eu vivi primeiro.
          </p>
          <button
            onClick={onBurst}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-medium transition-transform hover:scale-105"
            style={{ background: C.green, color: "#04240F", fontFamily: BODY }}
          >
            <Rocket size={18} />
            Vamos nessa!
          </button>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-14 pt-8" style={{ borderTop: `1px solid ${C.borderSoft}` }}>
            <a href={`https://${ABOUT.github}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm transition-colors" style={{ color: C.muted, fontFamily: MONO }}>
              <Github size={16} /> {ABOUT.github}
            </a>
            <a href={`https://${ABOUT.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm transition-colors" style={{ color: C.muted, fontFamily: MONO }}>
              <Linkedin size={16} /> {ABOUT.linkedin}
            </a>
            <span className="flex items-center gap-2 text-sm" style={{ color: C.muted, fontFamily: MONO }}>
              <MapPin size={16} /> {ABOUT.location}
            </span>
          </div>
        </Reveal>

        <p style={{ color: C.mutedSoft, fontFamily: MONO }} className="text-xs mt-10">
          Sistemas de Informação • Palestra para Calouros • 2026
        </p>
      </div>
    </footer>
  );
}
