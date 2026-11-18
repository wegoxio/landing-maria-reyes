import type { Metadata } from "next";

/**
 * Datos del estudio que comparten el layout raíz y las páginas.
 */

/**
 * URL pública del sitio.
 *
 * Es la base de las URL absolutas que necesitan los buscadores y las redes
 * (canónica, og:image, manifest). Sale de `NEXT_PUBLIC_SITE_URL` y, mientras
 * no se defina, cae a localhost para desarrollo.
 *
 * En producción hay que exportar esa variable: si no, la URL canónica
 * apuntaría a `localhost` y las tarjetas al compartir no se verían.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
).replace(/\/+$/, "");

export const SITE_NAME = "María M. Reyes";

export const SITE_TITLE = "María M. Reyes — Estudio de arte y diseño";

export const SITE_DESCRIPTION =
  "Estudio de arte y diseño en Caracas: escultura, fotografía, artesanía textil y diseño de objetos de María del Carmen Reyes Garrido.";

export const SITE_KEYWORDS = [
  "escultura",
  "fotografía",
  "arte",
  "estudio de arte",
  "arte contemporáneo",
  "diseño de objetos",
  "artesanía textil",
  "Caracas",
  "Venezuela",
  "María del Carmen Reyes",
];

/**
 * Imagen que se ve al compartir el enlace (1200x630).
 *
 * Vive en `public/brand/` y no como archivo de `app/` a propósito: si una
 * página declara su propio objeto `openGraph`, Next.js lo sustituye entero
 * y se pierde la imagen que aporta el archivo `app/opengraph-image.png`.
 * Declarando la imagen aquí, todas las rutas la llevan.
 */
export const OG_IMAGE = "/brand/og-image.png";

export const OG_IMAGE_ALT =
  "María del Carmen Reyes Garrido — Estudio de arte y diseño en Caracas";

/** Convierte el valor de la variable de entorno en una base válida. */
export function siteBaseUrl(): URL {
  try {
    return new URL(SITE_URL);
  } catch {
    return new URL("http://localhost:3000");
  }
}

type PageMetadataInput = {
  /** Ruta del sitio con barra inicial, por ejemplo "/about". */
  path: string;
  /** Título de la pestaña, sin el nombre del estudio. */
  title: string;
  /** Metadescripción de la página. */
  description: string;
  /**
   * La portada muestra el título completo, sin la plantilla
   * "%s | María M. Reyes" que se le añade a las demás páginas.
   */
  absolute?: boolean;
};

/**
 * Metadatos de una página: título, descripción, URL canónica y las etiquetas
 * de Open Graph y Twitter.
 *
 * Los iconos no se declaran aquí: salen de los archivos de `app/` (icon.svg,
 * icon.png, favicon.ico, apple-icon.png) y Next.js los añade al `<head>` por
 * su cuenta. La imagen de compartir sí, y por eso vive en `public/brand/`
 * en lugar de ser un archivo de `app/`: ver la nota de `OG_IMAGE`.
 */
export function pageMetadata({
  path,
  title,
  description,
  absolute = false,
}: PageMetadataInput): Metadata {
  const fullTitle = absolute ? title : `${title} | ${SITE_NAME}`;

  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "es_VE",
      siteName: SITE_NAME,
      url: path,
      title: fullTitle,
      description,
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
      title: fullTitle,
      description,
      images: [
        {
          url: OG_IMAGE,
          alt: OG_IMAGE_ALT,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
