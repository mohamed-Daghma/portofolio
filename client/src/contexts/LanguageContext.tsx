import { createContext, useContext, useState, useEffect } from "react";
import type { Language } from "@shared/schema";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (translation: { en: string; fr: string }) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr"); // French as default

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-language") as Language;
    if (stored === "en" || stored === "fr") {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("portfolio-language", lang);
  };

  const t = (translation: { en: string; fr: string }) => {
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
