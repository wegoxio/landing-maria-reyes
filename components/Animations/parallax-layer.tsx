"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "./use-reduced-motion";

type ParallaxLayerProps = {
  children: React.ReactNode;
  /** Desplazamiento total a lo largo del recorrido del elemento. */
  speed?: number;
  className?: string;
};

/**
 * Desplaza la capa en función del scroll sin provocar re-render:
 * escribe directamente sobre el nodo con requestAnimationFrame.
 */
export function ParallaxLayer({
  children,
  speed = 0.18,
  className = "",
}: ParallaxLayerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const layerRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    const layer = layerRef.current;
    if (!container || !layer || prefersReducedMotion) {
      return;
    }

    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const offset = (progress - 0.5) * rect.height * speed;
      layer.style.transform = `translate3d(0, ${offset.toFixed(2)}px, 0)`;
    };

    const schedule = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, [prefersReducedMotion, speed]);

  return (
    <div ref={containerRef} className={className}>
      <div ref={layerRef} className="will-change-transform">
        {children}
      </div>
    </div>
  );
}
