import "../globals.css";
import { Toaster } from "sonner";
import { Metadata } from "next";
import { IntlProvider } from "@/providers/IntlProvider";
import { StyledRegistry } from "@/style/styledRegistry";
import { SnackbarProvider } from "@/providers/SnackbarProvider";
import { HPQueryClientProvider } from "@/providers/QueryClientProvider";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

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
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <StyledRegistry>
          <IntlProvider>
            <Toaster position="top-left" richColors />
            <SnackbarProvider>
              <HPQueryClientProvider>{children}</HPQueryClientProvider>
            </SnackbarProvider>
          </IntlProvider>
        </StyledRegistry>
      </body>
    </html>
  );
}
