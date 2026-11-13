import React, { ReactNode } from "react";
import Image from "next/image";
import { MaskedLines } from "@/components/Animations/masked-lines";
import { RevealImage } from "@/components/Animations/reveal-image";
import { RevealOnScroll } from "@/components/Animations/reveal-on-scroll";
import { GradientRule } from "@/components/Common/gradient-rule";

export interface SculptureItem {
  id: string;
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

interface SculpturesGridSectionProps {
  id?: string;
  badge?: string;
  eyebrow?: string;
  lines?: ReactNode[];
  items?: SculptureItem[];
  gradientRule?: ReactNode;
}

const DEFAULT_ITEMS: SculptureItem[] = [
  {
    id: "trespiral",
    category: "ESCULTURA",
    title: "Trespiral",
    description:
      "Curvas de tonos verdes se enlazan en una forma continua. Los huecos y las superficies redondeadas crean un diálogo entre volumen, luz y vacío.",
    imageSrc: "/images/landing/hero-escultura.jpg",
    imageAlt: "Escultura Trespiral",
  },
  {
    id: "core",
    category: "ESCULTURA",
    title: "CORE",
    description:
      "Un volumen claro de textura porosa se abre en cavidades suaves. La luz recorre sus bordes y acentúa el contraste entre la masa y el espacio interior.",
    imageSrc: "/images/project/sculptures/core-sculpture.jpg",
    imageAlt: "Escultura CORE",
  },
  {
    id: "insight",
    category: "ESCULTURA",
    title: "INSIGHT",
    description:
      "Planos curvos de tonos claros se despliegan alrededor de una abertura central. Sus ondulaciones producen cambios de luz y sombra sobre la superficie.",
    imageSrc: "/images/landing/coleccion-insight.jpg",
    imageAlt: "Escultura INSIGHT",
  },
  {
    id: "torso",
    category: "ESCULTURA",
    title: "Torso",
    description:
      "Una figura blanca de contornos geométricos evoca la estructura de un torso. Dos soportes la elevan sobre una base de madera y refuerzan su presencia vertical.",
    imageSrc: "/images/project/sculptures/torso-sculpture.jpg", // Ajusta la ruta de la imagen según tu estructura de assets
    imageAlt: "Escultura Torso",
  },
  {
    id: "wyngs",
    category: "ESCULTURA",
    title: "Wyngs",
    description:
      "Formas de azul profundo se superponen como alas en expansión. Los reflejos recorren sus pliegues y destacan el ritmo de las curvas.",
    imageSrc: "/images/project/sculptures/wyngs-sculpture.jpg",
    imageAlt: "Escultura Wyngs",
  },
  {
    id: "uneven-twins",
    category: "ESCULTURA",
    title: "Uneven Twins",
    description:
      "Pliegues de tonos cobrizos se entrelazan en una composición asimétrica. Una abertura central introduce ligereza en el conjunto, apoyado sobre una base de madera.",
    imageSrc: "/images/project/sculptures/uneven-twins-sculpture.jpg",
    imageAlt: "Escultura Uneven Twins",
  },
  {
    id: "babel",
    category: "ESCULTURA",
    title: "BABEL",
    description:
      "Una forma vertical de tonos verdes reúne salientes, cavidades y aberturas. Su silueta irregular invita a recorrer la pieza de abajo hacia arriba.",
    imageSrc: "/images/project/sculptures/babel-sculpture.jpg",
    imageAlt: "Escultura BABEL",
  },
  {
    id: "cumarebo-5",
    category: "ESCULTURA",
    title: "Cumarebo 5",
    description:
      "Un volumen de tonos arena y textura marcada combina dos aberturas con acentos plateados. Las superficies rugosas y reflectantes crean un contraste visual.",
    imageSrc: "/images/project/sculptures/cumarebo-5-sculpture.jpg",
    imageAlt: "Escultura Cumarebo 5",
  },
  {
    id: "cosmic-teapot",
    category: "ESCULTURA",
    title: "Cosmic Teapot",
    description:
      "Una forma de tonos dorados entrelaza curvas y aberturas circulares. Sus apoyos alargados y su silueta orgánica evocan un objeto imaginario.",
    imageSrc: "/images/project/sculptures/cosmic-teapot-sculpture.jpg",
    imageAlt: "Escultura Cosmic Teapot",
  },
  {
    id: "cumarebo-5-alt",
    category: "ESCULTURA",
    title: "Cumarebo 5",
    description:
      "Dos planos ascendentes se encuentran alrededor de una abertura circular. La textura clara y porosa recoge la luz sobre una base de líneas sencillas.",
    imageSrc: "/images/project/sculptures/cumarebo-5-alt-sculpture.jpg",
    imageAlt: "Escultura Cumarebo 5",
  },
  {
    id: "kali",
    category: "ESCULTURA",
    title: "Kali",
    description:
      "Volúmenes verdes se expanden en distintas direcciones y rodean pequeños vacíos. La composición combina apoyos firmes y curvas que sugieren movimiento.",
    imageSrc: "/images/project/sculptures/kali-sculpture.jpg",
    imageAlt: "Escultura Kali",
  },
  {
    id: "manmoth",
    category: "ESCULTURA",
    title: "Manmoth",
    description:
      "Una figura blanca de formas orgánicas reúne varios apoyos y un arco superior. Sus aberturas permiten que la luz atraviese la pieza y dibuje su estructura.",
    imageSrc: "/images/project/sculptures/manmoth-sculpture.jpg",
    imageAlt: "Escultura Manmoth",
  },
  {
    id: "samotracia",
    category: "ESCULTURA",
    title: "Samotracia",
    description:
      "Una silueta vertical de tonos cobrizos se construye mediante pliegues y giros. La luz acentúa sus relieves y la sensación de movimiento ascendente.",
    imageSrc: "/images/project/sculptures/samotracia-sculpture.jpg",
    imageAlt: "Escultura Samotracia",
  },
];

const DEFAULT_LINES = [<span key="title">Colección de esculturas</span>];

export function SculpturesGridSection({
  id = "coleccion-esculturas",
  badge = "ESCULTURA · COLECCIÓN",
  eyebrow = "OBRA",
  lines = DEFAULT_LINES,
  items = DEFAULT_ITEMS,
  gradientRule,
}: SculpturesGridSectionProps) {
  return (
    <section id={id} className="w-full bg-paper-light pt-16 md:pt-20">
      <div className="mx-auto w-full max-w-full px-6 md:px-11">
        {badge && (
          <RevealOnScroll>
            <div className="inline-flex items-center justify-center rounded-full border border-ink/20 px-5 py-1.5 font-label text-[11px] tracking-[0.26em] text-ink uppercase">
              {badge}
            </div>
          </RevealOnScroll>
        )}

        {eyebrow && (
          <RevealOnScroll delayMs={40}>
            <div className="mt-7 flex items-center gap-4">
              <p className="font-label text-[11px] tracking-[0.24em] text-rust uppercase whitespace-nowrap">
                {eyebrow}
              </p>
              <GradientRule className="h-px! max-w-27.5" />
            </div>
          </RevealOnScroll>
        )}

        <RevealOnScroll delayMs={50}>
          <GradientRule className="h-2! mt-4 max-w-[150px] rounded-2xl" />
        </RevealOnScroll>

        <MaskedLines
          className="mt-8 font-display text-[32px] leading-[1.12] font-light text-ink sm:text-[40px] md:text-[48px]"
          delayMs={60}
          staggerMs={100}
          lines={lines}
        />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {items.map((item, index) => (
            <article key={item.id || item.title} className="flex flex-col h-full overflow-hidden">
              {/* Contenedor superior de la Imagen */}
              <RevealImage
                className="aspect-square w-full bg-white border border-ink/[0.03]"
                innerClassName="p-6"
                delayMs={80 + index * 60}
              >
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt || item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-4 transition-transform duration-700 hover:scale-[1.04]"
                />
              </RevealImage>

              {/* Bloque inferior de información con fondo beige suave */}
              <RevealOnScroll
                delayMs={120 + index * 60}
                className="flex flex-1 flex-col justify-between bg-black/[0.025] p-6 md:p-7 border-t-0 border border-ink/[0.03]"
              >
                <div>
                  {/* Etiqueta superior */}
                  <p className="font-label text-[10px] tracking-[0.24em] text-rust uppercase">
                    {item.category}
                  </p>

                  {/* Título de la pieza */}
                  <h3 className="mt-2 font-display text-[22px] font-light text-ink sm:text-[24px]">
                    {item.title}
                  </h3>

                  {/* Descripción */}
                  <p className="mt-3 text-[13px] leading-[1.8] text-taupe md:text-[14px]">
                    {item.description}
                  </p>
                </div>
              </RevealOnScroll>
            </article>
          ))}
        </div>
      </div>
      {gradientRule && (
        <RevealOnScroll delayMs={100}>
          <div className="mt-14 flex justify-center">{gradientRule}</div>
        </RevealOnScroll>
      )}
    </section>
  );
}
