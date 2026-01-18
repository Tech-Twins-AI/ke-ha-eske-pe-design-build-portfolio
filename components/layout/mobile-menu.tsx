"use client";

import { Phone } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { LanguageToggle } from "@/components/language-toggle";
import { Button } from "@/components/ui";
import { useLanguage } from "@/lib/language-context";
import { useTranslations } from "@/lib/translations";

// ============================================
// Animation Variants
// ============================================
const menuVariants = {
	closed: {
		opacity: 0,
		transition: {
			duration: 0.3,
			when: "afterChildren" as const,
		},
	},
	open: {
		opacity: 1,
		transition: {
			duration: 0.3,
			when: "beforeChildren" as const,
			staggerChildren: 0.1,
			delayChildren: 0.1,
		},
	},
};

const itemVariants = {
	closed: {
		opacity: 0,
		y: 12,
		transition: { duration: 0.3 },
	},
	open: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.3 },
	},
};

// ============================================
// MobileMenu Component
// ============================================
export interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
	navItems: { label: string; href: string }[];
	phone: string;
}

export function MobileMenu({ isOpen, onClose, navItems, phone }: MobileMenuProps) {
	const currentLang = useLanguage();
	const t = useTranslations();

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					variants={menuVariants}
					initial="closed"
					animate="open"
					exit="closed"
					className="fixed inset-0 bg-background z-30 flex flex-col justify-center items-center text-foreground"
				>
					<div className="flex flex-col gap-8 text-center">
						{navItems.map((item) => (
							<motion.div key={item.href} variants={itemVariants}>
								<Link
									href={item.href}
									onClick={onClose}
									className="text-4xl font-bold tracking-tighter hover:text-secondary transition-colors"
								>
									{item.label}
								</Link>
							</motion.div>
						))}

						<motion.div variants={itemVariants}>
							<Link
								href={`/${currentLang}/contact`}
								onClick={onClose}
								className="text-4xl font-bold tracking-tighter hover:text-secondary transition-colors"
							>
								<Button variant="outline" onClick={onClose}>
									{t.nav.consult}
								</Button>
							</Link>
						</motion.div>

						<motion.div variants={itemVariants} className="flex flex-col gap-4">
							<LanguageToggle />

							<Link
								href={`tel:${phone}`}
								className="font-mono text-sm tracking-widest opacity-60 flex items-center gap-2"
							>
								<Phone size={12} />
								{phone}
							</Link>
						</motion.div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
