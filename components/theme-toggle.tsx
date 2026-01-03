"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

type Theme = "system" | "light" | "dark";

interface ThemeToggleProps {
	className?: string;
}

const themeIcons = {
	system: Monitor,
	light: Sun,
	dark: Moon,
} as const;

const themeLabels = {
	system: "System",
	light: "Light",
	dark: "Dark",
} as const;

export function ThemeToggle({ className }: ThemeToggleProps) {
	// TODO: Integrate with actual theme provider
	const [theme, setTheme] = useState<Theme>("system");

	const handleToggle = () => {
		const themes: Theme[] = ["system", "light", "dark"];
		const currentIndex = themes.indexOf(theme);
		const nextIndex = (currentIndex + 1) % themes.length;
		setTheme(themes[nextIndex]);
		console.log("Theme switched to:", themes[nextIndex]);
	};

	const Icon = themeIcons[theme];

	return (
		<Button
			variant="ghost"
			size="sm"
			onClick={handleToggle}
			className={cn("flex items-center gap-2", className)}
			aria-label={`Current theme: ${themeLabels[theme]}. Click to switch.`}
		>
			<Icon size={16} className="text-secondary" />
		</Button>
	);
}
