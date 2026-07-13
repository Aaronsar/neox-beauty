import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { CONTACT_EMAIL } from "@/data/site";
import type { Institute } from "@/data/site";

interface InstituteContactProps {
  institute: Institute;
  otherInstitute: Institute;
}

function formatPhoneLink(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export default function InstituteContact({
  institute,
  otherInstitute,
}: InstituteContactProps) {
  const infos = [
    { icon: "📍", content: institute.address },
    {
      icon: "📞",
      content: (
        <a href={formatPhoneLink(institute.phone)} className="hover:text-neox">
          {institute.phone}
        </a>
      ),
    },
    {
      icon: "✉️",
      content: (
        <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-neox">
          {CONTACT_EMAIL}
        </a>
      ),
    },
    { icon: "🕐", content: institute.hours },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div
        className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: institute.accent }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-12">
        <Reveal>
          <SectionHeader label="Contact" title={institute.city} accent={institute.accent} />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal delay={100}>
            <div className="rounded-[2.5rem] bg-white p-8 shadow-sm md:p-10">
              <div className="space-y-6">
                {infos.map((item) => (
                  <div
                    key={item.icon}
                    className="flex items-start gap-4 rounded-2xl bg-cream p-4 text-sm text-muted"
                  >
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-base"
                      style={{ backgroundColor: `${institute.accent}12` }}
                    >
                      {item.icon}
                    </span>
                    <div className="pt-2">{item.content}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <Link
              href={`/${otherInstitute.slug}`}
              className="card-lift group relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-[2.5rem] p-8 md:p-10"
              style={{ backgroundColor: institute.accent }}
            >
              <div>
                <span className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold tracking-widest text-white uppercase">
                  Autre institut
                </span>
                <h3 className="mt-4 font-display text-4xl font-bold text-white md:text-5xl">
                  {otherInstitute.shortName}
                </h3>
                <p className="mt-2 text-white/70">{otherInstitute.city}</p>
              </div>

              <div className="inline-flex items-center gap-2 text-sm font-semibold tracking-wider text-white uppercase transition-all group-hover:gap-4">
                Découvrir
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="absolute -right-8 -bottom-8 h-48 w-48 rounded-full bg-white/10" />
              <div className="absolute top-8 right-8 h-20 w-20 rounded-2xl bg-white/10 transition-transform duration-500 group-hover:rotate-12" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
