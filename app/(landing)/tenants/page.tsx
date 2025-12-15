import { BecomeTenant } from "@/components/pages/tenants/BecomeTenant";
import { HowToGetStarted } from "@/components/pages/tenants/HowToGetStarted";
import { ThisIsHow } from "@/components/pages/tenants/ThisIsHow";

export default function Tenants() {
  return (
    <main>
      <BecomeTenant />
      <HowToGetStarted />
      <ThisIsHow />
    </main>
  );
}
