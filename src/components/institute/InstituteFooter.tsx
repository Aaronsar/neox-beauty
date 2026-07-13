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
    <footer className="relative overflow-hidden bg-white py-16">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: `linear-gradient(to right, transparent, ${institute.accent}44, transparent)`,
        }}
      />

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 md:flex-row md:justify-between md:px-12">
        <Link href="/" className="logo-hover transition-transform">
          <NeoxLogo size={44} />
        </Link>

        <p className="text-center text-xs text-muted">
          {institute.name}
          <br />
          {CONTACT_EMAIL}
        </p>

        <Link
          href="/"
          className="rounded-full border-2 border-border px-6 py-3 text-xs font-semibold tracking-widest text-muted uppercase transition-all hover:border-neox/30 hover:text-neox"
        >
          Changer d&apos;institut
        </Link>
      </div>
    </footer>
  );
}
