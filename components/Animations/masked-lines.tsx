"use client";

import { useCallback, useEffect, useRef, type CSSProperties } from "react";
import { observeReveal } from "./observe-reveal";
import { supportsScrollTimeline } from "./supports-scroll-timeline";
import { useReducedMotion } from "./use-reduced-motion";

type MaskedLinesProps = {
  lines: React.ReactNode[];
  /**
   * Elemento que envuelve las líneas. Por defecto es un `div`, pero los
   * títulos usan "h1", "h2" o "h3" para que la página conserve su jerarquía.
   */
  as?: "div" | "h1" | "h2" | "h3" | "h4";
  className?: string;
  lineClassName?: string;
  delayMs?: number;
  staggerMs?: number;
  /**
   * "load": entrada con CSS al cargar la página (no necesita JavaScript).
   * "scroll": se revela al entrar en el viewport.
   */
  mode?: "load" | "scroll";
};

/**
 * Cada línea emerge desde una ranura (overflow hidden).
 *
 * En modo "load" la animación es CSS puro. En modo "scroll" la vía principal
 * es `animation-timeline: view()`; el JS solo interviene como respaldo en
 * navegadores sin ese soporte.
 */
export function MaskedLines({
  lines,
  as = "div",
  className,
  lineClassName = "",
  delayMs = 0,
  staggerMs = 90,
  mode = "scroll",
}: MaskedLinesProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  /*
   * Se usa una función de ref en lugar de un objeto porque el elemento puede
   * cambiar de etiqueta (div → h2) y porque así el mismo ref sirve para
   * cualquiera de las etiquetas admitidas.
   */
  const setContainerRef = useCallback((node: HTMLElement | null) => {
    containerRef.current = node;
  }, []);

  useEffect(() => {
    const container = containerRef.current;

    if (
      !container ||
      prefersReducedMotion ||
      mode !== "scroll" ||
      supportsScrollTimeline()
    ) {
      return;
    }

    const wrappers = Array.from(
      container.querySelectorAll<HTMLElement>("[data-mask-line]"),
    );

    if (wrappers.length === 0) {
      return;
    }

    const rect = container.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;

    if (isInViewport) {
      return;
    }

    wrappers.forEach((wrapper, index) => {
      wrapper.style.setProperty(
        "--mask-delay",
        `${delayMs + index * staggerMs}ms`,
      );

      const inner = wrapper.firstElementChild;
      if (inner instanceof HTMLElement) {
        inner.style.transition = "none";
      }
    });

    container.classList.add("mask-pending");
    void container.offsetHeight;

    wrappers.forEach((wrapper) => {
      const inner = wrapper.firstElementChild;
      if (inner instanceof HTMLElement) {
        inner.style.transition = "";
      }
    });

    const stopObserving = observeReveal(container, () => {
      container.classList.remove("mask-pending");
      container.classList.add("mask-visible");
    });

    return stopObserving;
  }, [delayMs, mode, prefersReducedMotion, staggerMs]);

  const containerClass = `${mode === "load" ? "mask-load" : "mask-scroll"} ${
    className ?? ""
  }`;

  const children = lines.map((line, index) => (
    <span
      key={index}
      data-mask-line
      className="mask-line block overflow-hidden pb-[0.08em]"
    >
      <span
        className={`block will-change-transform ${lineClassName}`}
        style={
          mode === "load"
            ? ({
                "--mask-delay": `${delayMs + index * staggerMs}ms`,
              } as CSSProperties)
            : undefined
        }
      >
        {line}
      </span>
    </span>
  ));

  switch (as) {
    case "h1":
      return (
        <h1 ref={setContainerRef} className={containerClass}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 ref={setContainerRef} className={containerClass}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 ref={setContainerRef} className={containerClass}>
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4 ref={setContainerRef} className={containerClass}>
          {children}
        </h4>
      );
    default:
      return (
        <div ref={setContainerRef} className={containerClass}>
          {children}
        </div>
      );
  }
}
