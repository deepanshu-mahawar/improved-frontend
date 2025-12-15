"use client";

import { Button } from "@/components/buttons/Button";
import { ThisIsHowCard } from "@/components/cards/ThisIsHowCard";

import { useTranslations } from "next-intl";
import {
  SectionContainer,
  SectionSubContainer,
  Title,
  TitleContainer,
} from "../styled";

export const ThisIsHow = () => {
  const t = useTranslations("ThisIsHow");
  return (
    <SectionContainer>
      <TitleContainer>
        <Title>{t("title")}</Title>
      </TitleContainer>

      <SectionSubContainer>
        <ThisIsHowCard
          image="/document.jpg"
          title={t("ThisIsHowCard.card1.title")}
          description={t("ThisIsHowCard.card1.description")}
        />

        <ThisIsHowCard
          image="/bank.jpg"
          title={t("ThisIsHowCard.card2.title")}
          description={t("ThisIsHowCard.card2.description")}
        />

        <ThisIsHowCard
          image="/share.jpg"
          title={t("ThisIsHowCard.card3.title")}
          description={t("ThisIsHowCard.card3.description")}
        />
      </SectionSubContainer>

      <Button route="sign-in" buttonText={t("buttonText")} />
    </SectionContainer>
  );
};
