import { CONTACT_INFO } from "@/components/Common/contact-links";
import {
  MAIL_BRAND,
  escapeHtml,
  renderGradientRule,
  renderLogo,
} from "./brand";

export type MailContent = {
  subject: string;
  html: string;
  text: string;
};

type RenderLayoutOptions = {
  /** Texto que se ve en la vista previa de la bandeja de entrada. */
  preheader: string;
  /** Cuerpo del correo, ya en HTML. */
  content: string;
};

/**
 * Envoltura común de los correos: cabecera con el logotipo, regla con el
 * degradado de la marca, cuerpo y pie con los datos del estudio.
 *
 * Todo el CSS va en línea porque los clientes de correo ignoran las hojas
 * de estilo externas y no admiten variables CSS.
 */
export function renderLayout({
  preheader,
  content,
}: RenderLayoutOptions): string {
  const studioLine = [
    "Estudio de arte y diseño · Caracas",
    CONTACT_INFO.email,
    CONTACT_INFO.phone,
  ]
    .map((value) => escapeHtml(value))
    .join(" · ");

  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <meta name="color-scheme" content="light" />
    <title>${escapeHtml(preheader)}</title>
  </head>
  <body style="margin:0;padding:0;background-color:${MAIL_BRAND.paper};font-family:${MAIL_BRAND.serif};color:${MAIL_BRAND.ink};-webkit-font-smoothing:antialiased;">
    <!-- Vista previa de la bandeja de entrada: se oculta al abrir el correo. -->
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;border-collapse:collapse;background-color:${MAIL_BRAND.paper};">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;border-collapse:collapse;background-color:${MAIL_BRAND.paperLight};border:1px solid rgba(42,31,26,0.12);">
            <tr>
              <td style="padding:28px 32px 22px;">
                ${renderLogo()}
              </td>
            </tr>
            <tr>
              <td style="padding:0;">${renderGradientRule()}</td>
            </tr>
            <tr>
              <td style="padding:30px 32px 32px;">
                ${content}
              </td>
            </tr>
          </table>

          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;border-collapse:collapse;">
            <tr>
              <td align="center" style="padding:20px 16px 0;font-family:${MAIL_BRAND.serif};font-size:12px;line-height:1.8;color:${MAIL_BRAND.taupe};">
                ${studioLine}<br />
                <a href="${escapeHtml(CONTACT_INFO.whatsappUrl)}" style="color:${MAIL_BRAND.taupe};text-decoration:none;">WhatsApp</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
