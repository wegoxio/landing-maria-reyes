/**
 * Plantillas de correo del estudio.
 *
 * Cada plantilla devuelve el contenido listo para enviar: asunto, versión
 * HTML y versión en texto plano. Las usa la Server Action de contacto
 * (`app/contacto/actions.ts`).
 */
export {
  contactReceivedTemplate,
  studioNotificationTemplate,
  type ContactMessage,
} from "./contact-templates";
export { renderLayout, type MailContent } from "./layout";
export {
  MAIL_BRAND,
  MAIL_GRADIENT_STOPS,
  escapeHtml,
  escapeMultiline,
  renderGradientRule,
  renderLogo,
} from "./brand";
export { MAIL_STYLES } from "./styles";
