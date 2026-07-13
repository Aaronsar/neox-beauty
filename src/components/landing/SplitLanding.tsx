"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { institutes } from "@/data/site";

type Side = "levallois" | "saint-brice" | null;

const sides = [
  { id: "levallois" as const, institute: institutes.levallois },
  { id: "saint-brice" as const, institute: institutes["saint-brice"] },
];

export default function SplitLanding() {
  const [hovered, setHovered] = useState<Side>(null);

  return (
    <div className="grain relative flex h-dvh w-full flex-col overflow-hidden bg-dark md:flex-row">
      {/* Logo central */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
        <div className="animate-float flex flex-col items-center gap-3">
          <Image
            src="/logo.png"
            alt="Neox Beauty"
            width={90}
            height={36}
            className="h-auto w-20 drop-shadow-2xl md:w-24"
            priority
          />
          <p className="hidden text-[10px] font-medium tracking-[0.35em] text-cream/50 uppercase md:block">
            Choisissez votre univers
          </p>
        </div>
      </div>

      {/* Ligne centrale */}
      <div
        className="absolute top-0 left-1/2 z-20 hidden h-full w-px -translate-x-1/2 md:block"
        style={{
          background: `linear-gradient(to bottom, transparent, ${hovered === "levallois" ? institutes.levallois.accentGlow : hovered === "saint-brice" ? institutes["saint-brice"].accentGlow : "rgba(255,255,255,0.15)"}, transparent)`,
          transition: "background 0.6s ease",
        }}
      />

      {sides.map(({ id, institute }) => {
        const isHovered = hovered === id;
        const isOtherHovered = hovered !== null && hovered !== id;
        const flexGrow = isHovered ? 1.6 : isOtherHovered ? 0.4 : 1;

        return (
          <Link
            key={id}
            href={`/${institute.slug}`}
            className="group relative flex flex-1 overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{ flexGrow }}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Image de fond */}
            <div className="absolute inset-0">
              <Image
                src={institute.landingImage}
                alt={institute.city}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                sizes="50vw"
                priority
              />
            </div>

            {/* Overlay gradient */}
            <div
              className="absolute inset-0 transition-all duration-700"
              style={{
                background: isHovered
                  ? `linear-gradient(135deg, ${institute.accent}88 0%, rgba(8,8,8,0.6) 60%, rgba(8,8,8,0.85) 100%)`
                  : "linear-gradient(180deg, rgba(8,8,8,0.3) 0%, rgba(8,8,8,0.75) 100%)",
              }}
            />

            {/* Accent glow on hover */}
            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              style={{
                boxShadow: `inset 0 0 120px ${institute.accentGlow}44`,
              }}
            />

            {/* Contenu */}
            <div className="relative z-10 flex h-full w-full flex-col justify-end p-6 md:p-12 lg:p-16">
              {/* Numéro décoratif */}
              <span
                className="absolute top-6 right-6 font-display text-[8rem] leading-none font-bold text-cream/[0.04] transition-all duration-700 group-hover:text-cream/[0.08] md:top-12 md:right-12 md:text-[12rem]"
                aria-hidden
              >
                {id === "levallois" ? "01" : "02"}
              </span>

              <div className="transform transition-all duration-700 group-hover:translate-y-0 md:translate-y-4">
                <p
                  className="mb-2 text-xs font-semibold tracking-[0.3em] uppercase transition-colors duration-500 md:text-sm"
                  style={{ color: isHovered ? institute.accentGlow : "rgba(245,240,235,0.5)" }}
                >
                  Institut
                </p>

                <h2 className="font-display text-4xl leading-[0.95] font-bold tracking-tight text-cream md:text-6xl lg:text-7xl">
                  {institute.shortName}
                </h2>

                <p
                  className="mt-3 max-w-xs text-sm leading-relaxed transition-all duration-500 md:text-base"
                  style={{
                    color: isHovered ? "rgba(245,240,235,0.85)" : "rgba(245,240,235,0.4)",
                    opacity: isHovered ? 1 : 0.7,
                  }}
                >
                  {institute.tagline}
                </p>

                {/* CTA animé */}
                <div
                  className="mt-6 flex items-center gap-3 transition-all duration-500 md:mt-8"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? "translateY(0)" : "translateY(16px)",
                  }}
                >
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide text-white transition-transform duration-300 group-hover:scale-105"
                    style={{ backgroundColor: institute.accent }}
                  >
                    Entrer
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>

            {/* Barre accent bas */}
            <div
              className="absolute right-0 bottom-0 left-0 h-1 origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100"
              style={{ backgroundColor: institute.accent }}
            />
          </Link>
        );
      })}

      {/* Label mobile */}
      <p className="absolute bottom-4 left-1/2 z-30 -translate-x-1/2 text-[10px] tracking-[0.25em] text-cream/30 uppercase md:hidden">
        Touchez pour choisir
      </p>
    </div>
  );
}
