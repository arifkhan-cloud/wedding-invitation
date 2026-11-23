import { CalendarDays, Clock3, MapPin, Sparkles } from "lucide-react";
import { weddingData } from "../data/weddingData";
import { formatDate } from "../utils/dateUtils";
import { CalendarButton } from "./CalendarButtons";

type Props = { publicUrl: string };

export function WeddingEvents({ publicUrl }: Props) {
  return (
    <section className="section events-section" id="events">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">Save these precious moments</p>
        <h2>Two days, one beautiful beginning</h2>
        <div className="gold-rule gold-rule--short"><span>✦</span></div>
      </div>
      <div className="event-list">
        {weddingData.events.map((event, index) => (
          <article className={`event-card event-card--${index + 1}`} key={event.id} data-reveal>
            <div className="event-date-tile">
              <span>{formatDate(event).split(" ")[1]?.replace(",", "")}</span>
              <strong>{event.date.slice(-2)}</strong>
              <span>{event.date.slice(0, 4)}</span>
            </div>
            <div className="event-details">
              <p className="eyebrow">Celebration {String(index + 1).padStart(2, "0")}</p>
              <h3>{event.title}</h3>
              <p className="event-meta"><CalendarDays size={16} />{formatDate(event)}</p>
              <p className="event-meta"><Clock3 size={16} />{event.time}</p>
              <p className="event-meta"><MapPin size={16} />{event.venueAddress}</p>
              <CalendarButton event={event} publicUrl={publicUrl} />
            </div>
            <Sparkles className="event-sparkle" size={22} />
          </article>
        ))}
      </div>
    </section>
  );
}
