import type { WeddingEvent } from "../data/weddingData";

function mapsQuery(event: WeddingEvent): string {
  return `${event.venueName}, ${event.venueAddress}`;
}

export function getMapSearchUrl(event: WeddingEvent): string {
  return event.googleMapsSearchUrl
    || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery(event))}`;
}

export function getDirectionsUrl(event: WeddingEvent): string {
  return event.googleMapsDirectionsUrl
    || `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapsQuery(event))}`;
}

export function getEmbedUrl(event: WeddingEvent): string | null {
  const rawUrl = event.googleMapsEmbedUrl;
  if (!rawUrl) return null;
  try {
    const url = new URL(rawUrl);
    if (url.protocol !== "https:" || !/(^|\.)google\.com$/.test(url.hostname)) return null;
    return url.href;
  } catch {
    return null;
  }
}
