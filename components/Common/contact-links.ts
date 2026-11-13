/**
 * Datos y canales de contacto del estudio.
 *
 * Los valores vienen de las variables de entorno (ver `.env.example`), con
 * los datos reales como reserva para que el sitio siga funcionando aunque
 * falte el archivo. El prefijo `NEXT_PUBLIC_` permite que el navegador los
 * use también: el logotipo y el pie los muestran componentes de cliente.
 */

/** Email del estudio. Es por defecto el destinatario de los mensajes del formulario. */
const SITE_EMAIL =
  process.env.NEXT_PUBLIC_SITE_EMAIL?.trim() || "mcarmenreyes@gmail.com";

/** Teléfono del estudio, como se muestra al visitante. */
const SITE_PHONE =
  process.env.NEXT_PUBLIC_SITE_PHONE?.trim() || "+58 412 607 4961";

/** Número de WhatsApp: solo dígitos, con el prefijo del país y sin "+". */
const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() || "584126074961";

export const CONTACT_INFO = {
  email: SITE_EMAIL,
  phone: SITE_PHONE,
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`,
} as const;

export const CONTACT_LINKS = {
  email: `mailto:${SITE_EMAIL}`,
  phone: `tel:${SITE_PHONE.replace(/[^\d+]/g, "")}`,
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`,
} as const;

/** Página de contacto con el formulario. */
export const CONTACT_PAGE_PATH = "/contacto";
