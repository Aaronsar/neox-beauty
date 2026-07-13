import { notFound } from "next/navigation";
import {
  institutes,
  getEmployees,
  type Location,
} from "@/data/site";
import InstituteNav from "@/components/institute/InstituteNav";
import InstituteHero from "@/components/institute/InstituteHero";
import InstituteTeam from "@/components/institute/InstituteTeam";
import InstituteServices from "@/components/institute/InstituteServices";
import InstituteGallery from "@/components/institute/InstituteGallery";
import InstituteBooking from "@/components/institute/InstituteBooking";
import InstituteContact from "@/components/institute/InstituteContact";
import InstituteFooter from "@/components/institute/InstituteFooter";

interface InstitutePageProps {
  location: Location;
}

export default function InstitutePage({ location }: InstitutePageProps) {
  const institute = institutes[location];
  if (!institute) notFound();

  const otherLocation: Location =
    location === "levallois" ? "saint-brice" : "levallois";
  const otherInstitute = institutes[otherLocation];
  const team = getEmployees(location);

  return (
    <>
      <InstituteNav institute={institute} />
      <main>
        <InstituteHero institute={institute} />
        <InstituteTeam institute={institute} members={team} />
        <InstituteServices institute={institute} />
        <InstituteGallery institute={institute} />
        <InstituteBooking institute={institute} />
        <InstituteContact
          institute={institute}
          otherInstitute={otherInstitute}
        />
      </main>
      <InstituteFooter institute={institute} />
    </>
  );
}
