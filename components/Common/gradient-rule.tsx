/**
 * Regla fina con el degradado de marca (10 paradas).
 * Marca los cortes de sección sin necesidad de un bloque de color.
 *
 * La clase `gradient-rule` activa el dibujado de izquierda a derecha al
 * entrar en el viewport (ver `app/globals.css`).
 */
export function GradientRule({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`gradient-rule h-4 w-full ${className}`}
      style={{ background: "var(--brand-gradient)" }}
    />
  );
}
