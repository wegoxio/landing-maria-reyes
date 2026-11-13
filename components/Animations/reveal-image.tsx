"use client";

import { useEffect, useRef } from "react";
import { observeReveal } from "./observe-reveal";
import { supportsNamedViewTimeline } from "./supports-scroll-timeline";
import { useReducedMotion } from "./use-reduced-motion";

type RevealImageProps = {
  children: React.ReactNode;
  /** Clases del marco: es el que recorta y el que aporta el tamaño. */
  className?: string;
  /** Clases de la capa interior, la que asciende desde abajo. */
  innerClassName?: string;
  /** Retardo del escalonado, en milisegundos. */
  delayMs?: number;
};

/**
 * Revela una imagen de abajo hacia arriba al entrar en el viewport.
 *
 * El marco recorta el contenido (`overflow: hidden`) y la capa interior
 * asciende desde `translateY(100%)` hasta su posición final, con un leve
 * ajuste de escala para que la imagen "asiente" al llegar.
 *
 * Vía principal: CSS puro. El marco declara la línea de tiempo
 * (`view-timeline-name`) y la capa interior la consume, de modo que la
 * medición nunca depende de una transformación en curso.
 *
 * Vía de respaldo: JS con IntersectionObserver, solo en navegadores sin
 * soporte. El estado oculto lo aplica siempre el JS, de modo que sin
 * JavaScript la imagen es visible.
 */
export function RevealImage({
  children,
  className = "",
  innerClassName = "",
  delayMs = 0,
}: RevealImageProps) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const frame = frameRef.current;

    if (!frame || prefersReducedMotion || supportsNamedViewTimeline()) {
      return;
    }

    const rect = frame.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

    if (isInViewport) {
      return;
    }

    frame.style.setProperty("--reveal-delay", `${delayMs}ms`);
    frame.setAttribute("data-reveal-image", "hidden");
    void frame.offsetHeight;

    const stopObserving = observeReveal(frame, () => {
      frame.setAttribute("data-reveal-image", "in");
    });

    return stopObserving;
  }, [delayMs, prefersReducedMotion]);

  return (
    <div ref={frameRef} className={`reveal-image relative overflow-hidden ${className}`}>
      <div className={`reveal-image__inner absolute inset-0 ${innerClassName}`}>
        {children}
      </div>
    </div>
  );
}
