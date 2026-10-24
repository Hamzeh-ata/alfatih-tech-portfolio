import { DOCUMENT } from '@angular/common';
import { Injectable, computed, inject, signal } from '@angular/core';
import ar from '../i18n/ar.json';
import en from '../i18n/en.json';

export type AppLanguage = 'en' | 'ar';

type TranslationTree = Record<string, unknown>;

const STORAGE_KEY = 'alfatih-lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);

  private readonly dictionaries: Record<AppLanguage, TranslationTree> = {
    en: en as TranslationTree,
    ar: ar as TranslationTree,
  };

  readonly language = signal<AppLanguage>(this.readStoredLanguage());
  readonly direction = computed(() => (this.language() === 'ar' ? 'rtl' : 'ltr'));
  readonly isArabic = computed(() => this.language() === 'ar');

  constructor() {
    this.applyDocumentLanguage(this.language());
  }

  setLanguage(language: AppLanguage): void {
    this.language.set(language);
    this.persistLanguage(language);
    this.applyDocumentLanguage(language);
  }

  toggleLanguage(): void {
    const next = this.language() === 'en' ? 'ar' : 'en';
    this.setLanguage(next);
  }

  translate(key: string, params?: Record<string, string | number>): string {
    const value = this.resolveKey(this.dictionaries[this.language()], key);
    if (typeof value !== 'string') {
      return key;
    }
    return this.applyParams(value, params);
  }

  private resolveKey(tree: TranslationTree, key: string): unknown {
    const parts = key.split('.');
    let current: unknown = tree;
    for (const part of parts) {
      if (!current || typeof current !== 'object') {
        return undefined;
      }
      current = (current as TranslationTree)[part];
    }
    return current;
  }

  private applyParams(value: string, params?: Record<string, string | number>): string {
    if (!params) {
      return value;
    }
    let result = value;
    const entries = Object.entries(params);
    for (const [paramKey, paramValue] of entries) {
      result = result.split(`{{${paramKey}}}`).join(String(paramValue));
    }
    return result;
  }

  private readStoredLanguage(): AppLanguage {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'ar' || stored === 'en') {
        return stored;
      }
    } catch {
      return 'en';
    }
    return 'en';
  }

  private persistLanguage(language: AppLanguage): void {
    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch {
      return;
    }
  }

  private applyDocumentLanguage(language: AppLanguage): void {
    const html = this.document.documentElement;
    html.lang = language;
    html.dir = language === 'ar' ? 'rtl' : 'ltr';
  }
}
