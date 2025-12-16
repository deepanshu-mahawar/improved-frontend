"use client";

import styled from "styled-components";

import theme from "@/theme/theme";
import Link from "next/link";

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: fit-content;

  @media (max-width: 959px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  @media (max-width: 599px) {
    gap: 10px;
  }

  @media (min-width: 767px) and (max-width: 959px) {
    gap: 10px;
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${theme.color.text.darkBlackText};
  line-height: 26px;
  width: 100%;

  @media (max-width: 959px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const ContentSubContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  @media (max-width: 1024px) {
    width: 100%;
    gap: 10px;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 50px 10px;
  width: 100%;
  height: 100%;

  @media (max-width: 599px) {
    width: 96%;
  }
`;

export const ExtraText = styled.p`
  font-size: 16px;
  color: ${theme.color.text.darkBlackText};
  line-height: 26px;
  width: 100%;

  @media (max-width: 599px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (min-width: 600px) and (max-width: 959px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const Links = styled(Link)`
  font-size: 16px;
  font-weight: 500;
  color: ${theme.color.primary.mainPrimary};
  line-height: 26px;
  width: 100%;

  @media (max-width: 599px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media (min-width: 600px) and (max-width: 959px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

export const PrivateCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 50px 0px;
  height: 100%;
`;
