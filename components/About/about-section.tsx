import React, { ReactNode } from "react";
import Link from "next/link";
import { MaskedLines } from "@/components/Animations/masked-lines";
import { RevealOnScroll } from "@/components/Animations/reveal-on-scroll";
import { GradientRule } from "@/components/Common/gradient-rule";

export interface DisciplineItem {
  name: string;
  detail: string;
}

interface AboutSectionProps {
  id?: string;
  tagline?: string;
  showTaglinePill?: boolean;
  eyebrow?: string;
  lines?: ReactNode[];
  descriptionTop?: ReactNode[];
  descriptionBottom?: ReactNode[];
  disciplines?: DisciplineItem[];
  displayCard?: boolean;
  actionType?: "link" | "download";
  actionHref?: string;
  actionLabel?: string;
  showActionIcon?: boolean;
  classNameAction?: string;
}

const DEFAULT_DISCIPLINES: DisciplineItem[] = [
  { name: "Escultura", detail: "Materia · Volumen" },
  { name: "Fotografía", detail: "Luz · Instante" },
];

const DEFAULT_LINES = [
  <span key="practica">Una práctica que</span>,
  <span key="disciplinas">une dos disciplinas</span>,
];

const DEFAULT_DESC_TOP = [
  <span key="desc1">
    Mi práctica artística se desarrolla entre la escultura y la fotografía. Me
    interesa cómo la luz transforma la materia y cómo los objetos y las imágenes
    pueden transmitir emociones silenciosas.
  </span>,
];

export function AboutSection({
  id = "about",
  tagline = "Sobre mí",
  showTaglinePill = false,
  eyebrow,
  lines = DEFAULT_LINES,
  descriptionTop = DEFAULT_DESC_TOP,
  descriptionBottom = [],
  disciplines = DEFAULT_DISCIPLINES,
  displayCard = false,
  actionType = "link",
  actionHref = "/about",
  actionLabel = "Saber más",
  showActionIcon = false,
  classNameAction = "",
}: AboutSectionProps) {
  return (
    <section id={id} className="w-full bg-paper-light pt-16 md:pt-20">
      <div className="mx-auto w-full max-w-full px-6 md:px-11">
        <RevealOnScroll>
          {showTaglinePill ? (
            <div className="inline-flex items-center justify-center rounded-full border border-ink/20 px-5 py-1.5 font-label text-[11px] tracking-[0.26em] text-ink uppercase">
              {tagline}
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <p className="font-label text-[11px] tracking-[0.26em] text-rust uppercase">
                {tagline}
              </p>
              <span className="h-px flex-1 bg-ink/12 max-w-[90px]" />
            </div>
          )}
        </RevealOnScroll>
        {eyebrow && (
          <RevealOnScroll delayMs={40}>
            <div className="mt-8">
              <p className="font-label text-[11px] tracking-[0.24em] text-rust uppercase">
                {eyebrow}
              </p>
              <GradientRule className="h-2! mt-3 max-w-[150px] rounded-2xl" />
            </div>
          </RevealOnScroll>
        )}

        <MaskedLines
          className="mt-7 max-w-[560px] font-display text-[30px] leading-[1.12] font-light text-ink sm:text-[34px] md:text-[40px]"
          delayMs={60}
          staggerMs={100}
          lines={lines}
        />

        {descriptionTop.map((desc, idx) => (
          <RevealOnScroll key={`top-${idx}`} delayMs={80 + idx * 40}>
            <p className="mt-8 max-w-[1100px] text-[14px] leading-[1.9] text-taupe md:text-[15px]">
              {desc}
            </p>
          </RevealOnScroll>
        ))}

        {displayCard ? (
          <div className="mt-10 rounded-xl bg-black/[0.03] p-6 md:p-8 border-l-2 border-rust max-w-full">
            <div className="flex flex-col gap-y-4">
              {disciplines.map((discipline, index) => (
                <RevealOnScroll key={discipline.name} delayMs={60 + index * 50}>
                  <p className="text-[14px] md:text-[15px] text-ink">
                    <strong className="font-medium text-ink">
                      {discipline.name}
                    </strong>{" "}
                    — {discipline.detail}
                  </p>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="mt-12 h-px w-full bg-ink/12 md:mt-14" />
            <div className="flex flex-wrap gap-x-16 gap-y-8 pt-9">
              {disciplines.map((discipline, index) => (
                <RevealOnScroll key={discipline.name} delayMs={60 + index * 70}>
                  <p className="font-label text-[11px] tracking-[0.24em] text-rust uppercase">
                    {discipline.name}
                  </p>
                  <p className="mt-2 text-[14px] text-ink md:text-[15px]">
                    {discipline.detail}
                  </p>
                </RevealOnScroll>
              ))}
            </div>
          </>
        )}

        {descriptionBottom.map((desc, idx) => (
          <RevealOnScroll key={`bottom-${idx}`} delayMs={100 + idx * 40}>
            <p className="mt-8 max-w-[1100px] text-[14px] leading-[1.9] text-taupe md:text-[15px]">
              {desc}
            </p>
          </RevealOnScroll>
        ))}

        <RevealOnScroll delayMs={120}>
          {actionType === "download" ? (
            <a
              href={actionHref}
              download
              className={`mt-10 flex h-14 w-full max-w-[320px] items-center justify-between px-6 font-label text-[11px] tracking-[0.24em] text-ink uppercase transition-colors duration-300 hover:bg-ink hover:text-paper md:mt-12 ${classNameAction}`}
              style={{ border: "1px solid rgba(27, 20, 16, 0.22)" }}
            >
              <span>{actionLabel}</span>
              {showActionIcon && (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rust text-white">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </div>
              )}
            </a>
          ) : (
            <Link
              href={actionHref}
              className={`mt-10 flex h-14 w-full items-center justify-between px-6 font-label text-[11px] tracking-[0.24em] text-ink uppercase transition-colors duration-300 hover:bg-ink hover:text-paper md:mt-12 ${classNameAction}`}
              style={{ border: "1px solid rgba(27, 20, 16, 0.22)" }}
            >
              <span>{actionLabel}</span>
              {showActionIcon && (
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-rust text-white">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                </div>
              )}
            </Link>
          )}
        </RevealOnScroll>
      </div>

      <GradientRule className="mt-14 h-2! md:mt-16" />
    </section>
  );
}
