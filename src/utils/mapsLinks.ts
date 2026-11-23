import type { WeddingEvent } from "../data/weddingData";

function mapsQuery(event: WeddingEvent): string {
  return `${event.venueName}, ${event.venueAddress}`;
}

function mapsCoordinates(event: WeddingEvent): string | null {
  if (event.latitude === undefined || event.longitude === undefined) return null;
  return `${event.latitude},${event.longitude}`;
}

export function getMapSearchUrl(event: WeddingEvent): string {
  const coordinates = mapsCoordinates(event);
  return event.googleMapsSearchUrl
    || (coordinates && `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(coordinates)}`)
    || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery(event))}`;
}

export function getDirectionsUrl(event: WeddingEvent): string {
  const coordinates = mapsCoordinates(event);
  return event.googleMapsDirectionsUrl
    || (coordinates && `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(coordinates)}`)
    || `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapsQuery(event))}`;
}

export function getEmbedUrl(event: WeddingEvent): string | null {
  const rawUrl = event.googleMapsEmbedUrl;
  if (rawUrl) {
    try {
      const url = new URL(rawUrl);
      if (url.protocol === "https:" && /(^|\.)google\.com$/.test(url.hostname)) return url.href;
    } catch {
      return null;
    }
  }
  const coordinates = mapsCoordinates(event);
  return coordinates
    ? `https://maps.google.com/maps?q=${encodeURIComponent(coordinates)}&z=16&output=embed`
    : null;
}
