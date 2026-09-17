"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useLang } from "@/contexts/LangContext";

export default function PrivacidadPage() {
  const { lang } = useLang();
  const isEN = lang === "en";

  const content = isEN ? {
    title: "Privacy Policy",
    updated: "Last updated: September 2026",
    sections: [
      {
        heading: "1. Who is responsible for your data",
        body: "DynamisAI is responsible for processing your personal data. Contact: consulting@dynamisai.es.",
      },
      {
        heading: "2. What data we collect",
        body: "We only collect the data you voluntarily provide through the contact form: name, email address, subject and message. We do not collect browsing data, cookies or tracking of any kind.",
      },
      {
        heading: "3. Purpose and legal basis",
        body: "We use your data solely to respond to your inquiry. The legal basis is your consent at the time of submission (Art. 6.1.a GDPR).",
      },
      {
        heading: "4. Data retention",
        body: "We keep your data only as long as necessary to resolve your inquiry, and delete it once it has been addressed.",
      },
      {
        heading: "5. Third parties",
        body: "We do not sell, share or transfer your data to third parties. Our products run locally on your hardware — we do not process your business data on our servers.",
      },
      {
        heading: "6. Your rights",
        body: "You have the right to access, rectify, erase, restrict processing, data portability and object to processing. To exercise them, write to consulting@dynamisai.es.",
      },
      {
        heading: "7. Cookies and analytics",
        body: "This website does not use cookies of any kind — not technical, advertising, analytics or third-party. We do not track users, their sessions or their browsing behaviour. Google Fonts are self-hosted at build time; no font requests are made to Google servers at runtime.",
      },
    ],
  } : {
    title: "Política de Privacidad",
    updated: "Última actualización: septiembre de 2026",
    sections: [
      {
        heading: "1. Responsable del tratamiento",
        body: "DynamisAI es la responsable del tratamiento de tus datos personales. Contacto: consulting@dynamisai.es.",
      },
      {
        heading: "2. Datos que recogemos",
        body: "Solo recogemos los datos que tú nos proporcionas voluntariamente a través del formulario de contacto: nombre, dirección de email, asunto y mensaje. No recogemos datos de navegación, cookies ni seguimiento de ningún tipo.",
      },
      {
        heading: "3. Finalidad y base jurídica",
        body: "Usamos tus datos únicamente para responder a tu consulta. La base jurídica es tu consentimiento en el momento del envío (Art. 6.1.a RGPD).",
      },
      {
        heading: "4. Conservación de los datos",
        body: "Conservamos tus datos solo el tiempo necesario para resolver tu consulta, y los eliminamos una vez atendida.",
      },
      {
        heading: "5. Terceros",
        body: "No vendemos, compartimos ni cedemos tus datos a terceros. Nuestros productos corren localmente en tu hardware — no procesamos tus datos de negocio en nuestros servidores.",
      },
      {
        heading: "6. Tus derechos",
        body: "Tienes derecho de acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición. Para ejercerlos, escríbenos a consulting@dynamisai.es.",
      },
      {
        heading: "7. Cookies y analítica",
        body: "Este sitio web no utiliza cookies de ningún tipo — ni técnicas, ni de publicidad, analítica o terceros. No realizamos seguimiento de usuarios, sesiones ni comportamiento de navegación. Las fuentes Google se auto-hospedan en el momento de compilación; ninguna petición se realiza a servidores de Google en tiempo de ejecución.",
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
