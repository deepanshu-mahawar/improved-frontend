"use client";

import Link from "next/link";

import styled from "styled-components";

import theme from "@/theme/theme";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
  height: 380px;
  background-color: ${theme.color.primary.mainPrimary};
  padding-top: 50px;
  padding-bottom: 80px;
  gap: 30px;

  @media (max-width: 1024px) {
    padding: 30px 0px;
    align-items: flex-start;
  }
`;

export const SubWrapper = styled.div`
  width: 84%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
    width: 100%;
    padding: 14px;
  }

  @media (max-width: 599px) {
    padding: 10px;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const LogoWrapper = styled.div`
  width: 250px;
  cursor: pointer;
  display: flex;
  flex-direction: column;

  .logo {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
  }

  @media (max-width: 1024px) {
    width: 100%;

    .logo {
      width: 250px;
    }
  }

  @media (max-width: 959px) {
    width: 100%;

    .logo {
      width: 180px;
      margin-bottom: 10px;
    }
  }

  @media (max-width: 599px) {
    .logo {
      width: 160px;
    }
  }
`;

export const Question = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${theme.color.fade.whiteFade};
  margin-bottom: 6px;

  @media (max-width: 959px) {
    font-size: 14px;
  }
`;

export const Label = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: ${theme.color.common.light};
  margin-top: 20px;
  margin-bottom: 10px;

  @media (max-width: 959px) {
    font-size: 14px;
    margin-bottom: 4px;
  }
`;

export const Menu = styled(Link)`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 16px;
  font-weight: 400;
  color: ${theme.color.fade.whiteFade};
  margin-bottom: 6px;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.color.common.light};
  }

  @media (max-width: 959px) {
    font-size: 14px;

    .icon {
      font-size: 20px;
    }
  }
`;

export const CookieContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 20%;
  background-color: ${theme.color.common.light};
  box-shadow: 0 0 1px rgba(0, 0, 0);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconConatiner = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;

  .closeIcon {
    cursor: pointer;
  }
`;

export const CookieSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const CookieText = styled.div`
  font-size: 14px;
  width: 94%;
  color: ${theme.color.text.darkBlackTitle};
`;
export const CookieButton = styled.button`
  background-color: ${theme.color.ternary.mainternary};
  color: ${theme.color.common.light};
  outline: none;
  border: none;
  width: 100%;
  padding: 10px;
  font-weight: 300;
  font-size: 14px;
  border-radius: 0px;
  margin-top: 10px;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.1s ease;

  &:active {
    transform: scale(0.98);
  }
`;

export const Image = styled.img`
  height: auto;
  width: auto;
`;
