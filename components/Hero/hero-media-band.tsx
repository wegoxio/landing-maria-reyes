import Image from "next/image";
import { ParallaxLayer } from "@/components/Animations/parallax-layer";

export function HeroMediaBand() {
  return (
    <section className="w-full overflow-hidden bg-white">
      <ParallaxLayer className="inset-0" speed={0.1}>
        <div>
          <div>
            <div className="flex justify-center relative h-[86vh] min-h-[520px] w-full md:h-[92vh]">
              <Image
                src="/images/landing/band-hero.jpg"
                alt="Escultura de María del Carmen Reyes Garrido"
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </ParallaxLayer>
    </section>
  );
}
