"use client";

import { useHpQueryClient } from "@/api/query_client";
import { AuthCallback } from "@/app/app/auth/callback/AuthCallback";
import { AuthChecker } from "@/components/common/AuthChecker";
import { createTheme, ThemeProvider } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";

const theme = createTheme({
  typography: {
    fontFamily: "poppins",
  },
});

export function HPQueryClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = useHpQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AuthChecker>
          <AuthCallback />
          <SessionProvider>{children}</SessionProvider>
        </AuthChecker>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
