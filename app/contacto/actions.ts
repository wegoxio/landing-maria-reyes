"use server";

import { Resend } from "resend";
import { CONTACT_INFO } from "@/components/Common/contact-links";
import {
  contactReceivedTemplate,
  studioNotificationTemplate,
  type ContactMessage,
} from "@/mails";

/**
 * Estado que la acción devuelve al formulario.
 *
 * Viaja serializado al cliente, así que solo lleva lo que la interfaz
 * necesita pintar: nunca el detalle de un error de Resend.
 */
export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: {
    name?: string;
    email?: string;
    reason?: string;
  };
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 200;
const MAX_REASON_LENGTH = 4000;

const GENERIC_ERROR =
  "No pudimos registrar el mensaje. Escríbeme directamente por WhatsApp.";

/**
 * Destinatario de la notificación del estudio.
 *
 * `RESEND_TO_EMAIL` tiene prioridad; si no está definida se usa el correo
 * del estudio, que es el mismo que aparece en la web.
 */
function getRecipient(): string {
  return process.env.RESEND_TO_EMAIL?.trim() || CONTACT_INFO.email;
}

/**
 * Remitente.
 *
 * Por defecto se usa `onboarding@resend.dev`, que solo entrega al correo de
 * la cuenta de Resend. En producción hay que definir `RESEND_FROM_EMAIL`
 * con un dominio verificado.
 */
function getSender(): string {
  return (
    process.env.RESEND_FROM_EMAIL?.trim() ||
    "Estudio María Reyes <onboarding@resend.dev>"
  );
}

/**
 * Recibe el formulario de contacto y entrega el mensaje por Resend.
 *
 * Se envían dos correos: la notificación al estudio con los datos y el
 * acuse de recibo para quien escribió. La acción es un punto de entrada
 * público: valida lo que llega antes de tocar la API y nunca filtra al
 * cliente el detalle del error.
 */
export async function sendContactMessage(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const reason = String(formData.get("reason") ?? "").trim();

  /*
   * Campo trampa: los robots rellenan todos los campos que ven. Si viene
   * con contenido, se responde con éxito y no se envía nada.
   */
  if (String(formData.get("website") ?? "").trim() !== "") {
    return {
      status: "success",
      message: "Gracias, tu mensaje fue enviado. Te responderé pronto.",
    };
  }

  const fieldErrors: NonNullable<ContactFormState["fieldErrors"]> = {};

  if (name.length < 2) {
    fieldErrors.name = "Escribe tu nombre.";
  } else if (name.length > MAX_NAME_LENGTH) {
    fieldErrors.name = `Máximo ${MAX_NAME_LENGTH} caracteres.`;
  }

  if (!EMAIL_PATTERN.test(email)) {
    fieldErrors.email = "Escribe un correo válido.";
  } else if (email.length > MAX_EMAIL_LENGTH) {
    fieldErrors.email = `Máximo ${MAX_EMAIL_LENGTH} caracteres.`;
  }

  if (reason.length < 10) {
    fieldErrors.reason = "Cuéntame un poco más: mínimo 10 caracteres.";
  } else if (reason.length > MAX_REASON_LENGTH) {
    fieldErrors.reason = `Máximo ${MAX_REASON_LENGTH} caracteres.`;
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Revisa los campos marcados.",
      fieldErrors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();

  if (!apiKey) {
    console.error("[contacto] Falta la variable de entorno RESEND_API_KEY.");

    return {
      status: "error",
      message: GENERIC_ERROR,
    };
  }

  const message: ContactMessage = { name, email, reason };
  const resend = new Resend(apiKey);

  try {
    // 1. La notificación al estudio: si esto falla, el mensaje no llegó.
    const notification = studioNotificationTemplate(message);

    const { error: notificationError } = await resend.emails.send({
      from: getSender(),
      to: [getRecipient()],
      // El estudio responde directamente a quien escribió.
      replyTo: email,
      subject: notification.subject,
      html: notification.html,
      text: notification.text,
      tags: [{ name: "origen", value: "formulario-contacto" }],
    });

    if (notificationError) {
      console.error("[contacto] Resend rechazó la notificación:", notificationError);

      return {
        status: "error",
        message: GENERIC_ERROR,
      };
    }

    // 2. El acuse de recibo para quien escribió. Es un extra: si falla,
    //    el estudio ya tiene el mensaje, así que no se marca como error.
    const acknowledgement = contactReceivedTemplate(message);

    try {
      const { error: acknowledgementError } = await resend.emails.send({
        from: getSender(),
        to: [email],
        // Si responde, el correo llega al estudio.
        replyTo: CONTACT_INFO.email,
        subject: acknowledgement.subject,
        html: acknowledgement.html,
        text: acknowledgement.text,
        tags: [{ name: "origen", value: "acuse-recibo" }],
      });

      if (acknowledgementError) {
        console.error(
          "[contacto] No se pudo enviar el acuse de recibo:",
          acknowledgementError,
        );
      }
    } catch (acknowledgementError) {
      console.error(
        "[contacto] Falló el acuse de recibo:",
        acknowledgementError,
      );
    }
  } catch (error) {
    console.error("[contacto] Falló el envío con Resend:", error);

    return {
      status: "error",
      message: GENERIC_ERROR,
    };
  }

  return {
    status: "success",
    message: "Gracias, tu mensaje fue enviado. Te responderé pronto.",
  };
}
