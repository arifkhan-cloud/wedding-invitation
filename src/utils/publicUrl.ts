import { weddingData } from "../data/weddingData";

export function getPublicInvitationUrl(): string | null {
  const override = weddingData.publicUrl.trim();
  if (override) {
    try {
      const url = new URL(override);
      return url.protocol === "https:" ? url.href : null;
    } catch {
      return null;
    }
  }

  if (typeof window === "undefined") return null;
  const { hostname, origin, pathname } = window.location;
  const isLocal = hostname === "localhost" || hostname === "127.0.0.1" || hostname.endsWith(".local");
  if (isLocal || window.location.protocol !== "https:") return null;
  return new URL(pathname, origin).href;
}

export function isPublicUrl(url: string | null): url is string {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" && !["localhost", "127.0.0.1"].includes(parsed.hostname);
  } catch {
    return false;
  }
}
