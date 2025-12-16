import "../globals.css";
import { Toaster } from "sonner";
import { Metadata } from "next";
import { IntlProvider } from "@/providers/IntlProvider";
import { StyledRegistry } from "@/style/styledRegistry";
import { SnackbarProvider } from "@/providers/SnackbarProvider";
import { HPQueryClientProvider } from "@/providers/QueryClientProvider";

export const metadata: Metadata = {
  title: "User Authentication v1.0",
  description: "Auth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StyledRegistry>
      <IntlProvider>
        <Toaster position="top-left" richColors />
        <SnackbarProvider>
          <HPQueryClientProvider>{children}</HPQueryClientProvider>
        </SnackbarProvider>
      </IntlProvider>
    </StyledRegistry>
  );
}
