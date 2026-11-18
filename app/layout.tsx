import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import {
  OG_IMAGE,
  OG_IMAGE_ALT,
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_TITLE,
  siteBaseUrl,
} from "@/app/seo";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
});

/**
 * Metadatos comunes a todo el sitio.
 *
 * Lo único que cambia por página son el título, la descripción y la URL
 * canónica (ver `app/seo.ts`). Los iconos no se declaran aquí: Next.js los
 * saca de los archivos de `app/` (icon.svg, icon.png, favicon.ico,
 * apple-icon.png) y los añade al `<head>` automáticamente. La imagen de
 * compartir sí se declara, en `app/seo.ts`, porque cada página define su
 * propio objeto `openGraph` y Next.js lo sustituiría entero.
 */
export const metadata: Metadata = {
  metadataBase: siteBaseUrl(),
  title: {
    default: SITE_TITLE,
    template: "%s | María M. Reyes",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: "María del Carmen Reyes Garrido" }],
  creator: "María del Carmen Reyes Garrido",
  publisher: "María del Carmen Reyes Garrido",
  category: "arte",
  keywords: SITE_KEYWORDS,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_VE",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: OG_IMAGE_ALT,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        alt: OG_IMAGE_ALT,
        width: 1200,
        height: 630,
      },
    ],
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
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
