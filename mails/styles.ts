import { MAIL_BRAND } from "./brand";

/**
 * Estilos en línea del correo.
 *
 * Se declaran aquí en lugar de repetirlos en cada plantilla: los clientes de
 * correo no admiten clases, así que cada estilo acaba copiado en el HTML.
 */
export const MAIL_STYLES = {
  eyebrow: `font-family:${MAIL_BRAND.serif};font-size:11px;line-height:1.5;letter-spacing:3px;text-transform:uppercase;color:${MAIL_BRAND.rust};`,
  heading: `margin:14px 0 0;font-family:${MAIL_BRAND.serif};font-size:30px;line-height:1.2;font-weight:normal;color:${MAIL_BRAND.ink};`,
  paragraph: `margin:16px 0 0;font-family:${MAIL_BRAND.serif};font-size:15px;line-height:1.8;color:${MAIL_BRAND.taupe};`,
  label: `font-family:${MAIL_BRAND.serif};font-size:10px;line-height:1.5;letter-spacing:2.5px;text-transform:uppercase;color:${MAIL_BRAND.taupe};`,
  value: `padding:6px 0 0;font-family:${MAIL_BRAND.serif};font-size:16px;line-height:1.6;color:${MAIL_BRAND.ink};`,
  card: `padding:20px 22px;background-color:${MAIL_BRAND.paper};border:1px solid rgba(42,31,26,0.12);`,
  button: `display:inline-block;padding:13px 26px;font-family:${MAIL_BRAND.serif};font-size:11px;line-height:1;letter-spacing:2.5px;text-transform:uppercase;text-decoration:none;color:${MAIL_BRAND.paperLight};background-color:${MAIL_BRAND.rust};border:1px solid ${MAIL_BRAND.rust};`,
} as const;
