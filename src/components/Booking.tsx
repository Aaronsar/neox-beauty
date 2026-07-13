export default function Booking() {
  return (
    <section id="rendez-vous" className="bg-charcoal py-24 text-cream">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="mb-3 text-sm font-medium tracking-[0.2em] uppercase text-blush">
          Réservation en ligne
        </p>
        <h2 className="mb-4 font-sans text-4xl font-light md:text-5xl">
          Prenez rendez-vous
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-cream/70">
          Réservez votre créneau en quelques clics via notre plateforme Planity.
          Choisissez votre institut, votre prestation et votre esthéticienne
          préférée.
        </p>

        <div className="overflow-hidden rounded-2xl border border-gold/30 bg-cream/5 p-8 md:p-12">
          {/* Intégration Planity — remplacer le bloc ci-dessous par le code fourni par Planity */}
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-xl border-2 border-dashed border-blush/60 bg-cream/5 p-8">
            <div className="mb-4 text-4xl">📅</div>
            <h3 className="mb-2 font-sans text-2xl font-medium text-cream">
              Widget Planity
            </h3>
            <p className="mb-6 max-w-md text-sm text-cream/60">
              Le code d&apos;intégration Planity sera inséré ici. Il suffit de
              coller le script ou l&apos;iframe fourni par la plateforme dans le
              composant <code className="text-blush">Booking.tsx</code>.
            </p>
            <a
              href="https://www.planity.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-neox px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-neox-dark"
            >
              Accéder à Planity
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
