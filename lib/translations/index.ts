import type { Language } from "@/sanity/lib/languages";
import am from "./am.json";
import en from "./en.json";

// Translation dictionary
const translations = { en, am } as const;

// Type for translations (inferred from English as source of truth)
export type Translations = typeof en;

/**
 * Get translations for a specific language.
 * Use this in server components where you have access to the lang param.
 */
export function getTranslations(lang: Language): Translations {
	return translations[lang] || translations.en;
}

// Re-export the hook from a separate client file
export { useTranslations } from "./use-translations";
