export type Locale = "en" | "es";

export interface ProjectData {
  id: string;
  name: string;
  category: { en: string; es: string };
  description: { en: string; es: string };
  metrics: { en: string[]; es: string[] };
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  iconName: string;
}

export interface TranslationData {
  header: {
    mode: string;
    overview: string;
    projects: string;
    stack: string;
    philosophy: string;
    cli: string;
  };
  sidebar: {
    name: string;
    role: string;
    version: string;
    location: string;
    status: string;
    contactBtn: string;
    navRoot: string;
    navProjects: string;
    navStack: string;
    navPhilosophy: string;
    navTerminal: string;
  };
  systemInfo: {
    title: string;
    pid: string;
    headline: string;
    bio1: string;
    bio2: string;
    statusLabel: string;
    statusVal: string;
    osLabel: string;
    osVal: string;
    roleLabel: string;
    roleVal: string;
    infraLabel: string;
    infraVal: string;
  };
  projects: {
    title: string;
    path: string;
    viewCode: string;
    liveDemo: string;
  };
  dependencies: {
    title: string;
    status: string;
    backendTitle: string;
    frontendTitle: string;
    sysadminTitle: string;
    databasesTitle: string;
  };
  philosophy: {
    title: string;
    mode: string;
    item1Title: string;
    item1Desc: string;
    item2Title: string;
    item2Desc: string;
    item3Title: string;
    item3Desc: string;
  };
  footer: {
    github: string;
    linkedin: string;
    email: string;
    terminal: string;
    copiedToast: string;
  };
}

export const realProjectsList: ProjectData[] = [
  {
    id: "django-bazpos",
    name: "django-bazpos",
    category: {
      en: "Point of Sale & Invoicing",
      es: "Punto de Venta y Facturación"
    },
    description: {
      en: "A comprehensive point-of-sale system with real-time inventory management, sales analytics, multi-tier user permissions, supplier management, and automated invoicing.",
      es: "Sistema completo de punto de venta y gestión comercial con control de inventario en tiempo real, reportes de ventas, roles de usuario, proveedores y facturación."
    },
    metrics: {
      en: ["Inventory & sales reports", "Multi-user role management", "Supplier & invoicing support"],
      es: ["Inventario y reportes de ventas", "Gestión de roles de usuario", "Módulo de proveedores y facturas"]
    },
    tags: ["Django", "Python", "Bootstrap", "PostgreSQL", "Invoicing"],
    githubUrl: "https://github.com/nbazaes/django-bazpos",
    iconName: "point_of_sale"
  },
  {
    id: "discursantes_react",
    name: "discursantes_react",
    category: {
      en: "Fullstack Platform & Docker",
      es: "Plataforma Fullstack y Docker"
    },
    description: {
      en: "A production fullstack web app built for coordinating church speaker schedules, agendas, and participant administration, containerized with Docker.",
      es: "Aplicación web fullstack para la coordinación de cronogramas de predicadores de iglesia local, administración de participantes y contenedorizada con Docker."
    },
    metrics: {
      en: ["Speaker scheduling workflow", "REST API backend (Django)", "Docker deployment configuration"],
      es: ["Coordinación de oradores", "Backend API REST en Django", "Despliegue contenedorizado en Docker"]
    },
    tags: ["React", "Django", "Docker", "REST API", "PostgreSQL"],
    githubUrl: "https://github.com/nbazaes/discursantes_react",
    iconName: "groups"
  },
  {
    id: "webconstAD",
    name: "webconstAD",
    category: {
      en: "Art Showcase & E-Commerce",
      es: "Galería de Arte y Comercio Digital"
    },
    description: {
      en: "A custom web application and prototype built for a local digital artist to exhibit creative portfolios, manage client inquiries, and sell artwork.",
      es: "Prototipo web fullstack diseñado para que un artista local exhiba sus obras de arte digital, atienda consultas de clientes y gestione ventas online."
    },
    metrics: {
      en: ["Interactive gallery showcase", "Inquiry & sales handling", "Django backend architecture"],
      es: ["Galería interactiva", "Gestión de consultas y ventas", "Arquitectura backend en Django"]
    },
    tags: ["Django", "Python", "JavaScript", "SQLite", "E-Commerce"],
    githubUrl: "https://github.com/nbazaes/webconstAD",
    iconName: "palette"
  },
  {
    id: "landing-astro",
    name: "landing-astro",
    category: {
      en: "Developer Portfolio & CLI",
      es: "Portafolio de Desarrollador y CLI"
    },
    description: {
      en: "The source code for this very developer portfolio, engineered with Astro 6, TypeScript, Tailwind CSS, featuring bilingual support and an interactive terminal emulator.",
      es: "El código fuente de este portafolio, construido con Astro 6, TypeScript, Tailwind CSS, con soporte bilingüe y un emulador de terminal interactivo."
    },
    metrics: {
      en: ["Astro 6 static compilation", "Interactive CLI emulator mode", "Dual-language EN/ES localization"],
      es: ["Compilación estática en Astro 6", "Modo emulador CLI interactivo", "Soporte bilingüe EN/ES"]
    },
    tags: ["Astro", "TypeScript", "Tailwind CSS", "Terminal CLI"],
    githubUrl: "https://github.com/nbazaes/landing-astro",
    demoUrl: "https://nbazaes.dev",
    iconName: "terminal"
  }
];

export const consoleTranslations: Record<Locale, TranslationData> = {
  en: {
    header: {
      mode: "CONSOLE_MODE",
      overview: "OVERVIEW",
      projects: "PROJECTS",
      stack: "STACK",
      philosophy: "PHILOSOPHY",
      cli: "CLI_MODE"
    },
    sidebar: {
      name: "NICOLAS_BAZAES",
      role: "Fullstack & Sysadmin",
      version: "v1.0-prod",
      location: "Los Ángeles, Chile (CL)",
      status: "STATUS: READY",
      contactBtn: "COPY_EMAIL",
      navRoot: "Root (Overview)",
      navProjects: "Projects",
      navStack: "Core Dependencies",
      navPhilosophy: "Philosophy",
      navTerminal: "Interactive Terminal"
    },
    systemInfo: {
      title: "SYSTEM_INFO",
      pid: "pid: 1024",
      headline: 'sys.init("Nicolás Bazaes")',
      bio1: "Fullstack developer and sysadmin based in Chile, building pragmatic, high-performance web systems and robust server infrastructure.",
      bio2: "Passionate about backend engineering (Python/Django, Node.js, Go), Linux server administration, Docker containerization, and self-hosted environments.",
      statusLabel: "Status:",
      statusVal: "READY FOR WORK",
      osLabel: "OS:",
      osVal: "Linux / Arch & Debian",
      roleLabel: "Role:",
      roleVal: "Fullstack & Sysadmin",
      infraLabel: "Infra:",
      infraVal: "Docker / Self-Hosted"
    },
    projects: {
      title: "DIRECTORY_LISTING",
      path: "~/projects",
      viewCode: "Source Code",
      liveDemo: "Live Demo"
    },
    dependencies: {
      title: "CORE_DEPENDENCIES",
      status: "ACTIVE",
      backendTitle: "Backend.sh",
      frontendTitle: "Frontend.sh",
      sysadminTitle: "Sysadmin.sh",
      databasesTitle: "Databases.sh"
    },
    philosophy: {
      title: "PRAGMATIC_PRINCIPLES",
      mode: "readonly",
      item1Title: "Clean code over clever code",
      item1Desc: "Readability and predictable patterns supersede obscure micro-optimizations. Code is read far more often than written.",
      item2Title: "Minimal bloat & purpose",
      item2Desc: "Fewer dependencies mean fewer security vulnerabilities and zero maintenance overhead. Build what you need cleanly.",
      item3Title: "Terminal-first workflow",
      item3Desc: "Maximum operational efficiency achieved through Linux mastery, automation scripts, and command-line tooling."
    },
    footer: {
      github: "[g] github",
      linkedin: "[l] linkedin",
      email: "[m] email: nbazaes@bazaes.cl",
      terminal: "[t] cli terminal",
      copiedToast: "Email copied to clipboard: nbazaes@bazaes.cl"
    }
  },
  es: {
    header: {
      mode: "MODO_CONSOLA",
      overview: "RESUMEN",
      projects: "PROYECTOS",
      stack: "STACK",
      philosophy: "FILOSOFÍA",
      cli: "MODO_CLI"
    },
    sidebar: {
      name: "NICOLAS_BAZAES",
      role: "Fullstack y Sysadmin",
      version: "v1.0-prod",
      location: "Los Ángeles, Chile (CL)",
      status: "ESTADO: DISPONIBLE",
      contactBtn: "COPIAR_CORREO",
      navRoot: "Root (Resumen)",
      navProjects: "Proyectos",
      navStack: "Dependencias Clave",
      navPhilosophy: "Filosofía",
      navTerminal: "Terminal Interactiva"
    },
    systemInfo: {
      title: "INFORMACION_DEL_SISTEMA",
      pid: "pid: 1024",
      headline: 'sys.init("Nicolás Bazaes")',
      bio1: "Desarrollador fullstack y administrador de sistemas en Chile, construyendo sistemas web pragmáticos de alto rendimiento e infraestructura sólida.",
      bio2: "Apasionado por la ingeniería backend (Python/Django, Node.js, Go), administración de servidores Linux, contenedorización con Docker y servidores autohospedados.",
      statusLabel: "Estado:",
      statusVal: "DISPONIBLE",
      osLabel: "SO:",
      osVal: "Linux / Arch y Debian",
      roleLabel: "Rol:",
      roleVal: "Fullstack y Sysadmin",
      infraLabel: "Infra:",
      infraVal: "Docker / Self-Hosted"
    },
    projects: {
      title: "LISTADO_DE_DIRECTORIOS",
      path: "~/projects",
      viewCode: "Código Fuente",
      liveDemo: "Sitio Web"
    },
    dependencies: {
      title: "DEPENDENCIAS_CLAVE",
      status: "ACTIVO",
      backendTitle: "Backend.sh",
      frontendTitle: "Frontend.sh",
      sysadminTitle: "Sysadmin.sh",
      databasesTitle: "Databases.sh"
    },
    philosophy: {
      title: "PRINCIPIOS_PRAGMATICOS",
      mode: "solo_lectura",
      item1Title: "Código limpio sobre código ingenioso",
      item1Desc: "La legibilidad y los patrones predecibles superan las micro-optimizaciones oscuras. El código se lee mucho más de lo que se escribe.",
      item2Title: "Mínimo bloat y propósito claro",
      item2Desc: "Menos dependencias significan menos vulnerabilidades y cero sobrecarga de mantenimiento. Construye lo que realmente necesitas.",
      item3Title: "Flujo centrado en la terminal",
      item3Desc: "Máxima eficiencia operativa a través del dominio de Linux, scripts de automatización en shell y herramientas de terminal."
    },
    footer: {
      github: "[g] github",
      linkedin: "[l] linkedin",
      email: "[m] correo: nbazaes@bazaes.cl",
      terminal: "[t] terminal cli",
      copiedToast: "Correo copiado al portapapeles: nbazaes@bazaes.cl"
    }
  }
};
