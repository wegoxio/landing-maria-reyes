import Image from "next/image";
import { RevealImage } from "@/components/Animations/reveal-image";
import { RevealOnScroll } from "@/components/Animations/reveal-on-scroll";
import { GradientRule } from "@/components/Common/gradient-rule";
import { Eyebrow, Subtitle } from "@/components/Typography/typography";

export function HeroStatement() {
  return (
    <section className="w-full bg-paper pt-6 md:pt-8">
      <div className="mx-auto grid w-full max-w-full gap-4 px-6 md:grid-cols-[1.8fr_1fr] md:gap-0 md:px-11">
        <RevealImage className="aspect-[2/1] w-full bg-white">
          <Image
            src="/images/landing/band-escultura.jpg"
            alt="Escultura de María del Carmen Reyes Garrido"
            fill
            sizes="(max-width: 768px) 92vw, 65vw"
            className="object-contain"
          />
        </RevealImage>

        <RevealOnScroll
          delayMs={90}
          className="flex flex-col items-end justify-end bg-[linear-gradient(135deg,#201613_0%,#2a201c_48%,#20292d_100%)] px-7 py-9 text-right md:px-9 md:py-10"
        >
          <Subtitle
            as="p"
            tone="current"
            className="text-paper/90 italic"
          >
            &quot;Una mirada, una sesión, un proceso&quot;
          </Subtitle>

          <Eyebrow as="p" tone="rust" className="mt-5">
            — María del Carmen Reyes Garrido
          </Eyebrow>
        </RevealOnScroll>
      </div>
      <GradientRule className="mt-8 md:mt-10" />
    </section>
  );
}
