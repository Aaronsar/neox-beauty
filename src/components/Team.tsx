import Image from "next/image";
import { employees, institutes } from "@/data/site";

export default function Team() {
  const levalloisTeam = employees.filter((e) => e.location === "levallois");
  const saintBriceTeam = employees.filter((e) => e.location === "saint-brice");

  return (
    <section id="equipe" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium tracking-[0.2em] uppercase text-neox">
            Notre équipe
          </p>
          <h2 className="font-sans text-4xl font-light text-charcoal md:text-5xl">
            Des expertes à votre écoute
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-warm-gray">
            Rencontrez les professionnelles qui font la différence chez Neox
            Beauty.
          </p>
        </div>

        <TeamGroup
          title={institutes[0].name}
          subtitle={institutes[0].city}
          members={levalloisTeam}
        />

        <div className="mt-16">
          <TeamGroup
            title={institutes[1].name}
            subtitle={institutes[1].city}
            members={saintBriceTeam}
          />
        </div>
      </div>
    </section>
  );
}

function TeamGroup({
  title,
  subtitle,
  members,
}: {
  title: string;
  subtitle: string;
  members: typeof employees;
}) {
  return (
    <div>
      <div className="mb-8 border-b border-blush/40 pb-4">
        <h3 className="font-sans text-2xl font-medium text-charcoal">{title}</h3>
        <p className="text-sm text-warm-gray">{subtitle}</p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((member) => (
          <article key={member.id} className="text-center">
            <div className="relative mx-auto mb-4 h-64 w-full max-w-[220px] overflow-hidden rounded-2xl">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                sizes="220px"
              />
            </div>
            <h4 className="font-sans text-xl font-medium text-charcoal">
              {member.name}
            </h4>
            <p
              className={`mt-1 text-sm ${member.role === "Responsable" ? "font-medium text-neox" : "text-warm-gray"}`}
            >
              {member.role}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
