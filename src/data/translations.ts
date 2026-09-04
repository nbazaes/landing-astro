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

export interface StackItem {
  name: string;
  label: string;
  tone: "accent" | "soft" | "muted" | "strong";
}

export interface StackGroup {
  title: string;
  icon: string;
  accent: string;
  items: StackItem[];
}

export interface TranslationData {
  nav: {
    overview: string;
    projects: string;
    stack: string;
    philosophy: string;
    cli: string;
    copyEmail: string;
  };
  hero: {
    statusBadge: string;
    headline: string;
    subtext: string;
    ctaProjects: string;
    ctaTerminal: string;
    terminalTitle: string;
    terminalRole: string;
    terminalStatus: string;
    terminalInfra: string;
    bootBrand: string;
    bootMem: string;
    bootMountPrefix: string;
    bootReady: string;
    footerNote: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewCode: string;
    liveDemo: string;
    countBadge: string;
  };
  stack: {
    title: string;
    subtitle: string;
    statusBadge: string;
    groups: StackGroup[];
  };
  philosophy: {
    title: string;
    subtitle: string;
    item1Title: string;
    item1Desc: string;
    item2Title: string;
    item2Desc: string;
    item3Title: string;
    item3Desc: string;
  };
  terminalPromo: {
    title: string;
    desc: string;
    button: string;
  };
  footer: {
    github: string;
    linkedin: string;
    email: string;
    terminal: string;
    systemStatus: string;
    location: string;
    copiedToast: string;
  };
  terminal: {
    placeholder: string;
    infoLines: string[];
    availableCommands: string;
    helpLines: string[];
    aboutMe: string;
    readmeLines: string[];
    githubPortfolio: string;
    emailLabel: string;
    linkedin: string;
    openingGui: string;
    sudoMessage: string;
    rmRootLines: string[];
    commandNotFound: string;
    typeHelp: string;
    backButton: string;
  };
}

export interface ProfileData {
  name: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  location: string;
  defaultLocale: Locale;
  introCommand: string;
  terminalPrompt: string;
  meta: {
    title: string;
    description: string;
    ogUrl: string;
  };
}