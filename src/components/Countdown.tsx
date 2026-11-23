import { useCountdown } from "../hooks/useCountdown";
import { formatDate } from "../utils/shareUtils";

const units = [
  ["days", "Days"],
  ["hours", "Hours"],
  ["minutes", "Minutes"],
  ["seconds", "Seconds"],
] as const;

export function Countdown() {
  const countdown = useCountdown();
  return (
    <section className="countdown-section" id="countdown">
      <div className="countdown-inner" data-reveal>
        <p className="eyebrow">The moments are drawing near</p>
        <h2>{countdown.complete ? "The celebrations have begun" : "Counting down to our next celebration"}</h2>
        {countdown.event && <p className="countdown-event">{countdown.event.title} · {formatDate(countdown.event)}</p>}
        <div className="countdown-grid" aria-live="polite" aria-label="Countdown to the next event">
          {units.map(([key, label]) => (
            <div className="countdown-unit" key={key}>
              <strong>{String(countdown[key]).padStart(2, "0")}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <p className="countdown-timezone">All times are in India Standard Time</p>
      </div>
    </section>
  );
}
