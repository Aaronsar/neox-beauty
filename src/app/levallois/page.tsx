import type { Metadata } from "next";
import InstitutePage from "@/components/institute/InstitutePage";

export const metadata: Metadata = {
  title: "Neox Beauty Levallois-Perret",
  description:
    "Institut Neox Beauty à Levallois-Perret. Manucure, semi-permanent, soins. Prenez rendez-vous en ligne.",
};

export default function LevalloisPage() {
  return <InstitutePage location="levallois" />;
}
