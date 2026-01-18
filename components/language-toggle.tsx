"use client";

import { Globe } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui";
import { useLanguage } from "@/lib/language-context";
import type { Language } from "@/sanity/lib/languages";

interface LanguageToggleProps {
	className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
	const pathname = usePathname();
	const currentLang = useLanguage();
	const targetLang: Language = currentLang === "en" ? "am" : "en";

	// Replace the language segment in the current path
	const targetPath = pathname.replace(`/${currentLang}`, `/${targetLang}`);

	return (
		<Button variant="ghost" size="sm" className={className}>
			<Link href={targetPath} prefetch className="flex items-center gap-2">
				<Globe size={16} />
				<span>{currentLang.toUpperCase()}</span>
			</Link>
		</Button>
	);
}
