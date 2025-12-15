"use client";

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