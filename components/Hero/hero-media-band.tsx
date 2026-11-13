import React, { ReactNode } from "react";
import Image from "next/image";
import { ParallaxLayer } from "@/components/Animations/parallax-layer";

interface HeroMediaBandProps {
  /** Imagen a sangre de la banda. */
  imageSrc?: string;
  imageAlt?: string;
  heightClass?: string;
  backgroundColor?: string;
  gradientRule?: ReactNode;
}

export function HeroMediaBand({
  imageSrc = "/images/landing/band-hero.jpg",
  imageAlt = "Escultura de María del Carmen Reyes Garrido",
  heightClass = "h-[86vh] min-h-[520px] md:h-[92vh]",
  backgroundColor = "bg-white",
  gradientRule,
}: HeroMediaBandProps) {
  return (
    <section className={`w-full overflow-hidden ${backgroundColor}`}>
      <ParallaxLayer className="inset-0" speed={0.1}>
        <div>
          <div>
            <div
              className={`flex justify-center relative w-full ${heightClass}`}
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="100vw"
                className="ken-burns object-contain"
              />
            </div>
          </div>
        </div>
      </ParallaxLayer>
      {gradientRule && <div>{gradientRule}</div>}
    </section>
  );
}
