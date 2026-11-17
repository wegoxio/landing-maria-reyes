import Image from "next/image";
import Link from "next/link";
import { RevealImage } from "@/components/Animations/reveal-image";
import { RevealOnScroll } from "@/components/Animations/reveal-on-scroll";
import {
  BUTTON_LABEL_CLASS,
  BodyText,
  CardTitle,
  Eyebrow,
  SectionTitle,
  Subtitle,
} from "@/components/Typography/typography";

const COLECCION = [
  {
    id: "troias",
    label: "Escultura",
    title: "Trespíral",
    image: "/images/landing/coleccion-troias.jpg",
    alt: "Escultura de cerámica verde turquesa",
    description:
      "Curvas de tonos verdes se enlazan en una forma continua. Los quiebres y las superficies refinadas crean un diálogo entre volumen, luz y vacío.",
  },
  {
    id: "insight",
    label: "Escultura",
    title: "Insight",
    image: "/images/landing/coleccion-insight.jpg",
    alt: "Escultura de cerámica clara sobre pedestal negro",
    description:
      "Pocas curvas de tonos claros se desprotegen alrededor de una abertura central. Sus ondas producen cambios de luz y sombra sobre la superficie.",
  },
  {
    id: "wyngs",
    label: "Escultura",
    title: "Wyngs",
    image: "/images/landing/coleccion-wyngs.jpg",
    alt: "Escultura azul profundo sobre plinto claro",
    description:
      "Formas de azul profundo que se expanden como alas. Los reflejos recorren sus pliegues y disipan el ritmo de las curvas.",
  },
];

const FOTOGRAFIAS = [
  {
    id: "japon",
    year: "2023",
    title: "Japón · Invierno",
    image: "/images/landing/fotografia-01.jpg",
    alt: "Aves y paisajes de invierno",
    description:
      "Aves y paisajes de invierno. El movimiento y el silencio sobre la nieve.",
  },
  {
    id: "paria",
    year: "2025",
    title: "Paria",
    image: "/images/landing/fotografia-02.jpg",
    alt: "Escenas de la costa y la vida cotidiana",
    description:
      "Escenas de la costa y de la vida cotidiana, entre el paisaje y los encuentros.",
  },
  {
    id: "araya",
    year: "2026",
    title: "Araya",
    image: "/images/landing/fotografia-03.jpg",
    alt: "Embarcaciones y paisajes costeros",
    description: "Embarcaciones y paisajes costeros bajo una luz cambiante.",
  },
];

export function PlatformSection() {
  return (
    <section
      id="servicios"
      className="w-full bg-paper pt-16 pb-16 md:pt-20 md:pb-20"
    >
      <div className="mx-auto w-full max-w-full px-6 md:px-11">
        <div className="flex flex-col items-center text-center">
          <RevealOnScroll>
            <Eyebrow as="p" tone="rust">
              Fotografía · Escultura
            </Eyebrow>
          </RevealOnScroll>

          <SectionTitle
            className="mt-7"
            lines={[
              <span key="formas">Dos formas de</span>,
              <span key="observar">
                observar <span className="italic text-rust">el mundo</span>
              </span>,
            ]}
          />

          <RevealOnScroll delayMs={120}>
            <BodyText className="mt-7 max-w-[620px]">
              Cada escultura y cada imagen nacen de la observación, la
              sensibilidad y el proceso.
            </BodyText>
          </RevealOnScroll>
        </div>
        <div
          id="escultura"
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {COLECCION.map((item, index) => (
            <article
              key={item.id}
              id={item.id}
              className="flex h-full flex-col bg-paper p-3 md:p-4"
            >
              <RevealImage
                className="aspect-[4/5] w-full"
                delayMs={70 + (index % 3) * 70}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                  className="object-contain transition-transform duration-700 hover:scale-[1.03]"
                />
              </RevealImage>

              <RevealOnScroll
                delayMs={100 + index * 70}
                className="flex flex-1 flex-col px-1 pt-5"
              >
                <Eyebrow as="p" tone="rust">
                  {item.label}
                </Eyebrow>

                <CardTitle className="mt-2">{item.title}</CardTitle>

                <BodyText className="mt-2">{item.description}</BodyText>
              </RevealOnScroll>
            </article>
          ))}
        </div>

        <RevealOnScroll delayMs={110}>
          <Link
            href="/projects/sculptures"
            className={`mt-12 flex h-14 w-full items-center justify-center border border-ink/20 ${BUTTON_LABEL_CLASS} text-ink transition-colors duration-300 hover:border-rust hover:bg-rust hover:text-paper md:mt-14`}
          >
            Ver colección de esculturas
          </Link>
        </RevealOnScroll>
        <div className="mt-20 md:mt-28">
          <RevealOnScroll>
            <div className="max-w-[700px]">
              <Eyebrow as="p" tone="rust">
                FOTOGRAFÍA &nbsp;·&nbsp; MARÍA REYES
              </Eyebrow>

              <Subtitle className="mt-3">La luz también es materia</Subtitle>

              <BodyText className="mt-4">
                Paisajes, encuentros y vida cotidiana. Una mirada que recorre
                territorios y descubre nuevas relaciones entre la forma, la luz
                y el tiempo.
              </BodyText>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delayMs={80}>
            <div className="mt-10">
              <RevealImage className="aspect-[16/9] w-full bg-white">
                <Image
                  src="/images/landing/featured-photograph.jpg"
                  alt="Curvas, estratos y luz en el interior del cañón"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </RevealImage>

              <div className="mt-3 flex flex-wrap items-center gap-x-8 gap-y-1 font-label uppercase">
                <Eyebrow as="span" tone="rust">
                  UTAH &nbsp;·&nbsp; 2022
                </Eyebrow>
                <span className="text-meta tracking-normal text-taupe">
                  Curvas, estratos y luz en el interior del cañón.
                </span>
              </div>
            </div>
          </RevealOnScroll>
          <div
            id="fotografia"
            className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
          >
            {FOTOGRAFIAS.map((photo, index) => (
              <article key={photo.id} className="flex flex-col">
                <RevealImage
                  className="aspect-[4/3] w-full bg-white"
                  delayMs={70 + (index % 3) * 70}
                >
                  <Image
                    src={photo.image}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 30vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                  />
                </RevealImage>
                <RevealOnScroll delayMs={100 + index * 70} className="mt-4">
                  <Eyebrow as="p" tone="rust">
                    {photo.year}
                  </Eyebrow>
                  <CardTitle className="mt-1">{photo.title}</CardTitle>
                  <BodyText className="mt-2">{photo.description}</BodyText>
                </RevealOnScroll>
              </article>
            ))}
          </div>

          <RevealOnScroll delayMs={120}>
            <Link
              href="/projects/photography"
              className={`mt-14 flex h-14 w-full items-center justify-center border border-ink/20 ${BUTTON_LABEL_CLASS} text-ink transition-colors duration-300 hover:border-rust hover:bg-rust hover:text-paper`}
            >
              Ver galería fotográfica
            </Link>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
