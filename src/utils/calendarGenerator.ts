import type { WeddingEvent } from "../data/weddingData";
import { weddingData } from "../data/weddingData";

function escapeIcs(value: string): string {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

function eventDateTime(event: WeddingEvent): string {
  const [year, month, day] = event.date.split("-").map(Number);
  return `${year}${String(month).padStart(2, "0")}${String(day).padStart(2, "0")}T${String(event.startHour).padStart(2, "0")}${String(event.startMinute).padStart(2, "0")}00`;
}

export function createCalendarFile(event: WeddingEvent, publicUrl: string): string {
  const start = eventDateTime(event);
  const endMinute = event.startMinute + 120;
  const endHour = event.startHour + Math.floor(endMinute / 60);
  const finish = `${start.slice(0, 8)}T${String(endHour % 24).padStart(2, "0")}${String(endMinute % 60).padStart(2, "0")}00`;
  const stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const description = escapeIcs([
    `With the blessings of our families, we invite you to celebrate with ${weddingData.groom} & ${weddingData.bride}.`,
    ...(publicUrl ? [publicUrl] : []),
  ].join("\n"));
  const location = escapeIcs(event.venueAddress);
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Amit and Peul//Wedding Invitation//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VTIMEZONE",
    `TZID:${weddingData.timezone}`,
    "X-LIC-LOCATION:Asia/Kolkata",
    "BEGIN:STANDARD",
    "TZOFFSETFROM:+0530",
    "TZOFFSETTO:+0530",
    "TZNAME:IST",
    "DTSTART:19700101T000000",
    "END:STANDARD",
    "END:VTIMEZONE",
    "BEGIN:VEVENT",
    `UID:${event.id}-${event.date}@amit-peul-wedding`,
    `DTSTAMP:${stamp}`,
    `DTSTART;TZID=${weddingData.timezone}:${start}`,
    `DTEND;TZID=${weddingData.timezone}:${finish}`,
    `SUMMARY:${escapeIcs(`${weddingData.groom} & ${weddingData.bride} — ${event.title}`)}`,
    `LOCATION:${location}`,
    `DESCRIPTION:${description}`,
    ...(publicUrl ? [`URL:${publicUrl}`] : []),
    "END:VEVENT",
    "END:VCALENDAR",
    "",
  ].join("\r\n");
}

export function downloadCalendarFile(event: WeddingEvent, publicUrl: string): void {
  const content = createCalendarFile(event, publicUrl);
  const blob = new Blob([content], { type: "text/calendar;charset=utf-8" });
  const href = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = href;
  link.download = `amit-peul-${event.id}.ics`;
  link.click();
  URL.revokeObjectURL(href);
}
