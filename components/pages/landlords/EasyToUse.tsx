"use client"

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
import { useTranslations } from "next-intl";

export const EasyToUse = () => {
  const t = useTranslations("easyToUse");
  return (
    <MainContainer>
      <MainSubContainer>
        <ImageContainer>
          <Images src="/easy-to-use.jpg" alt="#" />
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
          </ContentSubContainer>
        </ContentContainer>
      </MainSubContainer>
    </MainContainer>
  );
};
