"use client";

import React from "react";
import { RevealOnScroll } from "@/components/Animations/reveal-on-scroll";
import { GradientRule } from "@/components/Common/gradient-rule";
import { useSculptureFlip } from "@/components/project/sculptures/sculpture-flip-context";
import {
  BUTTON_LABEL_CLASS,
  BodyText,
  Eyebrow,
  SectionTitle,
} from "@/components/Typography/typography";

interface SculptureDetailsSectionProps {
  id?: string;
  badge?: string;
  title?: string;
  description?: string;
  actionLabel?: string;
  /** Id de la card que el botón abre al pulsarlo. */
  actionTargetId?: string;
}

export function SculptureDetailsSection({
  id = "sculpture-details",
  badge = "ESCULTURA · DESTACADO",
  title = "Trespiral",
  description = "Una forma que se pliega sobre sí misma y abre un diálogo entre el volumen y el vacío. Trespiral reúne curvas, recorridos y una superficie de tonos verdes que cambia con la luz.",
  actionLabel = "Ver obra",
  actionTargetId = "trespiral",
}: SculptureDetailsSectionProps) {
  const { flip } = useSculptureFlip();

  /*
   * El botón no cambia de página: sube hasta la card de la obra y la
   * voltea para dejar a la vista su ficha técnica.
   */
  const handleAction = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    flip(actionTargetId);

    const card = document.getElementById(actionTargetId);

    if (!card) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    card.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "center",
    });
  };

  return (
    <section
      id={id}
      className="w-full bg-paper-light pt-16 pb-20 md:pt-20 md:pb-28"
    >
      <div className="mx-auto w-full max-w-full px-6 md:px-11">
        {badge && (
          <RevealOnScroll>
            <Eyebrow
              as="div"
              tone="rust"
              className="inline-flex items-center justify-center rounded-full border border-rust/20 px-5 py-2"
            >
              {badge}
            </Eyebrow>
          </RevealOnScroll>
        )}

        <SectionTitle
          lines={[<span key="title">{title}</span>]}
          className="mt-7 mb-25"
        />

        <RevealOnScroll delayMs={60}>
          <GradientRule className="h-2! mt-6 max-w-[130px] rounded-2xl" />
        </RevealOnScroll>

        <RevealOnScroll delayMs={80}>
          <BodyText className="mt-8 max-w-[620px]">{description}</BodyText>
        </RevealOnScroll>

        <RevealOnScroll delayMs={100}>
          <div className="mt-10 md:mt-12">
            <a
              href={`#${actionTargetId}`}
              onClick={handleAction}
              className={`inline-flex h-14 items-center justify-center rounded-sm w-52 bg-rust px-8 ${BUTTON_LABEL_CLASS} text-white transition-colors duration-300 hover:bg-rust/90`}
            >
              {actionLabel}
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
