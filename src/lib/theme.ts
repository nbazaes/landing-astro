export const THEME_STORAGE_KEY = 'nbazaes-theme';
type Theme = 'light' | 'dark';

function readPreference(): Theme | null {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY);
    return value === 'light' || value === 'dark' ? value : null;
  } catch {
    return null;
  }
}

export function initThemeControls() {
  const root = document.documentElement;
  if (root.dataset.themeControlsReady) return;
  root.dataset.themeControlsReady = 'true';
  const system = matchMedia('(prefers-color-scheme: dark)');
  const buttons = document.querySelectorAll<HTMLButtonElement>('[data-theme-toggle]');
  let preference = readPreference();

  const apply = (theme: Theme) => {
    root.dataset.theme = theme;
    for (const button of buttons) {
      button.setAttribute('aria-pressed', String(theme === 'dark'));
      button.title =
        (theme === 'dark' ? button.dataset.labelLight : button.dataset.labelDark) ?? '';
      button.hidden = false;
    }
    const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (meta) meta.content = getComputedStyle(root).getPropertyValue('--color-paper').trim();
  };
  const applyPreference = () => apply(preference ?? (system.matches ? 'dark' : 'light'));

  applyPreference();
  for (const button of buttons) {
    button.addEventListener('click', () => {
      preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(THEME_STORAGE_KEY, preference);
      } catch {
        // The control remains usable when storage is unavailable.
      }
      apply(preference);
    });
  }
  system.addEventListener('change', () => {
    if (preference === null) applyPreference();
  });
  window.addEventListener('storage', (event) => {
    if (event.key !== THEME_STORAGE_KEY && event.key !== null) return;
    preference = readPreference();
    applyPreference();
  });
}
