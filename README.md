# Portafolio de Nicolás Bazaes

Landing estática con Astro, TypeScript y Tailwind CSS. BazPOS es el proyecto destacado: React en el frontend, Django en el backend y MariaDB como base de datos.

## Desarrollo

Requiere Node.js **22.12 o superior** y npm.

```sh
npm ci
npm run dev
```

```sh
npm run check     # Comprobación de tipos y componentes Astro
npm run build     # Genera el sitio estático en dist/
npm run validate  # Ejecuta ambas comprobaciones
npm test          # Comprueba resolución, alias y completado de comandos
npm run preview   # Sirve la compilación local
npm run format    # Formatea componentes, contenido y configuración
npm run format:check # Comprueba el formato sin modificar archivos
```

## Rutas e idiomas

| Ruta | Contenido |
| --- | --- |
| `/` | Landing en español |
| `/en/` | Landing en inglés |
| `/terminal/` | Terminal en español |
| `/en/terminal/` | Terminal en inglés |
| `/proyectos/bazpos/` | Presentación de BazPOS en español |
| `/en/projects/bazpos/` | Presentación de BazPOS en inglés |

Cada idioma se genera completo durante el build. La landing, sus enlaces y el cambio de idioma funcionan sin JavaScript. Con JavaScript se guarda la preferencia, se ofrece copia de correo y funciona la terminal. Si el almacenamiento está bloqueado, los enlaces siguen funcionando. La preferencia inglesa recordada redirige las entradas en español a su equivalente; el selector permite volver al español.

## Organización

- `src/pages/`: rutas; sitemap y robots se generan con el dominio del perfil.
- `src/components/landing/`: secciones de la landing.
- `src/components/PortfolioTerminal.astro`: terminal reutilizable de la landing y la página dedicada.
- `src/lib/terminal/`: motor, traducciones, historial y completado de comandos.
- `src/lib/engineering.ts`: ejemplos de ingeniería compartidos por la landing y la terminal.
- `src/content/`: perfil, textos ES/EN y proyectos; editar aquí el contenido.
- `src/content.config.ts`: validación de contenido; los tipos se derivan de las colecciones.
- `src/lib/site.ts`: carga de contenido, rutas e interfaz bilingüe.
- `src/lib/locale.ts`: persistencia tolerante a fallos.
- `src/styles/tokens.css`: paletas clara/oscura y escalas compartidas.
- `src/styles/global.css` y `motion.css`: composición, adaptación responsive y animaciones CSS.
- `src/components/ThemeToggle.astro` y `src/lib/theme.ts`: selector de tema y persistencia.

Los proyectos se ordenan con `order`; `featured: true` identifica el caso destacado. `architecture` documenta sus capas en ambos idiomas. El nombre del repositorio y el nombre visible son campos distintos.

## Tema claro y oscuro

El botón de sol/luna está disponible en todas las cabeceras. Sin una elección guardada, se sigue la preferencia del sistema, incluidos sus cambios en vivo. La selección manual se guarda como `light` o `dark` en `nbazaes-theme` y se comparte entre idiomas, páginas y pestañas. Se aplica antes del primer render para evitar un destello del tema incorrecto.

Sin JavaScript, CSS sigue la preferencia del sistema y oculta el selector inactivo. Con almacenamiento bloqueado, el botón sigue funcionando durante la visita. Las capturas y el video conservan sus colores originales.

## Terminal interactiva

La terminal aparece junto a la introducción y también en las rutas dedicadas. Prueba `help`, `about` (o `readme`), `projects`, `bazpos`, `stack`, `work`, `contact` y `github`. `go projects` navega a una sección; acepta `bazpos`, `projects`, `stack`, `work` y `contact`. `gui` vuelve a la introducción y `clear` limpia la salida.

Enter ejecuta, ↑/↓ recorre el historial y Tab completa comandos y destinos. Los botones sugeridos permiten explorar sin escribir. El historial vive solo en memoria; la terminal no ejecuta comandos del sistema ni consulta un servidor. La salida se desplaza dentro del panel y la navegación explícita lleva el foco a la sección elegida.

## Presentación de BazPOS

La portada enlaza a una presentación interna, con textos bilingües en `src/components/bazpos/content.ts`. El botón «Probar demo» de esa página y el comando `bazpos` ofrecen acceso a la demostración externa; el portafolio no consulta su API ni necesita que esté disponible para mostrar el proyecto.

`public/bazpos/` contiene tres capturas WebP, la portada del reproductor, un recorrido real de 72 segundos en MP4 y subtítulos WebVTT ES/EN. El video no tiene voz, no se reproduce automáticamente y usa `preload="none"`. Las capturas pueden abrirse a tamaño completo. El resumen textual permite seguir el recorrido sin reproducirlo.

El material se capturó desde la demo pública, con datos ficticios y el rol Gerente. Los archivos de procedencia junto a las imágenes y al video documentan el origen y la secuencia. Al renovar el material, conservar dimensiones 1440 × 900, actualizar los subtítulos y su resumen, y comprimir el MP4 como H.264 con formato de píxel `yuv420p` y `faststart`.

## Publicación

Publicar `dist/` como sitio estático. `wrangler.jsonc` conserva la configuración para Cloudflare Pages. El build no necesita variables de entorno, claves privadas ni backend. El dominio público se configura en `src/content/profile.md`, en `meta.ogUrl`.

GitHub Actions ejecuta `npm ci`, `npm test` y `npm run validate` en cada push y pull request. Cloudflare Pages publica automáticamente los pushes a `master`, su rama de producción; `main` conserva la rama de trabajo y genera previews.

La imagen social `public/social-card.png` se deriva del original vectorial `public/social-card.svg`; actualizar ambos al cambiar la identidad. No es una captura del producto.

### Desplegar a producción

Wrangler está fijado como dependencia local. Con una sesión de Cloudflare autenticada:

```sh
npm run deploy:production
```

El comando valida y compila antes de publicar `dist/` en el proyecto `landing-astro`, cuya rama de producción configurada en Cloudflare Pages es `master` (independientemente de la rama local). Dominio: `https://nbazaes.dev`. El despliegue incluye los cambios locales y los marca como tales; no crea commits ni ejecuta un push de Git.
