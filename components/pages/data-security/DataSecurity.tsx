"use client";

import { useTranslations } from "next-intl";
import { MainContainer } from "../landlords/styled";
import {
  ContentContainer,
  ImageContainer,
  Images,
  MainSubContainer,
  Title,
} from "../styled";
import { ContentSubContainer, Text, TextContainer } from "./styled";
import { Button } from "@/components/buttons/Button";

export const DataSecurity = () => {
  const t = useTranslations("dataSecurity");
  return (
    <MainContainer>
      <MainSubContainer>
        <ImageContainer>
          <Images src="/data-security.jpg" alt="#" />
        </ImageContainer>

        <ContentContainer>
          <ContentSubContainer>
            <Title>{t("title")}</Title>

            <TextContainer>
              <Text>{t("paragraph1")}</Text>
              <Text>{t("paragraph2")}</Text>
              <Text>{t("paragraph3")}</Text>
            </TextContainer>

            <Button route="sign-in" buttonText={t("buttonText")} />
          </ContentSubContainer>
        </ContentContainer>
      </MainSubContainer>
    </MainContainer>
  );
};
