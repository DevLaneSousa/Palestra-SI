import React from "react";
import { ChevronLeft, ChevronRight, Award, GraduationCap, Building2 } from "lucide-react";
import { Section, SectionHeader, Reveal } from "../common";
import { CertificateCard } from "../cards/CertificateCard";
import { useCarousel } from "../../hooks/useCarousel";
import { CERTIFICATES } from "../../data/certificates";
import { C, DISPLAY, MONO, BODY } from "../../styles/theme";

const TOTAL_HOURS = CERTIFICATES.reduce((sum, c) => {
  const value = Number.parseFloat(c.hours);
  return sum + (Number.isFinite(value) ? value : 0);
}, 0);
const TOTAL_INSTITUTIONS = new Set(CERTIFICATES.map((c) => c.issuer || c.institution)).size;

const STATS = [
  { icon: Award, value: `${CERTIFICATES.length}`, label: "certificados e contando" },
  { icon: GraduationCap, value: `${TOTAL_HOURS}h`, label: "de carga horária extra" },
  { icon: Building2, value: `${TOTAL_INSTITUTIONS}`, label: "instituições diferentes" },
];

export function CertificatesSection({ onOpen }) {
  const { trackRef, scrollBy } = useCarousel();

  return (
    <Section id="certificados" dark>
      <SectionHeader
        file="certificados.png"
        color={C.green}
        title="Isso aqui não para por aqui"
        subtitle="Cada card do site até agora veio de prática — e prática, boa parte das vezes, começa em um certificado. Alguns dos meus:"
      />

      <Reveal className="mb-10">
        <div className="grid grid-cols-3 gap-3 max-w-xl">
          {STATS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="rounded-xl p-4 text-center" style={{ background: C.card, border: `1px solid ${C.border}` }}>
                <Icon size={16} style={{ color: C.green }} className="mx-auto mb-2" />
                <p style={{ fontFamily: DISPLAY, color: C.text }} className="text-xl font-bold">
                  {s.value}
                </p>
                <p style={{ color: C.mutedSoft, fontFamily: BODY }} className="text-xs leading-snug mt-1">
                  {s.label}
                </p>
              </div>
            );
          })}
        </div>
      </Reveal>

      <Reveal delay={60}>
        <div className="relative">
          <div ref={trackRef} className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2">
            {CERTIFICATES.map((cert) => (
              <CertificateCard key={cert.id} cert={cert} onOpen={onOpen} />
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2 justify-end mt-4">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Certificados anteriores"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              style={{ background: C.card, border: `1px solid ${C.border}`, color: C.muted }}
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Próximos certificados"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
              style={{ background: C.card, border: `1px solid ${C.border}`, color: C.muted }}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="rounded-lg p-4 mt-8 max-w-2xl" style={{ background: `${C.green}14`, border: `1px solid ${C.green}33` }}>
          <p style={{ color: C.text, fontFamily: BODY }} className="text-sm leading-relaxed">
            💡 Isso não é sobre acumular diploma por acumular — é o que preenche a carga horária complementar (obrigatória pra se formar) e o que faz o recrutador olhar seu currículo duas vezes. Comece a juntar os seus desde já.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
