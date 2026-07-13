import Image from "next/image";
import { galleryImages } from "@/data/site";

export default function Gallery() {
  return (
    <section id="galerie" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-medium tracking-[0.2em] uppercase text-neox">
            Inspirations
          </p>
          <h2 className="font-sans text-4xl font-light text-charcoal md:text-5xl">
            Galerie
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-warm-gray">
            Quelques réalisations pour vous inspirer — photos illustratives en
            attendant vos propres clichés.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className={`relative overflow-hidden rounded-xl ${
                index === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto md:h-full" : "aspect-square"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
