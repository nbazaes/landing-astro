import { getCollection } from 'astro:content';
import type { Locale, ProjectData } from '../data/translations';

export const localePath = (locale: Locale, page = '') => `${locale === 'en' ? '/en/' : '/'}${page}`;

export async function getSiteData(locale: Locale) {
  const [profiles, sites, entries] = await Promise.all([
    getCollection('profile'),
    getCollection('site'),
    getCollection('projects'),
  ]);
  const profile = profiles[0]?.data;
  const t = sites.find((entry) => entry.id === locale)?.data;
  if (!profile || !t) throw new Error(`Missing profile or site content for ${locale}`);
  const projects: ProjectData[] = entries
    .map((entry) => ({ ...entry.data, id: entry.id }))
    .sort((a, b) => a.order - b.order || a.name.localeCompare(b.name));
  const featured = projects.find((project) => project.featured);
  if (!featured) throw new Error('A featured project is required');
  return { profile, t, projects, featured };
}

export const ui = {
  es: {
    skip: 'Saltar al contenido',
    contact: 'Hablemos',
    copy: 'Copiar correo',
    feedback: 'Aviso de contacto',
    dismiss: 'Cerrar aviso',
    darkMode: 'Modo oscuro',
    switchLight: 'Cambiar a modo claro',
    switchDark: 'Cambiar a modo oscuro',
    copied: 'Correo copiado al portapapeles.',
    copyFailed: 'No se pudo copiar. Puedes seleccionar el correo o usar el enlace para escribir.',
    role: 'Junior Fullstack Developer & Sysadmin',
    featured: 'Explorar BazPOS',
    featureTitle: 'BazPOS: del mostrador al inventario.',
    featureIntro:
      'Un sistema de punto de venta que reúne la operación comercial en una aplicación.',
    production: 'Aplicación en producción',
    architecture: 'Una responsabilidad para cada capa',
    scope: 'Lo que resuelve',
    repo: 'Ver código de BazPOS',
    contactTitle: '¿Construimos algo juntos?',
    contactBody:
      'Busco oportunidades para aportar en desarrollo fullstack y administración de sistemas. Si mi perfil encaja con tu equipo, conversemos.',
    language: 'Read in English',
    terminal: 'Abrir terminal',
    description:
      'Nicolás Bazaes, desarrollador Junior Fullstack y Sysadmin en Chile. React, Django y Linux. Conoce BazPOS y mis proyectos.',
    terminalDescription: 'Explora el portafolio de Nicolás Bazaes desde una terminal interactiva.',
    input: 'Comando de terminal',
    output: 'Salida de la terminal',
  },
  en: {
    skip: 'Skip to content',
    contact: 'Let’s talk',
    copy: 'Copy email',
    feedback: 'Contact notification',
    dismiss: 'Dismiss notification',
    darkMode: 'Dark mode',
    switchLight: 'Switch to light mode',
    switchDark: 'Switch to dark mode',
    copied: 'Email copied to clipboard.',
    copyFailed: 'Could not copy. Select the email address or use the link to get in touch.',
    role: 'Junior Fullstack Developer & Sysadmin',
    featured: 'Explore BazPOS',
    featureTitle: 'BazPOS: from counter to inventory.',
    featureIntro: 'A point-of-sale system that brings business operations into one application.',
    production: 'Application in production',
    architecture: 'A responsibility for each layer',
    scope: 'What it handles',
    repo: 'View BazPOS source',
    contactTitle: 'Let’s build something together.',
    contactBody:
      'I’m looking for opportunities in fullstack development and systems administration. If my experience fits your team, let’s talk.',
    language: 'Leer en español',
    terminal: 'Open terminal',
    description:
      'Nicolás Bazaes, Junior Fullstack Developer and Sysadmin in Chile. React, Django, and Linux. Explore BazPOS and my projects.',
    terminalDescription: 'Explore Nicolás Bazaes’s portfolio in an interactive terminal.',
    input: 'Terminal command',
    output: 'Terminal output',
  },
} as const;
