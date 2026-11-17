import React, { ReactNode } from "react";
import { RevealOnScroll } from "@/components/Animations/reveal-on-scroll";
import { GradientRule } from "@/components/Common/gradient-rule";
import {
  BodyText,
  CardTitle,
  Eyebrow,
  SectionTitle,
} from "@/components/Typography/typography";

export interface LanguageItem {
  number: string; // Ej: "01", "02"
  title: string; // Ej: "Escultura"
  description: string; // Ej: "La escultura me permitió..."
  lineColor?: string; // Color de la pequeña línea superior de cada tarjeta
}

interface LanguagesSectionProps {
  id?: string;
  tagline?: string;
  lines?: ReactNode[];
  sectionDescription?: string;
  items?: LanguageItem[];
}

const DEFAULT_ITEMS: LanguageItem[] = [
  {
    number: "01",
    title: "Escultura",
    description:
      "La escultura me permitió trabajar directamente con la materia, con el cuerpo, con el tiempo y el proceso. La forma que cobra vida.",
    lineColor: "bg-[#7A8FA0]",
  },
  {
    number: "02",
    title: "Fotografía",
    description:
      "La fotografía me enseñó a observar con atención, a encuadrar, a leer la luz. El instante que se vuelve permanente.",
    lineColor: "bg-rust",
  },
];

const DEFAULT_LINES = [
  <span key="1">Dos formas de</span>,
  <span key="2" className="italic text-rust">
    mirar y crear
  </span>,
];

export function LanguagesSection({
  id = "languages",
  tagline = "LENGUAJES",
  lines = DEFAULT_LINES,
  sectionDescription = "La escultura y la fotografía conviven en mi práctica como dos lenguajes complementarios. Cada obra es una exploración personal y técnica.",
  items = DEFAULT_ITEMS,
}: LanguagesSectionProps) {
  return (
    <section id={id} className="w-full bg-paper pt-16 pb-20 md:pt-20 md:pb-28">
      <div className="mx-auto w-full max-w-full px-6 md:px-11">
        <RevealOnScroll>
          <div className="flex items-center gap-4">
            <Eyebrow as="p" tone="rust">
              {tagline}
            </Eyebrow>
            <GradientRule className="h-px! flex-1 bg-ink/12 max-w-22.5" />
          </div>
          <GradientRule className="h-2! mt-4 max-w-37.5 rounded-2xl" />
        </RevealOnScroll>

        <SectionTitle lines={lines} className="mt-7 max-w-162.5" />

        <RevealOnScroll delayMs={80}>
          <BodyText className="mt-6 max-w-237.5">{sectionDescription}</BodyText>
        </RevealOnScroll>

        <div className="mt-12 flex flex-col gap-6 md:mt-14 max-w-full">
          {items.map((item, index) => (
            <RevealOnScroll key={item.title} delayMs={100 + index * 80}>
              <div className="relative overflow-hidden bg-paper-light p-8 md:p-12 border border-ink/4">
                <div className="absolute right-6 bottom-2 md:right-12 md:bottom-4 select-none pointer-events-none z-0">
                  <span className="font-display text-[100px] sm:text-[140px] md:text-[180px] font-light tracking-tight text-ink/4 uppercase leading-none block">
                    {item.number}
                  </span>
                </div>

                <div className="relative z-10 max-w-187.5">
                  <div
                    className={`h-0.5 w-10 mb-6 ${item.lineColor || "bg-rust"}`}
                  />

                  <CardTitle>{item.title}</CardTitle>

                  <BodyText className="mt-4">{item.description}</BodyText>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
