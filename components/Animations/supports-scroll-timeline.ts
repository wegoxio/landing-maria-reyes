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

/**
 * Detecta el soporte de líneas de tiempo con nombre (`view-timeline-name`).
 *
 * Es un subconjunto más exigente que `animation-timeline: view()` y lo
 * necesita el revelado de imágenes: el marco declara la línea de tiempo y
 * la capa interior la consume, de modo que la medición no depende de una
 * transformación en curso.
 */
export function supportsNamedViewTimeline() {
  return (
    supportsScrollTimeline() &&
    typeof CSS !== "undefined" &&
    typeof CSS.supports === "function" &&
    CSS.supports("view-timeline-name: --reveal-image")
  );
}
