import { Heart } from "lucide-react";
import { weddingData } from "../data/weddingData";
import { Alpana } from "./Alpana";

export function FinalInvitation() {
  return (
    <footer className="final-section" data-reveal>
      <Alpana className="final-alpana" title="Decorative lotus alpana" />
      <p className="eyebrow">Until we meet</p>
      <h2>{weddingData.finalMessage}</h2>
      <p className="final-signoff">With love, <span>{weddingData.groom} &amp; {weddingData.bride}</span></p>
      <div className="footer-line"><Heart size={13} fill="currentColor" /> Made for a moment that lasts forever</div>
    </footer>
  );
}
