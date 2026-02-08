import React from "react"
import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Infinitechx — Modern Websites That Grow Your Business",
    template: "%s | Infinitechx",
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
  authors: [{ name: "Infinitechx" }],
  creator: "Infinitechx",
  metadataBase: new URL("https://infinitechx.com"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://infinitechx.com",
    siteName: "Infinitechx",
    title: "Infinitechx — Modern Websites That Grow Your Business",
    description:
      "Upgrade from outdated WordPress to high-performance Next.js websites.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Infinitechx — Modern Websites That Grow Your Business",
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
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
