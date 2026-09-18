import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/contexts/LangContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DynamisAI: IA propia. Sin nube. Sin intermediarios.",
  description:
    "DynamisAI construye software con IA propia que corre en tu hardware. Transcripción de reuniones, comunicaciones de emergencia: privacidad real, sin APIs externas.",
  icons: {
    icon: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  openGraph: {
    title: "DynamisAI: IA propia. Sin nube. Sin intermediarios.",
    description:
      "Software con inteligencia artificial construida en casa. Waive y FARO: privacidad real, sin dependencias externas.",
    url: "https://dynamisai.es",
    siteName: "DynamisAI",
    images: [{ url: "/banner.png", width: 1200, height: 630 }],
    locale: "es_ES",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#f8faff] text-[#0a1628]">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
