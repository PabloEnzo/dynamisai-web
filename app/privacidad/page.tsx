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
        body: "DynamisAI (pending formal incorporation) is responsible for processing your personal data. Until formal registration is completed, the responsible persons are the founding team. Contact: consulting@dynamisai.es.",
      },
      {
        heading: "2. What data we collect and why",
        body: "a) Contact form: name, email address, subject and message — to respond to your enquiry. Legal basis: your consent (Art. 6.1.a GDPR). Retention: deleted once the enquiry is resolved.\n\nb) Waitlist (Waive / KRON): email address — to notify you when the product launches. Legal basis: your consent (Art. 6.1.a GDPR). Retention: until the product launches or you unsubscribe, whichever is sooner.",
      },
      {
        heading: "3. Data processors and international transfers",
        body: "We use the following service providers that process data on our behalf:\n\n• Vercel Inc. (hosting, USA): our website runs on Vercel's infrastructure. Vercel may process connection data (including IP addresses) in the USA. Transfer safeguard: EU–US Data Privacy Framework (DPF).\n\n• Email delivery provider (to be confirmed): used solely to route contact-form messages to our inbox. We will update this section once the provider is confirmed.\n\nWe do not sell, share or otherwise transfer your data to any other third party.",
      },
      {
        heading: "4. Server logs",
        body: "Our hosting provider (Vercel) automatically records IP addresses and standard HTTP metadata (timestamp, requested URL, browser type) for security and operational purposes. These logs are retained for a short period as determined by Vercel's own data-retention policy and are not used for profiling or tracking.",
      },
      {
        heading: "5. Cookies and analytics",
        body: "This website does not use cookies of any kind. We do not track users across sessions. Google Fonts are self-hosted at build time; no font requests are made to Google servers at runtime.",
      },
      {
        heading: "6. Your rights",
        body: "You have the right to: access your data, rectify inaccurate data, erase your data, restrict or object to processing, and data portability. To exercise any of these rights, write to consulting@dynamisai.es. You also have the right to lodge a complaint with your national supervisory authority. In Spain, that is the Agencia Española de Protección de Datos (AEPD): www.aepd.es.",
      },
    ],
  } : {
    title: "Política de Privacidad",
    updated: "Última actualización: septiembre de 2026",
    sections: [
      {
        heading: "1. Responsable del tratamiento",
        body: "DynamisAI (pendiente de constitución formal) es la responsable del tratamiento de tus datos personales. Hasta que se complete el registro formal, los responsables son el equipo fundador. Contacto: consulting@dynamisai.es.",
      },
      {
        heading: "2. Datos que recogemos y para qué",
        body: "a) Formulario de contacto: nombre, email, asunto y mensaje, para responder a tu consulta. Base jurídica: tu consentimiento (Art. 6.1.a RGPD). Conservación: se eliminan una vez atendida la consulta.\n\nb) Lista de espera (Waive / KRON): dirección de email, para avisarte cuando el producto esté disponible. Base jurídica: tu consentimiento (Art. 6.1.a RGPD). Conservación: hasta el lanzamiento del producto o hasta que solicites la baja, lo que ocurra antes.",
      },
      {
        heading: "3. Encargados del tratamiento y transferencias internacionales",
        body: "Utilizamos los siguientes proveedores de servicios que tratan datos por nuestra cuenta:\n\n• Vercel Inc. (hosting, EE. UU.): nuestro sitio web funciona en la infraestructura de Vercel. Vercel puede tratar datos de conexión (incluidas direcciones IP) en EE. UU. Garantía de la transferencia: Marco de Privacidad de Datos UE-EE. UU. (Data Privacy Framework, DPF).\n\n• Proveedor de envío de emails (por confirmar): se utiliza exclusivamente para enrutar los mensajes del formulario de contacto. Actualizaremos este apartado en cuanto confirmemos el proveedor.\n\nNo vendemos, compartimos ni cedemos tus datos a ningún otro tercero.",
      },
      {
        heading: "4. Registros del servidor",
        body: "Nuestro proveedor de hosting (Vercel) registra automáticamente las direcciones IP y metadatos HTTP estándar (marca de tiempo, URL solicitada, tipo de navegador) por motivos de seguridad y operativos. Estos registros se conservan durante un período breve determinado por la política de retención de datos de Vercel y no se utilizan para elaborar perfiles ni para rastrear usuarios.",
      },
      {
        heading: "5. Cookies y analítica",
        body: "Este sitio web no utiliza cookies de ningún tipo. No rastreamos a los usuarios entre sesiones. Las fuentes Google se auto-hospedan en el momento de compilación; ninguna petición se realiza a servidores de Google en tiempo de ejecución.",
      },
      {
        heading: "6. Tus derechos",
        body: "Tienes derecho a: acceder a tus datos, rectificar datos inexactos, suprimirlos, limitar u oponerte al tratamiento, y solicitar su portabilidad. Para ejercer cualquiera de estos derechos, escríbenos a consulting@dynamisai.es. También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD): www.aepd.es.",
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
                <p className="text-[#4a6080] text-sm leading-relaxed whitespace-pre-line">{s.body}</p>
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
