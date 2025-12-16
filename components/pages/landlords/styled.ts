"use client";

import styled from "styled-components";

import theme from "@/theme/theme";

export const MainContainer = styled.div<{ $isBackground?: boolean }>(
  ({ $isBackground }) => `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90.8vh;
  width: 100%;
  background-color: ${
    $isBackground ? `${theme.color.background.secondaryBackground}` : ""
  };

  @media (max-width: 1024px){
    height: fit-content;
  }

  @media (min-width: 767px) and (max-width: 959px) {
    height: fit-content;
  }
`
);
