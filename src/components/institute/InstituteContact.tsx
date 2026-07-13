import Link from "next/link";
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
  return (
    <section id="contact" className="bg-dark-soft py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Infos contact */}
          <div>
            <p
              className="mb-3 text-xs font-semibold tracking-[0.35em] uppercase"
              style={{ color: institute.accentGlow }}
            >
              Contact
            </p>
            <h2 className="font-display text-4xl font-bold tracking-tight text-cream md:text-5xl">
              {institute.city}
            </h2>

            <div className="mt-8 space-y-5">
              {[
                { icon: "📍", content: institute.address },
                {
                  icon: "📞",
                  content: (
                    <a
                      href={formatPhoneLink(institute.phone)}
                      className="transition-colors hover:text-cream"
                    >
                      {institute.phone}
                    </a>
                  ),
                },
                {
                  icon: "✉️",
                  content: (
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="transition-colors hover:text-cream"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  ),
                },
                { icon: "🕐", content: institute.hours },
              ].map((item) => (
                <div
                  key={item.icon}
                  className="flex items-start gap-4 text-sm text-cream/50"
                >
                  <span className="text-base" aria-hidden>
                    {item.icon}
                  </span>
                  <div>{item.content}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Autre institut */}
          <Link
            href={`/${otherInstitute.slug}`}
            className="group relative overflow-hidden rounded-2xl border border-white/[0.06] p-8 transition-all duration-500 hover:border-white/12"
          >
            <p className="text-xs tracking-[0.3em] text-cream/30 uppercase">
              Notre autre institut
            </p>
            <h3 className="mt-2 font-display text-3xl font-bold text-cream transition-colors group-hover:text-white">
              {otherInstitute.shortName}
            </h3>
            <p className="mt-2 text-sm text-cream/40">{otherInstitute.city}</p>

            <div
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-wider uppercase transition-all group-hover:gap-3"
              style={{ color: otherInstitute.accentGlow }}
            >
              Découvrir
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div
              className="absolute right-0 bottom-0 h-32 w-32 rounded-tl-full opacity-10 transition-opacity group-hover:opacity-20"
              style={{ backgroundColor: otherInstitute.accent }}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
