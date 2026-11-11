import React, { ReactNode } from "react";
import Image from "next/image";
import { MaskedLines } from "@/components/Animations/masked-lines";
import type { HashHref } from "@/components/Common/hash-href";

export type HeroAction =
  | {
      kind: "external";
      href: string;
      label: string;
      variant?: "outline" | "solid";
    }
  | {
      kind: "hash";
      href: HashHref;
      label: string;
      variant?: "outline" | "solid";
    };

interface HeroSectionProps {
  id?: string;
  tagline?: string;
  showTaglineLine?: boolean;
  lines?: ReactNode[];
  description?: string;
  actions?: HeroAction[];
  imageSrc?: string;
  imageAlt?: string;
  backgroundWatermark?: string;
  darkBackground?: boolean;
  gradientRule?: ReactNode;
  className?: string;
}

const DEFAULT_ACTIONS: HeroAction[] = [
  { kind: "hash", href: "#escultura", label: "Escultura" },
  { kind: "hash", href: "#fotografia", label: "Fotografía" },
];

const DEFAULT_LINES = [
  <span key="desde">Desde la</span>,
  <span key="mirada">mirada a</span>,
  <span key="materia" className="italic text-rust">
    la materia
  </span>,
];

export function HeroSection({
  id = "home",
  tagline = "Escultura · Fotografía",
  showTaglineLine = true,
  lines = DEFAULT_LINES,
  description = "Exploro la forma a través de la escultura y la fotografía. Dos maneras de observar, crear y compartir una mirada personal.",
  actions = DEFAULT_ACTIONS,
  imageSrc = "/images/landing/hero-escultura.jpg",
  imageAlt = "Escultura de María del Carmen Reyes Garrido",
  backgroundWatermark,
  darkBackground = false,
  gradientRule = undefined,
  className = "",
}: HeroSectionProps) {
  return (
    <section
      id={id}
      className={`relative w-full pt-[118px] pb-0 md:pt-[150px] overflow-hidden transition-colors duration-300 ${
        darkBackground ? "text-white" : "bg-white text-ink"
      }`}
      style={
        darkBackground
          ? {
              backgroundColor: "#12100e",
              backgroundImage: `
                radial-gradient(circle at 15% 20%, rgba(122, 143, 160, 0.15) 0%, transparent 50%),
                radial-gradient(circle at 85% 80%, rgba(196, 105, 74, 0.22) 0%, transparent 50%)
              `,
            }
          : undefined
      }
    >
      <div className="mx-auto grid w-full max-w-full gap-12 px-6 pb-14 md:grid-cols-[1fr_1.1fr] md:items-center md:px-11 md:pb-0">
        <div className="md:pb-20">
          <p
            className={`flex items-center font-label text-[11px] tracking-[0.26em] uppercase md:text-[12px] ${
              darkBackground ? "text-rust" : "text-rust"
            }`}
          >
            {showTaglineLine && (
              <span
                className={`mr-4 inline-block h-px w-9 ${
                  darkBackground ? "bg-rust/60" : "bg-rust/60"
                }`}
              />
            )}
            {tagline}
          </p>

          <MaskedLines
            className={`mt-7 font-display text-[42px] leading-[1.02] font-light sm:text-[54px] md:text-[64px] lg:text-[72px] ${
              darkBackground ? "text-white" : "text-ink"
            }`}
            delayMs={80}
            staggerMs={110}
            mode="load"
            lines={lines}
          />

          <p
            className={`mt-8 max-w-[430px] text-[14px] leading-[1.9] md:text-[15px] ${
              darkBackground ? "text-[#D1C7BD]/80" : "text-taupe"
            }`}
          >
            {description}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            {actions.map((action) => {
              const isSolid = action.variant === "solid";
              const buttonStyles = isSolid
                ? "bg-rust text-white border-rust hover:bg-rust/90"
                : darkBackground
                  ? "border-white/30 text-white hover:border-rust hover:bg-rust hover:text-white"
                  : "border-ink/25 text-ink hover:border-rust hover:bg-rust hover:text-paper";

              return (
                <a
                  key={action.label}
                  href={action.href}
                  target={action.kind === "external" ? "_blank" : undefined}
                  rel={
                    action.kind === "external"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className={`inline-flex h-10 items-center rounded-full justify-center border px-6 font-label text-[11px] tracking-[0.2em] uppercase transition-colors duration-300 ${buttonStyles} ${className}`}
                >
                  {action.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 grid-rows-1 items-end w-full max-w-120 md:max-w-145 lg:max-w-160 mx-auto h-full">
          {backgroundWatermark && (
            <div className="col-start-1 row-start-1 z-0 select-none pointer-events-none pb-2.5">
              <span
                className={`font-display text-[150px] sm:text-[190px] md:text-[230px] lg:text-[270px] font-light tracking-tight uppercase leading-none block transform translate-x-[-30%] translate-y-[10%] md:translate-x-[-15%] lg:translate-x-[-10%] ${
                  darkBackground ? "text-white/4" : "text-ink/[0.03]"
                }`}
              >
                {backgroundWatermark}
              </span>
            </div>
          )}

          <div className="col-start-1 row-start-1 z-10 w-full mb-10 md:mb-16">
            <div
              className={`relative aspect-[4/3] w-full overflow-hidden ${
                darkBackground ? "bg-transparent" : "bg-white"
              }`}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 90vw, 600px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      {gradientRule && <div className="w-full max-w-full">{gradientRule}</div>}
    </section>
  );
}
