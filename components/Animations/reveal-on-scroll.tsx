"use client";

import { useEffect, useRef } from "react";
import { observeReveal } from "./observe-reveal";
import { supportsScrollTimeline } from "./supports-scroll-timeline";
import { useReducedMotion } from "./use-reduced-motion";

type RevealOnScrollProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  yOffset?: number;
};

/**
 * Revela el contenido al entrar en el viewport.
 *
 * Vía principal: CSS puro (`animation-timeline: view()`), sin JavaScript.
 * Vía de respaldo: JS con IntersectionObserver, solo en navegadores sin
 * soporte. El estado oculto lo aplica siempre el JS, de modo que sin
 * JavaScript el contenido es visible.
 */
export function RevealOnScroll({
  children,
  className,
  delayMs = 0,
  yOffset = 24,
}: RevealOnScrollProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const element = elementRef.current;

    if (!element || prefersReducedMotion || supportsScrollTimeline()) {
      return;
    }

    const rect = element.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

    if (isInViewport) {
      return;
    }

    element.style.setProperty("--reveal-delay", `${delayMs}ms`);
    element.style.setProperty("--reveal-y", `${yOffset}px`);
    element.style.transition = "none";
    element.setAttribute("data-reveal", "hidden");
    void element.offsetHeight;
    element.style.transition = "";

    const stopObserving = observeReveal(element, () => {
      element.setAttribute("data-reveal", "in");
    });

    return stopObserving;
  }, [delayMs, prefersReducedMotion, yOffset]);

  return (
    <div ref={elementRef} data-reveal className={className}>
      {children}
    </div>
  );
}
