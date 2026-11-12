import React, { ReactNode } from "react";
import Link from "next/link";
import { MaskedLines } from "@/components/Animations/masked-lines";
import { RevealOnScroll } from "@/components/Animations/reveal-on-scroll";

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
          <div className="font-label text-[11px] tracking-[0.18em] text-muted-brown uppercase">
            {breadcrumb}
          </div>
        </RevealOnScroll>

        <MaskedLines
          className="mt-6 font-display text-[36px] leading-[1.1] font-light text-ink sm:text-[46px] md:text-[54px]"
          delayMs={60}
          staggerMs={100}
          lines={title}
        />

        <RevealOnScroll delayMs={60}>
          <p className="mt-4 text-[18px] leading-[1.8] text-muted-brown md:text-[20px]">
            {counterText}
          </p>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:mt-12">
          {items.map((item, index) => (
            <RevealOnScroll key={item.id} delayMs={80 + index * 40}>
              <Link
                href={item.href}
                className="group flex h-14 w-full items-center justify-center bg-paper-light rounded-2xl bg-black/2.5] px-5  transition-all duration-300 hover:bg-paper"
              >
                <span className="font-display text-[15px] font-light text-ink transition-colors duration-300 group-hover:text-rust">
                  {item.name}
                </span>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
