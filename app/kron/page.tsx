import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KronHero from "@/components/kron/Hero";
import KronPhilosophy from "@/components/kron/Philosophy";
import KronArchitecture from "@/components/kron/Architecture";
import KronCurrentState from "@/components/kron/CurrentState";
import KronRoadmap from "@/components/kron/Roadmap";
import KronCTA from "@/components/kron/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KRON — La IA propia de DynamisAI",
  description:
    "KRON es el sistema de inteligencia artificial construido desde cero en PyTorch por DynamisAI. Sin APIs externas, sin dependencias de terceros. El cerebro detrás de MeetingScribe y todos los futuros productos.",
};

export default function KronPage() {
  return (
    <>
      <Navbar />
      <main>
        <KronHero />
        <KronPhilosophy />
        <KronArchitecture />
        <KronCurrentState />
        <KronRoadmap />
        <KronCTA />
      </main>
      <Footer />
    </>
  );
}
