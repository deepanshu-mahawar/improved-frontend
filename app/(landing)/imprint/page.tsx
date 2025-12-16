"use client";
import { useTranslations } from "next-intl";
import {
  ContentMainWrapper,
  ContentSubWrapper,
  ImprintDescription,
  PageHeader,
  SectionHeading,
} from "../styled";
import { Links } from "@/components/pages/data-security/styled";

export default function ImprintPage() {
  const t = useTranslations("imprint");
  return (
    <main>
      <PageHeader>{t("header")}</PageHeader>
      <ContentMainWrapper>
        <ContentSubWrapper>
          <SectionHeading>{t("section1.title")}</SectionHeading>
          <ImprintDescription>
            {t("section1.description1")}
            <br />
            {t("section1.description2")}
            <br />
            {t("section1.description3")}
          </ImprintDescription>

          <ImprintDescription>
            {t("section1.description4")}
            <br />
            {t("section1.description5")}
          </ImprintDescription>

          <ImprintDescription>{t("section1.description6")}</ImprintDescription>
        </ContentSubWrapper>

        <ContentSubWrapper>
          <SectionHeading>{t("section2.title")}</SectionHeading>
          <ImprintDescription>
            {t("section2.descriptionBefore")}
            <br />
            {t("section2.descriptionAfter")}
          </ImprintDescription>
        </ContentSubWrapper>

        <ContentSubWrapper>
          <SectionHeading>{t("section3.title")}</SectionHeading>

          <ImprintDescription>
            {t("section3.description1")}
            <br />
            {t("section3.description2")}
            <br />
            {t("section3.description3")}
          </ImprintDescription>
        </ContentSubWrapper>

        <ContentSubWrapper>
          <SectionHeading>{t("section4.title")}</SectionHeading>

          <ImprintDescription>
            {t("section4.descriptionBefore")}{" "}
            <Links href="https://ec.europa.eu/consumers/odr/">
              https://ec.europa.eu/consumers/odr/
            </Links>
            <br />
            {t("section4.descriptionAfter")}
          </ImprintDescription>
        </ContentSubWrapper>

        <ContentSubWrapper>
          <SectionHeading>{t("section5.title")}</SectionHeading>

          <ImprintDescription>
            {t("section5.descriptionBefore")}
            <br />
            {t("section5.descriptionAfter")}{" "}
            <Links href="https://www.e-recht24.de/impressum-generator.html">
              https://www.erecht24.de/impressum-generator.html
            </Links>
          </ImprintDescription>
        </ContentSubWrapper>
      </ContentMainWrapper>
    </main>
  );
}
