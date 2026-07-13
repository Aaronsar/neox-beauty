"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NeoxLogo from "@/components/brand/NeoxLogo";
import { institutes } from "@/data/site";

type Side = "levallois" | "saint-brice" | null;

const sides = [
  { id: "levallois" as const, institute: institutes.levallois },
  { id: "saint-brice" as const, institute: institutes["saint-brice"] },
];

export default function SplitLanding() {
  const [hovered, setHovered] = useState<Side>(null);

  return (
    <div className="grain relative flex h-dvh w-full flex-col overflow-hidden bg-white md:flex-row">
      {/* Logo central */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2">
        <div className="animate-float flex flex-col items-center gap-4">
          <NeoxLogo size={110} animated showLocations className="drop-shadow-2xl md:hidden" />
          <NeoxLogo size={130} animated showLocations className="hidden drop-shadow-2xl md:block" />
          <p
            className="hidden text-[10px] font-medium tracking-[0.35em] uppercase md:block"
            style={{ color: "#d4145a" }}
          >
            Choisissez votre univers
          </p>
        </div>
      </div>

      {/* Ligne centrale */}
      <div
        className="absolute top-0 left-1/2 z-20 hidden h-full w-px -translate-x-1/2 md:block"
        style={{
          background: `linear-gradient(to bottom, transparent, ${hovered === "levallois" ? institutes.levallois.accent : hovered === "saint-brice" ? institutes["saint-brice"].accent : "#ebe4de"}, transparent)`,
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
            <div className="absolute inset-0">
              <Image
                src={institute.landingImage}
                alt={institute.city}
                fill
                className="object-cover brightness-105 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                sizes="50vw"
                priority
              />
            </div>

            {/* Overlay clair */}
            <div
              className="absolute inset-0 transition-all duration-700"
              style={{
                background: isHovered
                  ? `linear-gradient(135deg, ${institute.accent}33 0%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0.75) 100%)`
                  : "linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.65) 60%, rgba(255,255,255,0.85) 100%)",
              }}
            />

            <div
              className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
              style={{
                boxShadow: `inset 0 0 80px ${institute.accentGlow}33`,
              }}
            />

            <div className="relative z-10 flex h-full w-full flex-col justify-end p-6 md:p-12 lg:p-16">
              <span
                className="absolute top-6 right-6 font-display text-[8rem] leading-none font-bold transition-all duration-700 md:top-12 md:right-12 md:text-[12rem]"
                style={{
                  color: isHovered ? `${institute.accent}25` : `${institute.accent}10`,
                }}
                aria-hidden
              >
                {id === "levallois" ? "01" : "02"}
              </span>

              <div className="transform transition-all duration-700 group-hover:translate-y-0 md:translate-y-4">
                <p
                  className="mb-2 text-xs font-semibold tracking-[0.3em] uppercase transition-colors duration-500 md:text-sm"
                  style={{
                    color: isHovered ? institute.accent : `${institute.accent}99`,
                  }}
                >
                  Institut
                </p>

                <h2
                  className="font-display text-4xl leading-[0.95] font-bold tracking-tight transition-colors duration-500 md:text-6xl lg:text-7xl"
                  style={{ color: institute.accent }}
                >
                  {institute.shortName}
                </h2>

                <p
                  className="mt-3 max-w-xs text-sm leading-relaxed transition-all duration-500 md:text-base"
                  style={{
                    color: isHovered ? `${institute.accent}cc` : `${institute.accent}88`,
                  }}
                >
                  {institute.tagline}
                </p>

                <div
                  className="mt-6 flex items-center gap-3 transition-all duration-500 md:mt-8"
                  style={{
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? "translateY(0)" : "translateY(16px)",
                  }}
                >
                  <span
                    className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-lg transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: institute.accent,
                      boxShadow: `0 8px 24px ${institute.accent}44`,
                    }}
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

            <div
              className="absolute right-0 bottom-0 left-0 h-1 origin-left scale-x-0 transition-transform duration-700 group-hover:scale-x-100"
              style={{ backgroundColor: institute.accent }}
            />
          </Link>
        );
      })}

      <p className="absolute bottom-4 left-1/2 z-30 -translate-x-1/2 text-[10px] tracking-[0.25em] text-muted uppercase md:hidden">
        Touchez pour choisir
      </p>
    </div>
  );
}
