"use client";

import Link from "next/link";
import NeoxLogo from "@/components/brand/NeoxLogo";
import { CONTACT_EMAIL } from "@/data/site";
import type { Institute } from "@/data/site";

interface InstituteFooterProps {
  institute: Institute;
}

export default function InstituteFooter({ institute }: InstituteFooterProps) {
  return (
    <footer className="border-t border-border bg-cream py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-12">
        <Link href="/" className="logo-hover transition-transform hover:opacity-90">
          <NeoxLogo size={38} showLocations={false} />
        </Link>

        <p className="text-xs text-muted">
          {institute.name} — {CONTACT_EMAIL}
        </p>

        <Link
          href="/"
          className="text-xs font-medium tracking-widest text-muted uppercase transition-colors hover:text-charcoal"
        >
          Changer d&apos;institut
        </Link>
      </div>
    </footer>
  );
}
