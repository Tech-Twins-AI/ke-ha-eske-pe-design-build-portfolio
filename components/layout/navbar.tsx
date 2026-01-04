"use client";

import { Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { type ReactNode, useEffect, useState } from "react";
import { Brand } from "@/components/brand";
import { LanguageToggle } from "@/components/language-toggle";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";

// ============================================
// NavLink Component
// ============================================
interface NavLinkProps {
	href: string;
	children: ReactNode;
	className?: string;
	onClick?: () => void;
}

function NavLink({ href, children, className, onClick }: NavLinkProps) {
	const baseStyles =
		"relative overflow-hidden py-1 font-semibold uppercase text-sm tracking-[0.2em]";

	const isHashLink = href.startsWith("#");

	const MotionLink = isHashLink ? motion.a : motion.create(Link);

	return (
		<MotionLink
			href={href}
			className={cn(baseStyles, className)}
			onClick={onClick}
			initial="idle"
			whileHover="hover"
		>
			<span className="relative block overflow-hidden h-4">
				{/* Original text - slides up on hover */}
				<motion.span
					className="block"
					variants={{
						idle: { y: 0 },
						hover: { y: "-100%" },
					}}
					transition={{ duration: 0.3 }}
				>
					{children}
				</motion.span>
				{/* Duplicate text - slides up from below on hover */}
				<motion.span
					className="block opacity-60"
					variants={{
						idle: { y: 0 },
						hover: { y: "-100%" },
					}}
					transition={{ duration: 0.3 }}
				>
					{children}
				</motion.span>
			</span>
		</MotionLink>
	);
}

// ============================================
// Navbar Component
// ============================================
export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	// Lock scroll when mobile menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	const navItems = [
		{ label: "Works", href: "#works" },
		{ label: "About", href: "/about" },
	];

	const phone = "+251922451812";

	return (
		<>
			{/* Main Navigation Bar */}
			<nav className="fixed w-full px-6 md:px-12 py-4 flex justify-between items-center z-50 text-foreground bg-background/80 backdrop-blur-md">
				<Brand className="flex-wrap" />

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center gap-10">
					{navItems.map((item) => (
						<NavLink key={item.href} href={item.href}>
							{item.label}
						</NavLink>
					))}

					<Button variant="outline" size="default">
						Consult
					</Button>

					<div className="flex items-center gap-1 border-l border-primary/10 pl-6 ml-2">
						<LanguageToggle className="text-muted-foreground" />
						<Link
							href={`tel:${phone}`}
							className="flex items-center gap-2 text-xs text-muted-foreground"
						>
							<Phone size={16} />
							{phone}
						</Link>
					</div>
				</div>

				{/* Mobile Menu Toggle */}
				<button
					type="button"
					onClick={() => setIsOpen(!isOpen)}
					className="md:hidden p-2 z-50 relative"
					aria-label="Toggle Menu"
				>
					{isOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</nav>

			<MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} navItems={navItems} />
		</>
	);
}

// ============================================
// Animation Variants
// ============================================
const menuVariants = {
	closed: {
		opacity: 0,
		y: "-100%",
		transition: {
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1] as const,
			when: "afterChildren" as const,
		},
	},
	open: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: [0.22, 1, 0.36, 1] as const,
			when: "beforeChildren" as const,
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	closed: { opacity: 0, y: 20 },
	open: { opacity: 1, y: 0 },
};

// ============================================
// MobileMenu Component
// ============================================
interface MobileMenuProps {
	isOpen: boolean;
	onClose: () => void;
	navItems: { label: string; href: string }[];
}

function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
	const phone = "+251922451812";

	return (
		<AnimatePresence>
			{isOpen && (
				<motion.div
					variants={menuVariants}
					initial="closed"
					animate="open"
					exit="closed"
					className="fixed inset-0 bg-background z-40 flex flex-col justify-center items-center"
				>
					<div className="flex flex-col gap-8 text-center">
						{navItems.map((item) => (
							<motion.div key={item.href} variants={itemVariants}>
								<a
									href={item.href}
									onClick={onClose}
									className="text-4xl font-bold tracking-tighter hover:opacity-60 transition-opacity"
								>
									{item.label}
								</a>
							</motion.div>
						))}

						<motion.div variants={itemVariants}>
							<Button variant="outline" onClick={onClose}>
								Consult
							</Button>
						</motion.div>

						{/* Separator */}
						<motion.div variants={itemVariants} className="w-12 h-px bg-border mx-auto" />

						<motion.div variants={itemVariants} className="flex flex-col items-center gap-4">
							<div className="flex items-center gap-4">
								<LanguageToggle className="text-muted-foreground" />
							</div>
							<Link
								href={`tel:${phone}`}
								className="flex items-center gap-2 text-sm font-mono tracking-widest text-muted-foreground"
							>
								<Phone size={16} />
								{phone}
							</Link>
						</motion.div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
}
