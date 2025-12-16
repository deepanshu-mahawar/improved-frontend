"use client";

import { useTranslations } from "next-intl";
import {
  ContentMainWrapper,
  ContentSubWrapper,
  PageHeader,
  SectionDescription,
  SectionHeading,
  SectionSubHeading,
  SubPoints,
} from "../styled";
import { Links } from "@/components/pages/data-security/styled";

export default function PrivacyPolicyPage() {
  const t = useTranslations("privacyPolicy");
  return (
    <main>
      <PageHeader>{t("header")}</PageHeader>

      <ContentMainWrapper>
        <ContentSubWrapper>
          <SectionHeading>{t("title")}</SectionHeading>
          <SectionDescription>{t("description")}</SectionDescription>
          <br />
        </ContentSubWrapper>
        <ContentSubWrapper>
          <SectionHeading>{t("section1.title")}</SectionHeading>

          <SubPoints>{t("section1.subsection1.title")}</SubPoints>
          <SectionDescription>
            {t("section1.subsection1.description")}
          </SectionDescription>

          <SubPoints>{t("section1.subsection2.title")}</SubPoints>
          <SectionSubHeading>
            {t("section1.subsection2.subTitle1")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section1.subsection2.description1")}
          </SectionDescription>

          <SectionSubHeading>
            {t("section1.subsection2.subTitle2")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section1.subsection2.description2")}
          </SectionDescription>

          <SectionSubHeading>
            {t("section1.subsection2.subTitle3")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section1.subsection2.description3")}
          </SectionDescription>

          <SectionSubHeading>
            {t("section1.subsection2.subTitle4")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section1.subsection2.description4")}
          </SectionDescription>
          <br />
        </ContentSubWrapper>

        <ContentSubWrapper>
          <SectionHeading>{t("section2.title")}</SectionHeading>
          <SectionDescription>{t("section2.description")}</SectionDescription>

          <SubPoints>{t("section2.subTitle")}</SubPoints>
          <SectionDescription>{t("section2.description1")}</SectionDescription>
          <SectionDescription>{t("section2.description2")}</SectionDescription>
          <SectionDescription>{t("section2.description3")}</SectionDescription>

          <SectionDescription>{t("section2.description4")}</SectionDescription>
          <SectionDescription>
            {t("section2.description5")}
            <br />
            {t("section2.description6")}
            <br />
            {t("section2.description7")}{" "}
            <Links href="https://www.digitalocean.com/legal/gdpr-faq">
              https://www.digitalocean.com/legal/gdpr-faq
            </Links>{" "}
            {t("section2.description8")}{" "}
            <Links href="https://www.digitalocean.com/legal/data-processing-agreement">
              https://www.digitalocean.com/legal/data-processing-agreement
            </Links>
          </SectionDescription>
          <SectionDescription>
            {t("section2.description9")}{" "}
            <Links
              href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail
            contact=true&id=a2zt0000000YdenAAC&status=Active"
            >
              https://www.dataprivacyframework.gov/s/participant-search/participant-detail
              contact=true&id=a2zt0000000YdenAAC&status=Active
            </Links>
          </SectionDescription>
          <SectionDescription>
            {t("section2.description10")}
            <br />
            {t("section2.description11")}{" "}
            <Links href="https://www.godaddy.com/de-at/legal/agreements/data-privacy-framework-notice">
              https://www.godaddy.com/de-at/legal/agreements/data-privacy-framework-notice
            </Links>{" "}
            {t("section2.description12")}{" "}
            <Links href="https://www.godaddy.com/en-il/legal/agreements/data-processing-addendum">
              https://www.godaddy.com/en-il/legal/agreements/data-processing-addendum
            </Links>
          </SectionDescription>
          <SectionDescription>
            {t("section2.description13")}{" "}
            <Links href="https://www.dataprivacyframework.gov/s/participant-search/participantdetail?contact=true&id=a2zt0000000YdenAAC&status=Aktiv">
              https://www.dataprivacyframework.gov/s/participant-search/participantdetail?contact=true&id=a2zt0000000YdenAAC&status=Aktiv
            </Links>
          </SectionDescription>
          <SectionDescription>{t("section2.description14")}</SectionDescription>
          <SectionDescription>
            {t("section2.description15")}{" "}
            <Links href="https://www.framer.com/help/articles/gdpr-and-cookies/">
              https://www.framer.com/help/articles/gdpr-and-cookies/
            </Links>{" "}
            {t("section2.description16")}{" "}
            <Links href="https://www.framer.com/legal/data-processing-addendum/">
              https://www.framer.com/legal/data-processing-addendum/
            </Links>
          </SectionDescription>
          <SectionSubHeading>{t("section2.subTitle2")}</SectionSubHeading>
          <SectionDescription>{t("section2.description17")}</SectionDescription>
          <br />
        </ContentSubWrapper>
        <ContentSubWrapper>
          <SectionHeading>{t("section3.title")}</SectionHeading>
          <SubPoints>{t("section3.subsection1.title")}</SubPoints>
          <SectionDescription>
            {t("section3.subsection1.description1")}
          </SectionDescription>
          <SectionDescription>
            {t("section3.subsection1.description2")}
          </SectionDescription>
          <SectionDescription>
            {t("section3.subsection1.description3")}
          </SectionDescription>

          <SubPoints>{t("section3.subsection2.title")}</SubPoints>
          <SectionDescription>
            {t("section3.subsection2.description1")}
          </SectionDescription>
          <SectionDescription>
            {t("section3.subsection2.description2")}
            <br /> {t("section3.subsection2.description3")} <br />
            {t("section3.subsection2.description4")} <br />{" "}
            {t("section3.subsection2.description5")}
          </SectionDescription>
          <SectionDescription>
            {t("section3.subsection2.description6")} <br />{" "}
            {t("section3.subsection2.description7")}
          </SectionDescription>
          <SectionDescription>
            {t("section3.subsection2.description8")}
          </SectionDescription>

          <SubPoints>{t("section3.subsection3.title")}</SubPoints>
          <SectionDescription>
            {t("section3.subsection3.description")}
          </SectionDescription>

          <SubPoints>{t("section3.subsection4.title")}</SubPoints>
          <SectionDescription>
            {t("section3.subsection4.description1")}
          </SectionDescription>
          <SectionDescription>
            {t("section3.subsection4.description2")}
          </SectionDescription>
          <SectionDescription>
            {t("section3.subsection4.description3")}
          </SectionDescription>
          <SectionDescription>
            {t("section3.subsection4.description4")}{" "}
            <Links href="https://www.dataprivacyframework.gov/s/participant-search/participantdetail?contact=true&id=a2zt0000000YdenAAC&status=Active">
              https://www.dataprivacyframework.gov/s/participant-search/participantdetail?contact=true&id=a2zt0000000YdenAAC&status=Active
            </Links>
          </SectionDescription>
          <SubPoints>{t("section3.subsection5.title")}</SubPoints>
          <SectionDescription>
            {t("section3.subsection5.description1")}
          </SectionDescription>
          <SectionDescription>
            {t("section3.subsection5.description2")}
          </SectionDescription>

          <SubPoints>{t("section3.subsection6.title")}</SubPoints>
          <SectionDescription>
            {t("section3.subsection6.description")}
          </SectionDescription>

          <SubPoints>{t("section3.subsection7.title")}</SubPoints>
          <SectionDescription>
            {t("section3.subsection7.description1")}
          </SectionDescription>

          <SectionDescription>
            {t("section3.subsection7.description2")}
          </SectionDescription>

          <SubPoints>{t("section3.subsection8.title")}</SubPoints>
          <SectionDescription>
            {t("section3.subsection8.description")}
          </SectionDescription>

          <SubPoints>{t("section3.subsection9.title")}</SubPoints>
          <SectionDescription>
            {t("section3.subsection9.description")}
          </SectionDescription>

          <SubPoints>{t("section3.subsection10.title")}</SubPoints>
          <SectionDescription>
            {t("section3.subsection10.description")}
          </SectionDescription>

          <SubPoints>{t("section3.subsection11.title")}</SubPoints>
          <SectionDescription>
            {t("section3.subsection11.description")}
          </SectionDescription>

          <SubPoints>{t("section3.subsection12.title")}</SubPoints>
          <SectionDescription>
            {t("section3.subsection12.description1")}
          </SectionDescription>
          <SectionDescription>
            {t("section3.subsection12.description2")}
          </SectionDescription>
          <SubPoints>{t("section3.subsection13.title")}</SubPoints>
          <SectionDescription>
            {t("section3.subsection13.description1")}
          </SectionDescription>
          <SectionDescription>
            {t("section3.subsection13.description2")}
          </SectionDescription>
          <SectionDescription>
            {t("section3.subsection13.description3")}
          </SectionDescription>

          <SubPoints>{t("section3.subsection14.title")}</SubPoints>
          <SectionDescription>
            {t("section3.subsection14.description")}
          </SectionDescription>
          <br />
        </ContentSubWrapper>

        <ContentSubWrapper>
          <SectionHeading>{t("section4.title")}</SectionHeading>
          <SubPoints>{t("section4.subsection1.title")}</SubPoints>
          <SectionDescription>
            {t("section4.subsection1.description1")}
          </SectionDescription>
          <SectionDescription>
            {t("section4.subsection1.description2")}
          </SectionDescription>
          <SectionDescription>
            {t("section4.subsection1.description3")}
          </SectionDescription>
          <SectionDescription>
            {t("section4.subsection1.description4")}
          </SectionDescription>
          <SectionDescription>
            {t("section4.subsection1.description5")}
          </SectionDescription>
          <SectionDescription>
            {t("section4.subsection1.description6")}
          </SectionDescription>

          <SubPoints>{t("section4.subsection2.title")}</SubPoints>
          <SectionDescription>
            {t("section4.subsection2.description1")}
          </SectionDescription>
          <SectionDescription>
            {t("section4.subsection2.description2")}
          </SectionDescription>
          <SectionDescription>
            {t("section4.subsection2.description3")}
          </SectionDescription>

          <SubPoints>{t("section4.subsection3.title")}</SubPoints>
          <SectionDescription>
            {t("section4.subsection3.description1")}
          </SectionDescription>
          <SectionDescription>
            {t("section4.subsection3.description2")}
          </SectionDescription>
          <SectionDescription>
            {t("section4.subsection3.description3")}
          </SectionDescription>

          <SubPoints>{t("section4.subsection3.subsectionTitle")}</SubPoints>
          <SectionDescription>
            {t("section4.subsection3.description4")}
          </SectionDescription>

          <SubPoints>{t("section4.subsection4.title")}</SubPoints>
          <SectionDescription>
            {t("section4.subsection4.description1")}
          </SectionDescription>
          <SectionDescription>
            {t("section4.subsection4.description2")}
          </SectionDescription>
          <SectionDescription>
            {t("section4.subsection4.description3")}
          </SectionDescription>
          <SectionDescription>
            {t("section4.subsection4.description4")}
          </SectionDescription>

          <SubPoints>{t("section4.subsection5.title")}</SubPoints>
          <SectionDescription>
            {t("section4.subsection5.description1")}
          </SectionDescription>
          <SectionDescription>
            {t("section4.subsection5.description2")}
          </SectionDescription>
          <SectionDescription>
            {t("section4.subsection5.description3")}{" "}
            <Links href="https://myaccount.google.com/security">
              https://myaccount.google.com/security
            </Links>{" "}
            {t("section4.subsection5.description4")}{" "}
            <Links href="https://myaccount.google.com/permissions">
              https://myaccount.google.com/permissions
            </Links>
          </SectionDescription>
          <SectionDescription>
            {t("section4.subsection5.description5")}
          </SectionDescription>
          <SectionDescription>
            {t("section4.subsection5.description6")}{" "}
            <Links href="https://www.dataprivacyframework.gov/s/participant-search/participantdetail?contact=true&id=a2zt000000001L5AAI&status=Active">
              https://www.dataprivacyframework.gov/s/participant-search/participantdetail?contact=true&id=a2zt000000001L5AAI&status=Active
            </Links>
          </SectionDescription>
          <SubPoints>{t("section4.subsection6.title")}</SubPoints>
          <SectionDescription>
            {t("section4.subsection6.description1")}
          </SectionDescription>
          <SectionDescription>
            {t("section4.subsection6.description2")}
          </SectionDescription>
          <SectionDescription>
            {t("section4.subsection6.description3")}
          </SectionDescription>
          <SectionDescription>
            {t("section4.subsection6.description4")}
          </SectionDescription>
          <SectionDescription>
            {t("section4.subsection6.description5")}
          </SectionDescription>

          <br />
        </ContentSubWrapper>
        <ContentSubWrapper>
          <SectionHeading>{t("section5.title")}</SectionHeading>
          <SubPoints>{t("section5.subsection1.subTitle")}</SubPoints>
          <SectionDescription>
            {t("section5.subsection1.description1")}
          </SectionDescription>
          <SectionDescription>
            {t("section5.subsection1.description2")}
          </SectionDescription>
          <SectionDescription>
            {t("section5.subsection1.description3")}{" "}
            <Links
              href="https://www.linkedin.com/help/linkedin/answer/62538/datenubertragung-aus-der-eu-demewr-und-der-
            schweiz?lang=en"
            >
              https://www.linkedin.com/help/linkedin/answer/62538/datenubertragung-aus-der-eu-demewr-und-der-
              schweiz?lang=en
            </Links>
          </SectionDescription>
          <SectionDescription>
            {t("section5.subsection1.description4")}{" "}
            <Links href="https://www.linkedin.com/legal/privacy-policy">
              https://www.linkedin.com/legal/privacy-policy
            </Links>
          </SectionDescription>
          <br />
        </ContentSubWrapper>
        <ContentSubWrapper>
          <SectionHeading>{t("section6.title")}</SectionHeading>
          <SubPoints>{t("section6.subsection1.subTitle")}</SubPoints>
          <SectionDescription>
            {t("section6.subsection1.description1")}
          </SectionDescription>
          <SectionDescription>
            {t("section6.subsection1.description2")}
          </SectionDescription>
          <SectionDescription>
            {t("section6.subsection1.description3")}
          </SectionDescription>
          <SectionDescription>
            {t("section6.subsection1.description4")}
          </SectionDescription>

          <SubPoints>{t("section6.subsection2.subTitle")}</SubPoints>
          <SectionDescription>
            {t("section6.subsection2.description1")}
          </SectionDescription>
          <SectionDescription>
            {t("section6.subsection2.description2")}
          </SectionDescription>
          <SectionDescription>
            {t("section6.subsection2.description3")}
          </SectionDescription>
          <SectionDescription>
            {t("section6.subsection2.description4")}
          </SectionDescription>
          <SectionDescription>
            {t("section6.subsection2.description5")}{" "}
            <Links href="https://privacy.google.com/businesses/controllerterms/mccs/">
              https://privacy.google.com/businesses/controllerterms/mccs/
            </Links>
          </SectionDescription>
          <SectionDescription>
            {t("section6.subsection2.description6")}{" "}
            <Links href="https://www.dataprivacyframework.gov/s/participant-search/participantdetail?contact=true&id=a2zt000000001L5AAI&status=Active">
              https://www.dataprivacyframework.gov/s/participant-search/participantdetail?contact=true&id=a2zt000000001L5AAI&status=Active
            </Links>
          </SectionDescription>
          <SubPoints>{t("section6.subsection3.subTitle")}</SubPoints>
          <SectionDescription>
            {t("section6.subsection3.description")}
          </SectionDescription>

          <SubPoints>{t("section6.subsection4.subTitle")}</SubPoints>
          <SectionDescription>
            {t("section6.subsection4.description")}{" "}
            <Links href="https://tools.google.com/dlpage/gaoptout?hl=en">
              https://tools.google.com/dlpage/gaoptout?hl=en.
            </Links>
          </SectionDescription>
          <SectionSubHeading>
            {t("section6.subsection5.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section6.subsection5.description")}
          </SectionDescription>
          <SectionSubHeading>
            {t("section6.subsection6.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section6.subsection6.description")}
          </SectionDescription>

          <SectionSubHeading>
            {t("section6.subsection7.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section6.subsection7.description")}
          </SectionDescription>
          <br />
        </ContentSubWrapper>
        <ContentSubWrapper>
          <SectionHeading>{t("section7.title")}</SectionHeading>
          <SubPoints>{t("section7.subsection1.subTitle")}</SubPoints>

          <SectionDescription>
            {t("section7.subsection1.description")}
          </SectionDescription>

          <SubPoints>{t("section7.subsection2.subTitle")}</SubPoints>
          <SectionDescription>
            {t("section7.subsection2.description1")}
          </SectionDescription>
          <SectionDescription>
            {t("section7.subsection2.description2")}
          </SectionDescription>
          <SectionDescription>
            {t("section7.subsection2.description3")}
          </SectionDescription>
          <SectionDescription>
            {t("section7.subsection2.description4")}
          </SectionDescription>
          <SectionDescription>
            {t("section7.subsection2.description5")}
          </SectionDescription>

          <SectionDescription>
            {t("section7.subsection2.description6")}
            <Links
              href="https://mailchimp.com/eu-us-data-transfer-statement/ and
                    https://mailchimp.com/legal/data-processing-addendum/#Annex_C_-
                    _Standard_Contractual_Clauses"
            >
              https://mailchimp.com/eu-us-data-transfer-statement/ and
              https://mailchimp.com/legal/data-processing-addendum/#Annex_C_-
              _Standard_Contractual_Clauses
            </Links>
          </SectionDescription>
          <SectionDescription>
            {t("section7.subsection2.description7")}
          </SectionDescription>
          <SectionDescription>
            {t("section7.subsection2.description8")}
            https://mailchimp.com/legal/terms/.
          </SectionDescription>
          <SectionDescription>
            {t("section7.subsection2.description9")}{" "}
            <Links href="https://www.dataprivacyframework.gov/s/participant-search/participantdetail?contact=true&id=a2zt0000000TXVKAA4&status=Active">
              https://www.dataprivacyframework.gov/s/participant-search/participantdetail?contact=true&id=a2zt0000000TXVKAA4&status=Active
            </Links>
          </SectionDescription>
          <SectionSubHeading>
            {t("section7.subsection3.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section7.subsection3.description")}
          </SectionDescription>
          <br />
        </ContentSubWrapper>
        <ContentSubWrapper>
          <SectionHeading>{t("section8.title")}</SectionHeading>
          <SubPoints>{t("section8.subsection1.subTitle")}</SubPoints>
          <SectionDescription>
            {t("section8.subsection1.description1")}
          </SectionDescription>

          <SectionDescription>
            {t("section8.subsection1.description2")}
          </SectionDescription>
          <SectionDescription>
            {t("section8.subsection1.description3")}
          </SectionDescription>
          <SectionDescription>
            {t("section8.subsection1.description4")}
          </SectionDescription>
          <SectionDescription>
            {t("section8.subsection1.description5")}{" "}
            <Links href="https://sentry.io/privacy/">
              https://sentry.io/privacy/
            </Links>
          </SectionDescription>
          <SectionDescription>
            {t("section8.subsection1.description6")}
          </SectionDescription>
          <SectionDescription>
            <Links
              href="https://sentry.io/legal/dpa/5.0.0/#cross-border-transfermechanisms
            und https://sentry.io/legal/dpa/5.0.0/#thirdparty"
            >
              https://sentry.io/legal/dpa/5.0.0/#cross-border-transfermechanisms
              und https://sentry.io/legal/dpa/5.0.0/#thirdparty
            </Links>
          </SectionDescription>
          <SectionDescription>
            {t("section8.subsection1.description7")}{" "}
            <Links href="https://www.dataprivacyframework.gov/s/participant-search/participantdetail?contact=true&id=a2zt0000000YdenAAC&status=Active">
              https://www.dataprivacyframework.gov/s/participant-search/participantdetail?contact=true&id=a2zt0000000YdenAAC&status=Active
            </Links>
          </SectionDescription>
          <SectionSubHeading>
            {t("section8.subsection2.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section8.subsection2.description")}
          </SectionDescription>
          <br />
        </ContentSubWrapper>
        <ContentSubWrapper>
          <SectionHeading>{t("section9.title")}</SectionHeading>
          <SubPoints>{t("section9.subsection1.subTitle")}</SubPoints>
          <SectionDescription>
            {t("section9.subsection1.description1")}
          </SectionDescription>
          <SectionDescription>
            {t("section9.subsection1.description2")}
          </SectionDescription>

          <SubPoints>{t("section9.subsection2.subTitle")}</SubPoints>
          <SectionDescription>
            {t("section9.subsection2.description1")}
          </SectionDescription>
          <SectionDescription>
            {t("section9.subsection2.description2")}
          </SectionDescription>
          <SectionDescription>
            {t("section9.subsection2.description3")}
          </SectionDescription>

          <SubPoints>{t("section9.subsection3.subTitle")}</SubPoints>
          <SectionDescription>
            {t("section9.subsection3.description1")}
          </SectionDescription>
          <SectionDescription>
            {t("section9.subsection3.description2")}
          </SectionDescription>

          <SubPoints>{t("section9.subsection4.subTitle")}</SubPoints>
          <SectionDescription>
            {t("section9.subsection4.description1")}
          </SectionDescription>
          <SectionDescription>
            {t("section9.subsection4.description2")}{" "}
            <Links href="https://stripe.com/de/privacy">
              https://stripe.com/de/privacy
            </Links>{" "}
            and{" "}
            <Links href="https://stripe.com/de/guides/general-dataprotection-regulation">
              https://stripe.com/de/guides/general-dataprotection-regulation
            </Links>
          </SectionDescription>
          <SectionDescription>
            {t("section9.subsection4.description3")}{" "}
            <Links href="https://stripe.com/de/privacy">
              https://stripe.com/de/privacy
            </Links>
          </SectionDescription>
          <br />
        </ContentSubWrapper>
        <ContentSubWrapper>
          <SectionHeading>{t("section10.title")}</SectionHeading>

          <SubPoints>{t("section10.subsection1.subTitle")}</SubPoints>
          <SectionDescription>
            {t("section10.subsection1.description1")}
          </SectionDescription>

          <SubPoints>{t("section10.subsection2.subTitle")}</SubPoints>
          <SectionDescription>
            {t("section10.subsection2.description1")}
          </SectionDescription>
          <SectionDescription>
            {t("section10.subsection2.description2")}
          </SectionDescription>
          <SubPoints>{t("section10.subsection3.subTitle")}</SubPoints>
          <SectionDescription>
            {t("section10.subsection3.description1")}
          </SectionDescription>
          <SectionDescription>
            {t("section10.subsection3.description2")}
          </SectionDescription>
          <SubPoints>{t("section10.subsection4.subTitle")}</SubPoints>
          <SectionDescription>
            {t("section10.subsection4.description1")}
          </SectionDescription>
          <SectionDescription>
            {t("section10.subsection4.description2")}
          </SectionDescription>
          <SectionDescription>
            {t("section10.subsection4.description3")}
          </SectionDescription>
        </ContentSubWrapper>
      </ContentMainWrapper>
    </main>
  );
}
