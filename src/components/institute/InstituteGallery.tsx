import Image from "next/image";
import { galleryImages } from "@/data/site";
import type { Institute } from "@/data/site";

interface InstituteGalleryProps {
  institute: Institute;
}

export default function InstituteGallery({ institute }: InstituteGalleryProps) {
  return (
    <section id="galerie" className="bg-dark py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-12">
          <p
            className="mb-3 text-xs font-semibold tracking-[0.35em] uppercase"
            style={{ color: institute.accentGlow }}
          >
            Inspirations
          </p>
          <h2 className="font-display text-4xl font-bold tracking-tight text-cream md:text-6xl">
            Galerie
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {galleryImages.map((image, i) => (
            <div
              key={image.src}
              className={`group relative overflow-hidden rounded-xl ${
                i === 0
                  ? "col-span-2 aspect-[2/1] md:col-span-2 md:row-span-2 md:aspect-auto md:min-h-[400px]"
                  : "aspect-square"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-dark/0 transition-colors duration-500 group-hover:bg-dark/20" />
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-cream/25">
          Photos illustratives — vos réalisations seront ajoutées prochainement
        </p>
      </div>
    </section>
  );
}
