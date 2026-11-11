import Link from "next/link";
import { MaskedLines } from "@/components/Animations/masked-lines";
import { RevealOnScroll } from "@/components/Animations/reveal-on-scroll";
import { GradientRule } from "@/components/Common/gradient-rule";

const DISCIPLINES = [
  { name: "Escultura", detail: "Materia · Volumen" },
  { name: "Fotografía", detail: "Luz · Instante" },
];

export function AboutSection() {
  return (
    <section id="about" className="w-full bg-paper-light pt-16 md:pt-20">
      <div className="mx-auto w-full max-w-full px-6 md:px-11">
        <RevealOnScroll>
          <div className="flex items-center gap-4">
            <p className="font-label text-[11px] tracking-[0.26em] text-rust uppercase">
              Sobre mí
            </p>
            <span className="h-px flex-1 bg-ink/12 max-w-[90px]" />
          </div>
          <GradientRule className="h-2! mt-4 max-w-[150px] rounded-2xl" />
        </RevealOnScroll>

        <MaskedLines
          className="mt-9 max-w-[560px] font-display text-[30px] leading-[1.12] font-light text-ink sm:text-[34px] md:text-[40px]"
          delayMs={60}
          staggerMs={100}
          lines={[
            <span key="practica">Una práctica que</span>,
            <span key="disciplinas">une dos disciplinas</span>,
          ]}
        />

        <RevealOnScroll delayMs={100}>
          <p className="mt-8 max-w-[1100px] text-[14px] leading-[1.9] text-taupe md:text-[15px]">
            Mi práctica artística se desarrolla entre la escultura y la
            fotografía. Me interesa cómo la luz transforma la materia y cómo los
            objetos y las imágenes pueden transmitir emociones silenciosas.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delayMs={140}>
          <p className="mt-6 max-w-[1100px] text-[14px] leading-[1.9] text-taupe md:text-[15px]">
            La fotografía me invita a observar con atención, a encuadrar y a
            leer la luz. La escultura me permite trabajar directamente con la
            materia, el volumen, el tiempo y el proceso.
          </p>
        </RevealOnScroll>

        <div className="mt-12 h-px w-full bg-ink/12 md:mt-14" />

        <div className="flex flex-wrap gap-x-16 gap-y-8 pt-9">
          {DISCIPLINES.map((discipline, index) => (
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

        <RevealOnScroll delayMs={100}>
          <Link
            href="/sobre-mi"
            className="mt-10 flex h-14 w-full items-center px-6 font-label text-[11px] tracking-[0.24em] text-ink uppercase transition-colors duration-300 hover:bg-ink hover:text-paper md:mt-12"
            style={{ border: "1px solid rgba(27, 20, 16, 0.22)" }}
          >
            Saber más
          </Link>
        </RevealOnScroll>
      </div>

      <GradientRule className="mt-14 h-2! md:mt-16" />
    </section>
  );
}
