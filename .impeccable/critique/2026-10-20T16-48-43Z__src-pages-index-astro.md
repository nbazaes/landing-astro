---
target: "Revisión general de landing: estilo y arquitectura"
total_score: 20
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
timestamp: 2026-10-20T16-48-43Z
slug: src-pages-index-astro
---
Método: dos agentes independientes (/root/design_review y /root/detector_review). Fuente y contratos PRODUCT/DESIGN; sin navegador disponible. Build de producción correcto: 3 rutas. Sin cambios de aplicación.

La identidad POST es específica y coherente con Sysadmin. Fortalezas: Astro estático, dependencias mínimas, colecciones validadas, repositorios reales enlazados, foco visible y movimiento reducido en landing.

Evaluación provisional: 20/32. Estado 3; correspondencia con mundo real 2; control 3; consistencia 2; prevención 3; reconocimiento 3; minimalismo 2; recuperación 2. Flexibilidad y ayuda n/a para esta landing. No es medición de accesibilidad ni Lighthouse.

P1: Internacionalización incompleta: index.astro:310 y :509 no traducen matriz; :445/:457 usan almacenamiento sin captura; Welcome.astro:108 usa otra clave. Render inicial mezcla inglés y español y Layout.astro:16 fija lang=en.
P1: Hero prioriza máquina sobre persona: index.astro:105/:119/:128/:168. Nombre visible y acciones antes del POST; compactar móvil; proyectos con problema, aporte y evidencia.
P1: Contacto y accesibilidad: index.astro:54 oculta navegación sin reemplazo; :569 solo toast efímero en fallo. Añadir mailto, región de estado accesible (Layout.astro:62), etiqueta del input CLI y ocultar iconos decorativos.
P2: Atajos prometidos sin implementación y numeración contradictoria: index.astro:55/:173 y content/site/es.md:23. Unificar o retirar promesa.
P2: Mantenimiento: index.astro tiene 609 líneas; separar secciones, carga de contenido, locale y clipboard. Inferir tipos del esquema en vez de duplicar translations.ts; usar tokens existentes.

Detector: dos advisory design-system-font-size en index.astro:80 (icono 15px, probable falso positivo) y :232 (badge 10px, menor).

Otros: Inter se solicita pero no se configura como font-sans; Material Symbols global para pocos iconos. Canonical, og:image, hreflang y sitemap ausentes; og:url fijo. Sin check de tipos en scripts ni CI visible. README declara Node 16 frente a engines >=22.12.0. No agregar backend sin necesidad.

Personas: reclutador no técnico necesita nombre y proyectos comprensibles; móvil necesita contacto y secciones; lector de pantalla necesita anuncio de copia.

Siguiente alcance a elegir: comportamiento/arquitectura, jerarquía visual o ambos; conservar POST compacto o enfatizar casos de proyecto.
