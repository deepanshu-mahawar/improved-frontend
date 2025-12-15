"use client";

import CardMembershipRoundedIcon from "@mui/icons-material/CardMembershipRounded";
import MiscellaneousServicesRoundedIcon from "@mui/icons-material/MiscellaneousServicesRounded";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import SensorsIcon from "@mui/icons-material/Sensors";

import { useTranslations } from "next-intl";
import { GreatOffersCard } from "@/components/cards/GreatOffersCard";
import {
  SectionContainer,
  SectionSubContainer,
  Title,
  TitleContainer,
} from "../styled";

export const GreatOffer = () => {
  const t = useTranslations("GreatOffers");

  const cards = [
    { icon: SensorsIcon, key: "card1" },
    { icon: MiscellaneousServicesRoundedIcon, key: "card2" },
    { icon: PeopleRoundedIcon, key: "card3" },
    { icon: SecurityRoundedIcon, key: "card4" },
    { icon: MonetizationOnRoundedIcon, key: "card5" },
    { icon: CardMembershipRoundedIcon, key: "card6" },
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
    </SectionContainer>
  );
};
