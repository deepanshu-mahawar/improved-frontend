"use client";

import Image from "next/image";
import styled from "styled-components";

import theme from "@/theme/theme";

export const MainContainer = styled.div<{ $isBackground?: boolean }>(
  ({ $isBackground }) => `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-color: ${
      $isBackground
        ? `${theme.color.background.secondaryBackground}`
        : "transparent"
    };
    transition: background-color 0.3s ease, height 0.3s ease;

    @media (max-width: 959px) {
      height: fit-content;
    }

    @media (min-width: 767px) and (max-width: 959px) {
      height: 92vh;
    }

    @media (max-width: 1024px) {
      height: fit-content;
    }
  `
);

export const MainSubContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 100%;

  @media (max-width: 959px) {
    height: 100%;
    width: 100%;
  }

  @media (min-width: 960px) and (max-width: 1024px) {
    width: 100%;
    height: fit-content;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
  }
`;

// export const Images = styled(Image)`
//   height: 100%;
//   width: auto;
//   object-fit: cover;
// `;

export const Images = styled.img`
  height: 100%;
  object-fit: cover;
`;

export const ContentContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
    order: 2;
    padding: 14px;
    padding-bottom: 40px;
  }

  @media (max-width: 599px) {
    padding: 10px;
    padding-bottom: 30px;
  }

  @media (min-width: 767px) and (max-width: 959px) {
    padding: 14px;
    padding-bottom: 40px;
  }
`;

export const ContentSubContainer = styled.div`
  width: 72%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;

  @media (max-width: 1024px) {
    width: 100%;
    gap: 16px;
  }
`;

export const Title = styled.h1`
  color: ${theme.color.text.darkBlackTitle};
  font-size: 60px;
  line-height: 70px;
  font-weight: 700;

  @media (max-width: 959px) {
    font-size: 32px;
    line-height: 40px;
  }

  @media (max-width: 599px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

export const SectionContainer = styled.main<{ $isBackground?: boolean }>(
  ({ $isBackground }) => `
  min-height: 100vh;
  max-height: fit-content;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${
    $isBackground ? `${theme.color.background.secondaryBackground}` : ""
  };
  padding: 50px 0px;

  @media (max-width: 959px){
    min-height: fit-content;
  }
`
);

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1280px) {
    text-align: center;
    padding: 0px 6px;
  }
`;

export const SectionSubContainer = styled.div`
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
