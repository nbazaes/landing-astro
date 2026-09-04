import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const localeSchema = z.enum(['en', 'es']);

const profileSchema = z.object({
  name: z.string(),
  email: z.string(),
  githubUrl: z.string().url(),
  linkedinUrl: z.string().url(),
  location: z.string(),
  defaultLocale: localeSchema,
  introCommand: z.string(),
  terminalPrompt: z.string(),
  meta: z.object({
    title: z.string(),
    description: z.string(),
    ogUrl: z.string().url(),
  }),
});

const stackGroupSchema = z.object({
  title: z.string(),
  icon: z.string(),
  accent: z.string(),
  items: z.array(
    z.object({
      name: z.string(),
      label: z.string(),
      tone: z.enum(['accent', 'soft', 'muted', 'strong']),
    }),
  ),
});

const siteSchema = z.object({
  nav: z.object({
    overview: z.string(),
    projects: z.string(),
    stack: z.string(),
    philosophy: z.string(),
    cli: z.string(),
    copyEmail: z.string(),
  }),
  hero: z.object({
    statusBadge: z.string(),
    headline: z.string(),
    subtext: z.string(),
    ctaProjects: z.string(),
    ctaTerminal: z.string(),
    terminalTitle: z.string(),
    terminalRole: z.string(),
    terminalStatus: z.string(),
    terminalInfra: z.string(),
    bootBrand: z.string(),
    bootMem: z.string(),
    bootMountPrefix: z.string(),
    bootReady: z.string(),
    footerNote: z.string(),
  }),
  projects: z.object({
    title: z.string(),
    subtitle: z.string(),
    viewCode: z.string(),
    liveDemo: z.string(),
    countBadge: z.string(),
  }),
  stack: z.object({
    title: z.string(),
    subtitle: z.string(),
    statusBadge: z.string(),
    groups: z.array(stackGroupSchema),
  }),
  philosophy: z.object({
    title: z.string(),
    subtitle: z.string(),
    item1Title: z.string(),
    item1Desc: z.string(),
    item2Title: z.string(),
    item2Desc: z.string(),
    item3Title: z.string(),
    item3Desc: z.string(),
  }),
  terminalPromo: z.object({
    title: z.string(),
    desc: z.string(),
    button: z.string(),
  }),
  footer: z.object({
    github: z.string(),
    linkedin: z.string(),
    email: z.string(),
    terminal: z.string(),
    systemStatus: z.string(),
    location: z.string(),
    copiedToast: z.string(),
  }),
  terminal: z.object({
    placeholder: z.string(),
    infoLines: z.array(z.string()),
    availableCommands: z.string(),
    helpLines: z.array(z.string()),
    aboutMe: z.string(),
    readmeLines: z.array(z.string()),
    githubPortfolio: z.string(),
    emailLabel: z.string(),
    linkedin: z.string(),
    openingGui: z.string(),
    sudoMessage: z.string(),
    rmRootLines: z.array(z.string()),
    commandNotFound: z.string(),
    typeHelp: z.string(),
    backButton: z.string(),
  }),
});

const projectSchema = z.object({
  name: z.string(),
  iconName: z.string(),
  githubUrl: z.string().url(),
  demoUrl: z.string().url().optional(),
  tags: z.array(z.string()),
  category: z.object({ en: z.string(), es: z.string() }),
  description: z.object({ en: z.string(), es: z.string() }),
  metrics: z.object({ en: z.array(z.string()), es: z.array(z.string()) }),
});

export const collections = {
  profile: defineCollection({
    loader: glob({ base: './src/content', pattern: 'profile.md' }),
    schema: profileSchema,
  }),
  site: defineCollection({
    loader: glob({ base: './src/content/site', pattern: '**/*.md' }),
    schema: siteSchema,
  }),
  projects: defineCollection({
    loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
    schema: projectSchema,
  }),
};