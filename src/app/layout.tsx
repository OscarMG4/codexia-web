import type { Metadata, Viewport } from "next";
import { Outfit, Syne } from "next/font/google";
import { PageIntro } from "@/components/brand/PageIntro";
import {
  organizationSchema,
  webPageSchema,
  websiteSchema,
} from "@/lib/schema";
import { absoluteUrl, site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const ogImage = {
  url: absoluteUrl(site.ogImage),
  width: 1200,
  height: 630,
  alt: site.title,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [...site.keywords],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  applicationName: site.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#0b1224",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = [organizationSchema(), websiteSchema(), webPageSchema()];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={site.lang} className={`${outfit.variable} ${syne.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-snow focus:px-4 focus:py-2 focus:text-ink"
        >
          Saltar al contenido
        </a>
        <PageIntro />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "setTimeout(function(){var r=document.documentElement;if(!r.classList.contains('intro-done')){r.classList.remove('intro-active');r.classList.add('intro-done');}},2200);",
          }}
        />
        {children}
      </body>
    </html>
  );
}
