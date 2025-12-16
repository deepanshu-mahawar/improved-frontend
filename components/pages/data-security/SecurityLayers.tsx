"use client";


import { useTranslations } from "next-intl";
import { BulletPoints } from "@/components/bullet-points/BulletPoints";
import {
  ContentContainer,
  ContentSubContainer,
  ImageContainer,
  Images,
  MainContainer,
  MainSubContainer,
  Title,
} from "../styled";

export const SecurityLayers = () => {
  const t = useTranslations("SecurityLayers");

  const bulletPoints = [
    t("bulletPoint1"),
    t("bulletPoint2"),
    t("bulletPoint3"),
    t("bulletPoint4"),
    t("bulletPoint5"),
    t("bulletPoint6"),
  ];

  return (
    <MainContainer $isBackground>
      <MainSubContainer>
        <ContentContainer>
          <ContentSubContainer>
            <Title>{t("title")}</Title>
            <BulletPoints column text={bulletPoints} />
          </ContentSubContainer>
        </ContentContainer>

        <ImageContainer>
          <Images src="/security-layers.jpg" alt="#" />
        </ImageContainer>
      </MainSubContainer>
    </MainContainer>
  );
};
