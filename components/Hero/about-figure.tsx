import Image from "next/image";
import { ParallaxLayer } from "@/components/Animations/parallax-layer";

export function AboutFigure() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <ParallaxLayer className="relative" speed={0.08}>
        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src="/images/sobre-mi/escultura-pedestal.jpg"
              alt="Escultura de cerámica sobre pedestal negro en una galería"
              fill
              sizes="(max-width: 768px) 100vw, 520px"
              className="object-cover"
            />
          </div>
        </div>
      </ParallaxLayer>
    </section>
  );
}
