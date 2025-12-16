"use client";

import { useTranslations } from "next-intl";
import { ThisIsHowCard } from "@/components/cards/ThisIsHowCard";
import { Button } from "@/components/buttons/Button";
import { SectionContainer, Title, TitleContainer } from "../styled";
import { PrivateCardContainer } from "./styled";

export const Private = () => {
  const t = useTranslations("private");

  const cards = [
    { image: "/data-security-card-1.jpg", key: "card1" },
    { image: "/data-security-card-2.jpg", key: "card2" },
    { image: "/data-security-card-3.jpg", key: "card3" },
    { image: "/data-security-card-4.jpg", key: "card4" },
    { image: "/data-security-card-5.jpg", key: "card5" },
    { image: "/data-security-card-6.jpg", key: "card6" },
  ];

  return (
    <SectionContainer>
      <TitleContainer>
        <Title>{t("title")}</Title>
      </TitleContainer>

      <PrivateCardContainer>
        {cards.map(({ image, key }) => (
          <ThisIsHowCard
            key={key}
            image={image}
            title={t(`cards.${key}.title`)}
            description={t(`cards.${key}.description`)}
          />
        ))}
      </PrivateCardContainer>

      <Button route="sign-in" buttonText={t("buttonText")} />
    </SectionContainer>
  );
};
