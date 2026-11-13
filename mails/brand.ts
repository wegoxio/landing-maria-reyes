/**
 * Tokens de la marca para los correos.
 *
 * Son los mismos valores que `app/globals.css`, llevados a su forma
 * hexadecimal para poder usarlos en el CSS en línea: los clientes de correo
 * no admiten variables CSS, ni hojas de estilo externas, ni clases.
 */
export const MAIL_BRAND = {
  paper: "#f5ede3",
  paperLight: "#faf6f1",
  paperDeep: "#ebe0d4",
  ink: "#2a1f1a",
  taupe: "#8c8073",
  rust: "#c4694a",
  rustSoft: "#d4866a",
  /**
   * Cormorant Garamond no está instalada en el equipo de quien lee el
   * correo, así que se usa Georgia como sustituto: es la misma serif que
   * el sitio usa de reserva (`font-family: var(--font-cormorant), Georgia, serif`).
   */
  serif: "Georgia, 'Times New Roman', Times, serif",
} as const;

/**
 * Las diez paradas del degradado de marca (`--brand-gradient`).
 *
 * Se pintan como celdas de una tabla y no como `linear-gradient` porque
 * Outlook no dibuja degradados en el fondo de una celda.
 */
export const MAIL_GRADIENT_STOPS = [
  "#c4694a",
  "#d4866a",
  "#c47a7a",
  "#c8ac88",
  "#dfc9a8",
  "#a8bfcf",
  "#7a8fa0",
  "#d9a9a0",
  "#e8b49a",
  "#e8c8be",
] as const;

/**
 * Regla con el degradado de marca.
 *
 * Va dentro de una tabla: una celda por parada, todas con el mismo ancho.
 */
export function renderGradientRule(): string {
  const cells = MAIL_GRADIENT_STOPS.map(
    (color) =>
      `<td style="height:4px;line-height:4px;font-size:0;background-color:${color};">&nbsp;</td>`,
  ).join("");

  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;table-layout:fixed;"><tr>${cells}</tr></table>`;
}

/**
 * Logotipo del estudio.
 *
 * El logotipo del sitio es tipográfico —«María del Carmen / Reyes Garrido»
 * en Cormorant Garamond con tracking—, así que aquí se reproduce con la
 * misma composición y los mismos colores. Al no poder incrustar la fuente
 * web, se usa Georgia con un tracking parecido.
 */
export function renderLogo(): string {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;">
  <tr>
    <td style="padding:0;vertical-align:middle;">
      <span style="font-family:${MAIL_BRAND.serif};font-size:15px;line-height:1.5;letter-spacing:4px;text-transform:uppercase;color:${MAIL_BRAND.ink};">
        María del Carmen<br />Reyes Garrido
      </span>
    </td>
    <td style="padding:0;vertical-align:middle;text-align:right;">
      <span style="font-family:${MAIL_BRAND.serif};font-size:12px;line-height:1.5;font-style:italic;color:${MAIL_BRAND.rust};">
        Escultura · Fotografía
      </span>
    </td>
  </tr>
</table>`;
}

/**
 * Escapa un texto para poder insertarlo en el HTML del correo.
 * El texto que llega del visitante nunca se escribe sin pasar por aquí.
 */
export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Convierte los saltos de línea del visitante en `<br />`. */
export function escapeMultiline(value: string): string {
  return escapeHtml(value).replace(/\r?\n/g, "<br />");
}
