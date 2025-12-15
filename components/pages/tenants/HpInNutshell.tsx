"use client";

import { useTranslations } from "next-intl";
import {
  SectionContainer,
  SectionSubContainer,
  Title,
  TitleContainer,
} from "../styled";
import { HpNutshellCard } from "@/components/cards/HpNutshellCard";

export const HpInNutshell = () => {
  const t = useTranslations("HpInNutshell");

  const cards = [
    { image: "/founded-home.jpg", key: "card1" },
    { image: "/bank-access.jpg", key: "card2" },
    { image: "/user.jpg", key: "card3" },
    { image: "/home.jpg", key: "card4" },
    { image: "/palace.jpg", key: "card5" },
  ];
  return (
    <SectionContainer $isBackground>
      <TitleContainer>
        <Title>{t("title")}</Title>
      </TitleContainer>

      <SectionSubContainer>
        {cards.map(({ image, key }) => (
          <HpNutshellCard
            key={key}
            image={image}
            title={t(`cards.${key}.title`)}
          />
        ))}
      </SectionSubContainer>
    </SectionContainer>
  );
};
