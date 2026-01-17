"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui";
import { getTranslations } from "@/lib/translations";
import type { Language } from "@/sanity/lib/languages";

export function NotFoundContent() {
	const pathname = usePathname();
	const langFromPath = pathname?.split("/")[1];
	const lang: Language = langFromPath === "am" ? "am" : "en";
	const t = getTranslations(lang);

	return (
		<main className="min-h-screen bg-background flex items-center justify-center px-6">
			<div className="text-center max-w-md">
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				>
					<span className="text-[12rem] md:text-[16rem] font-bold tracking-tighter leading-none text-foreground/5 select-none">
						404
					</span>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
					className="-mt-20 md:-mt-28"
				>
					<h1 className="text-2xl md:text-3xl font-bold tracking-tight uppercase mb-4">
						{t.notFound.title}
					</h1>

					<p className="text-secondary font-light mb-8">{t.notFound.description}</p>

					<Link href={`/${lang}`}>
						<Button variant="outline">{t.notFound.backHome}</Button>
					</Link>
				</motion.div>

				<motion.div
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 1, delay: 0.4, ease: "circOut" }}
					className="w-12 h-[2px] bg-foreground/10 mx-auto mt-12"
				/>
			</div>
		</main>
	);
}
