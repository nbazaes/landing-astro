import type { Locale } from '../data/translations';
import { localePath } from './site';

export function engineeringExamples(locale: Locale) {
  const es = locale === 'es';
  return [
    {
      title: es ? 'Una responsabilidad por capa' : 'One responsibility per layer',
      description: es
        ? 'En BazPOS, React resuelve la interfaz y Django concentra la lógica de negocio. MariaDB almacena los datos de ventas e inventario.'
        : 'In BazPOS, React handles the interface and Django holds the business logic. MariaDB stores sales and inventory data.',
      href: localePath(
        locale,
        es ? 'proyectos/bazpos/#architecture' : 'projects/bazpos/#architecture',
      ),
      label: es ? 'Ver arquitectura de BazPOS' : 'View BazPOS architecture',
    },
    {
      title: es ? 'Una demo que se puede explorar' : 'A demo you can explore',
      description: es
        ? 'La demo de BazPOS corre aislada en Docker Compose: React con nginx, Django y MariaDB. Cloudflare Tunnel conecta el homeserver y los datos se restauran cada día.'
        : 'The BazPOS demo runs in an isolated Docker Compose setup: React with nginx, Django, and MariaDB. Cloudflare Tunnel connects the homeserver, and demo data resets daily.',
      href: localePath(locale, es ? 'proyectos/bazpos/#deployment' : 'projects/bazpos/#deployment'),
      label: es ? 'Ver despliegue de la demo' : 'View demo deployment',
    },
    {
      title: es ? 'Contenido primero, interacción después' : 'Content first, interaction second',
      description: es
        ? 'Este portafolio genera páginas estáticas en español e inglés con Astro. Los proyectos y el correo funcionan sin JavaScript; la terminal agrega otra forma de recorrerlos.'
        : 'This portfolio generates static Spanish and English pages with Astro. Projects and email work without JavaScript; the terminal adds another way to browse them.',
      href: 'https://github.com/nbazaes/landing-astro',
      label: es ? 'Ver código del portafolio' : 'View portfolio source',
    },
  ];
}
