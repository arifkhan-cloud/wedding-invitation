export type WeddingEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  startHour: number;
  startMinute: number;
  venueName: string;
  venueAddress: string;
  googleMapsSearchUrl?: string;
  googleMapsDirectionsUrl?: string;
  googleMapsEmbedUrl?: string;
  latitude?: number;
  longitude?: number;
};

export const weddingData = {
  groom: "Amit",
  bride: "Peul",
  occasion: "Wedding Reception",
  bengaliOccasion: "প্রীতিভোজ",
  invocation: "ওঁ শ্রী শ্রী প্রজাপতয়ে নমঃ",
  timezone: "Asia/Kolkata",
  publicUrl: "",
  family: "Amal Chandra Bhunia & Milali Bhunia",
  invitationMessage:
    "With the blessings of our families, we cordially invite you to celebrate this special occasion with us.\n\nYour gracious presence will make our celebration even more special.",
  finalMessage:
    "We would be delighted to have you with us to celebrate the beginning of a beautiful journey.",
  shareHeading: "A Beautiful Beginning, A Lifetime of Togetherness",
  events: [
    {
      id: "ceremony",
      title: "Wedding Ceremony",
      date: "2026-12-13",
      time: "8:00 PM",
      startHour: 20,
      startMinute: 0,
      venueName: "Tekhali Bazar",
      venueAddress: "Tekhali Bazar, West Bengal, India",
    },
    {
      id: "reception",
      title: "Wedding Reception",
      date: "2026-12-14",
      time: "7:00 PM",
      startHour: 19,
      startMinute: 0,
      venueName: "Lakshmi Bhavan",
      venueAddress: "Lakshmi Bhavan, Nandigram, West Bengal, India",
    },
  ] satisfies WeddingEvent[],
} as const;
