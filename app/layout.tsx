import React from "react"
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Scriptorcode — Modern Websites That Grow Your Business",
    template: "%s | Scriptorcode",
  },
  description:
    "Upgrade from outdated WordPress to high-performance Next.js websites. Fast, secure, beautifully designed, and built to convert visitors into customers.",
  keywords: [
    "web development",
    "Next.js",
    "WordPress migration",
    "website rebuild",
    "modern websites",
    "SEO",
    "London web agency",
  ],
  authors: [{ name: "Scriptorcode" }],
  creator: "Scriptorcode",
  metadataBase: new URL("https://scriptorcode.com"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://scriptorcode.com",
    siteName: "Scriptorcode",
    title: "Scriptorcode — Modern Websites That Grow Your Business",
    description:
      "Upgrade from outdated WordPress to high-performance Next.js websites.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scriptorcode — Modern Websites That Grow Your Business",
    description:
      "Upgrade from outdated WordPress to high-performance Next.js websites.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorantGaramond.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
