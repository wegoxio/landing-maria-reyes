"use client";

import { useSyncExternalStore } from "react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

let mediaQuery: MediaQueryList | null = null;

/**
 * Una sola instancia de MediaQueryList para toda la aplicación: evita crear
 * un objeto nuevo en cada lectura, algo que pesa cuando hay muchas
 * animaciones en la misma página.
 */
function getMediaQuery() {
  if (!mediaQuery) {
    mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
  }

  return mediaQuery;
}

function subscribe(onStoreChange: () => void) {
  const query = getMediaQuery();
  query.addEventListener("change", onStoreChange);

  return () => {
    query.removeEventListener("change", onStoreChange);
  };
}

function getSnapshot() {
  return getMediaQuery().matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * Indica si el usuario pidió menos movimiento en el sistema operativo.
 * Se resuelve como store externo para evitar setState dentro de un efecto.
 */
export function useReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
