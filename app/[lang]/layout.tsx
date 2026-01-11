import { notFound } from "next/navigation";
import { Footer, Navbar } from "@/components/layout";
import { LanguageProvider } from "@/lib/language-context";
import { SanityLive } from "@/sanity/lib/live";
import { type Language, languageIds } from "@/sanity/lib/languages";

interface LangLayoutProps {
	children: React.ReactNode;
	params: Promise<{ lang: string }>;
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
	const { lang } = await params;

	// Validate language parameter
	if (!languageIds.includes(lang as Language)) {
		notFound();
	}

	return (
		<LanguageProvider lang={lang as Language}>
			<Navbar />
			{children}
			<Footer />
			<SanityLive />
		</LanguageProvider>
	);
}
