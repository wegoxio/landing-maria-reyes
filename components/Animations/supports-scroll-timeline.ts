/**
 * Detecta el soporte de animaciones ligadas al scroll en CSS.
 * Si el navegador las soporta, la página no necesita JavaScript
 * para revelar el contenido.
 */
export function supportsScrollTimeline() {
  return (
    typeof CSS !== "undefined" &&
    typeof CSS.supports === "function" &&
    CSS.supports("animation-timeline: view()")
  );
}
