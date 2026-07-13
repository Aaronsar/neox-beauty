"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import type { Institute } from "@/data/site";

interface InstituteNavProps {
  institute: Institute;
}

export default function InstituteNav({ institute }: InstituteNavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#equipe", label: "Équipe" },
    { href: "#services", label: "Services" },
    { href: "#galerie", label: "Galerie" },
    { href: "#rendez-vous", label: "Réserver" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(8,8,8,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Neox Beauty"
            width={80}
            height={32}
            className="h-8 w-auto transition-opacity group-hover:opacity-70"
          />
          <span className="hidden text-xs tracking-[0.2em] text-cream/40 uppercase transition-colors group-hover:text-cream/70 sm:inline">
            {institute.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-widest text-cream/50 uppercase transition-colors hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#rendez-vous"
          className="rounded-full px-5 py-2 text-xs font-semibold tracking-wider text-white uppercase transition-transform hover:scale-105"
          style={{ backgroundColor: institute.accent }}
        >
          Réserver
        </a>
      </div>
    </header>
  );
}
