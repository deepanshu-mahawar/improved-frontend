"use client";

import theme from "@/theme/theme";
import Image from "next/image";
import styled from "styled-components";

export const TestimonialContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  gap: 30px;
  padding: 50px 0px;

  .swiper {
    padding-bottom: 40px;
  }

  @media (max-width: 599px) {
    width: 96%;
    align-items: center;
  }

  @media (min-width: 767px) and (max-width: 959px) {
    width: 96%;
    align-items: center;
  }
`;


export const FaqContainer = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px 0px;

  @media (max-width: 1024px) {
    width: 96%;
    gap: 10px;
    padding: 20px 0px;
  }
`;


//certificate preview page styling
export const CertificateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px 0px;
  gap: 30px;

  @media (max-width: 1024px) {
    padding: 0px 14px;
    padding-top: 50px;
  }
  @media (max-width: 599px) {
    padding: 0px 10px;
  }
`;

export const CertificateSubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 60px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex: 0.6;
  position: relative;
  height: fit-content;
  border: 1px solid ${theme.color.border.cardBorder};
  box-shadow: 0 16px 32px 0 rgba(7, 28, 31, 0.1);

  @media (min-width: 767px) and (max-width: 959px) {
    width: 100%;
  }
`;

export const Images = styled.img`
  position: relative;
  object-fit: cover;

  @media (min-width: 767px) and (max-width: 959px) {
    width: 100%;
  }
`;

export const CertificateContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 30px;

  @media (max-width: 1024px) {
    width: 100%;
    order: 2;
    gap: 20px;
  }
`;
