import React from "react";
import Image from "next/image";
import { RevealImage } from "@/components/Animations/reveal-image";
import { RevealOnScroll } from "@/components/Animations/reveal-on-scroll";

export interface GalleryPhoto {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  isVertical?: boolean;
}

export interface PhotoSeries {
  id: string;
  title: string;
  subtitle?: string;
  metaInfo?: string;
  photos: GalleryPhoto[];
}

const DEFAULT_SERIES_DATA: PhotoSeries[] = [
  {
    id: "araya",
    title: "Araya",
    subtitle:
      "Embarcaciones, rostros y paisajes costeros bajo una luz cambiante.",
    metaInfo: "2026 · 8 IMÁGENES",
    photos: [
      {
        id: "araya-1",
        src: "/images/project/photography/araya/2026/araya_01.jpg",
        alt: "Araya 01",
        caption: "Araya · 01",
      },
      {
        id: "araya-2",
        src: "/images/project/photography/araya/2026/araya_02.jpg",
        alt: "Araya 02",
        caption: "Araya · 02",
      },
      {
        id: "araya-3",
        src: "/images/project/photography/araya/2026/araya_03.jpg",
        alt: "Araya 03",
        caption: "Araya · 03",
      },
      {
        id: "araya-4",
        src: "/images/project/photography/araya/2026/araya_04.jpg",
        alt: "Araya 04",
        caption: "Araya · 04",
      },
      {
        id: "araya-5",
        src: "/images/project/photography/araya/2026/araya_05.jpg",
        alt: "Araya 05",
        caption: "Araya · 05",
      },
      {
        id: "araya-6",
        src: "/images/project/photography/araya/2026/araya_06.jpg",
        alt: "Araya 06",
        caption: "Araya · 06",
        isVertical: true,
      },
      {
        id: "araya-7",
        src: "/images/project/photography/araya/2026/araya_07.jpg",
        alt: "Araya 07",
        caption: "Araya · 07",
      },
      {
        id: "araya-8",
        src: "/images/project/photography/araya/2026/araya_08.jpg",
        alt: "Araya 08",
        caption: "Araya · 08",
      },
    ],
  },
  {
    id: "paria",
    title: "Paria",
    subtitle:
      "Escenas de la costa y de la vida cotidiana, entre el paisaje y los encuentros.",
    metaInfo: "2025 · 7 IMÁGENES",
    photos: [
      {
        id: "paria-1",
        src: "/images/project/photography/paria/2025/paria_01.jpg",
        alt: "Paria 01",
        caption: "Paria · 01",
      },
      {
        id: "paria-2",
        src: "/images/project/photography/paria/2025/paria_02.jpg",
        alt: "Paria 02",
        caption: "Paria · 02",
      },
      {
        id: "paria-3",
        src: "/images/project/photography/paria/2025/paria_03.jpg",
        alt: "Paria 03",
        caption: "Paria · 03",
      },
      {
        id: "paria-4",
        src: "/images/project/photography/paria/2025/paria_04.jpg",
        alt: "Paria 04",
        caption: "Paria · 04",
      },
      {
        id: "paria-5",
        src: "/images/project/photography/paria/2025/paria_05.jpg",
        alt: "Paria 05",
        caption: "Paria · 05",
      },
      {
        id: "paria-6",
        src: "/images/project/photography/paria/2025/paria_06.jpg",
        alt: "Paria 06",
        caption: "Paria · 06",
      },
      {
        id: "paria-7",
        src: "/images/project/photography/paria/2025/paria_07.jpg",
        alt: "Paria 07",
        caption: "Paria · 07",
      },
    ],
  },
  {
    id: "hato-las-caretas",
    title: "Hato Las Caretas",
    subtitle:
      "Vida cotidiana, oficios y paisajes rurales a través de una mirada cercana.",
    metaInfo: "2025 · 11 IMÁGENES",
    photos: [
      {
        id: "hlc-1",
        src: "/images/project/photography/hato_las_caretas/2025/hato-las-careta_01.jpg",
        alt: "Hato Las Caretas 01",
        caption: "Hato Las Caretas · 01",
      },
      {
        id: "hlc-2",
        src: "/images/project/photography/hato_las_caretas/2025/hato-las-careta_02.jpg",
        alt: "Hato Las Caretas 02",
        caption: "Hato Las Caretas · 02",
      },
      {
        id: "hlc-3",
        src: "/images/project/photography/hato_las_caretas/2025/hato-las-careta_03.jpg",
        alt: "Hato Las Caretas 03",
        caption: "Hato Las Caretas · 03",
      },
      {
        id: "hlc-4",
        src: "/images/project/photography/hato_las_caretas/2025/hato-las-careta_04.jpg",
        alt: "Hato Las Caretas 04",
        caption: "Hato Las Caretas · 04",
      },
      {
        id: "hlc-5",
        src: "/images/project/photography/hato_las_caretas/2025/hato-las-careta_05.jpg",
        alt: "Hato Las Caretas 05",
        caption: "Hato Las Caretas · 05",
      },
      {
        id: "hlc-6",
        src: "/images/project/photography/hato_las_caretas/2025/hato-las-careta_06.jpg",
        alt: "Hato Las Caretas 06",
        caption: "Hato Las Caretas · 06",
      },
      {
        id: "hlc-7",
        src: "/images/project/photography/hato_las_caretas/2025/hato-las-careta_07.jpg",
        alt: "Hato Las Caretas 07",
        caption: "Hato Las Caretas · 07",
      },
      {
        id: "hlc-8",
        src: "/images/project/photography/hato_las_caretas/2025/hato-las-careta_08.jpg",
        alt: "Hato Las Caretas 08",
        caption: "Hato Las Caretas · 08",
      },
      {
        id: "hlc-9",
        src: "/images/project/photography/hato_las_caretas/2025/hato-las-careta_09.jpg",
        alt: "Hato Las Caretas 09",
        caption: "Hato Las Caretas · 09",
        isVertical: true,
      },
      {
        id: "hlc-10",
        src: "/images/project/photography/hato_las_caretas/2025/hato-las-careta_10.jpg",
        alt: "Hato Las Caretas 10",
        caption: "Hato Las Caretas · 10",
      },
      {
        id: "hlc-11",
        src: "/images/project/photography/hato_las_caretas/2025/hato-las-careta_11.jpg",
        alt: "Hato Las Caretas 11",
        caption: "Hato Las Caretas · 11",
      },
    ],
  },
  {
    id: "atacama-uyuni",
    title: "Atacama / Uyuni",
    subtitle:
      "Desiertos, salares y reflejos. Formas del territorio que se encuentran con el horizonte.",
    metaInfo: "2024 · 13 IMÁGENES",
    photos: [
      {
        id: "au-1",
        src: "/images/project/photography/atacama-uyuni/2024/atacama-uyuni_01.jpg",
        alt: "Atacama / Uyuni 01",
        caption: "Atacama / Uyuni · 01",
      },
      {
        id: "au-2",
        src: "/images/project/photography/atacama-uyuni/2024/atacama-uyuni_02.jpg",
        alt: "Atacama / Uyuni 02",
        caption: "Atacama / Uyuni · 02",
      },
      {
        id: "au-3",
        src: "/images/project/photography/atacama-uyuni/2024/atacama-uyuni_03.jpg",
        alt: "Atacama / Uyuni 03",
        caption: "Atacama / Uyuni · 03",
      },
      {
        id: "au-4",
        src: "/images/project/photography/atacama-uyuni/2024/atacama-uyuni_04.jpg",
        alt: "Atacama / Uyuni 04",
        caption: "Atacama / Uyuni · 04",
      },
      {
        id: "au-5",
        src: "/images/project/photography/atacama-uyuni/2024/atacama-uyuni_05.jpg",
        alt: "Atacama / Uyuni 05",
        caption: "Atacama / Uyuni · 05",
      },
      {
        id: "au-6",
        src: "/images/project/photography/atacama-uyuni/2024/atacama-uyuni_06.jpg",
        alt: "Atacama / Uyuni 06",
        caption: "Atacama / Uyuni · 06",
        isVertical: true,
      },
      {
        id: "au-7",
        src: "/images/project/photography/atacama-uyuni/2024/atacama-uyuni_07.jpg",
        alt: "Atacama / Uyuni 07",
        caption: "Atacama / Uyuni · 07",
        isVertical: true,
      },
      {
        id: "au-8",
        src: "/images/project/photography/atacama-uyuni/2024/atacama-uyuni_08.jpg",
        alt: "Atacama / Uyuni 08",
        caption: "Atacama / Uyuni · 08",
      },
      {
        id: "au-9",
        src: "/images/project/photography/atacama-uyuni/2024/atacama-uyuni_09.jpg",
        alt: "Atacama / Uyuni 09",
        caption: "Atacama / Uyuni · 09",
      },
      {
        id: "au-10",
        src: "/images/project/photography/atacama-uyuni/2024/atacama-uyuni_10.jpg",
        alt: "Atacama / Uyuni 10",
        caption: "Atacama / Uyuni · 10",
        isVertical: true,
      },
      {
        id: "au-11",
        src: "/images/project/photography/atacama-uyuni/2024/atacama-uyuni_11.jpg",
        alt: "Atacama / Uyuni 11",
        caption: "Atacama / Uyuni · 11",
      },
      {
        id: "au-12",
        src: "/images/project/photography/atacama-uyuni/2024/atacama-uyuni_12.jpg",
        alt: "Atacama / Uyuni 12",
        caption: "Atacama / Uyuni · 12",
      },
      {
        id: "au-13",
        src: "/images/project/photography/atacama-uyuni/2024/atacama-uyuni_13.jpg",
        alt: "Atacama / Uyuni 13",
        caption: "Atacama / Uyuni · 13",
      },
    ],
  },
  {
    id: "japon-invierno",
    title: "Japón · Invierno",
    subtitle:
      "Aves, encuentros y paisajes de invierno. El movimiento y el silencio sobre la nieve.",
    metaInfo: "2023 · 20 IMÁGENES",
    photos: [
      {
        id: "ji-1",
        src: "/images/project/photography/japon-invierno/2023/japon-invierno_01.jpg",
        alt: "Japón Invierno 01",
        caption: "Japón · Invierno 01",
      },
      {
        id: "ji-2",
        src: "/images/project/photography/japon-invierno/2023/japon-invierno_02.jpg",
        alt: "Japón Invierno 02",
        caption: "Japón · Invierno 02",
      },
      {
        id: "ji-3",
        src: "/images/project/photography/japon-invierno/2023/japon-invierno_03.jpg",
        alt: "Japón Invierno 03",
        caption: "Japón · Invierno 03",
      },
      {
        id: "ji-4",
        src: "/images/project/photography/japon-invierno/2023/japon-invierno_04.jpg",
        alt: "Japón Invierno 04",
        caption: "Japón · Invierno 04",
      },
      {
        id: "ji-5",
        src: "/images/project/photography/japon-invierno/2023/japon-invierno_05.jpg",
        alt: "Japón Invierno 05",
        caption: "Japón · Invierno 05",
      },
      {
        id: "ji-6",
        src: "/images/project/photography/japon-invierno/2023/japon-invierno_06.jpg",
        alt: "Japón Invierno 06",
        caption: "Japón · Invierno 06",
      },
      {
        id: "ji-7",
        src: "/images/project/photography/japon-invierno/2023/japon-invierno_07.jpg",
        alt: "Japón Invierno 07",
        caption: "Japón · Invierno 07",
        isVertical: true,
      },
      {
        id: "ji-8",
        src: "/images/project/photography/japon-invierno/2023/japon-invierno_08.jpg",
        alt: "Japón Invierno 08",
        caption: "Japón · Invierno 08",
      },
      {
        id: "ji-9",
        src: "/images/project/photography/japon-invierno/2023/japon-invierno_09.jpg",
        alt: "Japón Invierno 09",
        caption: "Japón · Invierno 09",
      },
      {
        id: "ji-10",
        src: "/images/project/photography/japon-invierno/2023/japon-invierno_10.jpg",
        alt: "Japón Invierno 10",
        caption: "Japón · Invierno 10",
      },
      {
        id: "ji-11",
        src: "/images/project/photography/japon-invierno/2023/japon-invierno_11.jpg",
        alt: "Japón Invierno 11",
        caption: "Japón · Invierno 11",
      },
      {
        id: "ji-12",
        src: "/images/project/photography/japon-invierno/2023/japon-invierno_12.jpg",
        alt: "Japón Invierno 12",
        caption: "Japón · Invierno 12",
      },
      {
        id: "ji-13",
        src: "/images/project/photography/japon-invierno/2023/japon-invierno_13.jpg",
        alt: "Japón Invierno 13",
        caption: "Japón · Invierno 13",
      },
      {
        id: "ji-14",
        src: "/images/project/photography/japon-invierno/2023/japon-invierno_14.jpg",
        alt: "Japón Invierno 14",
        caption: "Japón · Invierno 14",
        isVertical: true,
      },
      {
        id: "ji-15",
        src: "/images/project/photography/japon-invierno/2023/japon-invierno_15.jpg",
        alt: "Japón Invierno 15",
        caption: "Japón · Invierno 15",
      },
      {
        id: "ji-16",
        src: "/images/project/photography/japon-invierno/2023/japon-invierno_16.jpg",
        alt: "Japón Invierno 16",
        caption: "Japón · Invierno 16",
      },
      {
        id: "ji-17",
        src: "/images/project/photography/japon-invierno/2023/japon-invierno_17.jpg",
        alt: "Japón Invierno 17",
        caption: "Japón · Invierno 17",
      },
      {
        id: "ji-18",
        src: "/images/project/photography/japon-invierno/2023/japon-invierno_18.jpg",
        alt: "Japón Invierno 18",
        caption: "Japón · Invierno 18",
      },
      {
        id: "ji-19",
        src: "/images/project/photography/japon-invierno/2023/japon-invierno_19.jpg",
        alt: "Japón Invierno 19",
        caption: "Japón · Invierno 19",
      },
      {
        id: "ji-20",
        src: "/images/project/photography/japon-invierno/2023/japon-invierno_20.jpg",
        alt: "Japón Invierno 20",
        caption: "Japón · Invierno 20",
      },
    ],
  },
  {
    id: "utah",
    title: "Utah",
    subtitle: "Curvas, estratos y formaciones rocosas que cambian con la luz.",
    metaInfo: "2022 · 17 IMÁGENES",
    photos: [
      {
        id: "utah-1",
        src: "/images/project/photography/utah/2022/utah_01.jpg",
        alt: "Utah 01",
        caption: "Utah · 01",
        isVertical: true,
      },
      {
        id: "utah-2",
        src: "/images/project/photography/utah/2022/utah_02.jpg",
        alt: "Utah 02",
        caption: "Utah · 02",
      },
      {
        id: "utah-3",
        src: "/images/project/photography/utah/2022/utah_03.jpg",
        alt: "Utah 03",
        caption: "Utah · 03",
      },
      {
        id: "utah-4",
        src: "/images/project/photography/utah/2022/utah_04.jpg",
        alt: "Utah 04",
        caption: "Utah · 04",
      },
      {
        id: "utah-5",
        src: "/images/project/photography/utah/2022/utah_05.jpg",
        alt: "Utah 05",
        caption: "Utah · 05",
      },
      {
        id: "utah-6",
        src: "/images/project/photography/utah/2022/utah_06.jpg",
        alt: "Utah 06",
        caption: "Utah · 06",
      },
      {
        id: "utah-7",
        src: "/images/project/photography/utah/2022/utah_07.jpg",
        alt: "Utah 07",
        caption: "Utah · 07",
        isVertical: true,
      },
      {
        id: "utah-8",
        src: "/images/project/photography/utah/2022/utah_08.jpg",
        alt: "Utah 08",
        caption: "Utah · 08",
      },
      {
        id: "utah-9",
        src: "/images/project/photography/utah/2022/utah_09.jpg",
        alt: "Utah 09",
        caption: "Utah · 09",
      },
      {
        id: "utah-10",
        src: "/images/project/photography/utah/2022/utah_10.jpg",
        alt: "Utah 10",
        caption: "Utah · 10",
      },
      {
        id: "utah-11",
        src: "/images/project/photography/utah/2022/utah_11.jpg",
        alt: "Utah 11",
        caption: "Utah · 11",
      },
      {
        id: "utah-12",
        src: "/images/project/photography/utah/2022/utah_12.jpg",
        alt: "Utah 12",
        caption: "Utah · 12",
      },
      {
        id: "utah-13",
        src: "/images/project/photography/utah/2022/utah_13.jpg",
        alt: "Utah 13",
        caption: "Utah · 13",
      },
      {
        id: "utah-14",
        src: "/images/project/photography/utah/2022/utah_14.jpg",
        alt: "Utah 14",
        caption: "Utah · 14",
      },
      {
        id: "utah-15",
        src: "/images/project/photography/utah/2022/utah_15.jpg",
        alt: "Utah 15",
        caption: "Utah · 15",
        isVertical: true,
      },
      {
        id: "utah-16",
        src: "/images/project/photography/utah/2022/utah_16.jpg",
        alt: "Utah 16",
        caption: "Utah · 16",
      },
      {
        id: "utah-17",
        src: "/images/project/photography/utah/2022/utah_17.jpg",
        alt: "Utah 17",
        caption: "Utah · 17",
      },
    ],
  },
  {
    id: "cueva-del-fantasma",
    title: "Cueva del Fantasma",
    subtitle:
      "Agua, vegetación y relieve. Un recorrido visual entre cascadas, ríos y paisajes.",
    metaInfo: "2021 · 24 IMÁGENES",
    photos: Array.from({ length: 24 }, (_, i) => {
      const num = String(i + 1).padStart(2, "0");
      return {
        id: `cf-${i + 1}`,
        src: `/images/project/photography/cueva-del-fantasma/2021/cueva-del-fantasma_${num}.jpg`,
        alt: `Cueva del Fantasma ${num}`,
        caption: `Cueva del Fantasma · ${num}`,
        isVertical: [0, 1, 9, 13, 16].includes(i), // <-- Corregido aquí
      };
    }),
  },
  {
    id: "hawaii",
    title: "Hawaii",
    subtitle:
      "Volcanes, agua y vegetación: distintas formas de observar el paisaje.",
    metaInfo: "2020 · 5 IMÁGENES",
    photos: [
      {
        id: "hawaii-1",
        src: "/images/project/photography/hawaii/2020/hawaii_01.jpg",
        alt: "Hawaii 01",
        caption: "Hawaii · 01",
      },
      {
        id: "hawaii-2",
        src: "/images/project/photography/hawaii/2020/hawaii_02.jpg",
        alt: "Hawaii 02",
        caption: "Hawaii · 02",
      },
      {
        id: "hawaii-3",
        src: "/images/project/photography/hawaii/2020/hawaii_03.jpg",
        alt: "Hawaii 03",
        caption: "Hawaii · 03",
      },
      {
        id: "hawaii-4",
        src: "/images/project/photography/hawaii/2020/hawaii_04.jpg",
        alt: "Hawaii 04",
        caption: "Hawaii · 04",
      },
      {
        id: "hawaii-5",
        src: "/images/project/photography/hawaii/2020/hawaii_05.jpg",
        alt: "Hawaii 05",
        caption: "Hawaii · 05",
      },
    ],
  },
  {
    id: "isla-de-pascua-patagonia",
    title: "Isla de Pascua / Patagonia",
    subtitle: "Cielos, paisajes y encuentros en dos territorios de contrastes.",
    metaInfo: "2019 · 8 IMÁGENES",
    photos: [
      {
        id: "ipp-1",
        src: "/images/project/photography/isla-pascua-y-patagonia/2019/isla-pascua-patagonia_01.jpg",
        alt: "Isla de Pascua / Patagonia 01",
        caption: "Isla de Pascua / Patagonia · 01",
      },
      {
        id: "ipp-2",
        src: "/images/project/photography/isla-pascua-y-patagonia/2019/isla-pascua-patagonia_02.jpg",
        alt: "Isla de Pascua / Patagonia 02",
        caption: "Isla de Pascua / Patagonia · 02",
      },
      {
        id: "ipp-3",
        src: "/images/project/photography/isla-pascua-y-patagonia/2019/isla-pascua-patagonia_03.jpg",
        alt: "Isla de Pascua / Patagonia 03",
        caption: "Isla de Pascua / Patagonia · 03",
      },
      {
        id: "ipp-4",
        src: "/images/project/photography/isla-pascua-y-patagonia/2019/isla-pascua-patagonia_04.jpg",
        alt: "Isla de Pascua / Patagonia 04",
        caption: "Isla de Pascua / Patagonia · 04",
      },
      {
        id: "ipp-5",
        src: "/images/project/photography/isla-pascua-y-patagonia/2019/isla-pascua-patagonia_05.jpg",
        alt: "Isla de Pascua / Patagonia 05",
        caption: "Isla de Pascua / Patagonia · 05",
        isVertical: true,
      },
      {
        id: "ipp-6",
        src: "/images/project/photography/isla-pascua-y-patagonia/2019/isla-pascua-patagonia_06.jpg",
        alt: "Isla de Pascua / Patagonia 06",
        caption: "Isla de Pascua / Patagonia · 06",
      },
      {
        id: "ipp-7",
        src: "/images/project/photography/isla-pascua-y-patagonia/2019/isla-pascua-patagonia_07.jpg",
        alt: "Isla de Pascua / Patagonia 07",
        caption: "Isla de Pascua / Patagonia · 07",
      },
      {
        id: "ipp-8",
        src: "/images/project/photography/isla-pascua-y-patagonia/2019/isla-pascua-patagonia_08.jpg",
        alt: "Isla de Pascua / Patagonia 08",
        caption: "Isla de Pascua / Patagonia · 08",
      },
    ],
  },
  {
    id: "turquia",
    title: "Turquía",
    subtitle:
      "Formaciones rocosas y globos sobre un paisaje de volúmenes y luces.",
    metaInfo: "2012 · 7 IMÁGENES",
    photos: [
      {
        id: "turquia-1",
        src: "/images/project/photography/turquia/2012/turquia_01.jpg",
        alt: "Turquía 01",
        caption: "Turquía · 01",
        isVertical: true,
      },
      {
        id: "turquia-2",
        src: "/images/project/photography/turquia/2012/turquia_02.jpg",
        alt: "Turquía 02",
        caption: "Turquía · 02",
        isVertical: true,
      },
      {
        id: "turquia-3",
        src: "/images/project/photography/turquia/2012/turquia_03.jpg",
        alt: "Turquía 03",
        caption: "Turquía · 03",
      },
      {
        id: "turquia-4",
        src: "/images/project/photography/turquia/2012/turquia_04.jpg",
        alt: "Turquía 04",
        caption: "Turquía · 04",
      },
      {
        id: "turquia-5",
        src: "/images/project/photography/turquia/2012/turquia_05.jpg",
        alt: "Turquía 05",
        caption: "Turquía · 05",
      },
      {
        id: "turquia-6",
        src: "/images/project/photography/turquia/2012/turquia_06.jpg",
        alt: "Turquía 06",
        caption: "Turquía · 06",
      },
      {
        id: "turquia-7",
        src: "/images/project/photography/turquia/2012/turquia_07.jpg",
        alt: "Turquía 07",
        caption: "Turquía · 07",
      },
    ],
  },
];

interface PhotographyGallerySectionProps {
  series?: PhotoSeries[];
}

export function PhotographyGallerySection({
  series = DEFAULT_SERIES_DATA,
}: PhotographyGallerySectionProps) {
  return (
    <div className="w-full">
      {series.map((item, index) => {
        const isEven = index % 2 === 0;
        const backgroundClass = isEven ? "bg-paper-light" : "bg-white";

        const captionBgClass = isEven ? "bg-white" : "bg-paper-light";

        const captionColorClass = isEven ? "text-muted-brown" : "text-taupe";

        return (
          <section
            key={item.id}
            id={item.id}
            className={`w-full py-16 md:py-24 transition-colors duration-300 ${backgroundClass}`}
          >
            <div className="mx-auto w-full max-w-full px-6 md:px-11">
              {item.metaInfo && (
                <RevealOnScroll>
                  <p className="font-label text-[14px] tracking-[0.26em] text-rust uppercase">
                    {item.metaInfo}
                  </p>
                </RevealOnScroll>
              )}

              <RevealOnScroll delayMs={30}>
                <h2 className="mt-2 font-display text-[32px] leading-[1.1] font-light text-ink sm:text-[40px] md:text-[48px]">
                  {item.title}
                </h2>
              </RevealOnScroll>

              {item.subtitle && (
                <RevealOnScroll delayMs={50}>
                  <p className="mt-2 max-w-162.5 text-[16px] leading-[1.8] text-taupe md:text-[18px]">
                    {item.subtitle}
                  </p>
                </RevealOnScroll>
              )}

              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:mt-12 items-start">
                {item.photos.map((photo, photoIndex) => {
                  const isVertical = photo.isVertical;

                  return (
                    <div key={photo.id} className="group flex flex-col">
                      <RevealImage
                        className={`w-full bg-black/3 ${
                          isVertical ? "aspect-3/4" : "aspect-4/3"
                        }`}
                        delayMs={60 + (photoIndex % 4) * 40}
                      >
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </RevealImage>

                      {photo.caption && (
                        <RevealOnScroll
                          delayMs={100 + (photoIndex % 4) * 40}
                          className={`px-4 py-3 ${captionBgClass} transition-colors duration-300`}
                        >
                          <span
                            className={`font-label text-[12px] tracking-[0.15em] uppercase block ${captionColorClass}`}
                          >
                            {photo.caption}
                          </span>
                        </RevealOnScroll>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
