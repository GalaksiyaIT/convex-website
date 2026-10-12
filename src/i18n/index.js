// Minimal two-language (en/tr) i18n without extra dependencies. English is the default;
// the visitor's choice is remembered in localStorage. URLs stay the same in both languages.
import { computed, ref } from 'vue'

// Türkçe varsayılan olarak kapalı; açmak için build ortamında VITE_ENABLE_TURKISH=true verin.
// Kapalıyken dil seçici gizlenir ve daha önce kaydedilmiş 'tr' tercihi yok sayılır.
export const TURKISH_ENABLED = import.meta.env.VITE_ENABLE_TURKISH === 'true'
export const LOCALES = TURKISH_ENABLED ? ['en', 'tr'] : ['en']
export const DEFAULT_LOCALE = 'en'
const STORAGE_KEY = 'convex-locale'

function readStoredLocale() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (LOCALES.includes(stored)) return stored
  } catch {
    // Storage may be blocked (private mode etc.); fall back to the default.
  }
  return DEFAULT_LOCALE
}

export const locale = ref(readStoredLocale())

function applyDocumentLang(value) {
  if (typeof document !== 'undefined') document.documentElement.lang = value
}
applyDocumentLang(locale.value)

export function setLocale(value) {
  if (!LOCALES.includes(value)) return
  locale.value = value
  applyDocumentLang(value)
  try {
    localStorage.setItem(STORAGE_KEY, value)
  } catch {
    // ignore
  }
}

// Resolves a `{ en, tr }` pair to the active language; plain strings pass through.
// Reads `locale.value`, so it is reactive when called from a template or computed.
export function t(value) {
  if (value == null || typeof value !== 'object' || Array.isArray(value)) return value
  return value[locale.value] ?? value[DEFAULT_LOCALE]
}

// For pages with a lot of copy: `const c = useCopy({ en: {...}, tr: {...} })`, then `c.value.x`
// in script or `c.x` in the template.
export function useCopy(copy) {
  return computed(() => copy[locale.value] ?? copy[DEFAULT_LOCALE])
}

export function useLocale() {
  return { locale, setLocale, t }
}
