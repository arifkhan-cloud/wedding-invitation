export function Shankha({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 90 70" role="img" aria-label="Traditional conch shell ornament">
      <path d="M12 43 C17 25 36 11 57 16 C72 20 80 32 76 43 C71 55 54 60 35 55 C22 52 15 49 12 43Z" fill="#fff0ce" stroke="currentColor" strokeWidth="2" />
      <path d="M13 42 C28 44 38 39 40 31 C42 24 37 19 31 18 M21 49 C38 52 55 48 63 39 C69 32 65 24 59 20 M31 54 C48 57 67 52 75 43" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 39 L3 36 L8 45 L3 50 L14 49" fill="#c69b54" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="49" cy="33" r="3" fill="currentColor" />
    </svg>
  );
}
