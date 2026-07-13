"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NeoxLogo from "@/components/brand/NeoxLogo";
import DecorativeShapes from "@/components/ui/DecorativeShapes";
import { institutes } from "@/data/site";

type Side = "levallois" | "saint-brice" | null;

const sides = [
  { id: "levallois" as const, institute: institutes.levallois, num: "01" },
  { id: "saint-brice" as const, institute: institutes["saint-brice"], num: "02" },
];

export default function SplitLanding() {
  const [hovered, setHovered] = useState<Side>(null);

  return (
    <div className="grain relative flex min-h-dvh flex-col overflow-hidden bg-cream md:flex-row">
      <DecorativeShapes />

      {/* Logo officiel — centre */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 z-40 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center gap-4">
          <NeoxLogo
            size={120}
            animated
            className="w-28 drop-shadow-2xl md:w-36"
          />
          <p className="whitespace-nowrap text-[10px] font-semibold tracking-[0.35em] text-neox uppercase">
            Choisissez votre univers
          </p>
        </div>
      </div>

      {sides.map(({ id, institute, num }, index) => {
        const isHovered = hovered === id;
        const isOther = hovered !== null && hovered !== id;

        return (
          <Link
            key={id}
            href={`/${institute.slug}`}
            className="group relative flex flex-1 items-center justify-center p-4 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] md:p-8 lg:p-12"
            style={{
              flex: isHovered ? 1.35 : isOther ? 0.65 : 1,
            }}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Carte portail */}
            <div
              className="card-lift relative flex h-[72dvh] w-full max-w-xl flex-col overflow-hidden rounded-[2.5rem] bg-white shadow-xl md:h-[82dvh] md:rounded-[3rem]"
              style={{
                boxShadow: isHovered
                  ? `0 32px 64px -16px ${institute.accent}33`
                  : "0 16px 40px -12px rgba(0,0,0,0.08)",
                transform: isHovered ? "translateY(-12px) scale(1.02)" : undefined,
                transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {/* Image arrondie en haut */}
              <div className="relative m-4 flex-1 overflow-hidden rounded-[2rem] md:m-5">
                <Image
                  src={institute.landingImage}
                  alt={institute.city}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="50vw"
                  priority
                />
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(to top, ${institute.accent}55, transparent 60%)`,
                    opacity: isHovered ? 1 : 0.6,
                  }}
                />

                {/* Numéro graphique */}
                <div
                  className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-bold text-white backdrop-blur-sm transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundColor: `${institute.accent}cc` }}
                >
                  {num}
                </div>
              </div>

              {/* Contenu */}
              <div className="relative px-6 pb-6 md:px-8 md:pb-8">
                <div
                  className="absolute -top-6 right-6 h-12 w-12 rounded-full border-4 border-white opacity-60"
                  style={{ backgroundColor: `${institute.accent}22` }}
                />

                <p
                  className="mb-1 text-[10px] font-semibold tracking-[0.35em] uppercase"
                  style={{ color: institute.accent }}
                >
                  Institut
                </p>
                <h2
                  className="font-display text-3xl font-bold tracking-tight md:text-5xl"
                  style={{ color: institute.accent }}
                >
                  {institute.shortName}
                </h2>
                <p
                  className="mt-2 text-sm leading-relaxed"
                  style={{ color: `${institute.accent}99` }}
                >
                  {institute.tagline}
                </p>

                <div
                  className="mt-5 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all duration-500"
                  style={{
                    backgroundColor: institute.accent,
                    opacity: isHovered ? 1 : 0.85,
                    transform: isHovered ? "translateX(4px)" : "translateX(0)",
                  }}
                >
                  Entrer
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              {/* Bande accent */}
              <div
                className="absolute top-0 left-0 h-full w-1.5 rounded-l-[3rem] transition-all duration-500"
                style={{
                  backgroundColor: institute.accent,
                  opacity: isHovered ? 1 : 0.4,
                }}
              />
            </div>

            {/* Forme décorative derrière la carte */}
            <div
              className="absolute -z-10 rounded-[3rem] transition-all duration-700"
              style={{
                inset: index === 0 ? "-8px 20px 20px -8px" : "-8px -8px 20px 20px",
                backgroundColor: `${institute.accent}15`,
                transform: isHovered ? "rotate(-2deg) scale(1.03)" : "rotate(0deg)",
              }}
            />
          </Link>
        );
      })}

      {/* Bandeau défilant */}
      <div className="absolute bottom-0 left-0 z-30 w-full overflow-hidden border-t border-border bg-white/70 py-3 backdrop-blur-sm">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <span
              key={i}
              className="mx-8 text-[10px] font-medium tracking-[0.4em] text-muted uppercase"
            >
              Neox Beauty · Levallois-Perret · Saint-Brice-sous-Forêt · Institut de beauté ·
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
