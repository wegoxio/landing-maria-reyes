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
| `resend` | 6.38.0 | Envío de los mensajes del formulario de contacto |

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

El formulario de contacto lee su configuración de `.env.local` (ver
[Contacto](#contacto)). Sin ese archivo el sitio arranca igual, pero el
formulario avisa de que no está disponible.

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
  contacto/
    page.tsx            # Página de contacto con el formulario
    actions.ts          # Server Action: valida y entrega el mensaje por Resend
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
  Contact/              # Formulario de contacto y bloque de la página
  Footer/               # Pie de página
  Hero/                 # Cabecera, portada, banda con la cita y franja a sangre
  Platform/             # Servicios: colección de esculturas y bloque de fotografía
  project/              # Secciones propias de cada proyecto
    photography/        # Índice de series y galería
    sculptures/         # Catálogo y pieza destacada
mails/                  # Plantillas de correo del formulario de contacto
  brand.ts              # Colores y tipografías de la marca para el correo
  layout.ts             # Envoltura común: cabecera con el logotipo y pie
  styles.ts             # Estilos en línea del correo
  contact-templates.ts  # Acuse de recibo y notificación del estudio
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
| `observe-reveal.ts` | Observación compartida del viewport (un solo IntersectionObserver) |
| `supports-scroll-timeline.ts` | Detección de soporte de animaciones ligadas al scroll |
| `use-reduced-motion.ts` | Detecta `prefers-reduced-motion` |

Para los títulos y los bloques de texto, la vía principal es **CSS puro**
(`animation-timeline: view()`), sin JavaScript ni mediciones en el navegador.
Para navegadores sin soporte, hay un respaldo con `IntersectionObserver`.

**El revelado de imágenes es la excepción**: no está ligado al scroll, sino
que se dispara una sola vez cuando la imagen entra en pantalla y dura lo que
dura el keyframe. Ligado al scroll se pasaba de largo al bajar de golpe y la
imagen aparecía sin que se notara el movimiento. `observe-reveal.ts` usa un
único `IntersectionObserver` para toda la página: con uno por elemento, la
galería registraba más de cien listeners de scroll.Además del revelado, `app/globals.css` define:

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
- Con `prefers-reduced-motion: reduce` el sitio **no se queda sin
  movimiento**: las entradas se degradan a un fundido simple, sin
  desplazamientos ni escala. En Windows ese ajuste depende de
  *Accesibilidad → Efectos visuales → Animaciones*, y en Chrome es la misma
  API que consultan las animaciones ligadas al scroll.
- Las animaciones ligadas al scroll de los títulos y los bloques de texto
  usan la fase **`cover`**, no `entry`. La fase `entry` dura lo que el
  elemento tarda en entrar —unos 190px—, y con scroll rápido el texto
  aparecía de golpe. `cover` alarga el recorrido hasta unos 420px y el
  movimiento se percibe entero.

### Compatibilidad

Las animaciones ligadas al scroll (`animation-timeline`) todavía no son
universales:

| Función | Chrome / Edge | Safari | Firefox | Opera |
| --- | --- | --- | --- | --- |
| `animation-timeline: view()` y `scroll()` | 115+ | 26+ | 159+ | 101+ |
| `view-timeline-name` | 116+ | 26+ | 159+ | 102+ |

Firefox 159 llegó el 27 de octubre de 2026 y Safari 26 en septiembre de
2025. En los navegadores anteriores el sitio no pierde ninguna función,
solo cambia el comportamiento de estas piezas:

| Animación | Sin soporte de `animation-timeline` |
| --- | --- |
| Revelado de imágenes | Igual: lo dispara JavaScript, no depende del CSS |
| Títulos y bloques de texto | Respaldo con `IntersectionObserver` y transición |
| Regla con degradado | Aparece de golpe, sin dibujarse |
| Barra de progreso | Se calcula en JavaScript con `--scroll-progress` |
| Ken Burns, subrayado del navbar, entrada del menú | Igual: son keyframes CSS normales |

Todo lo demás —las tipografías, el diseño y las imágenes— es compatible con
los navegadores actuales.

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

El enlace «Contacto» de la cabecera, del menú móvil y del pie lleva a
`/contacto`, una página con un formulario de **nombre**, **correo** y
**razón** que entrega el mensaje al estudio por correo con **Resend**.

### Cómo funciona

| Pieza | Dónde | Qué hace |
| --- | --- | --- |
| Página | `app/contacto/page.tsx` | Compone la portada y el bloque del formulario |
| Acción | `app/contacto/actions.ts` | Valida los campos y envía los dos correos por Resend |
| Formulario | `components/Contact/contact-form.tsx` | `useActionState`: errores por campo, estado de envío y limpieza al terminar |
| Plantillas | `mails/` | Los dos correos del formulario, con el logotipo y los colores de la marca |

La acción es una **Server Action**, así que el formulario funciona igual
sin JavaScript. La validación se hace en el servidor: la del navegador
(`required`, `type="email"`) es solo la primera capa. Si el envío falla, el
visitante ve un mensaje genérico y el detalle queda en el log del servidor.

### Los dos correos

Cada envío del formulario genera **dos** correos:

| Correo | Destinatario | Qué lleva |
| --- | --- | --- |
| Notificación | El estudio (`RESEND_TO_EMAIL`) | Nombre, correo y razón, con un botón para responder |
| Acuse de recibo | Quien escribió el formulario | Confirmación de que su solicitud fue recibida y copia de lo que escribió |

La notificación lleva `replyTo` con el correo de quien escribió, de modo que
se responde desde el mismo hilo. El acuse lleva `replyTo` con el correo del
estudio: si quien escribió responde, el mensaje vuelve a María Reyes.

Si el acuse de recibo falla, el aviso se queda en el log del servidor y el
visitante ve el mensaje de éxito: el estudio ya tiene su mensaje.

### Plantillas

Las plantillas viven en `mails/`. Cada una devuelve el asunto, la versión
HTML y la versión en texto plano.

| Archivo | Qué define |
| --- | --- |
| `mails/brand.ts` | Los colores de `app/globals.css` en hexadecimal, el logotipo y la regla con el degradado de marca |
| `mails/layout.ts` | La envoltura común: cabecera con el logotipo, regla con el degradado y pie con los datos del estudio |
| `mails/styles.ts` | Los estilos en línea del correo |
| `mails/contact-templates.ts` | Las dos plantillas del formulario |

Todo el CSS va **en línea**, porque los clientes de correo ignoran las hojas
de estilo externas y no admiten variables CSS. El degradado de la marca se
pinta con una celda de tabla por parada: Outlook no dibuja degradados en el
fondo de una celda. El logotipo del sitio es tipográfico, así que aquí se
reproduce con la misma composición y Georgia como sustituto de Cormorant
Garamond.

### Configuración

Copia `.env.example` a `.env.local` y rellena la clave que se crea en
[resend.com/api-keys](https://resend.com/api-keys):

```bash
# Datos del estudio (públicos: los usa también el navegador)
NEXT_PUBLIC_SITE_EMAIL=mcarmenreyes@gmail.com
NEXT_PUBLIC_SITE_PHONE=+58 412 607 4961
NEXT_PUBLIC_WHATSAPP_NUMBER=584126074961

# Envío con Resend (solo el servidor)
RESEND_API_KEY=re_...
RESEND_TO_EMAIL=
RESEND_FROM_EMAIL=Estudio <onboarding@resend.dev>
```

| Variable | Obligatoria | Si no se define |
| --- | --- | --- |
| `RESEND_API_KEY` | Sí | El formulario avisa de que no está disponible |
| `RESEND_TO_EMAIL` | No | Se usa `NEXT_PUBLIC_SITE_EMAIL` |
| `RESEND_FROM_EMAIL` | No | `Estudio María Reyes <onboarding@resend.dev>` |
| `NEXT_PUBLIC_SITE_EMAIL` | No | `mcarmenreyes@gmail.com` |
| `NEXT_PUBLIC_SITE_PHONE` | No | `+58 412 607 4961` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | No | `584126074961` |

> `onboarding@resend.dev` es la dirección de prueba de Resend: **solo entrega
> al correo de la cuenta de Resend**. Con ella el acuse de recibo a un
> visitante externo tampoco llega. Para que los dos correos lleguen a
> cualquier destinatario hay que verificar el dominio en Resend y poner aquí
> una dirección propia, por ejemplo
> `Estudio María Reyes <contacto@tudominio.com>`.

Las variables con prefijo `NEXT_PUBLIC_` se incrustan en el navegador al
compilar: si las cambias, hay que volver a compilar para que se vean.

### Canales directos

Los canales se construyen a partir de las variables de entorno en
`components/Common/contact-links.ts`, que expone `CONTACT_INFO` (los datos
en crudo) y `CONTACT_LINKS` (los enlaces ya armados):

```ts
export const CONTACT_LINKS = {
  email: `mailto:${SITE_EMAIL}`,
  phone: `tel:${SITE_PHONE}`,
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER}`,
} as const;
```

## Rutas

| Ruta | Descripción |
| --- | --- |
| `/` | Landing principal |
| `/about` | Biografía, trayectoria y currículum |
| `/projects/photography` | Series fotográficas y galería |
| `/projects/sculptures` | Catálogo de la colección de esculturas |
| `/contacto` | Formulario de contacto (nombre, correo, razón) |

## Navegación

`components/Common/nav-active-state.ts` decide, a partir de la ruta actual,
qué sección está activa. Con ella, la cabecera y el menú móvil marcan en
terracota dónde está el visitante:

| Sección | Estado activo |
| --- | --- |
| `/about` | "Sobre mí" en terracota, con subrayado fijo |
| `/projects/photography` | "Proyectos" en terracota, y "Fotografía" destacado en el desplegable |
| `/projects/sculptures` | "Proyectos" en terracota, y "Escultura" destacado en el desplegable |
| `/contacto` | "Contacto" en terracota, con subrayado fijo |

El enlace activo lleva `aria-current="page"`, para que el estado también
llegue a los lectores de pantalla.

## Despliegue

Compatible con Vercel: Next.js detecta el proyecto automáticamente y ejecuta
`pnpm build` como comando de compilación.
