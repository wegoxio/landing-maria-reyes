import { MAIL_BRAND, escapeHtml, escapeMultiline } from "./brand";
import { renderLayout, type MailContent } from "./layout";
import { MAIL_STYLES } from "./styles";

export type ContactMessage = {
  name: string;
  email: string;
  reason: string;
};

/**
 * Acuse de recibo: el correo que recibe quien rellenó el formulario.
 *
 * Confirma que el mensaje llegó y reproduce lo que envió, para que quien
 * escribió vea exactamente lo que el estudio tiene delante.
 */
export function contactReceivedTemplate({
  name,
  reason,
}: ContactMessage): MailContent {
  const preheader = `Gracias por escribirnos, ${name}. Tu solicitud fue recibida.`;

  const content = `
    <p style="${MAIL_STYLES.eyebrow}">Solicitud recibida</p>
    <h1 style="${MAIL_STYLES.heading}">Gracias por escribirnos</h1>

    <p style="${MAIL_STYLES.paragraph}">
      Hola ${escapeHtml(name)}, tu solicitud fue recibida. Ya está en nuestra
      bandeja y te responderé en cuanto pueda.
    </p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
      <tr>
        <td style="${MAIL_STYLES.card}">
          <p style="${MAIL_STYLES.label}">Lo que nos escribiste</p>
          <p style="${MAIL_STYLES.value}">${escapeMultiline(reason)}</p>
        </td>
      </tr>
    </table>

    <p style="${MAIL_STYLES.paragraph}">
      Si necesitas añadir algo, simplemente responde a este correo.
    </p>
  `;

  const text = [
    `Hola ${name},`,
    "",
    "Tu solicitud fue recibida. Ya está en nuestra bandeja y te responderé en cuanto pueda.",
    "",
    "Lo que nos escribiste:",
    "",
    reason,
    "",
    "Si necesitas añadir algo, simplemente responde a este correo.",
    "",
    "María del Carmen Reyes Garrido",
    "Estudio de arte y diseño · Caracas",
  ].join("\n");

  return {
    subject: "Recibimos tu solicitud — Estudio María Reyes",
    html: renderLayout({ preheader, content }),
    text,
  };
}

/**
 * Notificación interna: el correo que recibe el estudio con los datos del
 * formulario. Lleva un botón para responder directamente a quien escribió.
 */
export function studioNotificationTemplate({
  name,
  email,
  reason,
}: ContactMessage): MailContent {
  const preheader = `Nueva solicitud de ${name} (${email}).`;

  const replyLink = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(
    `Re: Tu solicitud — Estudio María Reyes`,
  )}`;

  const content = `
    <p style="${MAIL_STYLES.eyebrow}">Nuevo mensaje de contacto</p>
    <h1 style="${MAIL_STYLES.heading}">Solicitud de ${escapeHtml(name)}</h1>

    <p style="${MAIL_STYLES.paragraph}">
      Alguien escribió desde el formulario de contacto de la web.
    </p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
      <tr>
        <td style="${MAIL_STYLES.card}">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:0 0 16px;">
                <p style="${MAIL_STYLES.label}">Nombre</p>
                <p style="${MAIL_STYLES.value}">${escapeHtml(name)}</p>
              </td>
            </tr>
            <tr>
              <td style="padding:0 0 16px;">
                <p style="${MAIL_STYLES.label}">Correo</p>
                <p style="${MAIL_STYLES.value}">
                  <a href="mailto:${escapeHtml(email)}" style="color:${MAIL_BRAND.rust};text-decoration:none;">${escapeHtml(email)}</a>
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:0;">
                <p style="${MAIL_STYLES.label}">Razón</p>
                <p style="${MAIL_STYLES.value}">${escapeMultiline(reason)}</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:26px;">
      <tr>
        <td>
          <a href="${replyLink}" style="${MAIL_STYLES.button}">Responder a ${escapeHtml(name)}</a>
        </td>
      </tr>
    </table>
  `;

  const text = [
    "Nuevo mensaje de contacto",
    "",
    `Nombre: ${name}`,
    `Correo: ${email}`,
    "",
    "Razón:",
    reason,
    "",
    `Responder a ${email}`,
  ].join("\n");

  return {
    subject: `Nuevo mensaje de contacto — ${name}`,
    html: renderLayout({ preheader, content }),
    text,
  };
}
