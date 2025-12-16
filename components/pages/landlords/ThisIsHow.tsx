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
  const t = useTranslations("ThisIsHowForLandlord");

  const cards = [
    { image: "/list.png", key: "card1" },
    { image: "/api.png", key: "card2" },
    { image: "/id.png", key: "card3" },
    { image: "/file.png", key: "card4" },
  ];
  return (
    <SectionContainer $isBackground>
      <TitleContainer>
        <Title>{t("title")}</Title>
      </TitleContainer>

      <SectionSubContainer>
        {cards.map(({ image, key }) => (
          <ThisIsHowCard
            key={key}
            image={image}
            title={t(`cards.${key}.title`)}
            description={t(`cards.${key}.description`)}
          />
        ))}
      </SectionSubContainer>

      <Button route="sign-in" buttonText={t("buttonText")} />
    </SectionContainer>
  );
};
