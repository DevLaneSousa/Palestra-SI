import React from "react";
import { Reveal } from "./Reveal";
import { Eyebrow } from "./Eyebrow";
import { C, DISPLAY, BODY } from "../../styles/theme";

export function SectionHeader({ file, title, subtitle, color }) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <Eyebrow color={color}>{file}</Eyebrow>
      <h2 style={{ fontFamily: DISPLAY, color: C.text }} className="text-3xl md:text-4xl font-bold mb-3 max-w-3xl">
        {title}
      </h2>
      {subtitle && (
        <p style={{ color: C.muted, fontFamily: BODY }} className="max-w-2xl text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
