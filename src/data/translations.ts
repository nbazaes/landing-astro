import type { CollectionEntry } from 'astro:content';

export type Locale = 'en' | 'es';
export type TranslationData = CollectionEntry<'site'>['data'];
export type ProjectData = CollectionEntry<'projects'>['data'] & { id: string };
export type ProfileData = CollectionEntry<'profile'>['data'];
export type StackGroup = TranslationData['stack']['groups'][number];
export type StackItem = StackGroup['items'][number];
