"use client";

import theme from "@/theme/theme";
import styled from "styled-components";

export const AboutMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0px;

  @media (max-width: 959px) {
    padding: 20px 14px;
  }

  @media (max-width: 599px) {
    padding: 10px;
  }
`;

export const PageHeader = styled.div`
  width: 100%;
  background: ${theme.color.primary.mainPrimary};
  height: 16vh;
  font-size: 46px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${theme.color.common.light};
  margin-top: 88px;

  @media (max-width: 959px) {
    font-size: 24px;
    height: 12vh;
    font-weight: 600;
  }
`;


export const FaqMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
`;

export const ContentMainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;

  @media (max-width: 959px) {
    padding: 30px 10px;
  }

  @media (max-width: 599px) {
    padding: 20px 10px;
  }
`;

export const ContentSubWrapper = styled.div`
  width: 80%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  word-wrap: break-word;
  overflow-wrap: break-word;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 959px) {
    width: 95%;
    margin-bottom: 25px;

    br {
      display: none;
    }
  }

  @media (max-width: 599px) {
    width: 100%;
  }
`;

export const SectionHeading = styled.h1`
  font-size: 22px;
  font-weight: 600;
  color: ${theme.color.text.darkBlackTitle};
  margin-bottom: 10px;
  line-height: 1.3;

  @media (max-width: 959px) {
    font-size: 18px;
  }

  @media (max-width: 599px) {
    font-size: 16px;
  }
`;

export const ImprintDescription = styled.p`
  font-size: 16px;
  color: ${theme.color.text.darkBlackText};
  line-height: 26px;
  width: 100%;
  margin-bottom: 12px;
  white-space: pre-line;
  word-break: break-word;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 959px) {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 8px;
  }

  @media (max-width: 599px) {
    font-size: 13px;
    line-height: 20px;
  }
`;

export const SectionDescription = styled.p`
  font-size: 16px;
  color: ${theme.color.text.darkBlackText};
  line-height: 26px;
  width: 100%;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 959px) {
    font-size: 14px;
    line-height: 20px;
    margin-bottom: 10px;
    font-weight: 400;
  }
`;

export const SectionSubHeading = styled.h1`
  font-size: 16px;
  color: ${theme.color.text.darkBlackTitle};
  font-weight: 500;
  line-height: 26px;
  width: 100%;
  padding-top: 10px;

  @media (max-width: 959px) {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    padding-top: 4px;
  }

  @media (max-width: 599px) {
    padding-top: 0px;
  }
`;

export const BulletPoint = styled.li`
  font-size: 16px;
  color: ${theme.color.text.darkBlackText};
  line-height: 26px;
  width: 100%;

  @media (max-width: 959px) {
    line-height: 20px;
    font-size: 14px;
    margin-bottom: 6px;
  }
`;

export const SubPoints = styled.p`
  font-size: 18px;
  color: ${theme.color.text.darkBlackTitle};
  font-weight: 600;
  line-height: 26px;
  width: 100%;
  padding-top: 18px;

  @media (max-width: 599px) {
    font-size: 14px;
    padding-top: 0px;
    font-weight: 500;
    line-height: 20px;
  }

  @media (min-width: 600px) and (max-width: 959px) {
    font-size: 14px;
    padding-top: 0px;
    font-weight: 500;
    line-height: 20px;
  }
`;
