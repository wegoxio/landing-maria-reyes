"use client";

import Image from "next/image";
import { RevealImage } from "@/components/Animations/reveal-image";
import { RevealOnScroll } from "@/components/Animations/reveal-on-scroll";
import {
  BodyText,
  CardTitle,
  Eyebrow,
} from "@/components/Typography/typography";
import { useSculptureFlip } from "@/components/project/sculptures/sculpture-flip-context";
import type { SculptureItem } from "@/components/project/sculptures/sculpture-types";

/** Icono de "volver": una flecha que se dobla sobre sí misma. */
function FlipArrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 ${className}`}
      fill="none"
      aria-hidden
    >
      <path
        d="M20 7v5a2 2 0 0 1-2 2H6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m9 10-3 4 3 4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Card de una escultura.
 *
 * Tiene dos caras: la frontal, con la imagen y la descripción, y la
 * posterior, con la ficha técnica (dimensiones, material, técnica y año).
 * El botón del pie de la cara frontal voltea la card; el de la cara
 * posterior la devuelve a su posición.
 *
 * Las dos caras viven en el mismo espacio 3D (ver `globals.css`): una está
 * girada 180 grados respecto de la otra, así que al girar el contenedor
 * interior solo se ve una de las dos.
 */
export function SculptureFlipCard({
  item,
  delayMs = 0,
}: {
  item: SculptureItem;
  delayMs?: number;
}) {
  const { flippedId, toggle } = useSculptureFlip();
  const isFlipped = flippedId === item.id;
  const sheet = item.technicalSheet;

  return (
    <article id={item.id} className="flip-card relative flex h-full flex-col">
      <div
        className={`flip-card__inner relative flex flex-1 flex-col ${
          isFlipped ? "is-flipped" : ""
        }`}
      >
        {/* Cara frontal: la obra y su descripción. */}
        <div
          className="flip-card__face flip-card__face--front flex flex-1 flex-col overflow-hidden"
          aria-hidden={isFlipped}
        >
          <RevealImage
            className="aspect-square w-full bg-white border border-ink/[0.03]"
            innerClassName="p-6"
            delayMs={delayMs}
          >
            <Image
              src={item.imageSrc}
              alt={item.imageAlt || item.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain p-4 transition-transform duration-700 hover:scale-[1.04]"
            />
          </RevealImage>

          <RevealOnScroll
            delayMs={delayMs + 40}
            className="flex flex-1 flex-col justify-between bg-black/[0.025] p-6 md:p-7 border-t-0 border border-ink/[0.03]"
          >
            <div>
              <Eyebrow as="p" tone="rust">
                {item.category}
              </Eyebrow>

              <CardTitle className="mt-2">{item.title}</CardTitle>

              <BodyText className="mt-3">{item.description}</BodyText>
            </div>

            {sheet ? (
              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isFlipped}
                  aria-controls={`${item.id}-ficha`}
                  tabIndex={isFlipped ? -1 : 0}
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-ink/25 px-5 font-label text-label tracking-[0.2em] text-ink uppercase transition-colors duration-300 hover:border-rust hover:bg-rust hover:text-paper"
                >
                  Ficha técnica
                  <FlipArrow />
                </button>
              </div>
            ) : null}
          </RevealOnScroll>
        </div>

        {/* Cara posterior: los datos de la ficha técnica. */}
        <div
          id={`${item.id}-ficha`}
          className="flip-card__face flip-card__face--back absolute inset-0 flex flex-col justify-between bg-ink p-6 md:p-7"
          aria-hidden={!isFlipped}
        >
          <div>
            <Eyebrow as="p" tone="rust">
              Ficha técnica
            </Eyebrow>

            <CardTitle tone="paper" className="mt-2">
              {item.title}
            </CardTitle>
          </div>

          {sheet ? (
            <dl className="mt-6 flex flex-col gap-5">
              <div>
                <dt className="font-label text-label tracking-[0.2em] text-paper/55 uppercase">
                  Dimensiones
                </dt>
                <dd className="mt-1.5 text-body leading-[1.6] text-paper">
                  Alto {sheet.dimensions.height} · Ancho {sheet.dimensions.width}{" "}
                  · Profundidad {sheet.dimensions.depth}
                </dd>
              </div>

              <div>
                <dt className="font-label text-label tracking-[0.2em] text-paper/55 uppercase">
                  Material
                </dt>
                <dd className="mt-1.5 text-body leading-[1.6] text-paper">
                  {sheet.material}
                </dd>
              </div>

              <div>
                <dt className="font-label text-label tracking-[0.2em] text-paper/55 uppercase">
                  Técnica
                </dt>
                <dd className="mt-1.5 text-body leading-[1.6] text-paper">
                  {sheet.technique}
                </dd>
              </div>

              <div>
                <dt className="font-label text-label tracking-[0.2em] text-paper/55 uppercase">
                  Año
                </dt>
                <dd className="mt-1.5 text-body leading-[1.6] text-paper">
                  {sheet.year}
                </dd>
              </div>
            </dl>
          ) : null}

          <div className="mt-8">
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={!isFlipped}
              tabIndex={isFlipped ? 0 : -1}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-paper/30 px-5 font-label text-label tracking-[0.2em] text-paper uppercase transition-colors duration-300 hover:border-rust hover:bg-rust"
            >
              <FlipArrow />
              Volver
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
