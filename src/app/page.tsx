import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";
import { Gallery } from "../components/Gallery/Gallery";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { Information } from "../components/Information/Information";
import { Map } from "../components/Map/Map";
import { SocialMedia } from "../components/SocialMedia/SocialMedia";
import { Testimonials } from "../components/Testimonials/Testimonials";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Villa in Bali - Nirav",
  description:
    "Experience luxury at Nirav Villa, a beautiful villa in Bali with modern amenities.",
};

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <Hero />
      <Gallery />
      <Information />
      <Map />
      <Testimonials />
      <SocialMedia />
      <Contact />
      <Footer />
    </main>
  );
}
