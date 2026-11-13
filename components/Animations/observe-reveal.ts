/**
 * Observación compartida del viewport.
 *
 * Un único IntersectionObserver y un único listener de scroll atienden a
 * todos los elementos revelados de la página. Con un observer por
 * elemento, la galería de fotografía registraba más de cien listeners de
 * scroll y más de cien callbacks por cada frame de scroll.
 *
 * `onReveal` se ejecuta una sola vez por elemento: el revelado es
 * idempotente.
 */

type RevealCallback = () => void;

const pending = new Map<Element, RevealCallback>();

let observer: IntersectionObserver | null = null;
let scrollFrame = 0;
let isListening = false;

/**
 * Un elemento se revela cuando su borde superior pasa de esta línea.
 *
 * Se mira solo el borde superior y no el inferior a propósito: si el
 * visitante baja de golpe y el elemento llega a quedar por encima de la
 * pantalla sin llegar a verse en ningún frame, ya fue visto y debe quedar
 * revelado. Exigir que siga en pantalla lo dejaría invisible para siempre.
 */
function hasEntered(element: Element) {
  const rect = element.getBoundingClientRect();

  return rect.top < window.innerHeight * 0.92;
}

function complete(element: Element) {
  const callback = pending.get(element);

  if (!callback) {
    return;
  }

  pending.delete(element);
  observer?.unobserve(element);
  callback();
}

function checkPending() {
  scrollFrame = 0;

  for (const element of pending.keys()) {
    if (hasEntered(element)) {
      complete(element);
    }
  }

  if (pending.size === 0) {
    stopListening();
  }
}

function getObserver() {
  if (!observer) {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            complete(entry.target);
          }
        }
      },
      { threshold: 0 }
    );
  }

  return observer;
}

function onScroll() {
  if (!scrollFrame) {
    scrollFrame = window.requestAnimationFrame(checkPending);
  }
}

function startListening() {
  if (isListening) {
    return;
  }

  isListening = true;
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
}

function stopListening() {
  if (!isListening) {
    return;
  }

  isListening = false;
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("resize", onScroll);
}

/**
 * Avisa cuando el elemento entra en pantalla. Devuelve la función de
 * limpieza, que cancela la observación de ese elemento.
 */
export function observeReveal(
  element: HTMLElement,
  onReveal: () => void
): () => void {
  pending.set(element, onReveal);
  getObserver().observe(element);
  startListening();

  // Si ya está en pantalla, se revela de inmediato.
  if (hasEntered(element)) {
    complete(element);
  }

  return () => {
    pending.delete(element);
    observer?.unobserve(element);
  };
}
