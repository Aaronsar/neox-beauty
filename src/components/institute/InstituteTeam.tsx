"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Employee, Institute } from "@/data/site";

interface InstituteTeamProps {
  institute: Institute;
  members: Employee[];
}

export default function InstituteTeam({
  institute,
  members,
}: InstituteTeamProps) {
  const lead = members.find((m) => m.role === "Responsable");
  const rest = members.filter((m) => m.role !== "Responsable");

  return (
    <section id="equipe" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div
        className="absolute top-0 right-0 h-64 w-64 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: institute.accent }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <Reveal>
          <SectionHeader
            label="L'équipe"
            title="Nos expertes"
            subtitle={`Des professionnelles passionnées à ${institute.city}.`}
            accent={institute.accent}
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 md:gap-6">
          {lead && (
            <Reveal delay={100}>
              <article className="card-lift group relative overflow-hidden rounded-[2.5rem] bg-blush md:row-span-1">
                <div className="relative m-4 aspect-[4/5] overflow-hidden rounded-[2rem] md:m-5">
                  <Image
                    src={lead.image}
                    alt={lead.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="40vw"
                  />
                </div>
                <div className="px-6 pb-6 md:px-8 md:pb-8">
                  <span
                    className="mb-2 inline-block rounded-full px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase"
                    style={{ backgroundColor: institute.accent }}
                  >
                    {lead.role}
                  </span>
                  <h3 className="font-display text-3xl font-bold text-charcoal">{lead.name}</h3>
                </div>
              </article>
            </Reveal>
          )}

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1">
            {rest.map((member, i) => (
              <Reveal key={member.id} delay={150 + i * 80}>
                <article className="card-lift group flex gap-4 overflow-hidden rounded-[2rem] bg-cream p-3">
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[1.25rem] sm:h-28 sm:w-28">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="120px"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="font-display text-lg font-bold text-charcoal">{member.name}</h3>
                    <p className="text-[10px] font-medium tracking-widest text-muted uppercase">
                      {member.role}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
