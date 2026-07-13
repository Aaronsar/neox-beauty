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
  const sorted = [...members].sort((a, b) => {
    if (a.role === "Responsable") return -1;
    if (b.role === "Responsable") return 1;
    return 0;
  });

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

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {sorted.map((member, i) => (
            <Reveal key={member.id} delay={i * 80}>
              <article className="card-lift group overflow-hidden rounded-[2rem] bg-cream">
                <div className="relative m-3 aspect-[3/4] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, 25vw"
                  />
                  {member.role === "Responsable" && (
                    <span
                      className="absolute top-3 left-3 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase"
                      style={{ backgroundColor: institute.accent }}
                    >
                      {member.role}
                    </span>
                  )}
                </div>
                <div className="px-4 pb-5">
                  <h3 className="font-display text-xl font-bold text-charcoal">
                    {member.name}
                  </h3>
                  <p
                    className="mt-0.5 text-[10px] font-medium tracking-widest uppercase"
                    style={{
                      color:
                        member.role === "Responsable"
                          ? institute.accent
                          : "#7a7570",
                    }}
                  >
                    {member.role}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
