import type { Locale } from '../data/translations';
const storageKey = 'nbazaes-locale';
export function saveLocale(locale: Locale) {
  try {
    localStorage.setItem(storageKey, locale);
  } catch {
    /* Navigation works without storage. */
  }
}
