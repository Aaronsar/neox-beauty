import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Locations from "@/components/Locations";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Team />
        <Gallery />
        <Booking />
        <Locations />
      </main>
      <Footer />
    </>
  );
}
