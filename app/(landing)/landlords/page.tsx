
import { EasyToUse } from "@/components/pages/landlords/EasyToUse";
import { LandlordChallenges } from "@/components/pages/landlords/LandlordChallenges";
import { OnboardingCenter } from "@/components/pages/landlords/OnboardingCenter";
import { SecureQuick } from "@/components/pages/landlords/SecureQuick";
import { ThisIsHow } from "@/components/pages/landlords/ThisIsHow";
import { Faqs } from "@/components/pages/tenants/Faqs";

export default function Landlords() {
  return (
    <main>
      <SecureQuick />
      <LandlordChallenges/>
      <EasyToUse/>
      <ThisIsHow/>
      <Faqs/>
      <OnboardingCenter/>
    </main>
  );
}
