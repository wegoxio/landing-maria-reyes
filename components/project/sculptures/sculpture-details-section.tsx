import React from "react";
import Link from "next/link";
import { RevealOnScroll } from "@/components/Animations/reveal-on-scroll";
import { GradientRule } from "@/components/Common/gradient-rule";

interface SculptureDetailsSectionProps {
  id?: string;
  badge?: string;
  title?: string;
  description?: string;
  actionHref?: string;
  actionLabel?: string;
}

export function SculptureDetailsSection({
  id = "sculpture-details",
  badge = "ESCULTURA · DESTACADO",
  title = "Trespiral",
  description = "Una forma que se pliega sobre sí misma y abre un diálogo entre el volumen y el vacío. Trespiral reúne curvas, recorridos y una superficie de tonos verdes que cambia con la luz.",
  actionHref = "#",
  actionLabel = "Ver obra",
}: SculptureDetailsSectionProps) {
  return (
    <section
      id={id}
      className="w-full bg-paper-light pt-16 pb-20 md:pt-20 md:pb-28"
    >
      <div className="mx-auto w-full max-w-full px-6 md:px-11">
        {badge && (
          <RevealOnScroll>
            <div className="inline-flex text-rust items-center justify-center rounded-full border border-rust/20 px-5 py-1.5 font-label text-[11px] tracking-[0.26em] uppercase">
              {badge}
            </div>
          </RevealOnScroll>
        )}

        <RevealOnScroll delayMs={40}>
          <h2 className="mt-7 font-display text-[36px] leading-[1.1] font-light text-ink sm:text-[46px] md:text-[56px] mb-25">
            {title}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delayMs={60}>
          <GradientRule className="h-2! mt-6 max-w-[130px] rounded-2xl" />
        </RevealOnScroll>

        <RevealOnScroll delayMs={80}>
          <p className="mt-8 max-w-[550px] text-[14px] leading-[1.9] text-taupe md:text-[15px]">
            {description}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delayMs={100}>
          <div className="mt-10 md:mt-12">
            <Link
              href={actionHref}
              className="inline-flex h-12 items-center justify-center rounded-sm w-50 bg-rust px-8 font-label text-[11px] tracking-[0.2em] text-white uppercase transition-colors duration-300 hover:bg-rust/90"
            >
              {actionLabel}
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
