"use client";

import Image from "next/image";
import { useRef } from "react";
import BookingButton from "@/components/institute/BookingButton";
import { services } from "@/data/site";
import type { Institute } from "@/data/site";

interface InstituteServicesProps {
  institute: Institute;
}

export default function InstituteServices({ institute }: InstituteServicesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="services" className="bg-blush py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p
              className="mb-3 text-xs font-semibold tracking-[0.35em] uppercase"
              style={{ color: institute.accent }}
            >
              Prestations
            </p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-charcoal md:text-6xl">
              Services
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted">
            Retrouvez l&apos;ensemble des prestations et tarifs lors de votre
            réservation Planity.
          </p>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-4"
          style={{ scrollbarWidth: "none" }}
        >
          {services.map((service) => (
            <article
              key={service.title}
              className="group w-72 shrink-0 overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-500 hover:shadow-lg md:w-auto"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="300px"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-charcoal">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm text-muted">{service.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <BookingButton institute={institute} variant="text">
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
          </BookingButton>
        </div>
      </div>
    </section>
  );
}
