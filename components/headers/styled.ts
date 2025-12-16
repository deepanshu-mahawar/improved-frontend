"use client";

import Link from "next/link";

import styled from "styled-components";

import theme from "@/theme/theme";

export const HeaderWrapper = styled.div<{ $scrolling?: boolean }>(
  ({ $scrolling }) => `
  background-color: ${theme.color.common.light};
  position: ${$scrolling ? "fixed" : "absolute"};
  display: flex;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${$scrolling ? "92px" : "88px"};
  transform: translateY(${$scrolling ? "0px" : "0px"});
  box-shadow: ${
    $scrolling
      ? "0 2px 8px rgba(0, 0, 0, 0.04)"
      : "0 1px 0.1px rgba(0, 0, 0, 0.07)"
  };
  transition: height 200ms ease, box-shadow 200ms ease, transform 200ms ease;
  z-index: 9999;

  @media (max-width: 959px) {
    height: ${$scrolling ? "66px" : "64px"};
  }

  @media (min-width: 767px) and (max-width: 1024px) {
    height: ${$scrolling ? "80px" : "78px"};
  }`
);

export const HeaderSubWrapper = styled.div`
  background-color: "transparent";
  width: 84%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0px 14px;
  }

  @media (max-width: 959px) {
    width: 100%;
    padding: 0px 14px;
    align-items: center;
  }

  @media (max-width: 599px) {
    padding: 0px 10px;
  }

  @media (min-width: 767px) and (max-width: 959px) {
    padding: 0px 14px;
  }
`;

export const LogoWrapper = styled.div`
  width: 250px;
  cursor: pointer;

  .logo {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 959px) {
    width: fit-content;
    .logo {
      width: 180px;
    }
  }

  @media (max-width: 599px) {
    .logo {
      width: 160px;
    }
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const MenuSubWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 35px;
`;

export const Menu = styled(Link)<{ $active: boolean }>(
  ({ $active }) => `
  color: ${
    $active
      ? `${theme.color.primary.mainPrimary}`
      : `${theme.color.text.darkBlackText}`
  };
  font-size: 16px;
  font-weight: 400;
  transition: color 0.7s ease;

  &:hover {
    color: ${theme.color.primary.mainPrimary};
  }

  @media (max-width: 959px) {
    font-size: 14px;
  }`
);

export const SignInButton = styled("button")`
  background-color: ${theme.color.primary.mainPrimary};
  color: ${theme.color.common.light};
  padding: 12px 40px;
  height: 50px;
  width: 140px;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s ease, color 0.5s ease, transform 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${theme.color.fade.blackFade};
    color: ${theme.color.text.darkBlackTitle};

    .loading {
      filter: brightness(0.5) contrast(1.5);
      transition: filter 0.3s ease;
    }
  }

  &:active {
    transform: scale(0.9);
  }
`;

export const ResponsiveMenuContainer = styled.div<{
  $width?: string;
  $padding?: string;
  $gap?: string;
}>(
  ({ $width = "fit-content", $padding = "none", $gap = "none" }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${$gap};
  width: ${$width};
  height: fit-content;
  padding: ${$padding};

  .icon {
    color: ${theme.color.text.darkBlackTitle};
    font-size: 20px;
  }

  @media (max-width: 959px) {
    font-size: 14px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`
);
export const Image = styled.img`
  height: auto;
  width: auto;
`;
