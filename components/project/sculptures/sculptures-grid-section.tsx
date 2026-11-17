"use client";

import React, { ReactNode } from "react";
import { RevealOnScroll } from "@/components/Animations/reveal-on-scroll";
import { GradientRule } from "@/components/Common/gradient-rule";
import { SculptureFlipCard } from "@/components/project/sculptures/sculpture-flip-card";
import type { SculptureItem } from "@/components/project/sculptures/sculpture-types";
import {
  Eyebrow,
  SectionTitle,
} from "@/components/Typography/typography";

export type { SculptureItem } from "@/components/project/sculptures/sculpture-types";

interface SculpturesGridSectionProps {
  id?: string;
  badge?: string;
  eyebrow?: string;
  lines?: ReactNode[];
  items?: SculptureItem[];
  gradientRule?: ReactNode;
}

/*
 * Los datos de cada ficha técnica vienen de los documentos originales del
 * estudio. `dimensions` guarda alto, ancho y profundidad por separado para
 * poder mostrarlos con su propia etiqueta al voltear la card.
 */
const DEFAULT_ITEMS: SculptureItem[] = [
  {
    id: "trespiral",
    category: "ESCULTURA",
    title: "Trespiral",
    description:
      "Curvas de tonos verdes se enlazan en una forma continua. Los huecos y las superficies redondeadas crean un diálogo entre volumen, luz y vacío.",
    imageSrc: "/images/landing/hero-escultura.jpg",
    imageAlt: "Escultura Trespiral",
    technicalSheet: {
      dimensions: { height: "24 cm", width: "30 cm", depth: "27 cm" },
      material: "Bronce, pátina",
      technique: "Cera perdida",
      year: "2007",
    },
  },
  {
    id: "core",
    category: "ESCULTURA",
    title: "CORE",
    description:
      "Un volumen claro de textura porosa se abre en cavidades suaves. La luz recorre sus bordes y acentúa el contraste entre la masa y el espacio interior.",
    imageSrc: "/images/project/sculptures/core-sculpture.jpg",
    imageAlt: "Escultura CORE",
    technicalSheet: {
      dimensions: { height: "37 cm", width: "25 cm", depth: "21 cm" },
      material: "Piedra caliza de Cumarebo",
      technique: "Talla directa",
      year: "2021",
    },
  },
  {
    id: "insight",
    category: "ESCULTURA",
    title: "INSIGHT",
    description:
      "Planos curvos de tonos claros se despliegan alrededor de una abertura central. Sus ondulaciones producen cambios de luz y sombra sobre la superficie.",
    imageSrc: "/images/landing/coleccion-insight.jpg",
    imageAlt: "Escultura INSIGHT",
    technicalSheet: {
      dimensions: { height: "32 cm", width: "47 cm", depth: "20 cm" },
      material: "Piedra caliza de Cumarebo",
      technique: "Talla directa",
      year: "2021",
    },
  },
  {
    id: "torso",
    category: "ESCULTURA",
    title: "Torso",
    description:
      "Una figura blanca de contornos geométricos evoca la estructura de un torso. Dos soportes la elevan sobre una base de madera y refuerzan su presencia vertical.",
    imageSrc: "/images/project/sculptures/torso-sculpture.jpg",
    imageAlt: "Escultura Torso",
    technicalSheet: {
      dimensions: { height: "75 cm", width: "26 cm", depth: "12 cm" },
      material: "Piedra caliza de Cumarebo",
      technique: "Talla directa",
      year: "2002",
    },
  },
  {
    id: "wyngs",
    category: "ESCULTURA",
    title: "Wyngs",
    description:
      "Formas de azul profundo se superponen como alas en expansión. Los reflejos recorren sus pliegues y destacan el ritmo de las curvas.",
    imageSrc: "/images/project/sculptures/wyngs-sculpture.jpg",
    imageAlt: "Escultura Wyngs",
    technicalSheet: {
      dimensions: { height: "24 cm", width: "30 cm", depth: "27 cm" },
      material: "Resina y acrílico",
      technique: "Vaciado en molde",
      year: "2005",
    },
  },
  {
    id: "uneven-twins",
    category: "ESCULTURA",
    title: "Uneven Twins",
    description:
      "Pliegues de tonos cobrizos se entrelazan en una composición asimétrica. Una abertura central introduce ligereza en el conjunto, apoyado sobre una base de madera.",
    imageSrc: "/images/project/sculptures/uneven-twins-sculpture.jpg",
    imageAlt: "Escultura Uneven Twins",
    technicalSheet: {
      dimensions: { height: "27 cm", width: "24 cm", depth: "23 cm" },
      material: "Resina polivinílica, acrílico",
      technique: "Vaciado",
      year: "2008",
    },
  },
  {
    id: "babel",
    category: "ESCULTURA",
    title: "BABEL",
    description:
      "Una forma vertical de tonos verdes reúne salientes, cavidades y aberturas. Su silueta irregular invita a recorrer la pieza de abajo hacia arriba.",
    imageSrc: "/images/project/sculptures/babel-sculpture.jpg",
    imageAlt: "Escultura BABEL",
    technicalSheet: {
      dimensions: { height: "36 cm", width: "9 cm", depth: "11 cm" },
      material: "Arcilla",
      technique: "Modelado en arcilla al horno, acrílico",
      year: "2013",
    },
  },
  {
    id: "cumarebo-5",
    category: "ESCULTURA",
    title: "Cumarebo 5 Michelena",
    description:
      "Un volumen de tonos arena y textura marcada combina dos aberturas con acentos plateados. Las superficies rugosas y reflectantes crean un contraste visual.",
    imageSrc: "/images/project/sculptures/cumarebo-5-sculpture.jpg",
    imageAlt: "Escultura Cumarebo 5 Michelena",
    technicalSheet: {
      dimensions: { height: "42 cm", width: "25 cm", depth: "15 cm" },
      material: "Piedra caliza de Cumarebo y aluminio",
      technique: "Talla directa con incrustaciones de aluminio fundido",
      year: "2024",
    },
  },
  {
    id: "cosmic-teapot",
    category: "ESCULTURA",
    title: "Cosmic Teapot",
    description:
      "Una forma de tonos dorados entrelaza curvas y aberturas circulares. Sus apoyos alargados y su silueta orgánica evocan un objeto imaginario.",
    imageSrc: "/images/project/sculptures/cosmic-teapot-sculpture.jpg",
    imageAlt: "Escultura Cosmic Teapot",
    technicalSheet: {
      dimensions: { height: "29 cm", width: "26 cm", depth: "25 cm" },
      material: "Resina y acrílico",
      technique: "Vaciado en molde",
      year: "2010",
    },
  },
  {
    id: "cumarebo-5-alt",
    category: "ESCULTURA",
    title: "Cumarebo 5",
    description:
      "Dos planos ascendentes se encuentran alrededor de una abertura circular. La textura clara y porosa recoge la luz sobre una base de líneas sencillas.",
    imageSrc: "/images/project/sculptures/cumarebo-5-alt-sculpture.jpg",
    imageAlt: "Escultura Cumarebo 5",
    technicalSheet: {
      dimensions: { height: "33 cm", width: "27 cm", depth: "23 cm" },
      material: "Piedra caliza de Cumarebo",
      technique: "Talla directa",
      year: "2023",
    },
  },
  {
    id: "kali",
    category: "ESCULTURA",
    title: "Kali",
    description:
      "Volúmenes verdes se expanden en distintas direcciones y rodean pequeños vacíos. La composición combina apoyos firmes y curvas que sugieren movimiento.",
    imageSrc: "/images/project/sculptures/kali-sculpture.jpg",
    imageAlt: "Escultura Kali",
    technicalSheet: {
      dimensions: { height: "23 cm", width: "21 cm", depth: "18 cm" },
      material: "Poliflex (masilla náutica)",
      technique: "Vaciado, pátina en acrílico",
      year: "2007",
    },
  },
  {
    id: "manmoth",
    category: "ESCULTURA",
    title: "Manmoth",
    description:
      "Una figura blanca de formas orgánicas reúne varios apoyos y un arco superior. Sus aberturas permiten que la luz atraviese la pieza y dibuje su estructura.",
    imageSrc: "/images/project/sculptures/manmoth-sculpture.jpg",
    imageAlt: "Escultura Manmoth",
    technicalSheet: {
      dimensions: { height: "29 cm", width: "26 cm", depth: "25 cm" },
      material: "Resina y acrílico",
      technique: "Vaciado en molde",
      year: "2010",
    },
  },
  {
    id: "samotracia",
    category: "ESCULTURA",
    title: "Samotracia",
    description:
      "Una silueta vertical de tonos cobrizos se construye mediante pliegues y giros. La luz acentúa sus relieves y la sensación de movimiento ascendente.",
    imageSrc: "/images/project/sculptures/samotracia-sculpture.jpg",
    imageAlt: "Escultura Samotracia",
    technicalSheet: {
      dimensions: { height: "33 cm", width: "22 cm", depth: "11 cm" },
      material: "Resina y acrílico",
      technique: "Vaciado en molde",
      year: "2011",
    },
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
            <Eyebrow
              as="div"
              tone="ink"
              className="inline-flex items-center justify-center rounded-full border border-ink/20 px-5 py-2"
            >
              {badge}
            </Eyebrow>
          </RevealOnScroll>
        )}

        {eyebrow && (
          <RevealOnScroll delayMs={40}>
            <div className="mt-7 flex items-center gap-4">
              <Eyebrow as="p" tone="rust" className="whitespace-nowrap">
                {eyebrow}
              </Eyebrow>
              <GradientRule className="h-px! max-w-27.5" />
            </div>
          </RevealOnScroll>
        )}

        <RevealOnScroll delayMs={50}>
          <GradientRule className="h-2! mt-4 max-w-[150px] rounded-2xl" />
        </RevealOnScroll>

        <SectionTitle lines={lines} className="mt-8" />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {items.map((item, index) => (
            <SculptureFlipCard
              key={item.id || item.title}
              item={item}
              delayMs={80 + (index % 3) * 60}
            />
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
