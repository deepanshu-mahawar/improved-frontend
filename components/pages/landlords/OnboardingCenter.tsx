"use client";

import { useTranslations } from "next-intl";
import { BulletPoints } from "@/components/bullet-points/BulletPoints";
import { Button } from "@/components/buttons/Button";
import { MainContainer } from "./styled";
import {
  ContentContainer,
  ContentSubContainer,
  ImageContainer,
  Images,
  MainSubContainer,
  Title,
} from "../styled";

export const OnboardingCenter = () => {
  const t = useTranslations("onboardingCenter");
  return (
    <MainContainer $isBackground>
      <MainSubContainer>
        <ImageContainer>
          <Images src="/dashboard.png" alt="#" />
        </ImageContainer>

        <ContentContainer>
          <ContentSubContainer>
            <Title>{t("title")}</Title>
            <BulletPoints
              text={[t("bulletPoint1"), t("bulletPoint2"), t("bulletPoint3")]}
            />

            <Button route="sign-in" buttonText={t("buttonText")} />
          </ContentSubContainer>
        </ContentContainer>
      </MainSubContainer>
    </MainContainer>
  );
};
