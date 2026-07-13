"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import BookingButton from "@/components/institute/BookingButton";
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
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #ebe4de" : "none",
        boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.04)" : "none",
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
          <span
            className="hidden text-xs tracking-[0.2em] uppercase transition-colors sm:inline"
            style={{ color: scrolled ? institute.accent : "#7a7570" }}
          >
            {institute.shortName}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium tracking-widest text-muted uppercase transition-colors hover:text-charcoal"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <BookingButton institute={institute}>Réserver</BookingButton>
      </div>
    </header>
  );
}
