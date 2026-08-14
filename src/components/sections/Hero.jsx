import React from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Reveal, TrafficLights } from "../common";
import { useTypewriter } from "../../hooks/useTypewriter";
import { C, DISPLAY, MONO, BODY } from "../../styles/theme";

function scrollToSobre() {
  const el = document.getElementById("sobre");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function Hero() {
  const typed = useTypewriter("programando_o_futuro_da_cidade");

  return (
    <div className="relative overflow-hidden" style={{ background: C.bg }}>
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full blob-1" style={{ background: C.purple, opacity: 0.14, filter: "blur(90px)" }} />
      <div className="absolute top-40 -left-32 w-96 h-96 rounded-full blob-2" style={{ background: C.green, opacity: 0.12, filter: "blur(90px)" }} />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full blob-3" style={{ background: C.blue, opacity: 0.1, filter: "blur(90px)" }} />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 lg:px-20 pt-16 pb-24 md:pt-24 md:pb-32">
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8" style={{ background: C.panel2, border: `1px solid ${C.borderSoft}` }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse-soft" style={{ background: C.green }} />
            <span style={{ fontFamily: MONO, color: C.muted }} className="text-xs">
              boas-vindas, calouros de Sistemas de Informação
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div
            className="rounded-xl overflow-hidden mb-8 max-w-2xl"
            style={{ background: C.panel2, border: `1px solid ${C.border}`, boxShadow: "0 20px 50px rgba(0,0,0,0.35)" }}
          >
            <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: `1px solid ${C.borderSoft}` }}>
              <TrafficLights />
              <span style={{ fontFamily: MONO, color: C.mutedSoft }} className="text-xs">
                bem-vindo.js
              </span>
            </div>
            <div className="p-5 md:p-6" style={{ fontFamily: MONO }}>
              <p className="text-sm md:text-base leading-relaxed">
                <span style={{ color: C.purple }}>const</span> <span style={{ color: C.blue }}>jornada</span> = <span style={{ color: C.text }}>{"{"}</span>
              </p>
              <p className="text-sm md:text-base leading-relaxed pl-5">
                <span style={{ color: C.green }}>curso</span>: <span style={{ color: C.amber }}>"Sistemas de Informação"</span>,
              </p>
              <p className="text-sm md:text-base leading-relaxed pl-5">
                <span style={{ color: C.green }}>tag</span>: <span style={{ color: C.amber }}>"{typed}</span>
                <span className="animate-blink">|</span>
                <span style={{ color: C.amber }}>"</span>
              </p>
              <p className="text-sm md:text-base leading-relaxed">
                <span style={{ color: C.text }}>{"}"}</span>;
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={160}>
          <h1 style={{ fontFamily: DISPLAY, color: C.text }} className="text-4xl md:text-6xl font-bold leading-tight mb-6 max-w-3xl">
            Por onde começar<br />
            <span style={{ color: C.green }}>de verdade.</span>
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p style={{ color: C.muted, fontFamily: BODY }} className="text-base md:text-lg max-w-xl leading-relaxed mb-10">
            Um guia interativo sobre o curso, o mercado e como construir sua trajetória em tecnologia desde o primeiro período. Clique, explore e descubra.
          </p>
        </Reveal>

        <Reveal delay={280}>
          <button
            onClick={scrollToSobre}
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-transform hover:scale-105"
            style={{ background: C.green, color: "#04240F", fontFamily: BODY }}
          >
            Começar a explorar
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </Reveal>
      </div>

      <button
        onClick={scrollToSobre}
        aria-label="Rolar para baixo"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce-soft"
        style={{ color: C.mutedSoft }}
      >
        <ChevronDown size={22} />
      </button>
    </div>
  );
}
