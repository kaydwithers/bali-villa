import { Contact } from "../components/Contact/Contact";
import { Cta } from "../components/Cta/Cta";
import { Footer } from "../components/Footer/Footer";
import { Gallery } from "../components/Gallery/Gallery";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { Information } from "../components/Information/Information";
import { Map } from "../components/Map/Map";
import { Services } from "../components/Services/Services";
import { SocialMedia } from "../components/SocialMedia/SocialMedia";
import { Testimonials } from "../components/Testimonials/Testimonials";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Private Villa in Uluwatu, Bali - Nirav",
  description:
    "Experience the best private villa in Uluwatu Bali at Nirav Villa, a beautiful private villa in Uluwatu Bali with modern and luxurious amenities.",
  metadataBase: new URL("https://niravvillabali.com/"),
};

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Hero />
      <Gallery />
      <Information />
      <Map />
      <Services />
      <Testimonials />
      <Cta></Cta>
      <Footer />
    </main>
  );
}
