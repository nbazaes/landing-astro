import { completions, isSection, resolveCommand, type SectionName } from './commands';
import type { terminalCopy } from './content';
import type { ProjectData, ProfileData, StackGroup, Locale } from '../../data/translations';
import type { engineeringExamples } from '../engineering';

type TerminalData = {
  locale: Locale;
  variant: 'embedded' | 'standalone';
  profile: ProfileData;
  copy: ReturnType<typeof terminalCopy>;
  projects: ProjectData[];
  hero: { subtext: string };
  stack: StackGroup[];
  work: ReturnType<typeof engineeringExamples>;
  home: string;
  bazpos: string;
};
type Line = string | { text: string; href: string };
export function initTerminal(root: HTMLElement) {
  if (root.dataset.initialized) return;
  const data: TerminalData = JSON.parse(root.querySelector('[data-terminal-data]')!.textContent!);
  const form = root.querySelector<HTMLFormElement>('form')!;
  const input = root.querySelector<HTMLInputElement>('input')!;
  const output = root.querySelector<HTMLElement>('.terminal-output')!;
  const screen = root.querySelector<HTMLElement>('.terminal-screen')!;
  const history: string[] = [];
  let index = 0;
  let draft = '';
  const { copy: c, locale } = data;
  root.dataset.initialized = 'true';
  form.hidden = false;
  root.querySelector<HTMLElement>('.terminal-toolbar')!.hidden = false;

  function append(lines: Line[]) {
    const fragment = document.createDocumentFragment();
    for (const line of lines) {
      const row = document.createElement('p');
      row.className = 'terminal-result';
      if (typeof line === 'string') row.textContent = line;
      else {
        const a = document.createElement('a');
        a.textContent = line.text;
        const url = new URL(line.href, window.location.origin);
        if (['https:', 'http:', 'mailto:'].includes(url.protocol)) {
          a.href = url.href;
          if (url.origin !== location.origin && url.protocol !== 'mailto:') {
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
          }
        }
        row.append(a);
      }
      fragment.append(row);
    }
    output.append(fragment);
  }
  function navigate(section?: SectionName) {
    if (data.variant === 'standalone') {
      window.location.assign(`${data.home}${section ? `#${section}` : '#intro'}`);
      return;
    }
    const target = document.getElementById(section ?? 'intro');
    if (!target) return;
    target.tabIndex = -1;
    target.focus({ preventScroll: true });
    target.scrollIntoView({
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
      block: 'start',
    });
    historyReplace(section ?? 'intro');
  }
  function historyReplace(section: string) {
    window.history.replaceState(null, '', `#${section}`);
  }
  const source = (project: ProjectData): Line => ({
    text: `${c.source}: ${project.displayName ?? project.name}`,
    href: project.githubUrl,
  });
  function run(raw: string) {
    const value = raw.trim();
    if (!value) return;
    history.push(value);
    index = history.length;
    draft = '';
    input.value = '';
    const echo = document.createElement('p');
    echo.className = 'terminal-result terminal-echo';
    const prompt = document.createElement('span');
    prompt.textContent = 'guest:~$ ';
    echo.append(prompt, document.createTextNode(value));
    output.append(echo);
    const command = resolveCommand(value);
    if (!command) append([c.unknown]);
    else {
      switch (command.name) {
        case 'help':
          append(
            Object.entries(c.commands).map(
              ([name, description]) => `${name.padEnd(10)} ${description}`,
            ),
          );
          break;
        case 'about':
          append([data.profile.name, data.hero.subtext]);
          break;
        case 'projects':
          append(
            data.projects.flatMap((p) => [
              p.displayName ?? p.name,
              p.description[locale],
              source(p),
            ]),
          );
          break;
        case 'bazpos': {
          const project = data.projects.find((p) => p.featured)!;
          append([
            project.description[locale],
            ...project.metrics[locale],
            { text: c.walkthrough, href: data.bazpos },
            { text: c.demo, href: 'https://bazpos.nbazaes.app/presentacion#probar' },
            source(project),
          ]);
          break;
        }
        case 'stack':
          append(
            data.stack.map(
              (group) => `${group.title}: ${group.items.map((item) => item.name).join(' / ')}`,
            ),
          );
          break;
        case 'work':
          append(
            data.work.flatMap((item) => [
              item.title,
              item.description,
              { text: item.label, href: item.href },
            ]),
          );
          break;
        case 'contact':
          append([
            { text: data.profile.email, href: `mailto:${data.profile.email}` },
            { text: 'GitHub', href: data.profile.githubUrl },
            { text: 'LinkedIn', href: data.profile.linkedinUrl },
          ]);
          break;
        case 'github':
          append([
            { text: 'GitHub / Nicolás Bazaes', href: data.profile.githubUrl },
            ...data.projects.map(source),
          ]);
          break;
        case 'go': {
          const [section] = command.args;
          if (command.args.length !== 1 || !isSection(section ?? '')) append([c.usage]);
          else {
            append([`${c.navigating}: ${section}`]);
            navigate(section as SectionName);
          }
          break;
        }
        case 'gui':
          navigate();
          break;
        case 'clear':
          output.replaceChildren();
          break;
      }
    }
    // Bound session DOM growth without retaining data outside this page.
    while (output.children.length > 300) output.firstElementChild?.remove();
    screen.scrollTop = screen.scrollHeight;
  }
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    run(input.value);
  });
  root.querySelectorAll<HTMLButtonElement>('[data-command]').forEach((button) => {
    button.addEventListener('click', () => run(button.dataset.command!));
  });
  input.addEventListener('keydown', (event) => {
    if (event.isComposing) return;
    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
      event.preventDefault();
      if (index === history.length) draft = input.value;
      index = Math.max(0, Math.min(history.length, index + (event.key === 'ArrowUp' ? -1 : 1)));
      input.value = history[index] ?? draft;
      input.setSelectionRange(input.value.length, input.value.length);
    } else if (event.key === 'Tab' && !event.shiftKey) {
      const matches = completions(input.value);
      if (matches.length === 1) {
        event.preventDefault();
        input.value = matches[0];
      } else if (matches.length > 1 && input.value.trim()) {
        event.preventDefault();
        append([matches.join('  ')]);
        screen.scrollTop = screen.scrollHeight;
      }
    }
  });
}
