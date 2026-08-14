import React from "react";
import { Section, SectionHeader } from "../common";
import { ConceptsGrid } from "./concepts/ConceptsGrid";
import { DevEnvGrid } from "./concepts/DevEnvGrid";
import { ToolsGrid } from "./concepts/ToolsGrid";
import { C } from "../../styles/theme";

// Esta seção compõe três blocos independentes (conceitos, ambiente de
// desenvolvimento e ferramentas) sob a mesma âncora de navegação
// ("conceitos.md"), cada um vivendo em seu próprio arquivo em ./concepts.
export function ConceptsSection({ onOpen }) {
  return (
    <Section id="conceitos">
      <SectionHeader file="conceitos.md" color={C.purple} title="GitHub, frameworks e linguagens" subtitle="Entendendo a relação entre essas três coisas que você vai ouvir toda hora." />
      <ConceptsGrid onOpen={onOpen} />
      <DevEnvGrid onOpen={onOpen} />
      <ToolsGrid onOpen={onOpen} />
    </Section>
  );
}
