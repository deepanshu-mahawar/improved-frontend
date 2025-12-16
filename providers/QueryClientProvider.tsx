"use client";

import { useHpQueryClient } from "@/api/query_client";
import { AuthCallback } from "@/app/app/auth/callback/AuthCallback";
import { AuthChecker } from "@/components/common/AuthChecker";
import { QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";

export function HPQueryClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = useHpQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthChecker>
        <AuthCallback />
        <SessionProvider>{children}</SessionProvider>
      </AuthChecker>
    </QueryClientProvider>
  );
}
