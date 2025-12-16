import { SignUp } from "@/components/sign-up/SignUp";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense>
      <SignUp />
    </Suspense>
  );
}
