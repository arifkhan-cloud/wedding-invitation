type AlpanaProps = { className?: string; title?: string };

export function Alpana({ className = "", title = "Decorative alpana motif" }: AlpanaProps) {
  return (
    <svg className={className} viewBox="0 0 220 220" role="img" aria-label={title}>
      <circle cx="110" cy="110" r="96" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="110" cy="110" r="79" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 5" />
      <circle cx="110" cy="110" r="57" fill="none" stroke="currentColor" strokeWidth="1" />
      {Array.from({ length: 12 }, (_, index) => (
        <g key={index} transform={`rotate(${index * 30} 110 110)`}>
          <path d="M110 14 C96 36 97 51 110 64 C123 51 124 36 110 14Z" fill="none" stroke="currentColor" strokeWidth="1.1" />
          <circle cx="110" cy="27" r="2" fill="currentColor" />
          <path d="M110 75 C104 84 104 94 110 100 C116 94 116 84 110 75Z" fill="none" stroke="currentColor" strokeWidth="1" />
        </g>
      ))}
      <path d="M110 78 C96 95 96 107 110 119 C124 107 124 95 110 78Z" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M110 89 C102 100 102 108 110 115 C118 108 118 100 110 89Z" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="110" cy="110" r="5" fill="currentColor" />
    </svg>
  );
}
