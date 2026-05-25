"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, TranslationSet } from "../translations";

type LanguageType = "hi" | "en";

interface LanguageContextProps {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: TranslationSet;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageType>("hi");

  useEffect(() => {
    // Check local storage or browser language
    const savedLang = localStorage.getItem("preferred_lang") as LanguageType;
    if (savedLang === "hi" || savedLang === "en") {
      setLanguageState(savedLang);
    } else {
      const browserLang = navigator.language.split("-")[0];
      if (browserLang === "hi") {
        setLanguageState("hi");
      } else {
        setLanguageState("en");
      }
    }
  }, []);

  const setLanguage = (lang: LanguageType) => {
    setLanguageState(lang);
    localStorage.setItem("preferred_lang", lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
