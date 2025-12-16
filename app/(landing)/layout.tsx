import type { Metadata } from "next";
import "../globals.css";
import { StyledRegistry } from "@/style/styledRegistry";
import { IntlProvider } from "@/providers/IntlProvider";
import Header from "@/components/headers/Header";
import { Footer } from "@/components/footers/Footer";

export const metadata: Metadata = {
  title: "Housingpass Home v1.0",
  description: "Home",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StyledRegistry>
      <IntlProvider>
        <Header />
        {children}
        <Footer />
      </IntlProvider>
    </StyledRegistry>
  );
}
