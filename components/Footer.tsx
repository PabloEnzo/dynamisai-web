import Image from "next/image";

export default function Footer() {
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
          © {new Date().getFullYear()} DynamisAI. Todos los derechos reservados.
        </p>

        <div className="flex items-center gap-5">
          <a href="#" className="text-[#9ab0cc] hover:text-[#0055e0] text-sm transition-colors">
            Privacidad
          </a>
          <a href="#" className="text-[#9ab0cc] hover:text-[#0055e0] text-sm transition-colors">
            Términos
          </a>
        </div>
      </div>
    </footer>
  );
}
