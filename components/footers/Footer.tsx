"use client";

import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import {
  ContentWrapper,
  Image,
  Label,
  LogoWrapper,
  FooterWrapper,
  Menu,
  Question,
  FooterSubWrapper,
} from "./styled";

import { useTranslations } from "next-intl";

export const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <>
      {/* <CookieContainer>
      <IconConatiner>
      <MdClose className='closeIcon' />
      </IconConatiner>
      <CookieSubContainer>
      <CookieText>We want to inform you that our website does not use cookies directly. However, some services we integrate with may use cookies to enhance your experience on the site.</CookieText>
      <CookieButton>I understand</CookieButton>
      </CookieSubContainer>
      </CookieContainer> */}

      <FooterWrapper>
        <FooterSubWrapper>
          <ContentWrapper>
            <LogoWrapper>
              <Image src="/white-logo.png" alt="housingpass" className="logo" />
              <Question>{t("question")}</Question>
              <Menu href="#">
                <EmailIcon className="icon" />
                {t("email")}
              </Menu>
              <Menu href="#">
                <LocationOnIcon className="icon" />
                {t("address")}
              </Menu>
            </LogoWrapper>
          </ContentWrapper>

          <ContentWrapper>
            <Label>{t("companyLabel")}</Label>
            <Menu href="/about-us">{t("companyMenu.about")}</Menu>
          </ContentWrapper>

          <ContentWrapper>
            <Label>{t("policyLabel")}</Label>
            <Menu href="/terms-and-conditions">{t("policyMenu.terms")}</Menu>
            <Menu href="/privacy-policy">{t("policyMenu.privacy")}</Menu>
          </ContentWrapper>

          <ContentWrapper>
            <Label>{t("customerCareLabel")}</Label>
            <Menu href="/imprint">{t("customerCareMenu.imprint")}</Menu>
          </ContentWrapper>
        </FooterSubWrapper>
      </FooterWrapper>
    </>
  );
};
