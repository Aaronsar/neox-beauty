import type { Institute } from "@/data/site";

interface InstituteBookingProps {
  institute: Institute;
}

export default function InstituteBooking({ institute }: InstituteBookingProps) {
  return (
    <section id="rendez-vous" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, ${institute.accent}12 0%, #faf7f4 70%)`,
        }}
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center md:px-12">
        <p
          className="mb-3 text-xs font-semibold tracking-[0.35em] uppercase"
          style={{ color: institute.accent }}
        >
          Réservation
        </p>
        <h2 className="font-display text-4xl font-bold tracking-tight text-charcoal md:text-6xl">
          Prenez rendez-vous
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-muted">
          Réservez en ligne votre créneau à {institute.city} via Planity.
        </p>

        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-white p-8 shadow-sm md:p-12">
          <div
            className="flex min-h-[380px] flex-col items-center justify-center rounded-xl border border-dashed p-8"
            style={{ borderColor: `${institute.accent}33` }}
          >
            <div
              className="mb-4 flex h-16 w-16 items-center justify-center rounded-full text-2xl"
              style={{ backgroundColor: `${institute.accent}15` }}
            >
              📅
            </div>
            <h3 className="font-display text-xl font-bold text-charcoal">
              Widget Planity — {institute.shortName}
            </h3>
            <p className="mt-2 max-w-sm text-sm text-muted">
              Le code Planity spécifique à cet institut sera intégré ici.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
