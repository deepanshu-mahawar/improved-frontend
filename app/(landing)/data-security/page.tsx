import { DataSecurity } from "@/components/pages/data-security/DataSecurity";
import { Encryptions } from "@/components/pages/data-security/Encryptions";
import { PrivacyMatters } from "@/components/pages/data-security/PrivacyMatters";
import { Private } from "@/components/pages/data-security/Private";
import { SecurityLayers } from "@/components/pages/data-security/SecurityLayers";
import { SecurityMeasures } from "@/components/pages/data-security/SecurityMeasures";

export default function DataSecurityPage() {
  return (
    <main>
      <DataSecurity />
      <SecurityLayers />
      <Encryptions />
      <SecurityMeasures />
      <Private />
      <PrivacyMatters />
    </main>
  );
}
