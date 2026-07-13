import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      <Image
        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&h=1080&fit=crop"
        alt="Institut Neox Beauty"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-charcoal/50" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-cream">
        <p className="mb-4 text-sm font-medium tracking-[0.3em] uppercase text-blush">
          Institut de beauté
        </p>
        <h1 className="mb-6 font-sans text-5xl leading-tight font-light md:text-7xl">
          Neox <span className="text-blush">Beauty</span>
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed font-light text-cream/90 md:text-xl">
          L&apos;art de sublimer votre beauté naturelle. Manucure, soins du visage
          et épilation dans un cadre élégant et chaleureux.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#rendez-vous"
            className="rounded-full bg-neox px-8 py-3 text-sm font-medium tracking-wide text-white transition-colors hover:bg-neox-dark"
          >
            Prendre rendez-vous
          </a>
          <a
            href="#services"
            className="rounded-full border border-cream/60 px-8 py-3 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-cream/10"
          >
            Découvrir nos services
          </a>
        </div>
        <p className="mt-12 text-sm tracking-wide text-cream/70">
          Levallois-Perret &middot; Saint-Brice-sous-Forêt
        </p>
      </div>
    </section>
  );
}
