"use client";

import Image from "next/image";
import BookingButton from "@/components/institute/BookingButton";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/data/site";
import type { Institute } from "@/data/site";

const bentoLayout = [
  "md:col-span-2 md:row-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
];

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

        {/* Bento grid */}
        <div className="mt-14 grid auto-rows-[200px] gap-4 md:grid-cols-3 md:auto-rows-[220px] md:gap-5">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={i * 100} className={bentoLayout[i] ?? ""}>
              <article className="card-lift group relative h-full overflow-hidden rounded-[2rem] bg-white shadow-sm">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(to top, ${institute.accent}ee 0%, ${institute.accent}44 40%, transparent 100%)`,
                    opacity: 0.85,
                  }}
                />
                <div className="absolute right-0 bottom-0 left-0 p-6">
                  <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/80">{service.description}</p>
                </div>
                {/* Coin arrondi décoratif */}
                <div
                  className="absolute top-4 right-4 h-10 w-10 rounded-2xl border-2 border-white/40 transition-transform duration-500 group-hover:rotate-12"
                  style={{ backgroundColor: `${institute.accent}55` }}
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
