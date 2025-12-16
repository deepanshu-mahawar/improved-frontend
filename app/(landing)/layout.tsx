import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import { StyledRegistry } from "@/style/styledRegistry";
import { IntlProvider } from "@/translation/IntlProvider";
import Header from "@/components/headers/Header";
import { Footer } from "@/components/footers/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

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
