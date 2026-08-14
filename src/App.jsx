import React, { useEffect, useState } from "react";

import { BootOverlay, Confetti, FlyingBug, Toast, Modal } from "./components/common";
import { Nav, Footer } from "./components/layout";
import {
  Hero,
  AboutSection,
  ProjectsSection,
  CourseSection,
  ChallengesSection,
  CareersSection,
  CertificatesSection,
  ConceptsSection,
  GlossarySection,
  CuriositiesSection,
} from "./components/sections";

import { useScrollProgress } from "./hooks/useScrollProgress";
import { useEasterEggs } from "./hooks/useEasterEggs";
import { C, BODY } from "./styles/theme";

const BOOT_DURATION_MS = 1750;

export default function App() {
  const [modal, setModal] = useState(null);
  const [bootVisible, setBootVisible] = useState(true);

  const progress = useScrollProgress();
  const { confetti, bugFlying, toast, burstConfetti, triggerBug } = useEasterEggs();

  useEffect(() => {
    const t = setTimeout(() => setBootVisible(false), BOOT_DURATION_MS);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ background: C.bg, fontFamily: BODY }} className="min-h-screen w-full relative">
      <BootOverlay visible={bootVisible} />

      <Nav progress={progress} />
      <Hero />
      <AboutSection onOpen={setModal} />
      <ProjectsSection onOpen={setModal} />
      <CourseSection onOpen={setModal} />
      <ChallengesSection onOpen={setModal} />
      <CareersSection onOpen={setModal} />
      <CertificatesSection onOpen={setModal} />
      <ConceptsSection onOpen={setModal} />
      <GlossarySection onOpen={setModal} />
      <CuriositiesSection onOpen={setModal} onBug={triggerBug} />
      <Footer onBurst={burstConfetti} />

      <Confetti pieces={confetti} />
      <FlyingBug active={bugFlying} />
      <Toast toast={toast} />
      <Modal item={modal} onClose={() => setModal(null)} />
    </div>
  );
}
