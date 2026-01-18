"use client";

import { createContext, useContext } from "react";
import type { Language } from "@/sanity/lib/languages";

// Context for providing language to client components
const LanguageContext = createContext<Language>("en");

// Provider component
export function LanguageProvider({
	children,
	lang,
}: {
	children: React.ReactNode;
	lang: Language;
}) {
	return <LanguageContext.Provider value={lang}>{children}</LanguageContext.Provider>;
}

// Hook to access current language in client components
export function useLanguage(): Language {
	return useContext(LanguageContext);
}
