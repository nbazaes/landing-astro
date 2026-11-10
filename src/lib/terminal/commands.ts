export const commandNames = [
  'help',
  'about',
  'readme',
  'projects',
  'bazpos',
  'stack',
  'work',
  'contact',
  'go',
  'github',
  'clear',
  'gui',
] as const;
export const sectionNames = ['bazpos', 'projects', 'stack', 'work', 'contact'] as const;
export type CommandName = (typeof commandNames)[number];
export type SectionName = (typeof sectionNames)[number];

export function resolveCommand(raw: string): { name: CommandName; args: string[] } | undefined {
  const [name, ...args] = raw.trim().toLowerCase().split(/\s+/);
  if (!commandNames.includes(name as CommandName)) return;
  return { name: name === 'readme' ? 'about' : (name as CommandName), args };
}
export function isSection(value: string): value is SectionName {
  return sectionNames.includes(value as SectionName);
}
export function completions(raw: string): string[] {
  const value = raw.trimStart().toLowerCase();
  if (/^go\s+/.test(value)) {
    const prefix = value.replace(/^go\s+/, '');
    return sectionNames
      .filter((section) => section.startsWith(prefix))
      .map((section) => `go ${section}`);
  }
  if (/\s/.test(value)) return [];
  return commandNames.filter((command) => command.startsWith(value));
}
