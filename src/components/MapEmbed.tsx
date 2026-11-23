import { MapPin } from "lucide-react";
import type { WeddingEvent } from "../data/weddingData";
import { getEmbedUrl } from "../utils/mapsLinks";

export function MapEmbed({ event }: { event: WeddingEvent }) {
  const embedUrl = getEmbedUrl(event);
  if (!embedUrl) {
    return (
      <div className="map-fallback" aria-label={`Map for ${event.venueName} is not embedded`}>
        <MapPin size={30} strokeWidth={1.2} />
        <span>{event.venueName}</span>
        <small>Open the map links for directions</small>
      </div>
    );
  }
  return (
    <iframe
      className="map-frame"
      src={embedUrl}
      title={`Map showing ${event.venueName}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
