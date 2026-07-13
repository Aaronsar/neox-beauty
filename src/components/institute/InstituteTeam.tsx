import Image from "next/image";
import type { Employee, Institute } from "@/data/site";

interface InstituteTeamProps {
  institute: Institute;
  members: Employee[];
}

export default function InstituteTeam({
  institute,
  members,
}: InstituteTeamProps) {
  return (
    <section id="equipe" className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p
              className="mb-3 text-xs font-semibold tracking-[0.35em] uppercase"
              style={{ color: institute.accent }}
            >
              L&apos;équipe
            </p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-charcoal md:text-6xl">
              Nos expertes
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted">
            Des professionnelles passionnées pour vous accompagner à{" "}
            {institute.city}.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <article
              key={member.id}
              className="group overflow-hidden rounded-2xl border border-border bg-cream shadow-sm transition-all duration-500 hover:shadow-md"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>

              <div className="p-5">
                <h3 className="font-display text-xl font-bold text-charcoal">
                  {member.name}
                </h3>
                <p
                  className="mt-0.5 text-xs font-medium tracking-wider uppercase"
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
          ))}
        </div>
      </div>
    </section>
  );
}
