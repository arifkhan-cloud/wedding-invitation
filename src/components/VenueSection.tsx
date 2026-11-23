import { ArrowUpRight, MapPin, Navigation2 } from "lucide-react";
import { weddingData } from "../data/weddingData";
import { getDirectionsUrl, getMapSearchUrl } from "../utils/mapsLinks";
import { MapEmbed } from "./MapEmbed";

export function VenueSection() {
  return (
    <section className="section venue-section" id="venues">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">We saved you a place</p>
        <h2>Gather with us</h2>
        <div className="gold-rule gold-rule--short"><span>✿</span></div>
      </div>
      <div className="venue-grid">
        {weddingData.events.map((event, index) => (
          <article className="venue-card" data-reveal key={event.id}>
            <div className={`venue-number venue-number--${index + 1}`}>0{index + 1}</div>
            <p className="eyebrow">{event.title}</p>
            <h3>{event.venueName}</h3>
            <p className="venue-address"><MapPin size={16} />{event.venueAddress}</p>
            <MapEmbed event={event} />
            <div className="venue-actions">
              <a className="button button--outline" href={getMapSearchUrl(event)} target="_blank" rel="noopener noreferrer">
                View Location <ArrowUpRight size={15} />
              </a>
              <a className="button button--primary" href={getDirectionsUrl(event)} target="_blank" rel="noopener noreferrer">
                Get Directions <Navigation2 size={15} />
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="venue-note" data-reveal>Venue locations open in Google Maps. Please confirm the exact pin with your hosts before travelling.</p>
    </section>
  );
}
