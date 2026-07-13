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
    <section id="equipe" className="bg-dark py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p
              className="mb-3 text-xs font-semibold tracking-[0.35em] uppercase"
              style={{ color: institute.accentGlow }}
            >
              L&apos;équipe
            </p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-cream md:text-6xl">
              Nos expertes
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-cream/40">
            Des professionnelles passionnées pour vous accompagner à{" "}
            {institute.city}.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member, i) => (
            <article
              key={member.id}
              className="group relative overflow-hidden rounded-2xl"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
              </div>

              <div className="absolute right-0 bottom-0 left-0 p-5">
                <h3 className="font-display text-xl font-bold text-cream">
                  {member.name}
                </h3>
                <p
                  className="mt-0.5 text-xs font-medium tracking-wider uppercase"
                  style={{
                    color:
                      member.role === "Responsable"
                        ? institute.accentGlow
                        : "rgba(245,240,235,0.5)",
                  }}
                >
                  {member.role}
                </p>
              </div>

              {/* Hover accent */}
              <div
                className="absolute top-0 left-0 h-full w-0.5 scale-y-0 transition-transform duration-500 group-hover:scale-y-100"
                style={{ backgroundColor: institute.accent, transformOrigin: "top" }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
