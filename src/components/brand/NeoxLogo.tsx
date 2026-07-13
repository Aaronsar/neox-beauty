"use client";

interface NeoxLogoProps {
  size?: number;
  animated?: boolean;
  showLocations?: boolean;
  className?: string;
}

export default function NeoxLogo({
  size = 140,
  animated = false,
  showLocations = true,
  className = "",
}: NeoxLogoProps) {
  const height = showLocations ? size * 1.45 : size * 1.15;
  const anim = animated ? "logo-animated" : "";

  return (
    <svg
      viewBox={showLocations ? "0 0 240 348" : "0 0 240 278"}
      width={size}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${anim} ${className}`.trim()}
      aria-label="Institut Neox Beauty"
      role="img"
    >
      {/* Fond */}
      <rect
        width="240"
        height={showLocations ? 348 : 278}
        rx="18"
        fill="#d4145a"
        className={animated ? "logo-bg" : undefined}
      />

      {/* Cadre blanc avec coupure en bas */}
      <path
        d={
          showLocations
            ? "M 48 52 H 192 A 20 20 0 0 1 212 72 V 218 A 20 20 0 0 1 192 238 H 138 M 102 238 H 48 A 20 20 0 0 1 28 218 V 72 A 20 20 0 0 1 48 52 Z"
            : "M 48 52 H 192 A 20 20 0 0 1 212 72 V 206 A 20 20 0 0 1 192 226 H 48 A 20 20 0 0 1 28 206 V 72 A 20 20 0 0 1 48 52 Z"
        }
        stroke="white"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        className={animated ? "logo-frame" : undefined}
      />

      {/* INSTITUT */}
      <text
        x="120"
        y="98"
        textAnchor="middle"
        fill="white"
        fontSize="11"
        fontWeight="300"
        letterSpacing="0.35em"
        fontFamily="var(--font-body), 'DM Sans', sans-serif"
        className={animated ? "logo-label-top" : undefined}
      >
        INSTITUT
      </text>

      {/* neox */}
      <text
        x="120"
        y="168"
        textAnchor="middle"
        fill="#f8e0e8"
        fontSize="52"
        fontWeight="700"
        fontFamily="var(--font-body), 'DM Sans', sans-serif"
        className={animated ? "logo-brand" : undefined}
      >
        neox
      </text>

      {/* BEAUTY */}
      <text
        x="120"
        y="210"
        textAnchor="middle"
        fill="white"
        fontSize="11"
        fontWeight="300"
        letterSpacing="0.35em"
        fontFamily="var(--font-body), 'DM Sans', sans-serif"
        className={animated ? "logo-label-bottom" : undefined}
      >
        BEAUTY
      </text>

      {showLocations && (
        <>
          <text
            x="120"
            y="278"
            textAnchor="middle"
            fill="white"
            fontSize="7.5"
            fontWeight="400"
            letterSpacing="0.12em"
            fontFamily="var(--font-body), 'DM Sans', sans-serif"
            className={animated ? "logo-location-1" : undefined}
          >
            SAINT-BRICE-SOUS-FORÊT
          </text>
          <text
            x="120"
            y="298"
            textAnchor="middle"
            fill="white"
            fontSize="7.5"
            fontWeight="400"
            letterSpacing="0.12em"
            fontFamily="var(--font-body), 'DM Sans', sans-serif"
            className={animated ? "logo-location-2" : undefined}
          >
            LEVALLOIS-PERRET
          </text>
        </>
      )}
    </svg>
  );
}
