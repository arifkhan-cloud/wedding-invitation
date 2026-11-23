import { ArrowDown } from "lucide-react";
import { weddingData } from "../data/weddingData";
import { Alpana } from "./Alpana";
import { Shankha } from "./Shankha";

export function WeddingHero() {
  return (
    <section className="hero-section" id="invitation">
      <div className="hero-ornament hero-ornament--left" aria-hidden="true">❋</div>
      <div className="hero-ornament hero-ornament--right" aria-hidden="true">❋</div>
      <Alpana className="hero-mandala" />
      <div className="hero-content" data-reveal>
        <p className="invocation bengali">{weddingData.invocation}</p>
        <div className="gold-rule"><span>✦</span></div>
        <p className="eyebrow">With the blessings of our families</p>
        <h1 className="hero-names"><span>{weddingData.groom}</span><i>&amp;</i><span>{weddingData.bride}</span></h1>
        <p className="hero-occasion">{weddingData.occasion}</p>
        <p className="bengali hero-bengali">{weddingData.bengaliOccasion}</p>
        <div className="gold-rule gold-rule--short"><span>❀</span></div>
        <p className="hero-message">{weddingData.invitationMessage}</p>
        <div className="shankha-row" aria-hidden="true">
          <Shankha className="shankha shankha--left" />
          <span>❀</span>
          <Shankha className="shankha shankha--right" />
        </div>
        <a className="text-link" href="#events">Explore the celebration <ArrowDown size={15} /></a>
      </div>
      <div className="hero-bottom-note">A union of hearts · A celebration of family</div>
    </section>
  );
}
