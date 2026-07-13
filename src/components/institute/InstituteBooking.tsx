import type { Institute } from "@/data/site";

interface InstituteBookingProps {
  institute: Institute;
}

export default function InstituteBooking({ institute }: InstituteBookingProps) {
  return (
    <section id="rendez-vous" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, ${institute.accent}18 0%, #080808 70%)`,
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-12">
        <p
          className="mb-3 text-xs font-semibold tracking-[0.35em] uppercase"
          style={{ color: institute.accentGlow }}
        >
          Réservation
        </p>
        <h2 className="font-display text-4xl font-bold tracking-tight text-cream md:text-6xl">
          Prenez rendez-vous
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-cream/40">
          Réservez en ligne votre créneau à {institute.city} via Planity.
        </p>

        <div className="mt-12 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-sm md:p-12">
          <div className="flex min-h-[380px] flex-col items-center justify-center rounded-xl border border-dashed border-white/10 p-8">
            <div
              className="mb-4 flex h-16 w-16 items-center justify-center rounded-full text-2xl"
              style={{ backgroundColor: `${institute.accent}22` }}
            >
              📅
            </div>
            <h3 className="font-display text-xl font-bold text-cream">
              Widget Planity — {institute.shortName}
            </h3>
            <p className="mt-2 max-w-sm text-sm text-cream/35">
              Le code Planity spécifique à cet institut sera intégré ici.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
