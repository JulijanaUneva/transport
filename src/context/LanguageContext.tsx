import React, { createContext, useState, useEffect } from 'react';
import type { Language, TranslationKeys } from '../types';
import { translations, availableLanguages } from '../utils/translations';

interface LanguageContextType {
  currentLanguage: Language;
  availableLanguages: Language[];
  setLanguage: (language: Language) => void;
  t: (key: TranslationKeys) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(availableLanguages[0]);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      const language = availableLanguages.find(lang => lang.code === savedLanguage);
      if (language) {
        setCurrentLanguage(language);
      }
    }
  }, []);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('language', language.code);
  };

  const t = (key: TranslationKeys): string => {
    return translations[currentLanguage.code as keyof typeof translations]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      availableLanguages,
      setLanguage,
      t
    }}>
      {children}
    </LanguageContext.Provider>
  );
};
