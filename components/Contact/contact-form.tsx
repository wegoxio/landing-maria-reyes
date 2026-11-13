"use client";

import { useActionState, useEffect, useRef } from "react";
import {
  sendContactMessage,
  type ContactFormState,
} from "@/app/contacto/actions";

const INITIAL_STATE: ContactFormState = {
  status: "idle",
  message: "",
};

const LABEL_CLASS =
  "font-label text-[11px] tracking-[0.24em] uppercase text-rust";

const INPUT_CLASS =
  "mt-3 w-full border bg-paper-light px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-taupe/70 focus:border-rust";

const ERROR_CLASS = "mt-2 text-[13px] text-rust";

/**
 * Formulario de contacto.
 *
 * Se apoya en `useActionState`: la validación y el envío ocurren en el
 * servidor y el estado vuelve ya resuelto, así que el formulario funciona
 * igual sin JavaScript (la acción se invoca por HTTP).
 */
export function ContactForm() {
  const [state, formAction, pending] = useActionState(
    sendContactMessage,
    INITIAL_STATE,
  );
  const formRef = useRef<HTMLFormElement | null>(null);

  /*
   * La acción no vacía los campos: al terminar bien se limpia el formulario
   * para que el visitante pueda escribir otro mensaje sin recargar.
   */
  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state]);

  const nameError = state.fieldErrors?.name;
  const emailError = state.fieldErrors?.email;
  const reasonError = state.fieldErrors?.reason;

  return (
    <form ref={formRef} action={formAction} className="w-full">
      {/*
        Campo trampa contra el correo basura. Está fuera de la vista y fuera
        del recorrido del teclado: si alguien lo rellena, no se envía nada.
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[-9999px] h-px w-px overflow-hidden"
      >
        <label htmlFor="website">Sitio web</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="name" className={LABEL_CLASS}>
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={120}
            autoComplete="name"
            placeholder="Cómo te llamas"
            aria-invalid={Boolean(nameError)}
            aria-describedby={nameError ? "contact-name-error" : undefined}
            className={`${INPUT_CLASS} ${
              nameError ? "border-rust" : "border-ink/20"
            }`}
          />
          {nameError && (
            <p id="contact-name-error" className={ERROR_CLASS}>
              {nameError}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className={LABEL_CLASS}>
            Correo
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            placeholder="tu@correo.com"
            aria-invalid={Boolean(emailError)}
            aria-describedby={emailError ? "contact-email-error" : undefined}
            className={`${INPUT_CLASS} ${
              emailError ? "border-rust" : "border-ink/20"
            }`}
          />
          {emailError && (
            <p id="contact-email-error" className={ERROR_CLASS}>
              {emailError}
            </p>
          )}
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="reason" className={LABEL_CLASS}>
          Razón
        </label>
        <textarea
          id="reason"
          name="reason"
          required
          minLength={10}
          maxLength={4000}
          rows={6}
          placeholder="Cuéntame en qué puedo ayudarte"
          aria-invalid={Boolean(reasonError)}
          aria-describedby={reasonError ? "contact-reason-error" : undefined}
          className={`${INPUT_CLASS} resize-y ${
            reasonError ? "border-rust" : "border-ink/20"
          }`}
        />
        {reasonError && (
          <p id="contact-reason-error" className={ERROR_CLASS}>
            {reasonError}
          </p>
        )}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex h-14 items-center justify-center border border-ink/25 px-8 font-label text-[11px] tracking-[0.22em] text-ink uppercase transition-colors duration-300 hover:border-rust hover:bg-rust hover:text-paper disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:border-ink/25 disabled:hover:bg-transparent disabled:hover:text-ink"
        >
          {pending ? "Enviando…" : "Enviar mensaje"}
        </button>

        <p
          aria-live="polite"
          role="status"
          className="text-[13px] text-taupe"
        >
          {pending
            ? "Enviando tu mensaje…"
            : (state.message ?? "")}
        </p>
      </div>
    </form>
  );
}
