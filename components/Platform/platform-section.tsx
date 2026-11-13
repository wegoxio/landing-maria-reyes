import Image from "next/image";
import Link from "next/link";
import { MaskedLines } from "@/components/Animations/masked-lines";
import { RevealImage } from "@/components/Animations/reveal-image";
import { RevealOnScroll } from "@/components/Animations/reveal-on-scroll";

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
            <p className="font-label text-[11px] tracking-[0.26em] text-rust uppercase">
              Fotografía · Escultura
            </p>
          </RevealOnScroll>

          <MaskedLines
            className="mt-7 font-display text-[30px] leading-[1.12] font-light text-ink sm:text-[36px] md:text-[42px]"
            delayMs={60}
            staggerMs={100}
            lines={[
              <span key="formas">Dos formas de</span>,
              <span key="observar">
                observar <span className="italic text-rust">el mundo</span>
              </span>,
            ]}
          />

          <RevealOnScroll delayMs={120}>
            <p className="mt-7 max-w-[620px] text-[14px] leading-[1.8] text-taupe md:text-[15px]">
              Cada escultura y cada imagen nacen de la observación, la
              sensibilidad y el proceso.
            </p>
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
                delayMs={70 + index * 70}
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
                <p className="font-label text-[15px] tracking-[0.24em] text-rust uppercase">
                  {item.label}
                </p>

                <h3 className="mt-2 font-display text-[28px] leading-tight font-light text-ink md:text-[24px]">
                  {item.title}
                </h3>

                <p className="mt-2 text-[15px] leading-[1.7] text-taupe">
                  {item.description}
                </p>
              </RevealOnScroll>
            </article>
          ))}
        </div>

        <RevealOnScroll delayMs={110}>
          <Link
            href="/projects/sculptures"
            className="mt-12 flex h-12 w-full items-center justify-center border border-ink/20 font-label text-[15px] tracking-[0.24em] text-ink uppercase transition-colors duration-300 hover:border-rust hover:bg-rust hover:text-paper md:mt-14"
          >
            Ver colección de esculturas
          </Link>
        </RevealOnScroll>
        <div className="mt-20 md:mt-28">
          <RevealOnScroll>
            <div className="max-w-[700px]">
              <p className="font-label text-[12px] tracking-[0.24em] text-rust uppercase">
                FOTOGRAFÍA &nbsp;·&nbsp; MARÍA REYES
              </p>

              <h3 className="mt-3 font-display text-[30px] leading-tight font-light text-ink md:text-[34px]">
                La luz también es materia
              </h3>

              <p className="mt-4 text-[15px] leading-[1.8] text-taupe md:text-[16px]">
                Paisajes, encuentros y vida cotidiana. Una mirada que recorre
                territorios y descubre nuevas relaciones entre la forma, la luz
                y el tiempo.
              </p>
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

              <div className="mt-3 flex flex-wrap items-center gap-x-8 gap-y-1 text-[12px] tracking-[0.15em] font-label uppercase">
                <span className="text-rust">UTAH &nbsp;·&nbsp; 2022</span>
                <span className="text-taupe text-[12px] tracking-normal">
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
                  delayMs={70 + index * 70}
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
                  <p className="font-label text-[14px] tracking-[0.2em] text-rust uppercase">
                    {photo.year}
                  </p>
                  <h4 className="mt-1 font-display text-[22px] font-light text-ink">
                    {photo.title}
                  </h4>
                  <p className="mt-2 text-[15px] leading-[1.7] text-taupe">
                    {photo.description}
                  </p>
                </RevealOnScroll>
              </article>
            ))}
          </div>

          <RevealOnScroll delayMs={120}>
            <Link
              href="/projects/photography"
              className="mt-14 flex h-12 w-full items-center justify-center border border-ink/20 font-label text-[15px] tracking-[0.24em] text-ink uppercase transition-colors duration-300 hover:border-rust hover:bg-rust hover:text-paper"
            >
              Ver galería fotográfica
            </Link>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
