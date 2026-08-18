import React from "react";
import { Award } from "lucide-react";
import { assetUrl } from "../../utils/assetUrl";
import { C, DISPLAY, MONO, BODY } from "../../styles/theme";

export function CertificateCard({ cert, onOpen }) {
  const images = [cert.image1, cert.image2].filter(Boolean).map((src) => assetUrl(src));

  return (
    <div
      onClick={() =>
        onOpen({
          icon: Award,
          color: cert.color,
          title: cert.title,
          subtitle: cert.issuer || cert.institution,
          desc: cert.hours === "—" ? `Categoria: ${cert.category} • Certificado de ${cert.issuer}` : `Carga horária: ${cert.hours}`,
          images,
        })
      }
      className="snap-start shrink-0 w-72 sm:w-80 rounded-xl overflow-hidden cursor-pointer transition-all hover:-translate-y-1 group"
      style={{ background: C.card, border: `1px solid ${C.border}` }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${cert.color}88`)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = C.border)}
    >
      <div className="relative overflow-hidden" style={{ aspectRatio: "4/3", background: C.panel2 }}>
        <img
          src={images[0] || assetUrl(cert.image)}
          alt={`Certificado — ${cert.title}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "rgba(6,8,14,0.55)" }}>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs" style={{ background: C.card, color: cert.color, fontFamily: MONO, border: `1px solid ${cert.color}55` }}>
            ver certificado
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 style={{ fontFamily: DISPLAY, color: C.text }} className="font-bold text-sm mb-1.5 leading-snug line-clamp-2">
          {cert.title}
        </h3>
        <p style={{ color: cert.color, fontFamily: MONO }} className="text-xs mb-2">
          {cert.issuer || cert.institution}
        </p>
        <p style={{ color: C.mutedSoft, fontFamily: BODY }} className="text-xs">
          {cert.hours} · {cert.category}
        </p>
      </div>
    </div>
  );
}
