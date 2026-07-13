"use client";

import Image from "next/image";
import BookingButton from "@/components/institute/BookingButton";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/data/site";
import type { Institute } from "@/data/site";

interface InstituteServicesProps {
  institute: Institute;
}

export default function InstituteServices({ institute }: InstituteServicesProps) {
  return (
    <section id="services" className="relative overflow-hidden bg-blush py-24 md:py-32">
      <div
        className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: institute.accent }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              label="Prestations"
              title="Services"
              subtitle="Retrouvez l'ensemble des prestations et tarifs sur Planity."
              accent={institute.accent}
            />
            <BookingButton institute={institute} variant="text">
              Voir tout & réserver →
            </BookingButton>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 80}>
              <article className="card-lift group relative aspect-[3/4] overflow-hidden rounded-[2rem] bg-white shadow-sm">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to top, ${institute.accent}ee 0%, ${institute.accent}44 45%, transparent 100%)`,
                  }}
                />
                <div className="absolute right-0 bottom-0 left-0 p-5">
                  <h3 className="font-display text-lg font-bold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/80">{service.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
