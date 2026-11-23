import { weddingData } from "../data/weddingData";
import coupleArtwork from "../assets/couple-photo-final.jpg";

export function CoupleSection() {
  return (
    <section className="couple-section section">
      <div className="couple-copy" data-reveal>
        <p className="eyebrow">Two hearts, one journey</p>
        <h2>A promise for a lifetime</h2>
        <p>Rooted in tradition and surrounded by the people we love, we begin our next chapter together.</p>
        <div className="couple-signature">{weddingData.groom}<span>&amp;</span>{weddingData.bride}</div>
      </div>
      <div className="couple-art" data-reveal>
        <img
          className="couple-illustration"
          src={coupleArtwork}
          alt="Bengali bride and groom wearing a traditional mukut and topor"
          width="1536"
          height="1024"
        />
      </div>
    </section>
  );
}
