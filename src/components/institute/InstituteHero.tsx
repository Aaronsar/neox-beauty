"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Institute } from "@/data/site";

interface InstituteHeroProps {
  institute: Institute;
}

export default function InstituteHero({ institute }: InstituteHeroProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative flex h-dvh items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={institute.heroImage}
          alt={institute.name}
          fill
          className={`object-cover transition-transform duration-[2s] ease-out ${loaded ? "scale-100" : "scale-110"}`}
          priority
          sizes="100vw"
        />
      </div>

      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, #080808 0%, rgba(8,8,8,0.4) 50%, rgba(8,8,8,0.2) 100%)`,
        }}
      />

      {/* Accent line */}
      <div
        className="absolute top-0 left-0 h-full w-1"
        style={{ backgroundColor: institute.accent }}
      />

      <div className="relative z-10 w-full px-6 pb-16 md:px-12 md:pb-24">
        <div
          className={`mx-auto max-w-7xl transition-all duration-1000 ease-out ${loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <p
            className="mb-4 text-xs font-semibold tracking-[0.35em] uppercase"
            style={{ color: institute.accentGlow }}
          >
            Institut de beauté
          </p>

          <h1 className="font-display text-5xl leading-[0.9] font-bold tracking-tight text-cream md:text-8xl lg:text-9xl">
            {institute.shortName}
          </h1>

          <p className="mt-4 max-w-lg text-base text-cream/60 md:text-lg">
            {institute.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#rendez-vous"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-all hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: institute.accent,
                boxShadow: `0 8px 32px ${institute.accent}44`,
              }}
            >
              Prendre rendez-vous
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="#equipe"
              className="inline-flex items-center rounded-full border border-cream/20 px-8 py-3.5 text-sm font-medium tracking-wide text-cream/70 transition-all hover:border-cream/40 hover:text-cream"
            >
              Notre équipe
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.3em] text-cream/30 uppercase">
            Scroll
          </span>
          <div className="h-8 w-px animate-pulse bg-cream/20" />
        </div>
      </div>
    </section>
  );
}
