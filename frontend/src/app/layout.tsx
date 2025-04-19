import type { Metadata } from "next";
import { Crimson_Pro } from "next/font/google";
import "./globals.css";
import LoadingWrapper from "@/components/loader";

const crimsonPro = Crimson_Pro({
  variable: "--font-crimsonpro",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ['italic']
});

export const metadata: Metadata = {
  title: "CTRL X CAFE",
  description: "The breakfast that takes you to cloud 9",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${crimsonPro.variable} antialiased font-crimsonpro italic`}
      >
        <LoadingWrapper>
        {children}
        </LoadingWrapper>
      </body>
    </html>
  );
}
