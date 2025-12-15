"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { NextIntlClientProvider } from "next-intl";

type Locale = "en" | "de";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error("useLanguage must be used within IntlProviderWrapper");
  return context;
};

export const IntlProvider = ({ children }: { children: ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("en");
  const [messages, setMessages] = useState<Record<string, any>>({});

  useEffect(() => {
    const savedLocale = (localStorage.getItem("locale") as Locale) || "en";
    setLocale(savedLocale);

    import(`@/translation/${savedLocale}.json`).then((mod) =>
      setMessages(mod.default)
    );
  }, []);

  const changeLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);

    import(`@/translation/${newLocale}.json`).then((mod) =>
      setMessages(mod.default)
    );
  };

  if (!messages || Object.keys(messages).length === 0) return null;

  return (
    <LanguageContext.Provider value={{ locale, setLocale: changeLocale }}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </LanguageContext.Provider>
  );
};
