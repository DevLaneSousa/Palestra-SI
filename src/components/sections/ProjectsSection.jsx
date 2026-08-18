import React from "react";
import { ChevronRight } from "lucide-react";
import { Section, SectionHeader } from "../common";
import { ProjectCard } from "../cards/ProjectCard";
import { usePagination } from "../../hooks/usePagination";
import { PROJECTS } from "../../data/projects";
import { C, MONO } from "../../styles/theme";

const PAGE_SIZE = 6;

export function ProjectsSection({ onOpen }) {
  const { page, totalPages, pageItems, goTo, goBy } = usePagination(PROJECTS, PAGE_SIZE);

  return (
    <Section id="projetos" dark>
      <SectionHeader
        file="projetos.jsx"
        color={C.purple}
        title="Projetos que já fiz"
        subtitle="Uma amostra do que já saiu do papel — projetos reais. Clique pra ver mais detalhes de cada um."
      />

      <div key={page} className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 animate-fade-in-up">
        {pageItems.map((p) => (
          <ProjectCard key={p.id} p={p} onOpen={onOpen} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-5 mt-10">
          <button
            onClick={() => goBy(-1)}
            aria-label="Página anterior"
            className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
            style={{ background: C.card, border: `1px solid ${C.border}`, color: C.muted }}
          >
            <ChevronRight size={16} className="rotate-180" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Página ${i + 1}`}
                className="rounded-full transition-all"
                style={{ width: i === page ? 22 : 8, height: 8, background: i === page ? C.purple : C.borderSoft }}
              />
            ))}
          </div>

          <button
            onClick={() => goBy(1)}
            aria-label="Próxima página"
            className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
            style={{ background: C.card, border: `1px solid ${C.border}`, color: C.muted }}
          >
            <ChevronRight size={16} />
          </button>
        </div>
      )}

      <p style={{ fontFamily: MONO, color: C.mutedSoft }} className="text-xs text-center mt-4">
        {page + 1} / {totalPages} — projetos reais entregues pela Fireframe
      </p>
    </Section>
  );
}
