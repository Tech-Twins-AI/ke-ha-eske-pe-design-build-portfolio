import type { Language } from "@/sanity/lib/languages";

/**
 * Base interface for components that need language support.
 */
export interface WithLanguage {
	lang: Language;
}

/**
 * Props for pages with lang from route params.
 * Example: /[lang]/about
 */
export interface LangPageProps {
	params: Promise<{ lang: string }>;
}

/**
 * Props for pages with lang and additional route params.
 * Example: /[lang]/works/[category]
 */
export interface LangPageWithCategoryProps {
	params: Promise<{ lang: string; category: string }>;
}
