"use client";

import { Button } from "@/components/buttons/Button";
import { PrivateItemCard } from "@/components/cards/PrivateItemCard";

import { useTranslations } from "next-intl";
import {
  SectionContainer,
  SectionSubContainer,
  Title,
  TitleContainer,
} from "../styled";

export const PrivateData = () => {
  const t = useTranslations("PrivateData");
  return (
    <SectionContainer>
      <TitleContainer>
        <Title>{t("title")}</Title>
      </TitleContainer>

      <SectionSubContainer>
        <PrivateItemCard
          image="/data-processing.jpg"
          title={t("cards.card1.title")}
          description={t("cards.card1.description")}
        />

        <PrivateItemCard
          image="/data-server.jpg"
          title={t("cards.card2.title")}
          description={t("cards.card2.description")}
        />

        <PrivateItemCard
          image="/data-control.jpg"
          title={t("cards.card3.title")}
          description={t("cards.card3.description")}
        />
      </SectionSubContainer>

      <Button route="sign-in" buttonText={t("buttonText")} />
    </SectionContainer>
  );
};
