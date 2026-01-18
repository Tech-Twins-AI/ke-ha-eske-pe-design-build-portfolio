"use client";

import { useLanguage } from "@/lib/language-context";
import am from "./am.json";
import en from "./en.json";

// Translation dictionary
const translations = { en, am } as const;

// Type for translations (inferred from English as source of truth)
export type Translations = typeof en;

/**
 * Hook to get translations in client components.
 * Uses the LanguageContext to determine current language.
 */
export function useTranslations(): Translations {
	const lang = useLanguage();
	return translations[lang] || translations.en;
}
