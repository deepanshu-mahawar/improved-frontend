"use client";

import { BulletPoints } from "@/components/bullet-points/BulletPoints";
import { Button } from "@/components/buttons/Button";

import { useTranslations } from "next-intl";
import { SectionContainer, Title, TitleContainer } from "../styled";
import {
  CertificateContainer,
  CertificateContentContainer,
  CertificateSubContainer,
  ImageContainer,
  Images,
} from "./styled";

export const CertificatePreview = () => {
  const t = useTranslations("certificatePreview");

  const bulletPoints = t.raw("bulletPoints");
  return (
    <SectionContainer>
      <TitleContainer>
        <Title>{t("title")}</Title>
      </TitleContainer>

      <CertificateContainer>
        <CertificateSubContainer>
          <ImageContainer>
            <Images src="/certificate1.png" alt="#" />
          </ImageContainer>

          <CertificateContentContainer>
            <BulletPoints gap="16px" column text={bulletPoints} />

            <Button route="sign-in" buttonText={t("buttonText")} />
          </CertificateContentContainer>
        </CertificateSubContainer>

        <CertificateSubContainer>
          <CertificateContentContainer>
            <BulletPoints gap="16px" column text={bulletPoints} />
          </CertificateContentContainer>

          <ImageContainer>
            <Images src="/certificate2.png" alt="#" />
          </ImageContainer>
        </CertificateSubContainer>
      </CertificateContainer>
    </SectionContainer>
  );
};
