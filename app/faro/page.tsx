import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaroHero from "@/components/faro/Hero";
import FaroProblem from "@/components/faro/Problem";
import FaroHowItWorks from "@/components/faro/HowItWorks";
import FaroFeatures from "@/components/faro/Features";
import FaroCurrentState from "@/components/faro/CurrentState";
import FaroRoadmap from "@/components/faro/Roadmap";
import FaroCTA from "@/components/faro/CTA";

export const metadata: Metadata = {
  title: "FARO — Comunicaciones de emergencia resilientes | DynamisAI",
  description:
    "FARO es una plataforma open source de comunicaciones de emergencia que combina malla LoRa de bajo coste con IA local de triaje. Funciona sin internet, sin cobertura móvil y sin servidores externos.",
  openGraph: {
    title: "FARO — Comunicaciones de emergencia resilientes",
    description:
      "Malla LoRa + IA local de triaje. Sin internet. Sin cobertura móvil. Para protección civil, municipios y ciudadanos.",
    url: "https://dynamisai.es/faro",
    siteName: "DynamisAI",
  },
};

export default function FaroPage() {
  return (
    <>
      <Navbar />
      <main>
      <FaroHero />
      <FaroProblem />
      <FaroHowItWorks />
      <FaroFeatures />
      <FaroCurrentState />
      <FaroRoadmap />
      <FaroCTA />
      </main>
      <Footer />
    </>
  );
}
