"use client";

import { Globe } from "lucide-react";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
	className?: string;
}

export function LanguageToggle({ className }: LanguageToggleProps) {
	// TODO: Implement actual language switching logic
	const currentLanguage = "EN";

	const handleToggle = () => {
		// Toggle between English and Amharic
		console.log("Toggle language");
	};

	return (
		<Button
			variant="ghost"
			size="sm"
			onClick={handleToggle}
			className={cn("flex items-center gap-2", className)}
		>
			<Globe size={16} />
			<span>{currentLanguage}</span>
		</Button>
	);
}
