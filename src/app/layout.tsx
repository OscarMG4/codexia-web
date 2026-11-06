import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { absoluteUrl, isIndexable, location, site } from "@/lib/site";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
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
  // El canonical lo define cada página (home y servicios)
  // Íconos: los generan las convenciones app/icon.png y app/apple-icon.tsx
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
    index: isIndexable(),
    follow: isIndexable(),
    googleBot: {
      index: isIndexable(),
      follow: isIndexable(),
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  // Señales geográficas para búsquedas locales (Chiclayo, Lambayeque)
  other: {
    "geo.region": location.regionCode,
    "geo.placename": `${location.city}, ${location.region}`,
    "geo.position": `${location.geo.latitude};${location.geo.longitude}`,
    ICBM: `${location.geo.latitude}, ${location.geo.longitude}`,
  },
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const viewport: Viewport = {
  // Modo claro por defecto: la barra del navegador toma el azul del hero
  themeColor: "#2f6bf3",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = [organizationSchema(), websiteSchema()];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={site.lang}
      className={`${inter.variable} ${jakarta.variable}`}
      // data-theme lo fija themeInitScript antes de hidratar
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased">
        <noscript>
          <style>{".reveal{opacity:1!important;transform:none!important}"}</style>
        </noscript>
        <JsonLd schema={jsonLd} />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-surface focus:px-4 focus:py-2 focus:text-fg"
        >
          Saltar al contenido
        </a>
        {children}
        {gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("config","${gaId}");`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
