"use client";

import styled from "styled-components";

import theme from "@/theme/theme";

//this is how card styling
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 40px 35px;
  gap: 20px;
  border: 1px solid ${theme.color.border.cardBorder};
  box-shadow: 0 16px 32px 0 rgba(7, 28, 31, 0.1);
  height: 440px;
  width: 400px;
  background-color: ${theme.color.common.light};
  cursor: pointer;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 599px) {
    width: 344px;
  }

  @media (max-width: 959px) {
    height: 400px;
    width: 360px;
    padding: 40px 50px 35px;
  }
`;

export const ImageWrapper = styled.div`
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.color.common.light};
  border-radius: 50px;

  .image {
    padding: 4px;
    width: 100%;
    height: 100%;
    border-radius: 50px;
  }

  @media (max-width: 599px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 959px) {
    height: 80px;
    width: 80px;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (max-width: 599px) {
    gap: 4px;
  }
`;

export const Title = styled.h1`
  font-size: 22px;
  line-height: 30px;
  font-weight: 700;
  text-align: center;

  @media (max-width: 599px) {
    font-size: 18px;
  }

  @media (max-width: 959px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const Description = styled.p`
  font-size: 15px;
  line-height: 24px;
  font-weight: 400;
  text-align: center;

  @media (max-width: 959px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

//private item card styling
export const PrivateItemCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 30px 35px;
  gap: 20px;
  border-radius: 4px;
  box-shadow: 0 5px 20px 0 rgba(23, 44, 82, 0.1);
  height: 440px;
  width: 400px;
  background-color: ${theme.color.common.light};
  color: ${theme.color.common.dark};
  cursor: pointer;
  transition: background-color 900ms, color 900ms;

  &:hover {
    background-color: ${theme.color.secondary.mainSecondary};
    color: ${theme.color.common.light};

    &:hover .colorChange {
      color: ${theme.color.common.light};
    }
  }

  @media (max-width: 959px) {
    height: 400px;
    width: 360px;
    padding: 40px 50px 35px;
  }

  @media (max-width: 599px) {
    width: 344px;
  }
`;

//great offers card styling

export const GreatOffersCardWrapper = styled.div`
  background-color: ${theme.color.common.light};
  box-shadow: 0 16px 32px 0 rgba(7, 28, 31, 0.1);
  width: 400px;
  height: 560px;
  padding: 40px 30px;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 5px;
    background-color: ${theme.color.primary.mainPrimary};
    left: 0;
    top: 0;
    transform: scale(0, 1);
    transform-origin: 0% 100%;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scale(1, 1);
  }

  @media (max-width: 599px) {
    width: 344px;
  }

  @media (max-width: 959px) {
    height: 500px;
    width: 360px;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50px;
  height: 50px;
  margin-bottom: 20px;

  .logo {
    width: 100%;
    height: 100%;
    color: ${theme.color.primary.mainPrimary};
    margin-left: -5px;
  }

  @media (max-width: 599px) {
    height: 40px;
    width: 40px;
    margin-bottom: 10px;
  }
`;

export const GreatOffersContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const GreatOffersTitle = styled.h1`
  font-size: 22px;
  line-height: 30px;
  font-weight: 700;
  color: ${theme.color.text.darkBlackTitle};

  @media (max-width: 599px) {
    font-size: 18px;
  }

  @media (max-width: 959px) {
    line-height: 24px;
    font-size: 20px;
  }
`;

//list styling
export const ItemListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ItemListSubWrapper = styled.div`
  display: flex;
  gap: 10px;
  width: fit-content;
  height: fit-content;

  .bullet {
    font-size: 8px;
    margin-top: 8px;
    color: ${theme.color.primary.mainPrimary};
  }
`;

//hp nutshell card styling
export const HpNutshellMainWrapper = styled.div`
  width: 300px;
  height: 300px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: ${theme.color.common.light};
  color: ${theme.color.text.darkBlackTitle};
  box-shadow: 0 5px 20px 0 rgba(23, 44, 82, 0.1);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 500ms, color 500ms;

  &:hover {
    background: ${theme.color.secondary.mainSecondary};
    color: ${theme.color.common.light};
  }
`;

export const HpNutshellTitle = styled.h1`
  font-size: 22px;
  line-height: 30px;
  font-weight: 700;
  text-align: center;

  @media (max-width: 599px) {
    font-size: 18px;
  }

  @media (max-width: 959px) {
    font-size: 20px;
    line-height: 20px;
  }
`;
