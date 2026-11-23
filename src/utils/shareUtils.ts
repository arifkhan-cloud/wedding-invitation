import { weddingData } from "../data/weddingData";
import type { WeddingEvent } from "../data/weddingData";

export function invitationMessage(url: string): string {
  const [ceremony, reception] = weddingData.events;
  return [
    `🌸 ${weddingData.shareHeading} 🌸`,
    "",
    "With the blessings of our families, we cordially invite you to celebrate the wedding of",
    "",
    `❤️ ${weddingData.groom} & ${weddingData.bride} ❤️`,
    "",
    `${ceremony.title}:`,
    `${formatDate(ceremony)} | ${ceremony.time}`,
    "",
    `${reception.title}:`,
    `${formatDate(reception)} | ${reception.time}`,
    "",
    "Venue:",
    `${reception.venueAddress}.`,
    "",
    "We would love to have you celebrate with us!",
    "",
    "Open the digital invitation here:",
    url,
    "",
    "With regards,",
    weddingData.family,
  ].join("\n");
}

export function formatDate(event: WeddingEvent): string {
  const [year, month, day] = event.date.split("-").map(Number);
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: weddingData.timezone,
  }).format(new Date(Date.UTC(year, month - 1, day, 6, 30)));
}

export function openWhatsAppShare(message: string): void {
  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

export async function copyToClipboard(text: string): Promise<void> {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  if (!copied) throw new Error("Clipboard unavailable");
}

export async function shareInvitation(url: string): Promise<"shared" | "cancelled" | "unavailable"> {
  if (!navigator.share) return "unavailable";
  try {
    await navigator.share({
      title: `${weddingData.groom} & ${weddingData.bride} | Wedding Invitation`,
      text: "Join us to celebrate our wedding.",
      url,
    });
    return "shared";
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") return "cancelled";
    return "unavailable";
  }
}
