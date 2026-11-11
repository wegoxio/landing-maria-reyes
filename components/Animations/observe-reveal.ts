/**
 * Revelado por viewport con doble garantía:
 *  1. IntersectionObserver (rendimiento ideal).
 *  2. Listener de scroll con requestAnimationFrame (respaldo).
 *
 * Ambos caminos son idempotentes: `onReveal` se ejecuta una sola vez.
 */
export function observeReveal(
  element: HTMLElement,
  onReveal: () => void
): () => void {
  let done = false;
  let frame = 0;
  let observer: IntersectionObserver | null = null;

  const onScroll = () => {
    if (!frame) {
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        check();
      });
    }
  };

  const finish = () => {
    if (done) {
      return;
    }

    done = true;
    onReveal();
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
    observer?.disconnect();
  };

  const check = () => {
    const rect = element.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight * 0.92 && rect.bottom > 0;

    if (isVisible) {
      finish();
    }
  };

  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        finish();
      }
    },
    { threshold: 0.05 }
  );

  observer.observe(element);
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  check();

  return () => {
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", onScroll);
    observer?.disconnect();

    if (frame) {
      window.cancelAnimationFrame(frame);
    }
  };
}
