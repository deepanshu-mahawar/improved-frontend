"use client";

import AccessibilityNewRoundedIcon from "@mui/icons-material/AccessibilityNewRounded";
import DeleteOutlineRoundedIcon from "@mui/icons-material/DeleteOutlineRounded";
import InventoryRoundedIcon from "@mui/icons-material/InventoryRounded";
import LockOpenRoundedIcon from "@mui/icons-material/LockOpenRounded";

import { useTranslations } from "next-intl";
import {
  SectionContainer,
  SectionSubContainer,
  Title,
  TitleContainer,
} from "../styled";
import { GreatOffersCard } from "@/components/cards/GreatOffersCard";
import { Button } from "@/components/buttons/Button";

export const SecurityMeasures = () => {
  const t = useTranslations("securityMeasures");

  const cards = [
    {
      icon: LockOpenRoundedIcon,
      key: "card1",
    },
    {
      icon: AccessibilityNewRoundedIcon,
      key: "card2",
    },
    {
      icon: DeleteOutlineRoundedIcon,
      key: "card3",
    },
    {
      icon: InventoryRoundedIcon,
      key: "card4",
    },
  ];
  return (
    <SectionContainer $isBackground>
      <TitleContainer>
        <Title>{t("title")}</Title>
      </TitleContainer>

      <SectionSubContainer>
        {cards.map(({ icon, key }) => (
          <GreatOffersCard
            key={key}
            icon={icon}
            title={t(`cards.${key}.title`)}
            description={t.raw(`cards.${key}.description`)}
          />
        ))}
      </SectionSubContainer>

      <Button route="sign-in" buttonText={t("buttonText")} />
    </SectionContainer>
  );
};
