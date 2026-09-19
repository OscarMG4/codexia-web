import type { Metadata } from "next";
import { Outfit, Syne } from "next/font/google";
import { PageIntro } from "@/components/brand/PageIntro";
import { site } from "@/lib/site";
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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "CODEXIA | Convierte tus ideas en productos digitales",
    template: "%s | CODEXIA",
  },
  description: site.description,
  keywords: [
    "CODEXIA",
    "desarrollo web",
    "landing pages",
    "apps mobile",
    "automatizaciones",
    "asesoría tecnológica",
    "productos digitales",
    "Perú",
  ],
  authors: [{ name: "CODEXIA", url: site.url }],
  creator: "CODEXIA",
  applicationName: "CODEXIA",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: "CODEXIA | Convierte tus ideas en productos digitales",
    description: site.proposition,
  },
  twitter: {
    card: "summary_large_image",
    title: "CODEXIA | Convierte tus ideas en productos digitales",
    description: site.proposition,
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  slogan: site.tagline,
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: "+51981474747",
  areaServed: "PE",
  serviceType: [
    "Landing Pages",
    "Automatizaciones",
    "Apps Web y Mobile",
    "Asesorías Tecnológicas",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${outfit.variable} ${syne.variable}`}>
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
        {children}
      </body>
    </html>
  );
}
