import Image from "next/image";
import { MaskedLines } from "@/components/Animations/masked-lines";
import { CONTACT_LINKS } from "@/components/Common/contact-links";
import type { HashHref } from "@/components/Common/hash-href";

type HeroAction =
  | { kind: "external"; href: string; label: string }
  | { kind: "hash"; href: HashHref; label: string };

const HERO_ACTIONS: HeroAction[] = [
  { kind: "external", href: CONTACT_LINKS.whatsapp, label: "Contacto" },
  { kind: "hash", href: "#escultura", label: "Escultura" },
  { kind: "hash", href: "#fotografia", label: "Fotografía" },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full bg-white pt-[118px] pb-14 md:pt-[150px] md:pb-20"
    >
      <div className="mx-auto grid w-full max-w-full gap-12 px-6 md:grid-cols-[1fr_1.1fr] md:items-center md:px-11">
        <div>
          <p className="flex items-center font-label text-[11px] tracking-[0.26em] text-rust uppercase md:text-[12px]">
            <span className="mr-4 inline-block h-px w-9 bg-rust/60" />
            Escultura · Fotografía
          </p>

          <MaskedLines
            className="mt-7 font-display text-[42px] leading-[1.02] font-light text-ink sm:text-[54px] md:text-[64px] lg:text-[72px]"
            delayMs={80}
            staggerMs={110}
            mode="load"
            lines={[
              <span key="desde">Desde la</span>,
              <span key="mirada">mirada a</span>,
              <span key="materia" className="italic text-rust">
                la materia
              </span>,
            ]}
          />

          <p className="mt-8 max-w-[430px] text-[14px] leading-[1.9] text-taupe md:text-[15px]">
            Exploro la forma a través de la escultura y la fotografía. Dos
            maneras de observar, crear y compartir una mirada personal.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            {HERO_ACTIONS.map((action) =>
              action.kind === "external" ? (
                <a
                  key={action.label}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-full border border-ink/25 px-6 font-label text-[11px] tracking-[0.2em] text-ink uppercase transition-colors duration-300 hover:border-rust hover:bg-rust hover:text-paper"
                >
                  {action.label}
                </a>
              ) : (
                <a
                  key={action.label}
                  href={action.href}
                  className="inline-flex h-10 items-center justify-center rounded-full border border-ink/25 px-6 font-label text-[11px] tracking-[0.2em] text-ink uppercase transition-colors duration-300 hover:border-rust hover:bg-rust hover:text-paper"
                >
                  {action.label}
                </a>
              )
            )}
          </div>
        </div>

        {/* Contenedor de la imagen ampliado y con proporción horizontal */}
        <div className="relative mx-auto w-full max-w-[480px] md:max-w-[580px] lg:max-w-[640px]">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
            <Image
              src="/images/landing/hero-escultura.jpg"
              alt="Escultura de María del Carmen Reyes Garrido"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 600px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
