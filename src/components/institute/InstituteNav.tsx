"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NeoxLogo from "@/components/brand/NeoxLogo";
import BookingButton from "@/components/institute/BookingButton";
import type { Institute } from "@/data/site";

interface InstituteNavProps {
  institute: Institute;
}

export default function InstituteNav({ institute }: InstituteNavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
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
    <header className="fixed top-0 right-0 left-0 z-50 px-4 pt-4 md:px-8">
      <div
        className="mx-auto flex max-w-5xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 md:px-8"
        style={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.6)",
          backdropFilter: "blur(20px)",
          boxShadow: scrolled
            ? "0 8px 32px -8px rgba(212,20,90,0.12)"
            : "0 4px 20px -6px rgba(0,0,0,0.06)",
          border: scrolled ? "1px solid #ebe4de" : "1px solid transparent",
        }}
      >
        <Link href="/" className="logo-hover shrink-0 transition-transform">
          <NeoxLogo size={36} />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-[11px] font-medium tracking-widest text-muted uppercase transition-all hover:bg-blush hover:text-charcoal"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <span
            className="hidden text-[10px] font-semibold tracking-widest uppercase lg:inline"
            style={{ color: institute.accent }}
          >
            {institute.shortName}
          </span>
          <BookingButton institute={institute} className="!px-5 !py-2 !text-[11px]">
            Réserver
          </BookingButton>
        </div>
      </div>
    </header>
  );
}
