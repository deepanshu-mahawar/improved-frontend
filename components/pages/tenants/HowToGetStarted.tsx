"use client";

import { BulletPoints } from "@/components/bullet-points/BulletPoints";

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

export const HowToGetStarted = () => {
  const t = useTranslations("howToGetStarted");
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
          <Images src="/get-started.jpg" alt="#" />
        </ImageContainer>
      </MainSubContainer>
    </MainContainer>
  );
};
