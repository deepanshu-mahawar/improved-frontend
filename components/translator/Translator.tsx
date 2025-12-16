"use client";

import { useLanguage } from "@/providers/IntlProvider";
import { TabContainer, Tabs } from "./styled";

type Locale = "en" | "de";

export const Translator = () => {
  const { locale, setLocale } = useLanguage();

  const handleSelect = (lang: Locale) => {
    setLocale(lang);
  };

  const languages: { code: Locale; label: string }[] = [
    { code: "en", label: "En" },
    { code: "de", label: "De" },
  ];

  return (
    <TabContainer>
      {languages.map((language) => (
        <Tabs
          key={language.code}
          $selected={locale === language.code}
          onClick={() => handleSelect(language.code)}
        >
          {language.label}
        </Tabs>
      ))}
    </TabContainer>
  );
};
