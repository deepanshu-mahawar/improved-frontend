"use client";

import { useTranslations } from "next-intl";
import {
  ContentContainer,
  ContentSubContainer,
  ImageContainer,
  Images,
  MainContainer,
  MainSubContainer,
  Title,
} from "../styled";
import { BulletPoints } from "@/components/bullet-points/BulletPoints";

export const LandlordChallenges = () => {
  const t = useTranslations("landlordChallenges");
  return (
    <MainContainer $isBackground>
      <MainSubContainer>
        <ContentContainer>
          <ContentSubContainer>
            <Title>{t("title")}</Title>
            <BulletPoints
              text={[
                t("bulletPoint1"),
                t("bulletPoint2"),
                t("bulletPoint3"),
                t("bulletPoint4"),
              ]}
            />
          </ContentSubContainer>
        </ContentContainer>

        <ImageContainer>
          <Images src="/challenges.jpg" alt="#" />
        </ImageContainer>
      </MainSubContainer>
    </MainContainer>
  );
};
