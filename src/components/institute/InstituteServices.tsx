"use client";

import Image from "next/image";
import { useRef } from "react";
import { services } from "@/data/site";
import type { Institute } from "@/data/site";

interface InstituteServicesProps {
  institute: Institute;
}

export default function InstituteServices({ institute }: InstituteServicesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="services" className="bg-dark-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p
              className="mb-3 text-xs font-semibold tracking-[0.35em] uppercase"
              style={{ color: institute.accentGlow }}
            >
              Prestations
            </p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-cream md:text-6xl">
              Services
            </h2>
          </div>
          <p className="max-w-sm text-sm text-cream/40">
            Retrouvez l&apos;ensemble des prestations et tarifs lors de votre
            réservation Planity.
          </p>
        </div>

        {/* Scroll horizontal sur mobile */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible"
          style={{ scrollbarWidth: "none" }}
        >
          {services.map((service) => (
            <article
              key={service.title}
              className="group w-72 shrink-0 overflow-hidden rounded-2xl border border-white/[0.06] bg-dark transition-all duration-500 hover:border-white/10 md:w-auto"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="300px"
                />
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `linear-gradient(to top, ${institute.accent}66, transparent)`,
                  }}
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-cream">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm text-cream/40">{service.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#rendez-vous"
            className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase transition-colors"
            style={{ color: institute.accentGlow }}
          >
            Voir tout & réserver
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
