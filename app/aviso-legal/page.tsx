"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLang } from "@/contexts/LangContext";

export default function AvisoLegalPage() {
  const { lang } = useLang();
  const isEN = lang === "en";

  const content = isEN ? {
    title: "Legal Notice",
    updated: "Last updated: September 2026",
    sections: [
      {
        heading: "1. Identification of the website operator",
        body: "This website is operated by DynamisAI (pending formal incorporation). Until formal registration is completed, the person responsible is its founder, Pablo Enzo Velarde Bagnoli, reachable at consulting@dynamisai.es.",
      },
      {
        heading: "2. Contact",
        body: "Email: consulting@dynamisai.es. We will respond within a maximum of 30 calendar days.",
      },
      {
        heading: "3. Purpose of the website",
        body: "This website provides information about DynamisAI's software products and services. It does not currently offer direct purchase or subscription services through this platform.",
      },
      {
        heading: "4. Intellectual property",
        body: "All content on this website: texts, graphics, logos, images, and design: is the property of DynamisAI or its licensors and is protected by intellectual property law. FARO is published under the AGPL-3.0 open-source licence; see its repository for details. Any total or partial reproduction, distribution, or public communication without express written authorisation is prohibited.",
      },
      {
        heading: "5. Links to third-party websites",
        body: "This website may contain links to external sites. DynamisAI is not responsible for the content, privacy practices or availability of those sites.",
      },
      {
        heading: "6. Limitation of liability",
        body: "DynamisAI makes every effort to keep this website accurate and up to date, but does not guarantee it. We are not liable for damages arising from the use of, or inability to use, this site.",
      },
      {
        heading: "7. Applicable law and jurisdiction",
        body: "This legal notice is governed by Spanish law. Any disputes shall be resolved before the competent courts of Spain, to the extent permitted by applicable law.",
      },
    ],
  } : {
    title: "Aviso Legal",
    updated: "Última actualización: septiembre de 2026",
    sections: [
      {
        heading: "1. Identificación del titular del sitio web",
        body: "Este sitio web es operado por DynamisAI (pendiente de constitución formal como sociedad). Hasta que se complete el registro formal, el responsable es su fundador, Pablo Enzo Velarde Bagnoli, contactable en consulting@dynamisai.es.",
      },
      {
        heading: "2. Datos de contacto",
        body: "Correo electrónico: consulting@dynamisai.es. Respondemos en un plazo máximo de 30 días naturales.",
      },
      {
        heading: "3. Objeto del sitio web",
        body: "Este sitio web tiene carácter informativo sobre los productos y servicios de software de DynamisAI. Actualmente no ofrece servicios de compra o suscripción directa a través de esta plataforma.",
      },
      {
        heading: "4. Propiedad intelectual",
        body: "Todos los contenidos de este sitio web: textos, gráficos, logotipos, imágenes y diseño: son propiedad de DynamisAI o sus licenciantes y están protegidos por la legislación de propiedad intelectual. FARO se publica bajo licencia open source AGPL-3.0; consulta su repositorio para más detalles. Queda prohibida cualquier reproducción, distribución o comunicación pública total o parcial sin autorización expresa y por escrito.",
      },
      {
        heading: "5. Enlaces a sitios de terceros",
        body: "Este sitio web puede contener enlaces a sitios externos. DynamisAI no es responsable del contenido, las prácticas de privacidad ni la disponibilidad de dichos sitios.",
      },
      {
        heading: "6. Limitación de responsabilidad",
        body: "DynamisAI pone todos los medios para mantener este sitio web actualizado y correcto, pero no lo garantiza. No nos hacemos responsables de los daños derivados del uso o la imposibilidad de uso de este sitio.",
      },
      {
        heading: "7. Ley aplicable y jurisdicción",
        body: "Este aviso legal se rige por la legislación española. Cualquier controversia se resolverá ante los juzgados y tribunales competentes de España, en la medida que la normativa aplicable lo permita.",
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
