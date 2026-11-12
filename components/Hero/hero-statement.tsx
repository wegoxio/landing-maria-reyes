import Image from "next/image";
import { RevealImage } from "@/components/Animations/reveal-image";
import { RevealOnScroll } from "@/components/Animations/reveal-on-scroll";
import { GradientRule } from "@/components/Common/gradient-rule";

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
          <p className="font-display text-[19px] leading-[1.45] font-light text-paper/90 italic md:text-[20px]">
            &quot;Una mirada, una sesión, un proceso&quot;
          </p>

          <p className="mt-5 font-label text-[10px] tracking-[0.22em] text-rust uppercase">
            — María del Carmen Reyes Garrido
          </p>
        </RevealOnScroll>
      </div>
      <GradientRule className="mt-8 md:mt-10" />
    </section>
  );
}
