import { BecomeTenant } from "@/components/pages/tenants/BecomeTenant";
import { CertificatePreview } from "@/components/pages/tenants/CertificatePreview";
import { Faqs } from "@/components/pages/tenants/Faqs";
import { GreatOffer } from "@/components/pages/tenants/GreatOffers";
import { HowToGetStarted } from "@/components/pages/tenants/HowToGetStarted";
import { HpInNutshell } from "@/components/pages/tenants/HpInNutshell";
import { PrivateData } from "@/components/pages/tenants/PrivateData";
import { Testimonials } from "@/components/pages/tenants/Testimonials";
import { ThisIsHow } from "@/components/pages/tenants/ThisIsHow";

export default function Tenants() {
  return (
    <main>
      <BecomeTenant />
      <HowToGetStarted />
      <ThisIsHow />
      <Testimonials />
      <PrivateData />
      <GreatOffer />
      <Faqs />
      <HpInNutshell />
      <CertificatePreview />
    </main>
  );
}
