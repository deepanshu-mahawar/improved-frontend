"use client";

import styled from "styled-components";

import theme from "@/theme/theme";

export const AboutWrapper = styled.div`
  width: 80%;
  padding: 24px;
  border: 1px solid rgba(233, 233, 233, 0.69);
  border-radius: 8px;
  box-shadow: 0 16px 32px 0 rgba(7, 28, 31, 0.1);
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 959px) {
    width: 100%;
    padding: 16px;
    margin-bottom: 14px;
  }
`;

export const AboutTitle = styled.h1`
  font-size: 22px;
  font-weight: 600;
  color: ${theme.color.text.darkBlackTitle};

  @media (max-width: 959px) {
    font-size: 16px;
  }
`;

export const AboutDescription = styled.p`
  font-size: 16px;
  line-height: 26px;
  color: ${theme.color.text.darkBlackText};
  padding-top: 4px;

  @media (max-width: 959px) {
    font-size: 14px;
    line-height: 20px;
    padding-top: 0px;
  }
`;
