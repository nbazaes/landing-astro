import type { Locale } from '../../data/translations';

// Exact phrases take precedence over regular commands, but stay out of help and Tab.
const jokes = [
  [
    'sudo',
    'guest no está en sudoers. Este incidente será reportado… a nadie, soy el único administrador.',
    'guest is not in sudoers. This incident will be reported… to nobody, I’m the only administrator.',
  ],
  [
    'sudo su',
    'Buen intento. El formulario de contacto no requiere root.',
    'Nice try. The contact form doesn’t require root.',
  ],
  [
    'rm -rf /',
    'No puedes borrar mis problemas así de fácil.',
    'You can’t delete my problems that easily.',
  ],
  [
    'rm -rf node_modules',
    'Se liberaron 3 GB. npm install los está recuperando.',
    'Freed 3 GB. npm install is bringing them back.',
  ],
  [
    'sudo make me a sandwich',
    '🥪 Aquí tienes. Al fin un uso responsable de sudo.',
    '🥪 Here you go. Finally, a responsible use of sudo.',
  ],
  [
    'exit',
    'Puedes cerrar la pestaña, pero los bugs seguirán aquí.',
    'You can close the tab, but the bugs will still be here.',
  ],
  [
    'reboot',
    '¿Ya probaste apagarlo y volverlo a encender? Yo también trabajo en soporte.',
    'Have you tried turning it off and on again? I work in support, too.',
  ],
  [
    'uptime',
    'Servidor: estable. Horario de sueño del administrador: experimental.',
    'Server: stable. Administrator’s sleep schedule: experimental.',
  ],
  [
    'whoami',
    'guest. Pero gracias por la pregunta existencial.',
    'guest. But thanks for the existential question.',
  ],
  [
    'pwd',
    '/home/nicolas/otro-proyecto-que-iba-a-ser-pequeño',
    '/home/nicolas/another-project-that-was-supposed-to-be-small',
  ],
  ['ls -a', '. .. .env .ansiedad .ideas-sin-terminar', '. .. .env .anxiety .unfinished-ideas'],
  [
    'cat .env',
    'Buen intento. Los secretos se quedan en el servidor.',
    'Nice try. The secrets stay on the server.',
  ],
  ['chmod 777 /', 'Permiso denegado por sentido común.', 'Permission denied by common sense.'],
  [
    'kill -9 bugs',
    'bugs: proceso reiniciado automáticamente.',
    'bugs: process restarted automatically.',
  ],
  ['git blame', 'Fue Nicolás. Siempre fue Nicolás.', 'It was Nicolás. It was always Nicolás.'],
  [
    'git push --force',
    'Respira. Revisa la rama. Vuelve a leer el comando.',
    'Breathe. Check the branch. Read the command again.',
  ],
  [
    'git status',
    'Cambios sin guardar: una idea nueva y tres decisiones de arquitectura.',
    'Unsaved changes: one new idea and three architecture decisions.',
  ],
  [
    'docker ps',
    'Hay más contenedores que tuppers en mi cocina.',
    'More containers than leftovers in my kitchen.',
  ],
  [
    'docker compose up',
    'Levantando servicios… el presupuesto de RAM no fue consultado.',
    'Starting services… the RAM budget was not consulted.',
  ],
  ['ping', 'pong. Latencia humana: depende del café.', 'pong. Human latency: depends on coffee.'],
  [
    'ping google.com',
    'Internet funciona. Ahora toca averiguar por qué falla tu app.',
    'The internet works. Now to figure out why your app doesn’t.',
  ],
  ['curl coffee', "418 I'm a teapot.", "418 I'm a teapot."],
  [
    'free -h',
    'RAM disponible: suficiente hasta que abras otra pestaña.',
    'Available RAM: enough until you open another tab.',
  ],
  ['top', '99% CPU: pensando cómo nombrar una variable.', '99% CPU: thinking of a variable name.'],
  [
    'vim',
    'Has entrado en Vim. Para salir: :q. De nada.',
    'You’ve entered Vim. To exit: :q. You’re welcome.',
  ],
  [':q', 'Ya estás fuera de Vim. Puedes relajarte.', 'You’re out of Vim now. You can relax.'],
  [
    'help me',
    'Con el código, sí. Con la impresora, no prometo nada.',
    'With code, yes. With the printer, no promises.',
  ],
  [
    'deploy friday',
    'El servidor solicita tomar sus vacaciones antes del despliegue.',
    'The server requests vacation before the deployment.',
  ],
  [
    'it works on my machine',
    'Perfecto. Entonces desplegaremos tu máquina.',
    'Perfect. We’ll deploy your machine, then.',
  ],
  [
    '42',
    'Respuesta encontrada. Falta definir los requisitos.',
    'Answer found. Requirements still undefined.',
  ],
] as const;

export function easterEggReply(raw: string, locale: Locale): string | undefined {
  const normalized = raw.trim().toLowerCase().replace(/\s+/g, ' ');
  const joke = jokes.find(([command]) => command === normalized);
  return joke?.[locale === 'es' ? 1 : 2];
}
