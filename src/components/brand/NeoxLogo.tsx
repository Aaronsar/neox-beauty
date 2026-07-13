"use client";

import Image from "next/image";

interface NeoxLogoProps {
  size?: number;
  animated?: boolean;
  className?: string;
}

export default function NeoxLogo({
  size = 140,
  animated = false,
  className = "",
}: NeoxLogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Institut Neox Beauty"
      width={size}
      height={Math.round(size * 1.45)}
      className={`h-auto ${animated ? "logo-image-in" : ""} ${className}`.trim()}
      style={{ width: size }}
      priority
    />
  );
}
