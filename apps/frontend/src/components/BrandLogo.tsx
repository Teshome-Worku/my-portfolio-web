interface BrandLogoProps {
  size?: number;
  className?: string;
}

export default function BrandLogo({ size = 28, className = "" }: BrandLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="kdLogoBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#181818" />
          <stop offset="100%" stopColor="#0A0A0A" />
        </linearGradient>
        <linearGradient id="kdLogoEmber" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF7A00" />
          <stop offset="100%" stopColor="#BB4D00" />
        </linearGradient>
        <filter id="kdLogoGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Obsidian Tile Base */}
      <rect width="128" height="128" rx="28" fill="url(#kdLogoBg)" stroke="#262626" strokeWidth="2.5" />
      <rect x="2" y="2" width="124" height="124" rx="26" fill="none" stroke="#BB4D00" strokeWidth="1.2" strokeOpacity="0.3" />

      {/* Terminal Cursor Spine (Pure White) */}
      <rect x="30" y="28" width="9" height="72" rx="4.5" fill="#FFFFFF" />

      {/* Upper Angled Code Beam (Ember Orange) */}
      <path d="M48 64 L84 32" stroke="url(#kdLogoEmber)" strokeWidth="9.5" strokeLinecap="round" />

      {/* Lower Angled Code Beam (Ember Orange) */}
      <path d="M48 64 L84 96" stroke="url(#kdLogoEmber)" strokeWidth="9.5" strokeLinecap="round" />

      {/* Right .Dev Chevron Closure (Crisp White Accent) */}
      <path d="M84 46 L98 64 L84 82" fill="none" stroke="#FFFFFF" strokeWidth="6.5" strokeLinecap="round" strokeLinejoin="round" />

      {/* The .Dev Pulse Dot */}
      <circle cx="104" cy="64" r="5.5" fill="#FF7A00" filter="url(#kdLogoGlow)" />
    </svg>
  );
}
