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
import { ExtraText, Links } from "./styled";

export const PrivacyMatters = () => {
  const t = useTranslations("privacyMatter");
  return (
    <MainContainer $isBackground>
      <MainSubContainer>
        <ContentContainer>
          <ContentSubContainer>
            <Title>{t("title")}</Title>
            <ExtraText>
              {t("text1.before")}{" "}
              <Links href="mailto:support@housingpass.com">
                {t("text1.linkText")}
              </Links>
            </ExtraText>
            <ExtraText>
              {t("text2.before")}{" "}
              <Links href="https://www.ssllabs.com/ssltest/analyze.html?d=housingpass.com&hideResults=on&latest">
                {t("text2.linkText")}
              </Links>
            </ExtraText>
          </ContentSubContainer>
        </ContentContainer>

        {/* image */}
        <ImageContainer>
          <Images src="/privacy.jpg" alt="#" />
        </ImageContainer>
      </MainSubContainer>
    </MainContainer>
  );
};
