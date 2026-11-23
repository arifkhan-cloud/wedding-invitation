import { useEffect, useState } from "react";
import type { WeddingEvent } from "../data/weddingData";
import { weddingData } from "../data/weddingData";

export type CountdownParts = {
  event: WeddingEvent | null;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  complete: boolean;
};

export function eventInstant(event: WeddingEvent): number {
  const [year, month, day] = event.date.split("-").map(Number);
  return Date.UTC(year, month - 1, day, event.startHour - 5, event.startMinute - 30);
}

export function getCountdown(now: number, events: readonly WeddingEvent[] = weddingData.events): CountdownParts {
  const next = events.find((event) => eventInstant(event) > now);
  if (!next) return { event: null, days: 0, hours: 0, minutes: 0, seconds: 0, complete: true };
  let remaining = Math.max(0, eventInstant(next) - now);
  const days = Math.floor(remaining / 86_400_000);
  remaining %= 86_400_000;
  const hours = Math.floor(remaining / 3_600_000);
  remaining %= 3_600_000;
  const minutes = Math.floor(remaining / 60_000);
  const seconds = Math.floor((remaining % 60_000) / 1000);
  return { event: next, days, hours, minutes, seconds, complete: false };
}

export function useCountdown(): CountdownParts {
  const [countdown, setCountdown] = useState(() => getCountdown(Date.now()));
  useEffect(() => {
    const timer = window.setInterval(() => setCountdown(getCountdown(Date.now())), 1000);
    return () => window.clearInterval(timer);
  }, []);
  return countdown;
}
