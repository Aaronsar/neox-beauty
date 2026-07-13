export default function About() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-medium tracking-[0.2em] uppercase text-neox">
            Notre philosophie
          </p>
          <h2 className="mb-6 font-sans text-4xl font-light text-charcoal md:text-5xl">
            Un moment pour vous
          </h2>
          <p className="mb-4 leading-relaxed text-warm-gray">
            Chez Neox Beauty, chaque rendez-vous est une parenthèse de bien-être.
            Nos esthéticiennes expertes vous accueillent dans un institut moderne
            et raffiné, où la qualité des soins et l&apos;écoute sont au cœur de
            chaque prestation.
          </p>
          <p className="leading-relaxed text-warm-gray">
            Que ce soit pour une manucure semi-permanente, un soin du visage
            personnalisé ou une séance d&apos;épilation, nous mettons tout notre
            savoir-faire à votre service — à Levallois-Perret comme à
            Saint-Brice-sous-Forêt.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { number: "2", label: "Instituts en Île-de-France" },
            { number: "6", label: "Esthéticiennes" },
            { number: "10+", label: "Prestations beauté" },
            { number: "100%", label: "Passion & expertise" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-blush/40 bg-white/60 p-6 text-center"
            >
              <p className="mb-1 font-sans text-3xl font-semibold text-neox">
                {stat.number}
              </p>
              <p className="text-sm text-warm-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
