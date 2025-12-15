'use client';

import styled from 'styled-components';

import theme from '@/theme/theme';

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
