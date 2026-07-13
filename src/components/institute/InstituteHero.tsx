"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import BookingButton from "@/components/institute/BookingButton";
import DecorativeShapes from "@/components/ui/DecorativeShapes";
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
    <section className="relative min-h-dvh overflow-hidden bg-cream pt-28 pb-16 md:pt-32 md:pb-24">
      <DecorativeShapes accent={institute.accent} />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 md:grid-cols-12 md:gap-8 md:px-12">
        {/* Image — composition graphique */}
        <div
          className={`relative md:col-span-7 transition-all duration-1000 ${loaded ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
        >
          <div
            className="absolute -top-4 -right-4 h-full w-full rounded-[3rem] md:-right-8"
            style={{ backgroundColor: `${institute.accent}18` }}
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl md:aspect-[5/6] md:rounded-[3rem]">
            <Image
              src={institute.heroImage}
              alt={institute.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 55vw"
            />
          </div>
          {/* Cercle décoratif */}
          <div
            className="absolute -bottom-6 -left-6 flex h-28 w-28 items-center justify-center rounded-full border-4 border-white text-center shadow-lg md:h-36 md:w-36"
            style={{ backgroundColor: institute.accent }}
          >
            <span className="font-display text-[10px] leading-tight font-bold tracking-wider text-white uppercase md:text-xs">
              Institut
              <br />
              Neox
            </span>
          </div>
        </div>

        {/* Texte */}
        <div
          className={`md:col-span-5 transition-all delay-200 duration-1000 ${loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <span
            className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[10px] font-semibold tracking-[0.3em] uppercase"
            style={{ backgroundColor: `${institute.accent}12`, color: institute.accent }}
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ backgroundColor: institute.accent }} />
            Institut de beauté
          </span>

          <h1
            className="font-display text-5xl leading-[0.9] font-bold tracking-tight md:text-7xl lg:text-8xl"
            style={{ color: institute.accent }}
          >
            {institute.shortName}
          </h1>

          <p
            className="mt-5 max-w-sm text-base leading-relaxed md:text-lg"
            style={{ color: `${institute.accent}99` }}
          >
            {institute.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <BookingButton institute={institute}>
              Prendre rendez-vous
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </BookingButton>
            <a
              href="#equipe"
              className="inline-flex items-center rounded-full border-2 border-border bg-white px-8 py-3.5 text-sm font-medium text-charcoal transition-all hover:border-neox/30 hover:shadow-md"
            >
              Notre équipe
            </a>
          </div>

          {/* Stats pills */}
          <div className="mt-10 flex flex-wrap gap-3">
            {["4 expertes", "Planity", institute.city.split("-")[0]].map((pill) => (
              <span
                key={pill}
                className="rounded-full bg-white px-4 py-2 text-xs font-medium text-muted shadow-sm"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
