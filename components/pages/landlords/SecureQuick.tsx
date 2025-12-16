"use client";

import { useTranslations } from "next-intl";
import { BulletPoints } from "@/components/bullet-points/BulletPoints";
import { Button } from "@/components/buttons/Button";
import {
  ContentContainer,
  ContentSubContainer,
  ImageContainer,
  Images,
  MainContainer,
  MainSubContainer,
  Title,
} from "../styled";

export const SecureQuick = () => {
  const t = useTranslations("secureQuick");
  return (
    <MainContainer>
      <MainSubContainer>
        <ImageContainer>
          <Images src="/landlord.jpg" alt="#" />
        </ImageContainer>

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

            <Button route="sign-in" buttonText={t("buttonText")} />
          </ContentSubContainer>
        </ContentContainer>
      </MainSubContainer>
    </MainContainer>
  );
};
