"use client";

import styled from "styled-components";

import theme from "@/theme/theme";

export const MainWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid;
  color: ${theme.color.common.light};
  transition: background-position 0.4s ease, border 0.4s ease;

  &.button {
    background: -webkit-linear-gradient(0deg, #0c2471 50%, transparent 50%);
    background-size: 550px 80px;
    background-position: 0 0;
    transition: background-position 0.4s ease, border-color 0.4s ease;
  }

  &.button:hover {
    background-position: 275px 0px;
    border: 1px solid ${theme.color.primary.mainPrimary};
  }

  .buttonText {
    color: ${theme.color.common.light};
    font-size: 16px;
    padding: 15px 30px;
    transition: color 0.4s ease;

    &:hover {
      color: ${theme.color.primary.mainPrimary};
    }
  }

  @media (max-width: 959px) {
    .buttonText {
      font-size: 14px;
      font-weight: 300;
      padding: 12px 20px;
    }
  }

  @media (min-width: 767px) and (max-width: 959px) {
    .buttonText {
      padding: 15px 30px;
    }
  }
`;
