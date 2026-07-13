import Link from "next/link";
import Image from "next/image";
import { CONTACT_EMAIL } from "@/data/site";
import type { Institute } from "@/data/site";

interface InstituteFooterProps {
  institute: Institute;
}

export default function InstituteFooter({ institute }: InstituteFooterProps) {
  return (
    <footer className="border-t border-white/[0.06] bg-dark py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-12">
        <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-70">
          <Image src="/logo.png" alt="Neox Beauty" width={70} height={28} className="h-7 w-auto" />
        </Link>

        <p className="text-xs text-cream/30">
          {institute.name} — {CONTACT_EMAIL}
        </p>

        <Link
          href="/"
          className="text-xs font-medium tracking-widest text-cream/40 uppercase transition-colors hover:text-cream"
        >
          Changer d&apos;institut
        </Link>
      </div>
    </footer>
  );
}
