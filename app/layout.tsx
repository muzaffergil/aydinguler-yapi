import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aydıngüler Yapı | Gaziantep İnşaat & Konut Projeleri",
    template: "%s | Aydıngüler Yapı Gaziantep",
  },
  description:
    "Gaziantep'in köklü inşaat firması Aydıngüler Yapı. Konut projeleri, mimari tasarım, danışmanlık ve gayrimenkul alım-satım hizmetleri. 20 yıllık deneyim, 50+ tamamlanan proje.",
  keywords: [
    "Gaziantep inşaat firması",
    "Gaziantep konut projeleri",
    "inşaat şirketi Gaziantep",
    "mimari tasarım Gaziantep",
    "gayrimenkul Gaziantep",
    "Aydıngüler Yapı",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://aydinguleryapi.com",
    siteName: "Aydıngüler Yapı",
    title: "Aydıngüler Yapı | Gaziantep İnşaat & Konut Projeleri",
    description:
      "Gaziantep'in köklü inşaat firması. Konut projeleri, mimari tasarım, danışmanlık ve alım-satım hizmetleri.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aydıngüler Yapı | Gaziantep İnşaat",
    description: "Gaziantep'in köklü inşaat firması. 20 yıllık deneyim, 50+ proje.",
  },
  alternates: { canonical: "https://aydinguleryapi.com" },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://aydinguleryapi.com",
  name: "Aydıngüler Yapı ve İnşaat",
  url: "https://aydinguleryapi.com",
  telephone: "+90-342-360-15-25",
  email: "info@aydinguleryapi.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gaziantep",
    addressCountry: "TR",
  },
  description:
    "Gaziantep'te konut ve ticari yapı inşaatı, mimari tasarım, danışmanlık ve gayrimenkul alım-satım hizmetleri.",
  foundingDate: "2004",
  areaServed: "Gaziantep",
  priceRange: "₺₺",
  sameAs: [],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
