import { useState } from "react";
import { EnvelopeIntro } from "./components/EnvelopeIntro";
import { Navigation } from "./components/Navigation";
import { WeddingHero } from "./components/WeddingHero";
import { WeddingEvents } from "./components/WeddingEvents";
import { Countdown } from "./components/Countdown";
import { CoupleSection } from "./components/CoupleSection";
import { VenueSection } from "./components/VenueSection";
import { FamilyBlessings } from "./components/FamilyBlessings";
import { FinalInvitation } from "./components/FinalInvitation";
import { FloatingBackToTop } from "./components/FloatingBackToTop";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { getPublicInvitationUrl } from "./utils/publicUrl";
import "./styles/global.css";
import "./styles/animations.css";

export default function App() {
  const [opened, setOpened] = useState(false);
  const publicUrl = getPublicInvitationUrl() ?? "";
  useScrollReveal();

  return (
    <main>
      {!opened && <EnvelopeIntro onOpen={() => setOpened(true)} />}
      <div className={`invitation-site ${opened ? "invitation-site--visible" : ""}`} aria-hidden={!opened}>
        <Navigation />
        <WeddingHero />
        <WeddingEvents publicUrl={publicUrl} />
        <Countdown />
        <CoupleSection />
        <VenueSection />
        <FamilyBlessings />
        <FinalInvitation />
      </div>
      {opened && <FloatingBackToTop />}
    </main>
  );
}
