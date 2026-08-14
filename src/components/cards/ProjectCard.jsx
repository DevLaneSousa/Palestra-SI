import React from "react";
import { Briefcase, ChevronRight } from "lucide-react";
import { assetUrl } from "../../utils/assetUrl";
import { C, DISPLAY, MONO, BODY } from "../../styles/theme";

export function ProjectCard({ p, onOpen }) {
  return (
    <div
      onClick={() =>
        onOpen({
          icon: Briefcase,
          color: p.color,
          title: p.name,
          subtitle: `Cliente: ${p.client}`,
          desc: p.desc,
          list: p.tags,
          listLabel: "Tecnologias & foco",
          images: [assetUrl(p.cover), assetUrl(p.cover2)],
        })
      }
      className="h-full rounded-xl overflow-hidden cursor-pointer transition-all hover:-translate-y-1 group"
      style={{ background: C.card, border: `1px solid ${C.border}` }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${p.color}88`)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "16/9", background: C.panel2 }}>
        <img
          src={assetUrl(p.cover)}
          alt={`Prévia do projeto ${p.name}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "rgba(6,8,14,0.55)" }}>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs" style={{ background: C.card, color: p.color, fontFamily: MONO, border: `1px solid ${p.color}55` }}>
            ver detalhes <ChevronRight size={12} />
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 style={{ fontFamily: DISPLAY, color: C.text }} className="font-bold mb-1">
          {p.name}
        </h3>
        <p style={{ color: p.color, fontFamily: MONO }} className="text-xs mb-3">
          {p.client}
        </p>
        <p style={{ color: C.muted, fontFamily: BODY }} className="text-sm leading-relaxed mb-4 line-clamp-3">
          {p.desc}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {p.tags.map((tag) => (
            <span key={tag} style={{ fontFamily: MONO, color: C.mutedSoft, border: `1px solid ${C.borderSoft}` }} className="text-xs px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
