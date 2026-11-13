"use client";

import { useEffect, useRef, useState } from "react";
import { observeReveal } from "./observe-reveal";

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
 * Revela una imagen de abajo hacia arriba cuando aparece en pantalla.
 *
 * A diferencia de las animaciones ligadas al scroll —que se ejecutan en
 * función de la posición y se pasan de largo al hacer scroll rápido—, esta
 * animación se dispara una sola vez cuando la imagen entra en el viewport y
 * dura lo que dura el keyframe.
 *
 * Con `prefers-reduced-motion` la observación sigue activa: es el CSS el
 * que cambia el ascenso por un fundido, de modo que la imagen siempre
 * aparece, solo que sin desplazamientos.
 *
 * El estado oculto lo aplica el JavaScript, nunca el HTML del servidor:
 * sin JavaScript la imagen es visible.
 */
export function RevealImage({
  children,
  className = "",
  innerClassName = "",
  delayMs = 0,
}: RevealImageProps) {
  const frameRef = useRef<HTMLDivElement | null>(null);
  // null = aún sin decidir. En el servidor y en la hidratación no hay
  // ninguna clase, de modo que la imagen es visible: el estado oculto lo
  // aplica el JavaScript, nunca el HTML del servidor.
  const [state, setState] = useState<"hidden" | "revealed" | null>(null);

  useEffect(() => {
    const frame = frameRef.current;

    if (!frame) {
      return;
    }

    frame.style.setProperty("--reveal-delay", `${delayMs}ms`);

    // Si ya está en pantalla se revela sin estado oculto: en el primer
    // pintado no debe verse un parpadeo.
    const rect = frame.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setState("revealed");
      return;
    }

    setState("hidden");

    const stopObserving = observeReveal(frame, () => {
      setState("revealed");
    });

    return stopObserving;
  }, [delayMs]);

  const stateClass =
    state === "revealed" ? "is-revealed" : state === "hidden" ? "is-hidden" : "";

  return (
    <div
      ref={frameRef}
      className={`reveal-image relative overflow-hidden ${className}`}
    >
      <div
        className={`reveal-image__inner absolute inset-0 ${stateClass} ${innerClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
