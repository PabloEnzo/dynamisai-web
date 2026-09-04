"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Locale = "es" | "en";

const LangContext = createContext<{ lang: Locale; setLang: (l: Locale) => void }>({
  lang: "es",
  setLang: () => {},
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Locale>("es");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Locale | null;
    if (stored === "en" || stored === "es") {
      setLangState(stored);
    } else if (window.location.hostname.endsWith(".eu")) {
      setLangState("en");
    }
  }, []);

  const setLang = (l: Locale) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}
