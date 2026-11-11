# landing-maria-reyes

Landing page de **María del Carmen Reyes Garrido**, estudio de arte y diseño en
Caracas: escultura, fotografía, textil y diseño de objetos.

Proyecto en **español únicamente**, sin internacionalización (i18n). La
arquitectura replica la del proyecto `agrotrust` (una carpeta por sección,
componentes independientes, tokens de diseño centralizados) con el stack de
dependencias actualizado.

## Stack

| Paquete | Versión | Nota |
| --- | --- | --- |
| `next` | 16.4.6 | Turbopack por defecto, Cache Components y Partial Prefetching activos |
| `react` / `react-dom` | 19.3.1 | |
| `tailwindcss` | 4.3.5 | v4 vía plugin de PostCSS |
| `typescript` | 6.0.3 | TS 7 requiere `useTypeScriptCli` (experimental) en Next |
| `eslint` | 10.14.0 | Configuración flat de `eslint-config-next` 16.4.6 |

El gestor de paquetes es **pnpm** (12.18.0), alineado con `agrotrust`.

## Comandos

```bash
pnpm install       # instalar dependencias
pnpm dev           # servidor de desarrollo en http://localhost:3000
pnpm lint          # ESLint (configuración flat)
pnpm typecheck     # tsc --noEmit
pnpm build         # build de producción
pnpm start         # servidor de producción
```

## Sistema de diseño

Todo vive en `app/globals.css`: paleta, tipografías y animaciones.

**Paleta**

| Token | Valor | Uso |
| --- | --- | --- |
| `--paper` | `#f5ede3` | Fondo principal (papel) |
| `--paper-light` | `#faf6f1` | Secciones claras y tarjetas |
| `--paper-deep` | `#ebe0d4` | Secciones alternas |
| `--ink` | `#2a1f1a` | Títulos, texto y secciones oscuras |
| `--taupe` | `#8c8073` | Texto secundario |
| `--rust` | `#c4694a` | Acento: frases en cursiva, etiquetas y botones |
| `--rust-soft` | `#d4866a` | Estado hover del acento |
| `--nav-ink` | `#5c4840` | Letras del navbar |
| `--nav-bg` | `#faf6f1eb` | Fondo del navbar (crema translúcido) |

**Degradado de marca** (`--brand-gradient`, 10 paradas): terracota → arena →
gris azulado → rosa → crema. Se usa en las reglas finas que separan secciones
(`components/Common/gradient-rule.tsx`).

**Tipografías**

| Rol | Fuente | Uso |
| --- | --- | --- |
| Display | Cormorant Garamond (300/400 + itálica) | Títulos, citas, monograma |
| Body | Cormorant Garamond | Párrafos |
| Label | Cormorant Garamond | Etiquetas y botones en mayúsculas con tracking |
| Nav | Jost | Navegación (`--nav-ink`) |

Todo el texto usa Cormorant Garamond salvo los enlaces del navbar, que van en
Jost con el tono `#5C4840`.

## Estructura

```
app/
  layout.tsx            # Layout raíz: <html lang="es">, las dos fuentes y metadatos
  page.tsx              # Home: compone las secciones en orden
  globals.css           # Tokens, animaciones y estilos base
  icon.svg              # Favicon
  privacidad/page.tsx   # /privacidad
  terminos/page.tsx     # /terminos
components/
  About/                # "Sobre mí" de la landing
  Animations/           # Primitivas de movimiento (ver abajo)
  BecomePartner/        # Bloque "¿Tienes algo en mente? / ¡Hablemos!"
  Common/               # Piezas compartidas (logotipo, enlaces, reglas, legales)
  Footer/               # Pie de página
  Hero/                 # Cabecera, portada, banda con la cita y franja a sangre
  Platform/             # Servicios: colección de esculturas y bloque de fotografía
```

Cada sección es un componente independiente que se importa en `app/page.tsx`.

## Animaciones

`components/Animations/` concentra todo el movimiento:

| Componente | Qué hace |
| --- | --- |
| `masked-lines.tsx` | Cada línea del título emerge desde una ranura (`overflow: hidden`) |
| `reveal-on-scroll.tsx` | Entrada con desplazamiento y fundido |
| `parallax-layer.tsx` | Capa que se desplaza con el scroll |
| `use-reduced-motion.ts` | Detecta `prefers-reduced-motion` |

La vía principal es **CSS puro** (`animation-timeline: view()`), sin JavaScript
ni mediciones en el navegador. Para navegadores sin soporte, hay un respaldo
en JavaScript con `IntersectionObserver`.

Reglas de la casa:

- El contenido **nunca** queda invisible si el JavaScript falla: el estado
  oculto solo lo aplica el JS, nunca el HTML del servidor.
- `prefers-reduced-motion: reduce` desactiva todas las transiciones.

## Imágenes

Las imágenes de `public/images/landing/` están **vacías**: son bloques de color
con el tamaño y el tono de fondo correctos, listos para que las reemplaces
subiendo tu foto encima con el mismo nombre.

| Archivo | Uso | Proporción |
| --- | --- | --- |
| `hero-escultura.jpg` | Escultura de la portada | 3:4 |
| `band-escultura.jpg` | Escultura junto al panel de la cita | 2:1 |
| `band-hero.jpg` | Imagen a sangre completa | 16:9 |
| `coleccion-troias.jpg` | Pieza "Trespíral" de la colección | 4:5 |
| `coleccion-insight.jpg` | Pieza "Insight" de la colección | 4:5 |
| `coleccion-wyngs.jpg` | Pieza "Wyngs" de la colección | 4:5 |
| `fotografia-01.jpg` | Hueco de fotografía 01 | 3:4 |
| `fotografia-02.jpg` | Hueco de fotografía 02 | 3:4 |
| `fotografia-03.jpg` | Hueco de fotografía 03 | 3:4 |

Las esculturas se muestran completas (`object-contain` sobre fondo blanco), sin
recortes. Para cambiar una imagen basta con sobrescribir el archivo conservando
el nombre.

## Contacto

Los canales de contacto están centralizados en
`components/Common/contact-links.ts`. Sustituye esas direcciones por las
definitivas antes de publicar:

```ts
export const CONTACT_LINKS = {
  whatsapp: "https://wa.me/",
  instagram: "https://instagram.com/",
  email: "mailto:correo@ejemplo.com",
} as const;
```

## Rutas

| Ruta | Descripción |
| --- | --- |
| `/` | Landing principal |
| `/privacidad` | Política de privacidad |
| `/terminos` | Términos y condiciones |

## Despliegue

Compatible con Vercel: Next.js detecta el proyecto automáticamente y ejecuta
`pnpm build` como comando de compilación.
