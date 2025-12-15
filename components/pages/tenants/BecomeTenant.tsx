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
import { Button } from "@/components/buttons/Button";

export const BecomeTenant = () => {
  const t = useTranslations("becomeTenant");
  const tenant = "/tenant.jpg";
  return (
    <MainContainer>
      <MainSubContainer>
        <ImageContainer>
          <Images src={tenant} alt="BecomeTenant" />
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
