"use client";

import { useTranslations } from "next-intl";
import {
  BulletPoint,
  ContentMainWrapper,
  ContentSubWrapper,
  PageHeader,
  SectionDescription,
  SectionHeading,
  SectionSubHeading,
} from "../styled";

export default function TermsAndConditionsPage() {
  const t = useTranslations("terms&conditions");
  return (
    <>
      <PageHeader>{t("header")}</PageHeader>

      <ContentMainWrapper>
        <ContentSubWrapper>
          <SectionHeading>{t("title")}</SectionHeading>
          <SectionDescription>{t("introduction")}</SectionDescription>
          <br />
        </ContentSubWrapper>
        <ContentSubWrapper>
          {/* point 1 */}
          <SectionHeading>{t("section1.title")}</SectionHeading>
          <SectionDescription>{t("section1.description1")}</SectionDescription>
          <SectionDescription>{t("section1.description2")}</SectionDescription>
          <SectionDescription>{t("section1.description3")}</SectionDescription>
          <SectionDescription>{t("section1.description4")}</SectionDescription>
        </ContentSubWrapper>
        <ContentSubWrapper>
          {/* point 2 */}
          <SectionHeading>{t("section2.title")}</SectionHeading>
          <SectionDescription>{t("section2.description1")}</SectionDescription>
          <SectionDescription>{t("section2.description2")}</SectionDescription>
          <SectionDescription>{t("section2.description3")}</SectionDescription>
          <SectionDescription>{t("section2.description4")}</SectionDescription>
          <SectionDescription>{t("section2.description5")}</SectionDescription>
          <SectionDescription>{t("section2.description6")}</SectionDescription>
          <SectionDescription>{t("section2.description7")}</SectionDescription>
          <SectionDescription>{t("section2.description8")}</SectionDescription>
          <SectionDescription>{t("section2.description9")}</SectionDescription>
          <SectionDescription>{t("section2.description10")}</SectionDescription>
          <SectionDescription>{t("section2.description11")}</SectionDescription>
          <SectionDescription>{t("section2.description12")}</SectionDescription>
        </ContentSubWrapper>
        <ContentSubWrapper>
          {/* point 3 */}
          <SectionHeading>{t("section3.title")}</SectionHeading>
          {/* sub point 1 */}
          <SectionSubHeading>
            {t("section3.subsection1.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section3.subsection1.description")}
          </SectionDescription>
          <BulletPoint>{t("section3.subsection1.bulletPoint")}</BulletPoint>
          {/* sub point 2 */}
          <SectionSubHeading>
            {t("section3.subsection2.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section3.subsection2.description")}
          </SectionDescription>
          <BulletPoint>{t("section3.subsection2.bulletPoint1")}</BulletPoint>
          <BulletPoint>{t("section3.subsection2.bulletPoint2")}</BulletPoint>
          <BulletPoint>{t("section3.subsection2.bulletPoint3")}</BulletPoint>
          {/* sub point 3 */}
          <SectionSubHeading>
            {t("section3.subsection3.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section3.subsection3.description1")}
          </SectionDescription>
          <SectionDescription>
            {t("section3.subsection3.description2")}
          </SectionDescription>
          <BulletPoint>{t("section3.subsection3.bulletPoint1")}</BulletPoint>
          <BulletPoint>{t("section3.subsection3.bulletPoint2")}</BulletPoint>
          <BulletPoint>{t("section3.subsection3.bulletPoint3")}</BulletPoint>
          {/* sub point 4 */}
          <SectionSubHeading>
            {t("section3.subsection4.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section3.subsection4.description1")}
            <br />
            {t("section3.subsection4.description2")}
            <br />
            {t("section3.subsection4.description3")}
            <br />
            {t("section3.subsection4.description4")}
            <br />
          </SectionDescription>
          <SectionDescription>
            {t("section3.subsection4.description5")}
          </SectionDescription>
          {/* sub point 5 */}
          <SectionSubHeading>
            {t("section3.subsection5.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section3.subsection5.description1")}
          </SectionDescription>
          <SectionDescription>
            {t("section3.subsection5.description2")}
          </SectionDescription>
          <BulletPoint>{t("section3.subsection5.bulletPoint1")}</BulletPoint>
          <BulletPoint>{t("section3.subsection5.bulletPoint2")}</BulletPoint>
          {/* sub point 6 */}
          <SectionSubHeading>
            {t("section3.subsection6.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section3.subsection6.description1")}
          </SectionDescription>
          <SectionDescription>
            {t("section3.subsection6.description2")}
          </SectionDescription>
          <SectionDescription>
            {t("section3.subsection6.description3")} <br />
            {t("section3.subsection6.description4")} <br />
            {t("section3.subsection6.description5")} <br />
            {t("section3.subsection6.description6")} <br />
            {t("section3.subsection6.description7")} <br />
            {t("section3.subsection6.description8")}
          </SectionDescription>
        </ContentSubWrapper>
        {/* point 4 */}
        <ContentSubWrapper>
          <SectionHeading>{t("section4.title")}</SectionHeading>
          <SectionDescription>{t("section4.description1")}</SectionDescription>
          <SectionDescription>{t("section4.description2")}</SectionDescription>
          <SectionDescription>{t("section4.description3")}</SectionDescription>
          <SectionDescription>{t("section4.description4")}</SectionDescription>
          <BulletPoint>{t("section4.bulletPoint1")}</BulletPoint>
          <BulletPoint>{t("section4.bulletPoint2")}</BulletPoint>
          <BulletPoint>{t("section4.bulletPoint3")}</BulletPoint>
          <BulletPoint>{t("section4.bulletPoint4")}</BulletPoint>
          <SectionDescription>{t("section4.description5")}</SectionDescription>
          <SectionDescription>{t("section4.description6")}</SectionDescription>
          <SectionDescription>{t("section4.description7")}</SectionDescription>
          <SectionDescription>{t("section4.description8")}</SectionDescription>
          <SectionDescription>{t("section4.description9")}</SectionDescription>
        </ContentSubWrapper>
        {/* point 5 */}
        <ContentSubWrapper>
          <SectionHeading>{t("section5.title")}</SectionHeading>
          {/* sub point 1 */}
          <SectionSubHeading>
            {t("section5.subsection1.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section5.subsection1.description")}
          </SectionDescription>
          {/* sub point 2 */}
          <SectionSubHeading>
            {t("section5.subsection2.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section5.subsection2.description")}
          </SectionDescription>
          {/* sub point 3 */}
          <SectionSubHeading>
            {t("section5.subsection3.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section5.subsection3.description")}
          </SectionDescription>
          {/* sub point 4 */}
          <SectionSubHeading>
            {t("section5.subsection4.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section5.subsection4.description")}
          </SectionDescription>
          <BulletPoint>{t("section5.subsection4.bulletPoint1")}</BulletPoint>
          <BulletPoint>{t("section5.subsection4.bulletPoint2")}</BulletPoint>
          <BulletPoint>{t("section5.subsection4.bulletPoint3")}</BulletPoint>
          {/* sub point 5 */}
          <SectionSubHeading>
            {t("section5.subsection5.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section5.subsection5.description")}
          </SectionDescription>
          <BulletPoint>{t("section5.subsection5.bulletPoint1")}</BulletPoint>
          <BulletPoint>{t("section5.subsection5.bulletPoint2")}</BulletPoint>
          <BulletPoint>{t("section5.subsection5.bulletPoint3")}</BulletPoint>

          {/* sub point 6 */}
          <SectionSubHeading>
            {t("section5.subsection6.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section5.subsection6.description1")}
            <br />
            {t("section5.subsection6.description2")}
            <br />
            {t("section5.subsection6.description3")}
          </SectionDescription>
          {/* sub point 7 */}
          <SectionSubHeading>
            {t("section5.subsection7.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section5.subsection7.description")}
          </SectionDescription>
          {/* sub point 8 */}
          <SectionSubHeading>
            {t("section5.subsection8.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section5.subsection8.description")}
          </SectionDescription>
          {/* sub point 9 */}
          <SectionSubHeading>
            {t("section5.subsection9.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section5.subsection9.description")}
          </SectionDescription>
        </ContentSubWrapper>
        {/* point 6 */}
        <ContentSubWrapper>
          <SectionHeading>{t("section6.title")}</SectionHeading>
          {/* sub point 1 */}
          <SectionSubHeading>
            {t("section6.subsection1.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section6.subsection1.description")}
          </SectionDescription>
          {/* sub point 2 */}
          <SectionSubHeading>
            {t("section6.subsection2.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section6.subsection2.description")}
          </SectionDescription>
          {/* sub point 3 */}
          <SectionSubHeading>
            {t("section6.subsection3.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section6.subsection3.description")}
          </SectionDescription>
          {/* sub point 4 */}
          <SectionSubHeading>
            {t("section6.subsection4.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section6.subsection4.description")}
          </SectionDescription>
          <BulletPoint>{t("section6.subsection4.bulletPoint1")}</BulletPoint>
          <BulletPoint>{t("section6.subsection4.bulletPoint2")}</BulletPoint>
          <BulletPoint>{t("section6.subsection4.bulletPoint3")}</BulletPoint>
          <SectionDescription>
            {t("section6.subsection4.description2")}
          </SectionDescription>

          {/* sub point 5 */}
          <SectionSubHeading>
            {t("section6.subsection5.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section6.subsection5.description")}
          </SectionDescription>

          {/* sub point 6 */}
          <SectionSubHeading>
            {t("section6.subsection6.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section6.subsection6.description")}
          </SectionDescription>

          {/* sub point 7 */}
          <SectionSubHeading>
            {t("section6.subsection7.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section6.subsection7.description")}
          </SectionDescription>

          {/* sub point 8 */}
          <SectionSubHeading>
            {t("section6.subsection8.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section6.subsection8.description")}
          </SectionDescription>
        </ContentSubWrapper>
        {/* point 7 */}
        <ContentSubWrapper>
          <SectionHeading>{t("section7.title")}</SectionHeading>
          <SectionDescription>{t("section7.description1")}</SectionDescription>
          <SectionDescription>{t("section7.description2")}</SectionDescription>
          <SectionDescription>{t("section7.description3")}</SectionDescription>
        </ContentSubWrapper>

        {/* point 8 */}
        <ContentSubWrapper>
          <SectionHeading>{t("section8.title")}</SectionHeading>
          <SectionDescription>{t("section8.description1")}</SectionDescription>
          <SectionDescription>{t("section8.description2")}</SectionDescription>
        </ContentSubWrapper>

        {/* point 9 */}
        <ContentSubWrapper>
          <SectionHeading>{t("section9.title")}</SectionHeading>
          {/* sub point 1 */}
          <SectionSubHeading>
            {t("section9.subsection1.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section9.subsection1.description")}
          </SectionDescription>

          {/* sub point 2 */}
          <SectionSubHeading>
            {t("section9.subsection2.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section9.subsection2.description")}
          </SectionDescription>
          <BulletPoint>{t("section9.subsection2.bulletPoint1")}</BulletPoint>
          <BulletPoint>{t("section9.subsection2.bulletPoint2")}</BulletPoint>
          <BulletPoint>{t("section9.subsection2.bulletPoint3")}</BulletPoint>
          <BulletPoint>{t("section9.subsection2.bulletPoint4")}</BulletPoint>
          {/* sub point 3 */}
          <SectionSubHeading>
            {t("section9.subsection3.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section9.subsection3.description")}
          </SectionDescription>
          {/* sub point 4 */}
          <SectionSubHeading>
            {t("section9.subsection4.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section9.subsection4.description")}
          </SectionDescription>
          {/* sub point 5 */}
          <SectionSubHeading>
            {t("section9.subsection5.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section9.subsection5.description")}
          </SectionDescription>
        </ContentSubWrapper>

        {/* point 10 */}
        <ContentSubWrapper>
          <SectionHeading>{t("section10.title")}</SectionHeading>
          {/* sub point 1 */}
          <SectionSubHeading>
            {t("section10.subsection1.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section10.subsection1.description")}
          </SectionDescription>

          {/* sub point 2 */}
          <SectionSubHeading>
            {t("section10.subsection2.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section10.subsection2.description")}
          </SectionDescription>

          {/* sub point 3 */}
          <SectionSubHeading>
            {t("section10.subsection3.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section10.subsection3.description")}
          </SectionDescription>

          {/* sub point 4 */}
          <SectionSubHeading>
            {t("section10.subsection4.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section10.subsection4.description")}
          </SectionDescription>

          {/* sub point 5 */}
          <SectionSubHeading>
            {t("section10.subsection5.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section10.subsection5.description")}
          </SectionDescription>

          {/* sub point 6 */}
          <SectionSubHeading>
            {t("section10.subsection6.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section10.subsection6.description")}
          </SectionDescription>

          {/* sub point 7 */}
          <SectionSubHeading>
            {t("section10.subsection7.subTitle")}
          </SectionSubHeading>
          <SectionDescription>
            {t("section10.subsection7.description")}
          </SectionDescription>
        </ContentSubWrapper>

        {/* point 11 */}
        <ContentSubWrapper>
          <SectionHeading>{t("section11.title")}</SectionHeading>

          <SectionDescription>{t("section11.description1")}</SectionDescription>

          <SectionDescription>{t("section11.description2")}</SectionDescription>

          <SectionDescription>{t("section11.description3")}</SectionDescription>

          <SectionDescription>{t("section11.description4")}</SectionDescription>
        </ContentSubWrapper>

        {/* point 12 */}
        <ContentSubWrapper>
          <SectionHeading>{t("section12.title")}</SectionHeading>

          <SectionDescription>{t("section12.description1")}</SectionDescription>

          <SectionDescription>{t("section12.description2")}</SectionDescription>

          <SectionDescription>{t("section12.description3")}</SectionDescription>
        </ContentSubWrapper>

        {/* point 13 */}
        <ContentSubWrapper>
          <SectionHeading>{t("section13.title")}</SectionHeading>

          <SectionDescription>{t("section13.description1")}</SectionDescription>

          <SectionDescription>{t("section13.description2")}</SectionDescription>
        </ContentSubWrapper>
      </ContentMainWrapper>
    </>
  );
}
