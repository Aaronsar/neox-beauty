import { CONTACT_EMAIL, institutes } from "@/data/site";

function formatPhoneLink(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export default function Locations() {
  return (
    <section id="instituts" className="bg-cream py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium tracking-[0.2em] uppercase text-neox">
            Où nous trouver
          </p>
          <h2 className="font-sans text-4xl font-light text-charcoal md:text-5xl">
            Nos instituts
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {institutes.map((institute) => (
            <article
              key={institute.id}
              className="rounded-2xl border border-blush/40 bg-white p-8 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-1 font-sans text-2xl font-medium text-charcoal">
                {institute.name}
              </h3>
              <p className="mb-6 text-sm text-neox">{institute.city}</p>

              <div className="space-y-4 text-sm text-warm-gray">
                <div className="flex gap-3">
                  <span className="text-neox" aria-hidden>
                    📍
                  </span>
                  <p>{institute.address}</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-neox" aria-hidden>
                    📞
                  </span>
                  <a
                    href={formatPhoneLink(institute.phone)}
                    className="transition-colors hover:text-neox"
                  >
                    {institute.phone}
                  </a>
                </div>
                <div className="flex gap-3">
                  <span className="text-neox" aria-hidden>
                    ✉️
                  </span>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="transition-colors hover:text-neox"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
                <div className="flex gap-3">
                  <span className="text-neox" aria-hidden>
                    🕐
                  </span>
                  <p>{institute.hours}</p>
                </div>
              </div>

              <a
                href="#rendez-vous"
                className="mt-8 inline-block rounded-full border border-charcoal px-6 py-2 text-sm font-medium text-charcoal transition-colors hover:bg-neox hover:border-neox hover:text-white"
              >
                Réserver à {institute.city}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
