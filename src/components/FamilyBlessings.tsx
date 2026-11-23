import { Flower, Heart } from "lucide-react";
import { weddingData } from "../data/weddingData";

export function FamilyBlessings() {
  return (
    <section className="family-section section" id="family">
      <div className="family-card" data-reveal>
        <Flower className="family-flower" size={24} />
        <p className="eyebrow">A day made brighter by your love</p>
        <h2>With regards</h2>
        <p className="family-names">{weddingData.family}</p>
        <Heart className="family-heart" size={16} />
      </div>
    </section>
  );
}
