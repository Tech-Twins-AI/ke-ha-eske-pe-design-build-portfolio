// Supported languages for internationalization
export const supportedLanguages = [
	{ id: "en", title: "English" },
	{ id: "am", title: "Amharic" },
];

// Type for language IDs
export type Language = "en" | "am";

// Default/base language (used for fallbacks in queries)
export const baseLanguage: Language = "en";

// Array of language IDs for validation
export const languageIds = supportedLanguages.map((l) => l.id);
