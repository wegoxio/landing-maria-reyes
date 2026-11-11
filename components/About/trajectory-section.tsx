import React, { ReactNode } from "react";
import { MaskedLines } from "@/components/Animations/masked-lines";
import { RevealOnScroll } from "@/components/Animations/reveal-on-scroll";
import { GradientRule } from "@/components/Common/gradient-rule";

export interface TrajectoryItem {
  tagline: string;
  title: string;
  description: string;
  dotColor?: string;
}

interface TrajectorySectionProps {
  id?: string;
  tagline?: string;
  lines?: ReactNode[];
  sectionDescription?: string;
  items?: TrajectoryItem[];
}

const DEFAULT_ITEMS: TrajectoryItem[] = [
  {
    tagline: "ESCULTURA · MATERIA",
    title: "La forma y el vacío",
    description:
      "La práctica escultórica explora la relación entre el volumen, la superficie y el espacio que rodea cada pieza. La materia se convierte en un lenguaje de expresión.",
    dotColor: "bg-rust",
  },
  {
    tagline: "FOTOGRAFÍA · MIRADA",
    title: "La luz como lenguaje",
    description:
      "Observar con atención, encuadrar y leer la luz. La fotografía propone una forma de detenerse ante lo cotidiano y descubrir nuevas relaciones entre las formas.",
    dotColor: "bg-[#7A8FA0]",
  },
  {
    tagline: "PROCESO · DIÁLOGO",
    title: "Desde la mirada a la materia",
    description:
      "Escultura y fotografía se complementan: una construye volúmenes y la otra registra la luz. Dos maneras de explorar lo tangible y lo efímero desde una misma sensibilidad.",
    dotColor: "bg-[#C4694A]/80",
  },
];

const DEFAULT_LINES = [
  <span key="1">Un recorrido</span>,
  <span key="2" className="italic text-rust">
    entre disciplinas
  </span>,
];

export function TrajectorySection({
  id = "trayectoria",
  tagline = "TRAYECTORIA",
  lines = DEFAULT_LINES,
  sectionDescription = "Un recorrido entre la observación y la materia, donde la escultura y la fotografía se encuentran a través de la forma, la luz y el proceso.",
  items = DEFAULT_ITEMS,
}: TrajectorySectionProps) {
  return (
    <section
      id={id}
      className="w-full bg-paper-light pt-16 pb-20 md:pt-20 md:pb-28"
    >
      <div className="mx-auto w-full max-w-full px-6 md:px-11">
        <RevealOnScroll>
          <div className="flex items-center gap-4">
            <p className="font-label text-[11px] tracking-[0.26em] text-rust uppercase">
              {tagline}
            </p>
            <GradientRule className="h-px! flex-1 max-w-22.5 " />
          </div>
          <GradientRule className="h-2! mt-4 max-w-37.5 rounded-2xl" />
        </RevealOnScroll>
        <MaskedLines
          className="mt-7 max-w-[650px] font-display text-[32px] leading-[1.12] font-light text-ink sm:text-[40px] md:text-[48px]"
          delayMs={60}
          staggerMs={100}
          lines={lines}
        />
        <RevealOnScroll delayMs={80}>
          <p className="mt-6 max-w-[950px] text-[14px] leading-[1.9] text-taupe md:text-[15px]">
            {sectionDescription}
          </p>
        </RevealOnScroll>

        <div className="mt-14 relative pl-6 md:pl-10 max-w-[1250px]">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-rust/30" />

          <div className="flex flex-col gap-12 md:gap-16">
            {items.map((item, index) => (
              <RevealOnScroll key={item.title} delayMs={100 + index * 80}>
                <div className="relative">
                  <span
                    className={`absolute -left-[25px] md:-left-[41px] top-1.5 h-2 w-2 rounded-full ${
                      item.dotColor || "bg-rust"
                    }`}
                  />
                  <p className="font-label text-[10px] sm:text-[11px] tracking-[0.24em] text-rust uppercase">
                    {item.tagline}
                  </p>
                  <h3 className="mt-2 font-display text-[22px] sm:text-[26px] md:text-[30px] font-light text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[1000px] text-[14px] leading-[1.9] text-taupe md:text-[15px]">
                    {item.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
