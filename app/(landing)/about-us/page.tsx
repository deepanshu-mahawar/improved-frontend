"use client";

import { AboutContent } from "@/components/about-content/AboutContent";
import { useTranslations } from "next-intl";
import { AboutMainContainer, PageHeader } from "../styled";

export default function AboutUsPage() {
  const t = useTranslations("aboutUs");

  const sections = t.raw("sections");
  return (
    <main>
      <PageHeader>{t("header")}</PageHeader>
      <AboutMainContainer>
        {sections.map((section: any, index: number) => (
          <AboutContent
            key={index}
            title={section.title}
            description={section.description}
          />
        ))}
      </AboutMainContainer>
    </main>
  );
}
