import { MaskedLines } from "@/components/Animations/masked-lines";
import { RevealOnScroll } from "@/components/Animations/reveal-on-scroll";
import {
  CONTACT_INFO,
  CONTACT_LINKS,
} from "@/components/Common/contact-links";
import { ContactForm } from "@/components/Contact/contact-form";

const DIRECT_CHANNELS = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    detail: "Para una respuesta rápida",
    href: CONTACT_LINKS.whatsapp,
    external: true,
  },
  {
    id: "phone",
    label: "Teléfono",
    detail: CONTACT_INFO.phone,
    href: CONTACT_LINKS.phone,
    external: false,
  },
  {
    id: "email",
    label: "Email",
    detail: "Prensa y colaboraciones",
    href: CONTACT_LINKS.email,
    external: false,
  },
] as const;

/**
 * Bloque de contacto: el formulario a la izquierda y los canales directos a
 * la derecha, para que quien no quiere escribir pueda escribir por otro
 * medio.
 */
export function ContactSection() {
  return (
    <section id="formulario" className="w-full bg-paper py-20 md:py-28">
      <div className="mx-auto w-full max-w-full px-6 md:px-11">
        <RevealOnScroll>
          <p className="font-label text-[11px] tracking-[0.3em] text-rust uppercase">
            Escríbeme
          </p>
        </RevealOnScroll>

        <MaskedLines
          className="mt-6 font-display text-[38px] leading-[1.05] font-light text-ink md:text-[52px]"
          delayMs={60}
          lines={[
            <span key="1">Cuéntame lo que</span>,
            <span key="2" className="italic text-rust">
              tienes en mente
            </span>,
          ]}
        />

        <RevealOnScroll delayMs={120}>
          <p className="mt-7 max-w-[540px] text-[15px] leading-[1.8] text-taupe">
            Rellena el formulario y te responderé por correo. Si prefieres un
            trato directo, también puedes escribirme por WhatsApp.
          </p>
        </RevealOnScroll>

        <div className="mt-12 grid gap-8 md:grid-cols-[1.6fr_1fr] md:gap-12">
          <RevealOnScroll delayMs={180}>
            <div className="border border-ink/12 bg-paper-light p-6 md:p-9">
              <ContactForm />
            </div>
          </RevealOnScroll>

          <RevealOnScroll delayMs={240}>
            <aside className="h-full border border-ink/12 bg-paper-light p-6 md:p-9">
              <p className="font-label text-[11px] tracking-[0.24em] text-rust uppercase">
                Otros canales
              </p>

              <ul className="mt-6 space-y-6">
                {DIRECT_CHANNELS.map((channel) => (
                  <li key={channel.id}>
                    <a
                      href={channel.href}
                      target={channel.external ? "_blank" : undefined}
                      rel={channel.external ? "noopener noreferrer" : undefined}
                      className="group block border-b border-ink/10 pb-5 last:border-b-0 last:pb-0"
                    >
                      <span className="block text-[16px] text-ink transition-colors group-hover:text-rust">
                        {channel.label}
                      </span>
                      <span className="mt-1 block text-[13px] text-taupe">
                        {channel.detail}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-[13px] leading-[1.8] text-taupe">
                Estudio de arte y diseño · Caracas
                <br />
                Escultura y fotografía.
              </p>
            </aside>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
