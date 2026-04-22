"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { label: "Inicio", anchor: "inicio" },
  { label: "Nosotros", anchor: "nosotros" },
  { label: "Proyectos", anchor: "proyectos" },
  { label: "Contacto", anchor: "contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const href = (anchor: string) => isHome ? `#${anchor}` : `/#${anchor}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-blue-100 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/logo-icon.png"
            alt="DynamisAI logo"
            width={38}
            height={38}
            className="group-hover:scale-105 transition-transform rounded-full"
          />
          <span className="font-bold text-lg text-[#0a1628]">
            Dynamis<span className="text-[#0055e0]">AI</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.anchor}>
              <a
                href={href(l.anchor)}
                className="text-sm text-[#4a6080] hover:text-[#0055e0] transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              href="/kron"
              className="text-sm font-semibold text-[#0055e0] hover:text-[#0044cc] transition-colors duration-200 flex items-center gap-1"
            >
              🧠 KRON
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <a
          href={href("contacto")}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0055e0] hover:bg-[#0044cc] text-white text-sm font-medium transition-colors duration-200"
        >
          Hablemos
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden text-[#4a6080] hover:text-[#0055e0]"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-blue-100 px-6 py-4 flex flex-col gap-4 shadow-md">
          {links.map((l) => (
            <a
              key={l.anchor}
              href={href(l.anchor)}
              onClick={() => setOpen(false)}
              className="text-sm text-[#4a6080] hover:text-[#0055e0] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/kron"
            onClick={() => setOpen(false)}
            className="text-sm font-semibold text-[#0055e0] hover:text-[#0044cc] transition-colors flex items-center gap-1"
          >
            🧠 KRON
          </Link>
          <a
            href={href("contacto")}
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#0055e0] hover:bg-[#0044cc] text-white text-sm font-medium transition-colors"
          >
            Hablemos
          </a>
        </div>
      )}
    </header>
  );
}
