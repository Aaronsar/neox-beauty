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
    <section className="relative flex h-dvh items-end overflow-hidden bg-cream">
      <div className="absolute inset-0">
        <Image
          src={institute.heroImage}
          alt={institute.name}
          fill
          className={`object-cover brightness-110 transition-transform duration-[2s] ease-out ${loaded ? "scale-100" : "scale-110"}`}
          priority
          sizes="100vw"
        />
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, #faf7f4 0%, rgba(255,255,255,0.5) 45%, rgba(255,255,255,0.15) 100%)",
        }}
      />

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
            style={{ color: institute.accent }}
          >
            Institut de beauté
          </p>

          <h1 className="font-display text-5xl leading-[0.9] font-bold tracking-tight text-charcoal md:text-8xl lg:text-9xl">
            {institute.shortName}
          </h1>

          <p className="mt-4 max-w-lg text-base text-muted md:text-lg">
            {institute.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#rendez-vous"
              className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide text-white transition-all hover:scale-105"
              style={{
                backgroundColor: institute.accent,
                boxShadow: `0 8px 24px ${institute.accent}33`,
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
              className="inline-flex items-center rounded-full border border-border bg-white/70 px-8 py-3.5 text-sm font-medium tracking-wide text-charcoal transition-all hover:border-charcoal/20 hover:bg-white"
            >
              Notre équipe
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] tracking-[0.3em] text-muted uppercase">
            Scroll
          </span>
          <div
            className="h-8 w-px animate-pulse"
            style={{ backgroundColor: institute.accent, opacity: 0.4 }}
          />
        </div>
      </div>
    </section>
  );
}
