import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer, Navbar } from "@/components/layout";
import { fontVariables } from "@/lib/fonts";
import { LanguageProvider } from "@/lib/language-context";
import { getTranslations } from "@/lib/translations";
import { type Language, languageIds } from "@/sanity/lib/languages";
import { SanityLive } from "@/sanity/lib/live";

interface LangLayoutProps {
	children: React.ReactNode;
	params: Promise<{ lang: string }>;
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ lang: string }>;
}): Promise<Metadata> {
	const { lang } = await params;
	const t = getTranslations(lang as Language);

	return {
		title: t.metadata.title,
		description: t.metadata.description,
	};
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
	const { lang } = await params;

	// Validate language parameter
	if (!languageIds.includes(lang as Language)) {
		notFound();
	}

	return (
		<html lang={lang} data-scroll-behavior="smooth">
			<body className={`${fontVariables} antialiased ${lang === "am" ? "font-amharic" : ""}`}>
				<LanguageProvider lang={lang as Language}>
					<Navbar />
					{children}
					<Footer />
					<SanityLive />
				</LanguageProvider>
			</body>
		</html>
	);
}
