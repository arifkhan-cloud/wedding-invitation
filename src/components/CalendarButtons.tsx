import { CalendarPlus } from "lucide-react";
import type { WeddingEvent } from "../data/weddingData";
import { downloadCalendarFile } from "../utils/calendarGenerator";

export function CalendarButton({ event, publicUrl }: { event: WeddingEvent; publicUrl: string }) {
  return (
    <button className="button button--outline" onClick={() => downloadCalendarFile(event, publicUrl)}>
      <CalendarPlus size={16} /> Add to Calendar
    </button>
  );
}
