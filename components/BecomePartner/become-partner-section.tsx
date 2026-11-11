import { MaskedLines } from "@/components/Animations/masked-lines";
import { RevealOnScroll } from "@/components/Animations/reveal-on-scroll";
import { CONTACT_LINKS } from "@/components/Common/contact-links";

type BecomePartnerSectionProps = {
  /** Texto del botón de llamada a la acción. */
  ctaLabel?: string;
  /** Enlace del botón. */
  ctaHref?: string;
  /** Identificador del bloque. */
  id?: string;
};

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden>
      <path
        d="M20 11.5a8 8 0 0 1-11.9 7L4 20l1.6-3.9A8 8 0 1 1 20 11.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 9.3c.3-.6.6-.6.9-.6h.5c.2 0 .4.1.5.4l.6 1.4c.1.3 0 .5-.1.7l-.4.5c-.1.2-.2.3 0 .6.4.7 1 1.3 1.7 1.7.3.2.4.1.6 0l.5-.5c.2-.2.4-.2.6-.1l1.4.7c.3.1.4.3.4.5v.5c0 .3-.2.6-.7.9-.4.2-.9.3-1.4.2-1.4-.2-2.8-.9-4-2.1-1.2-1.2-1.9-2.6-2.1-4-.1-.5 0-1 .2-1.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function BecomePartnerSection({
  ctaLabel = "Contáctame por WhatsApp",
  ctaHref = CONTACT_LINKS.whatsapp,
  id = "contacto",
}: BecomePartnerSectionProps) {
  return (
    <section
      id={id}
      className="relative w-full overflow-hidden bg-ink py-20 md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(70%_75%_at_50%_62%,rgba(196,105,74,0.18)_0%,rgba(42,31,26,0)_72%)]" />

      <div className="relative mx-auto flex w-full max-w-full flex-col items-center px-6 text-center">
        <RevealOnScroll>
          <p className="font-label text-[11px] tracking-[0.3em] text-rust uppercase">
            El proceso empieza aquí
          </p>
        </RevealOnScroll>

        <MaskedLines
          className="mt-6 font-display text-[48px] leading-none font-light text-paper sm:text-[58px] md:text-[68px]"
          delayMs={60}
          lines={["¡Hablemos!"]}
        />

        <RevealOnScroll delayMs={120}>
          <p className="mt-6 max-w-[480px] text-[15px] leading-[1.8] text-paper/65 md:text-[15px]">
            Cada colaboración comienza con una conversación: ideas, referencias
            y una mirada compartida.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delayMs={200}>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex h-14 items-center gap-3 border border-paper/30 px-8 font-label text-[11px] tracking-[0.22em] text-paper uppercase transition-colors duration-300 hover:border-rust hover:bg-rust"
          >
            <WhatsAppIcon />
            {ctaLabel}
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
