"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLang } from "@/contexts/LangContext";

export default function TerminosPage() {
  const { lang } = useLang();
  const isEN = lang === "en";

  const content = isEN ? {
    title: "Terms of Service",
    updated: "Last updated: September 2026",
    sections: [
      {
        heading: "1. Acceptance",
        body: "By accessing dynamisai.es or dynamisai.eu you accept these terms. If you do not agree, please stop using the site.",
      },
      {
        heading: "2. Use of the site",
        body: "This website is informational. You may not use it for illegal purposes, to harm third parties, or to distribute malware or spam.",
      },
      {
        heading: "3. Intellectual property",
        body: "All content on this site (texts, design, logo) belongs to DynamisAI unless otherwise indicated. FARO is published under the AGPL-3.0 licence: see its repository for details.",
      },
      {
        heading: "4. Links",
        body: "We are not responsible for the content of third-party sites linked from this website.",
      },
      {
        heading: "5. Limitation of liability",
        body: "DynamisAI provides this site as-is and makes no warranties about its availability or accuracy. We are not liable for damages arising from use of this site.",
      },
      {
        heading: "6. Applicable law",
        body: "These terms are governed by Spanish law. Disputes shall be resolved before the courts of Spain.",
      },
    ],
  } : {
    title: "Términos de Servicio",
    updated: "Última actualización: septiembre de 2026",
    sections: [
      {
        heading: "1. Aceptación",
        body: "Al acceder a dynamisai.es o dynamisai.eu aceptas estos términos. Si no estás de acuerdo, deja de usar el sitio.",
      },
      {
        heading: "2. Uso del sitio",
        body: "Este sitio web es informativo. No puedes usarlo con fines ilegales, para perjudicar a terceros, ni para distribuir malware o spam.",
      },
      {
        heading: "3. Propiedad intelectual",
        body: "Todo el contenido de este sitio (textos, diseño, logotipo) pertenece a DynamisAI salvo que se indique lo contrario. FARO se publica bajo licencia AGPL-3.0: consulta su repositorio para más detalles.",
      },
      {
        heading: "4. Enlaces",
        body: "No somos responsables del contenido de sitios de terceros enlazados desde este sitio web.",
      },
      {
        heading: "5. Limitación de responsabilidad",
        body: "DynamisAI ofrece este sitio tal cual y no garantiza su disponibilidad ni exactitud. No somos responsables de daños derivados del uso de este sitio.",
      },
      {
        heading: "6. Ley aplicable",
        body: "Estos términos se rigen por la ley española. Las disputas se resolverán ante los tribunales de España.",
      },
    ],
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-28 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-[#4a6080] hover:text-[#0055e0] transition-colors mb-10 group">
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            DynamisAI
          </Link>

          <h1 className="text-4xl font-bold text-[#0a1628] mb-3">{content.title}</h1>
          <p className="text-[#9ab0cc] text-sm mb-12">{content.updated}</p>

          <div className="flex flex-col gap-10">
            {content.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-[#0a1628] font-semibold text-lg mb-2">{s.heading}</h2>
                <p className="text-[#4a6080] text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-[#e0eaf8]">
            <p className="text-[#9ab0cc] text-sm">
              {isEN ? "Questions? " : "¿Preguntas? "}
              <a href="mailto:consulting@dynamisai.es" className="text-[#0055e0] hover:underline">
                consulting@dynamisai.es
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
