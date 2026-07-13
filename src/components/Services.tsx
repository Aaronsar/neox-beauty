import Image from "next/image";
import { services } from "@/data/site";

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium tracking-[0.2em] uppercase text-neox">
            Nos prestations
          </p>
          <h2 className="font-sans text-4xl font-light text-charcoal md:text-5xl">
            Services
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-warm-gray">
            Manucure, semi-permanent, soins du visage, épilation et bien plus
            encore. Retrouvez l&apos;ensemble de nos prestations et tarifs lors
            de votre réservation en ligne.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden rounded-2xl border border-blush/30 bg-cream transition-shadow hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-sans text-xl font-medium text-charcoal">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-warm-gray">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#rendez-vous"
            className="inline-block rounded-full bg-neox px-8 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-neox-dark"
          >
            Voir toutes les prestations & réserver
          </a>
        </div>
      </div>
    </section>
  );
}
