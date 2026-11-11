/**
 * Regla fina con el degradado de marca (10 paradas).
 * Marca los cortes de sección sin necesidad de un bloque de color.
 */
export function GradientRule({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`h-4 w-full ${className}`}
      style={{ background: "var(--brand-gradient)" }}
    />
  );
}
