import { describe, expect, it } from "vitest";
import { weddingData } from "../data/weddingData";
import { eventInstant, getCountdown } from "../hooks/useCountdown";
import { getDirectionsUrl, getEmbedUrl, getMapSearchUrl } from "./mapsLinks";
import { getPublicInvitationUrl } from "./publicUrl";
import { createCalendarFile } from "./calendarGenerator";
import { formatDate } from "./dateUtils";

describe("wedding events", () => {
  it("uses the supplied event dates and formats dates in English", () => {
    expect(weddingData.events.map((event) => event.date)).toEqual(["2026-12-13", "2026-12-14"]);
    expect(formatDate(weddingData.events[0])).toBe("13 December 2026");
    expect(formatDate(weddingData.events[1])).toBe("14 December 2026");
  });

  it("converts event wall time in Asia/Kolkata to its UTC instant", () => {
    expect(new Date(eventInstant(weddingData.events[0])).toISOString()).toBe("2026-12-13T14:30:00.000Z");
  });

  it("counts down to the next event and completes without negative values", () => {
    const first = getCountdown(Date.UTC(2026, 11, 12, 14, 30));
    expect(first.event?.id).toBe("ceremony");
    expect(first.days).toBe(1);
    expect(first.hours).toBe(0);
    expect(first.minutes).toBe(0);
    expect(first.seconds).toBe(0);

    const completed = getCountdown(Date.UTC(2026, 11, 15));
    expect(completed.complete).toBe(true);
    expect([completed.days, completed.hours, completed.minutes, completed.seconds]).toEqual([0, 0, 0, 0]);
  });
});

describe("maps and calendar", () => {
  it("uses the supplied map pin coordinates for location, directions, and embeds", () => {
    const event = weddingData.events[1];
    expect(getMapSearchUrl(event)).toContain("22.0043357%2C88.0106238");
    expect(getDirectionsUrl(event)).toContain("22.0043357%2C88.0106238");
    expect(getEmbedUrl(event)).toContain("22.0043357%2C88.0106238");
  });

  it("creates an importable calendar event using India Standard Time", () => {
    const file = createCalendarFile(weddingData.events[0], "https://example.test/invite");
    expect(file).toContain("TZID=Asia/Kolkata:20261213T200000");
    expect(file).toContain("DTEND;TZID=Asia/Kolkata:20261213T220000");
    expect(file).toContain("Tekhali Bazar\\, West Bengal\\, India");
    expect(file).toContain("URL:https://example.test/invite");
  });
});

describe("public URL handling", () => {
  it("never treats localhost as a production invitation URL", () => {
    expect(getPublicInvitationUrl()).toBeNull();
  });
});
