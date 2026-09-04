"use client";
import Image from "next/image";
import { useLang } from "@/contexts/LangContext";
import { t } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLang();
  const tx = t[lang].footer;

  return (
    <footer className="border-t border-blue-100 bg-white px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <Image src="/logo-icon.png" alt="DynamisAI logo" width={28} height={28} />
          <span className="font-bold text-[#0a1628]">
            Dynamis<span className="text-[#0055e0]">AI</span>
          </span>
        </div>

        <p className="text-[#9ab0cc] text-sm text-center">
          © {new Date().getFullYear()} DynamisAI. {tx.copyright}
        </p>

        <div className="flex items-center gap-5">
          <a href="#" className="text-[#9ab0cc] hover:text-[#0055e0] text-sm transition-colors">
            {tx.privacy}
          </a>
          <a href="#" className="text-[#9ab0cc] hover:text-[#0055e0] text-sm transition-colors">
            {tx.terms}
          </a>
        </div>
      </div>
    </footer>
  );
}
