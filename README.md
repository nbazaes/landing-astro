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
- `src/components/TerminalPage.astro` y `Welcome.astro`: presentación y comandos de terminal.
- `src/content/`: perfil, textos ES/EN y proyectos; editar aquí el contenido.
- `src/content.config.ts`: validación de contenido; los tipos se derivan de las colecciones.
- `src/lib/site.ts`: carga de contenido, rutas e interfaz bilingüe.
- `src/lib/locale.ts`: persistencia tolerante a fallos.
- `src/styles/global.css`: tokens, layout y adaptación responsive.

Los proyectos se ordenan con `order`; `featured: true` identifica el caso destacado. `architecture` documenta sus capas en ambos idiomas. El nombre del repositorio y el nombre visible son campos distintos.

## Presentación de BazPOS

La portada enlaza a una presentación interna, con textos bilingües en `src/components/bazpos/content.ts`. Solo el botón «Probar demo» de esa página abre la demostración externa; el portafolio no consulta su API ni necesita que esté disponible para mostrar el proyecto.

`public/bazpos/` contiene tres capturas WebP, la portada del reproductor, un recorrido real de 72 segundos en MP4 y subtítulos WebVTT ES/EN. El video no tiene voz, no se reproduce automáticamente y usa `preload="none"`. Las capturas pueden abrirse a tamaño completo. El resumen textual permite seguir el recorrido sin reproducirlo.

El material se capturó desde la demo pública, con datos ficticios y el rol Gerente. Los archivos de procedencia junto a las imágenes y al video documentan el origen y la secuencia. Al renovar el material, conservar dimensiones 1440 × 900, actualizar los subtítulos y su resumen, y comprimir el MP4 como H.264 con formato de píxel `yuv420p` y `faststart`.

## Publicación

Publicar `dist/` como sitio estático. `wrangler.jsonc` conserva la configuración para Cloudflare Pages. El build no necesita variables de entorno, claves privadas ni backend. El dominio público se configura en `src/content/profile.md`, en `meta.ogUrl`.

GitHub Actions ejecuta `npm ci` y `npm run validate` en cada push y pull request. No publica automáticamente.

La imagen social `public/social-card.png` se deriva del original vectorial `public/social-card.svg`; actualizar ambos al cambiar la identidad. No es una captura del producto.

### Desplegar a producción

Wrangler está fijado como dependencia local. Con una sesión de Cloudflare autenticada:

```sh
npm run deploy:production
```

El comando valida y compila antes de publicar `dist/` en el proyecto `landing-astro`, cuya rama de producción configurada en Cloudflare Pages es `master` (independientemente de la rama local). Dominio: `https://nbazaes.dev`. El despliegue incluye los cambios locales y los marca como tales; no crea commits ni ejecuta un push de Git.
