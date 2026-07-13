import Image from "next/image";
import { CONTACT_EMAIL } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-blush/30 bg-white py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <Image
              src="/logo.png"
              alt="Neox Beauty"
              width={100}
              height={40}
              className="mx-auto mb-2 h-10 w-auto md:mx-0"
            />
            <p className="text-sm text-warm-gray">
              Institut de beauté — Levallois-Perret & Saint-Brice-sous-Forêt
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-1 inline-block text-sm text-neox transition-colors hover:text-neox-dark"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 text-sm text-warm-gray">
            <a href="#services" className="transition-colors hover:text-neox">
              Services
            </a>
            <a href="#equipe" className="transition-colors hover:text-neox">
              Équipe
            </a>
            <a href="#rendez-vous" className="transition-colors hover:text-neox">
              Rendez-vous
            </a>
            <a href="#instituts" className="transition-colors hover:text-neox">
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-8 border-t border-blush/20 pt-8 text-center text-xs text-warm-gray">
          <p>&copy; {new Date().getFullYear()} Neox Beauty. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
