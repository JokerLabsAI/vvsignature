/** Line · star · line divider from the brand mood board. */
export function Ornament({ className = "" }: { className?: string }) {
  return (
    <span className={`ornament ${className}`} aria-hidden="true">
      <span className="ornament-line" />
      <Star />
      <span className="ornament-line" />
    </span>
  );
}

export function Star({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className="star" aria-hidden="true">
      <path d="M12 0 C12.9 7.6 16.4 11.1 24 12 C16.4 12.9 12.9 16.4 12 24 C11.1 16.4 7.6 12.9 0 12 C7.6 11.1 11.1 7.6 12 0Z" fill="currentColor" />
    </svg>
  );
}

/** Flame / leaf mark that crowns the "V" of the logo. */
export function Leaf({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className="leaf" aria-hidden="true">
      <path d="M13 2c4 4 4.5 10 .5 15.5C11 15 9.5 8 13 2Z" fill="currentColor" />
      <path d="M21 9c-.5 5-4 9-8.5 9.5 1.5-3.5 4.5-7.5 8.5-9.5Z" fill="currentColor" opacity=".75" />
    </svg>
  );
}

/** Typographic logo: "VV Signature" (VV = Valentina Velazco) with tracked serif "CANDLES". */
export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`logo ${compact ? "logo--compact" : ""}`}>
      <span className="logo-script">
        <span className="logo-v">VV</span>Signature
        <Leaf size={compact ? 11 : 14} />
      </span>
      <span className="logo-candles">Candles</span>
    </span>
  );
}
