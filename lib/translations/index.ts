"use client";

import { useLanguage } from "@/lib/language-context";
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

/**
 * Hook to get translations in client components.
 * Uses the LanguageContext to determine current language.
 */
export function useTranslations(): Translations {
	const lang = useLanguage();
	return translations[lang] || translations.en;
}
