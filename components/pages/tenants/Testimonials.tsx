"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../../app/globals.css";

import { useTranslations } from "next-intl";

import { Testimonial } from "@/components/common/Testimonial";
import { TestimonialContainer } from "./styled";
import { SectionContainer, Title, TitleContainer } from "../styled";

const testimonials = [
  {
    name: "testimonialCard1.name",
    location: "testimonialCard1.location",
    testimonial: "testimonialCard1.testimonial",
  },
  {
    name: "testimonialCard2.name",
    location: "testimonialCard2.location",
    testimonial: "testimonialCard2.testimonial",
  },
  {
    name: "testimonialCard3.name",
    location: "testimonialCard3.location",
    testimonial: "testimonialCard3.testimonial",
  },
  {
    name: "testimonialCard4.name",
    location: "testimonialCard4.location",
    testimonial: "testimonialCard4.testimonial",
  },
  {
    name: "testimonialCard5.name",
    location: "testimonialCard5.location",
    testimonial: "testimonialCard5.testimonial",
  },
  {
    name: "testimonialCard6.name",
    location: "testimonialCard6.location",
    testimonial: "testimonialCard6.testimonial",
  },
  {
    name: "testimonialCard7.name",
    location: "testimonialCard7.location",
    testimonial: "testimonialCard7.testimonial",
  },
  {
    name: "testimonialCard8.name",
    location: "testimonialCard8.location",
    testimonial: "testimonialCard8.testimonial",
  },
  {
    name: "testimonialCard9.name",
    location: "testimonialCard9.location",
    testimonial: "testimonialCard9.testimonial",
  },
  {
    name: "testimonialCard10.name",
    location: "testimonialCard10.location",
    testimonial: "testimonialCard10.testimonial",
  },
  {
    name: "testimonialCard11.name",
    location: "testimonialCard11.location",
    testimonial: "testimonialCard11.testimonial",
  },
  {
    name: "testimonialCard12.name",
    location: "testimonialCard12.location",
    testimonial: "testimonialCard12.testimonial",
  },
  {
    name: "testimonialCard13.name",
    location: "testimonialCard13.location",
    testimonial: "testimonialCard13.testimonial",
  },
];

export const Testimonials = () => {
  const t = useTranslations("Testimonial");
  const trimContent = (content: string, wordLimit: number) => {
    const text = content.trim().split(/\s+/);
    if (text.length <= wordLimit) return content.trim();
    return text.slice(0, wordLimit).join(" ") + "...";
  };
  return (
    <SectionContainer $isBackground>
      <TitleContainer>
        <Title>{t("title")}</Title>
      </TitleContainer>

      <TestimonialContainer>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          pagination={{ clickable: true, dynamicBullets: true }}
          breakpoints={{
            599: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          className="swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <Testimonial
                name={t(item.name)}
                message={trimContent(t(item.testimonial), 20)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </TestimonialContainer>
    </SectionContainer>
  );
};
