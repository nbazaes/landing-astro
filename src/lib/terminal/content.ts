import type { Locale } from '../../data/translations';
export function terminalCopy(locale: Locale) {
  const es = locale === 'es';
  return {
    title: es ? 'Explora desde la terminal' : 'Explore from the terminal',
    welcome: es
      ? 'Hola, soy Nicolás. También puedes recorrer mi trabajo desde aquí.'
      : 'Hi, I’m Nicolás. You can browse my work from here, too.',
    hint: es ? 'Escribe help o prueba un comando.' : 'Type help or try a command.',
    input: es ? 'Comando de terminal' : 'Terminal command',
    output: es ? 'Historial de la terminal' : 'Terminal history',
    suggestions: es ? 'Comandos sugeridos' : 'Suggested commands',
    submit: es ? 'Ejecutar' : 'Run',
    keyboard: es ? '↑ ↓ historial · Tab completar' : '↑ ↓ history · Tab complete',
    unknown: es
      ? 'Comando desconocido. Escribe help para ver las opciones.'
      : 'Unknown command. Type help to see the options.',
    usage: 'go <bazpos | projects | stack | work | contact>',
    navigating: es ? 'Ir a' : 'Go to',
    source: es ? 'Código fuente' : 'Source code',
    walkthrough: es ? 'Recorrido de BazPOS' : 'BazPOS walkthrough',
    demo: es ? 'Probar demo' : 'Try the demo',
    nojs: es
      ? 'La terminal requiere JavaScript. Puedes recorrer los proyectos y escribir por correo con los enlaces de esta página.'
      : 'The terminal requires JavaScript. You can browse projects and get in touch using the links on this page.',
    commands: {
      help: es ? 'Comandos disponibles' : 'Available commands',
      about: es ? 'Sobre mí (también readme)' : 'About me (also readme)',
      projects: es ? 'Proyectos y código' : 'Projects and source',
      bazpos: es ? 'Mi proyecto destacado' : 'My featured project',
      stack: es
        ? 'Herramientas de desarrollo e infraestructura'
        : 'Development and infrastructure tools',
      work: es ? 'Decisiones de ingeniería' : 'Engineering decisions',
      contact: es ? 'Correo y perfiles' : 'Email and profiles',
      go: es ? 'Ir a una sección: go projects' : 'Visit a section: go projects',
      github: es ? 'Perfil y repositorios' : 'Profile and repositories',
      clear: es ? 'Limpiar la salida' : 'Clear output',
      gui: es ? 'Volver a la introducción' : 'Return to the introduction',
    },
  };
}
