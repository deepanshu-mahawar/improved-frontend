"use client";

import styled from "styled-components";

import theme from "@/theme/theme";

export const MainWrapper = styled("div")<{ $column?: boolean; $gap?: string }>(
  ({ $column, $gap = "40px" }) => `
  width: 90%;
  display: grid;
  grid-template-columns: ${$column ? "1fr" : "repeat(2, 1fr)"};
  gap: ${$gap};

  @media (max-width: 959px){
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  @media (max-width: 599px){
    gap: 10px;
  }

  @media (min-width: 767px) and (max-width: 959px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: 1024px){
    gap: 14px;
  }
`
);

export const SubWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  height: fit-content;
`;

export const IconWrapper = styled.div`
  background-color: ${theme.color.background.iconBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 10px;

  .check {
    font-size: 16px;
    color: ${theme.color.ternary.mainternary};
  }

  @media (max-width: 959px) {
    padding: 6px;

    .check {
      font-size: 16px;
    }
  }

  @media (max-width: 599px) {
    .check {
      font-size: 14px;
    }
  }
`;

export const Points = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${theme.color.text.darkBlackText};
  line-height: 22px;
  width: 100%;

  @media (max-width: 959px) {
    font-size: 14px;
    line-height: 20px;
  }
`;
