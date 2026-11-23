import { weddingData } from "../data/weddingData";
import type { WeddingEvent } from "../data/weddingData";

export function formatDate(event: WeddingEvent): string {
  const [year, month, day] = event.date.split("-").map(Number);
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: weddingData.timezone,
  }).format(new Date(Date.UTC(year, month - 1, day, 6, 30)));
}
