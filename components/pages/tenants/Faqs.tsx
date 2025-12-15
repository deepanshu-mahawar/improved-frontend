"use client";
import { useTranslations } from "next-intl";

import { Button } from "@/components/buttons/Button";
import { Faq } from "@/components/common/Faq";
import { FaqContainer } from "./styled";
import { SectionContainer, Title, TitleContainer } from "../styled";

export const Faqs = () => {
  const t = useTranslations("Faqs");

  const faqs = [
    { key: "faq1" },
    { key: "faq2" },
    { key: "faq3" },
    { key: "faq4" },
    { key: "faq5" },
  ];
  return (
    <SectionContainer>
      <TitleContainer>
        <Title>{t("title")}</Title>
      </TitleContainer>

      <FaqContainer>
        {faqs.map(({ key }) => (
          <Faq
            key={key}
            question={t(`faqs.${key}.question`)}
            answer={t(`faqs.${key}.answer`)}
          />
        ))}
      </FaqContainer>
      <Button route="faq" buttonText={t("buttonText")} />
    </SectionContainer>
  );
};
