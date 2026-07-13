"use client";

import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import { galleryImages } from "@/data/site";
import type { Institute } from "@/data/site";

const layouts = [
  "col-span-2 row-span-2 rounded-[3rem]",
  "rounded-full aspect-square",
  "rounded-[2rem]",
  "rounded-[2rem]",
  "rounded-full aspect-square",
  "col-span-2 rounded-[2rem] aspect-[2/1]",
];

interface InstituteGalleryProps {
  institute: Institute;
}

export default function InstituteGallery({ institute }: InstituteGalleryProps) {
  return (
    <section id="galerie" className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <Reveal>
          <SectionHeader
            label="Inspirations"
            title="Galerie"
            subtitle="Quelques réalisations pour vous inspirer."
            accent={institute.accent}
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {galleryImages.map((image, i) => (
            <Reveal key={image.src} delay={i * 70} variant="scale">
              <div
                className={`group relative overflow-hidden ${layouts[i]} ${
                  i === 0 ? "min-h-[280px] md:min-h-[400px]" : "aspect-square"
                } ${i === 5 ? "col-span-2 aspect-[2/1]" : ""}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div
                  className="absolute inset-0 opacity-0 transition-all duration-500 group-hover:opacity-100"
                  style={{ backgroundColor: `${institute.accent}33` }}
                />
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted">
          Photos illustratives — vos réalisations seront ajoutées prochainement
        </p>
      </div>
    </section>
  );
}
