import React, { ReactNode } from "react";
import Link from "next/link";
import { RevealOnScroll } from "@/components/Animations/reveal-on-scroll";
import {
  BodyText,
  Eyebrow,
  LeadText,
  SectionTitle,
} from "@/components/Typography/typography";

export interface SeriesItem {
  id: string;
  name: string;
  href: string; // Enlace hacia la serie o galería específica
}

interface PhotographySeriesSectionProps {
  id?: string;
  breadcrumb?: string; // Ej: "Inicio / Proyectos / Fotografía"
  title?: ReactNode[]; // Ej: "Series fotográficas"
  counterText?: string; // Ej: "120 imágenes · 10 series · Selecciona un destino para explorar la galería."
  items?: SeriesItem[];
}

const DEFAULT_ITEMS: SeriesItem[] = [
  { id: "araya", name: "Araya", href: "#araya" },
  { id: "paria", name: "Paria", href: "#paria" },
  {
    id: "hato-las-caretas",
    name: "Hato Las Caretas",
    href: "#hato-las-caretas",
  },
  { id: "atacama-uyuni", name: "Atacama / Uyuni", href: "#atacama-uyuni" },
  { id: "japon-invierno", name: "Japón · Invierno", href: "#japon-invierno" },
  { id: "utah", name: "Utah", href: "#utah" },
  { id: "cueva-fantasma", name: "Cueva del Fantasma", href: "#cueva-del-fantasma" },
  { id: "hawaii", name: "Hawaii", href: "#hawaii" },
  {
    id: "isla-pascua-patagonia",
    name: "Isla de Pascua / Patagonia",
    href: "#isla-de-pascua-patagonia",
  },
  { id: "turquia", name: "Turquía", href: "#turquia" },
];

const DEFAULT_LINES = [<span key="1">Series fotográficas</span>];

export function PhotographySeriesSection({
  id = "series-fotograficas",
  breadcrumb = "Inicio   /   Proyectos   /   Fotografía",
  title = DEFAULT_LINES,
  counterText = "120 imágenes · 10 series · Selecciona un destino para explorar la galería.",
  items = DEFAULT_ITEMS,
}: PhotographySeriesSectionProps) {
  return (
    <section id={id} className="w-full bg-white pt-12 pb-20 md:pt-16 md:pb-28">
      <div className="mx-auto w-full max-w-full px-6 md:px-11">
        <RevealOnScroll>
          <Eyebrow as="div" tone="muted" className="tracking-[0.18em]">
            {breadcrumb}
          </Eyebrow>
        </RevealOnScroll>

        <SectionTitle lines={title} className="mt-6" />

        <RevealOnScroll delayMs={60}>
          <LeadText tone="muted" className="mt-5">
            {counterText}
          </LeadText>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:mt-12">
          {items.map((item, index) => (
            <RevealOnScroll key={item.id} delayMs={80 + index * 40}>
              <Link
                href={item.href}
                className="group flex h-16 w-full items-center justify-center bg-paper-light rounded-2xl bg-black/2.5] px-5  transition-all duration-300 hover:bg-paper"
              >
                <BodyText
                  as="span"
                  tone="ink"
                  className="font-display font-light transition-colors duration-300 group-hover:text-rust"
                >
                  {item.name}
                </BodyText>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
