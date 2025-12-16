"use client";

import { useTranslations } from "next-intl";
import {
  ContentContainer,
  ImageContainer,
  Images,
  MainContainer,
  MainSubContainer,
  Title,
} from "../styled";
import { ContentSubContainer, Text, TextContainer } from "./styled";
import { Button } from "@/components/buttons/Button";

export const Encryptions = () => {
  const t = useTranslations("encryptions");
  return (
    <MainContainer>
      <MainSubContainer>
        <ImageContainer>
          <Images src="/encryption.jpg" alt="#" />
        </ImageContainer>
        <ContentContainer>
          <ContentSubContainer>
            <Title>{t("title")}</Title>
            <TextContainer>
              <Text>{t("paragraph1")}</Text>
              <Text>{t("paragraph2")}</Text>
            </TextContainer>
            <Button route="sign-in" buttonText={t("buttonText")} />
          </ContentSubContainer>
        </ContentContainer>
      </MainSubContainer>
    </MainContainer>
  );
};
