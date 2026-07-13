"use client";

import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "#accueil", label: "Accueil" },
  { href: "#services", label: "Services" },
  { href: "#equipe", label: "Équipe" },
  { href: "#galerie", label: "Galerie" },
  { href: "#rendez-vous", label: "Rendez-vous" },
  { href: "#instituts", label: "Nos instituts" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#accueil" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Neox Beauty"
            width={120}
            height={48}
            className="h-12 w-auto"
            priority
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium tracking-wide text-warm-gray transition-colors hover:text-neox"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#rendez-vous"
            className="rounded-full bg-neox px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-neox-dark"
          >
            Réserver
          </a>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-blush/30 bg-cream px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-warm-gray"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#rendez-vous"
              className="rounded-full bg-neox px-5 py-2 text-center text-sm font-medium text-white"
              onClick={() => setOpen(false)}
            >
              Réserver
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
