import type { Metadata } from "next";
import InstitutePage from "@/components/institute/InstitutePage";

export const metadata: Metadata = {
  title: "Neox Beauty Saint-Brice-sous-Forêt",
  description:
    "Institut Neox Beauty à Saint-Brice-sous-Forêt. Manucure, semi-permanent, soins. Prenez rendez-vous en ligne.",
};

export default function SaintBricePage() {
  return <InstitutePage location="saint-brice" />;
}
