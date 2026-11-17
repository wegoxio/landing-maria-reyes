import type { ReactNode } from "react";
import { MaskedLines } from "@/components/Animations/masked-lines";

/**
 * Roles de texto de la web.
 *
 * En lugar de escribir `<p className="text-[14px] ...">` en cada sección,
 * todo el texto pasa por uno de estos componentes. Cada rol tiene un tamaño
 * fijo que sale de la escala de `app/globals.css`, de modo que:
 *
 * - todos los títulos de sección miden lo mismo,
 * - todos los cuerpos de texto miden lo mismo,
 * - cambiar el estilo de "descripción" en un solo sitio cambia toda la web.
 *
 * Cada componente conserva la semántica: un `SectionTitle` es un `h2`, un
 * `CardTitle` es un `h3` y una descripción es un `p`. El elemento se puede
 * ajustar con la prop `as` cuando el contexto lo exige.
 */

/** Colores disponibles para el texto. */
export type TextTone =
  | "ink"
  | "rust"
  | "taupe"
  | "paper"
  | "muted"
  /** Hereda el color del contenedor. */
  | "current";

const TONE_CLASS: Record<TextTone, string> = {
  ink: "text-ink",
  rust: "text-rust",
  taupe: "text-taupe",
  paper: "text-paper",
  muted: "text-muted-brown",
  current: "",
};

/**
 * Etiqueta corta en versalitas: antetítulos, categorías, etiquetas de campo.
 */
export function Eyebrow({
  children,
  as = "p",
  tone = "rust",
  className = "",
}: {
  children: ReactNode;
  as?: "p" | "span" | "div" | "label";
  tone?: TextTone;
  className?: string;
}) {
  const Tag = as;

  return (
    <Tag
      className={`font-label text-label tracking-[0.24em] uppercase ${TONE_CLASS[tone]} ${className}`}
    >
      {children}
    </Tag>
  );
}

/**
 * Título principal de portada (`h1`). Es el único texto que puede llevar el
 * tamaño `display`; el resto de títulos usan `title`.
 */
export function DisplayTitle({
  lines,
  tone = "ink",
  mode = "load",
  delayMs = 80,
  staggerMs = 110,
  className = "",
}: {
  lines: ReactNode[];
  tone?: TextTone;
  mode?: "load" | "scroll";
  delayMs?: number;
  staggerMs?: number;
  className?: string;
}) {
  return (
    <MaskedLines
      as="h1"
      lines={lines}
      mode={mode}
      delayMs={delayMs}
      staggerMs={staggerMs}
      className={`font-display text-display leading-[1.02] font-light ${TONE_CLASS[tone]} ${className}`}
    />
  );
}

/**
 * Título de sección (`h2`). Todas las secciones de la web lo usan, así que
 * todas miden exactamente lo mismo.
 */
export function SectionTitle({
  lines,
  tone = "ink",
  mode = "scroll",
  delayMs = 60,
  staggerMs = 100,
  className = "",
}: {
  lines: ReactNode[];
  tone?: TextTone;
  mode?: "load" | "scroll";
  delayMs?: number;
  staggerMs?: number;
  className?: string;
}) {
  return (
    <MaskedLines
      as="h2"
      lines={lines}
      mode={mode}
      delayMs={delayMs}
      staggerMs={staggerMs}
      className={`font-display text-title leading-[1.12] font-light ${TONE_CLASS[tone]} ${className}`}
    />
  );
}

/**
 * Subtítulo (`h3`): encabezado de un bloque dentro de una sección.
 */
export function Subtitle({
  children,
  as = "h3",
  tone = "ink",
  className = "",
}: {
  children: ReactNode;
  as?: "h3" | "h4" | "p";
  tone?: TextTone;
  className?: string;
}) {
  const Tag = as;

  return (
    <Tag
      className={`font-display text-subtitle leading-[1.15] font-light ${TONE_CLASS[tone]} ${className}`}
    >
      {children}
    </Tag>
  );
}

/**
 * Título de pieza o de tarjeta (`h3`).
 */
export function CardTitle({
  children,
  as = "h3",
  tone = "ink",
  className = "",
}: {
  children: ReactNode;
  as?: "h3" | "h4" | "p" | "span";
  tone?: TextTone;
  className?: string;
}) {
  const Tag = as;

  return (
    <Tag
      className={`font-display text-card leading-[1.2] font-light ${TONE_CLASS[tone]} ${className}`}
    >
      {children}
    </Tag>
  );
}

/**
 * Entradilla: el párrafo que abre una sección, un poco mayor que el cuerpo.
 */
export function LeadText({
  children,
  as = "p",
  tone = "taupe",
  className = "",
}: {
  children: ReactNode;
  as?: "p" | "div" | "span";
  tone?: TextTone;
  className?: string;
}) {
  const Tag = as;

  return (
    <Tag
      className={`text-lead leading-[1.8] ${TONE_CLASS[tone]} ${className}`}
    >
      {children}
    </Tag>
  );
}

/**
 * Descripción: el texto largo que explica una pieza, una obra o una sección.
 */
export function BodyText({
  children,
  as = "p",
  tone = "taupe",
  className = "",
}: {
  children: ReactNode;
  as?: "p" | "div" | "span";
  tone?: TextTone;
  className?: string;
}) {
  const Tag = as;

  return (
    <Tag
      className={`text-body leading-[1.85] ${TONE_CLASS[tone]} ${className}`}
    >
      {children}
    </Tag>
  );
}

/**
 * Texto auxiliar: pies de foto, años, datos sueltos.
 */
export function MetaText({
  children,
  as = "span",
  tone = "taupe",
  className = "",
  ...rest
}: {
  children: ReactNode;
  as?: "span" | "p" | "div";
  tone?: TextTone;
  className?: string;
} & React.HTMLAttributes<HTMLElement>) {
  const Tag = as;

  return (
    <Tag
      className={`text-meta leading-[1.7] ${TONE_CLASS[tone]} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * Etiqueta de botón: versalitas con el mismo cuerpo que el resto de
 * etiquetas, para que se lea desde lejos.
 */
export const BUTTON_LABEL_CLASS =
  "font-label text-label tracking-[0.2em] uppercase";

/**
 * Etiqueta de un campo de formulario. Se exporta como clase porque el
 * elemento necesita conservar su `htmlFor`.
 */
export const FIELD_LABEL_CLASS =
  "font-label text-label tracking-[0.24em] uppercase text-rust";

/**
 * Enlace de navegación: un punto mayor que la etiqueta, porque es el
 * elemento que más se usa.
 */
export const NAV_LINK_CLASS = "font-nav text-label tracking-[0.18em] uppercase";
