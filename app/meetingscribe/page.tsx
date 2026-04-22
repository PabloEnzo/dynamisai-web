import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MeetingScribeHero from "@/components/meetingscribe/Hero";
import AppPreview from "@/components/meetingscribe/AppPreview";
import MeetingScribeFeatures from "@/components/meetingscribe/Features";
import MeetingScribeHowItWorks from "@/components/meetingscribe/HowItWorks";
import MeetingScribePricing from "@/components/meetingscribe/Pricing";
import MeetingScribeCTA from "@/components/meetingscribe/CTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MeetingScribe — Transcripción y resúmenes de reuniones con IA",
  description:
    "MeetingScribe transcribe, resume y extrae los puntos clave de tus reuniones automáticamente. 100% privado, sin servidores externos.",
};

export default function MeetingScribePage() {
  return (
    <>
      <Navbar />
      <main>
        <MeetingScribeHero />
        <AppPreview />
        <MeetingScribeFeatures />
        <MeetingScribeHowItWorks />
        <MeetingScribePricing />
        <MeetingScribeCTA />
      </main>
      <Footer />
    </>
  );
}
