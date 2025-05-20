import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { CountryProvider } from "@/context/CountryContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OTC Medicine Recommender",
  description: "Get personalized OTC medicine recommendations based on your symptoms",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LanguageProvider>
          <CountryProvider>
            {children}
          </CountryProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
