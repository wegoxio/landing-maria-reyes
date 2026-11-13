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
| `--muted-brown` | `#8c7068` | Etiquetas y migas de pan |
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
  about/page.tsx        # Biografía, trayectoria y descarga del currículum
  projects/
    photography/page.tsx # Series fotográficas y galería de 120 imágenes
    sculptures/page.tsx  # Catálogo de la colección de esculturas
  globals.css           # Tokens, animaciones y estilos base
  icon.svg              # Favicon
components/
  About/                # "Sobre mí" de la landing
  Animations/           # Primitivas de movimiento (ver abajo)
  BecomePartner/        # Bloque "¿Tienes algo en mente? / ¡Hablemos!"
  Common/               # Piezas compartidas (logotipo, enlaces, reglas)
  Footer/               # Pie de página
  Hero/                 # Cabecera, portada, banda con la cita y franja a sangre
  Platform/             # Servicios: colección de esculturas y bloque de fotografía
  project/              # Secciones propias de cada proyecto
    photography/        # Índice de series y galería
    sculptures/         # Catálogo y pieza destacada
```

Cada sección es un componente independiente que se importa en `app/page.tsx`.

## Animaciones

`components/Animations/` concentra todo el movimiento:

| Componente | Qué hace |
| --- | --- |
| `reveal-image.tsx` | La imagen asciende desde abajo hasta su sitio al entrar en el viewport |
| `masked-lines.tsx` | Cada línea del título emerge desde una ranura (`overflow: hidden`) |
| `reveal-on-scroll.tsx` | Entrada con desplazamiento y fundido |
| `parallax-layer.tsx` | Capa que se desplaza con el scroll |
| `observe-reveal.ts` | Utilidad de observación (IntersectionObserver + respaldo) |
| `supports-scroll-timeline.ts` | Detección de soporte de animaciones ligadas al scroll |
| `use-reduced-motion.ts` | Detecta `prefers-reduced-motion` |

La vía principal es **CSS puro** (`animation-timeline: view()`), sin JavaScript
ni mediciones en el navegador. Para navegadores sin soporte, hay un respaldo
en JavaScript con `IntersectionObserver`.

El revelado de imágenes usa `view-timeline-name`: el marco de la imagen declara
la línea de tiempo y la capa interior la consume. Así la medición nunca depende
de una transformación en curso, y el marco puede recortar el contenido sin que
la posición de la imagen se desplace.

Además del revelado, `app/globals.css` define:

| Animación | Qué hace |
| --- | --- |
| `gradient-rule` | La regla con el degradado se dibuja de izquierda a derecha |
| `scroll-progress` | Barra de progreso de lectura en la cabecera (`scroll()`) |
| `ken-burns` | Zoom muy lento en la portada y las bandas a sangre |
| `nav-link` | Subrayado que se dibuja al pasar el cursor, y fijo en la sección activa |
| `menu-item` | Entrada escalonada de los enlaces del menú móvil |

Reglas de la casa:

- El contenido **nunca** queda invisible si el JavaScript falla: el estado
  oculto solo lo aplica el JS, nunca el HTML del servidor.
- `prefers-reduced-motion: reduce` desactiva todas las transiciones.
- Las animaciones ligadas al scroll usan la fase **`cover`**, no `entry`. La
  fase `entry` dura lo que el elemento tarda en entrar —unos 190px en la
  galería—, y con scroll rápido la imagen simplemente aparecía. `cover`
  alarga el recorrido hasta unos 420px y el movimiento se percibe entero.

## Imágenes

Las imágenes viven en `public/images/` y se sirven con `next/image`. Hay
**144 archivos**:

| Carpeta | Contenido |
| --- | --- |
| `landing/` | Portada, banda, colección de esculturas y huecos de fotografía |
| `about/` | Piezas destacadas de la biografía |
| `project/sculptures/` | Una imagen por obra del catálogo |
| `project/photography/` | 120 imágenes en 10 series, más la portada de la galería |

Las esculturas se muestran completas (`object-contain` sobre fondo blanco), sin
recortes. Para cambiar una imagen basta con sobrescribir el archivo conservando
el nombre.

### Carga de las imágenes

`next/image` aplica `loading="lazy"` por defecto, así que solo se descargan
las fotos que el visitante va alcanza a ver. La excepción es la imagen de
portada de cada página: es el elemento **LCP** (el mayor visible al cargar),
por lo que lleva `loading="eager"` y `fetchPriority="high"` para que empiece
a descargarse de inmediato.

En Next.js 16 el prop `priority` está deprecado en favor de esas dos
propiedades; usarlo solo genera el `<link rel="preload">` y deja el aviso
de LCP en consola.

> **Importante:** Next.js sirve `public/` distinguiendo mayúsculas y
> minúsculas, aunque el sistema operativo no lo haga. Las extensiones de todas
> las imágenes van **en minúsculas** (`.jpg`) y el código las referencia con
> ese mismo nombre. Si subes una imagen con `.JPG`, rompe el enlace.

### Currículum

El botón «Descarga mi currículum» apunta a
`/files/cv-maria-del-carmen.pdf`. El PDF va en `public/files/`; mientras no
esté ahí, el enlace devuelve un 404.

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
| `/about` | Biografía, trayectoria y currículum |
| `/projects/photography` | Series fotográficas y galería |
| `/projects/sculptures` | Catálogo de la colección de esculturas |

## Navegación

`components/Common/nav-active-state.ts` decide, a partir de la ruta actual,
qué sección está activa. Con ella, la cabecera y el menú móvil marcan en
terracota dónde está el visitante:

| Sección | Estado activo |
| --- | --- |
| `/about` | "Sobre mí" en terracota, con subrayado fijo |
| `/projects/photography` | "Proyectos" en terracota, y "Fotografía" destacado en el desplegable |
| `/projects/sculptures` | "Proyectos" en terracota, y "Escultura" destacado en el desplegable |

El enlace activo lleva `aria-current="page"`, para que el estado también
llegue a los lectores de pantalla.

## Despliegue

Compatible con Vercel: Next.js detecta el proyecto automáticamente y ejecuta
`pnpm build` como comando de compilación.
