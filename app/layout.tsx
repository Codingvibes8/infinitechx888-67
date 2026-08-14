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
    images: [
      {
        url: "/images/hero-dashboard.jpg",
        width: 1200,
        height: 630,
        alt: "Scriptorcode — Modern Websites That Grow Your Business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scriptorcode — Modern Websites That Grow Your Business",
    description:
      "Upgrade from outdated WordPress to high-performance Next.js websites.",
    images: ["/images/hero-dashboard.jpg"],
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

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Scriptorcode",
  url: "https://scriptorcode.com",
  logo: "https://scriptorcode.com/images/logo.jpg",
  description:
    "Modern web development studio specialising in fast, secure, high-converting Next.js websites.",
  email: "hello@scriptorcode.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB",
  },
  knowsAbout: [
    "Web Development",
    "Next.js",
    "WordPress Migration",
    "Custom Design",
    "SEO Optimisation",
    "CMS Integration",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "hello@scriptorcode.com",
    availableLanguage: ["English"],
  },
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Scriptorcode",
  url: "https://scriptorcode.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${cormorantGaramond.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
