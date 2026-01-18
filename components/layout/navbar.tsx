"use client";

import { Menu, Phone, X } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Brand } from "@/components/brand";
import { useLanguage } from "@/lib/language-context";
import { useTranslations } from "@/lib/translations";
import { cn } from "@/lib/utils";
import { LanguageToggle } from "../language-toggle";
import { Button } from "../ui";
import { MobileMenu } from "./mobile-menu";

// ============================================
// Navbar Component
// ============================================
export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();
	const currentLang = useLanguage();
	const t = useTranslations();

	// Check if we're on the home page (just /en or /am)
	const isHome = pathname === `/${currentLang}` || pathname === `/${currentLang}/`;

	// Scroll detection
	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 50);
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

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

	// Navigation items with language prefix
	const navItems = [
		{ label: t.nav.work, href: `/${currentLang}#work` },
		{ label: t.nav.about, href: `/${currentLang}/about` },
	];

	const phone = "+251922451812";

	return (
		<>
			{/* Main Navigation Bar */}
			<nav
				className={cn(
					"fixed w-full px-6 md:px-12 flex justify-between items-center z-50 transition-all duration-500 ease-in-out border-b",
					scrolled
						? "py-4 bg-background/35 backdrop-blur-xl border-foreground/5 shadow-sm"
						: "py-6 md:py-8 bg-transparent border-transparent",
				)}
			>
				<motion.div
					initial={{ opacity: 0, x: -12 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
				>
					<Brand />
				</motion.div>

				{/* Desktop Navigation - white only on home page when unscrolled */}
				<div
					className={cn(
						"hidden lg:flex items-center gap-10 text-xs tracking-wide-md uppercase font-semibold transition-colors duration-500",
						isHome && !scrolled ? "text-primary-foreground" : "text-foreground",
					)}
				>
					{navItems.map((item) => (
						<NavLink key={item.href} href={item.href}>
							{item.label}
						</NavLink>
					))}

					<Link href={`/${currentLang}/contact`}>
						<Button
							variant="outline"
							size="sm"
							className={cn(
								isHome && !scrolled
									? "border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-accent"
									: "border-foreground text-foreground hover:bg-foreground hover:text-background",
							)}
						>
							{t.nav.consult}
						</Button>
					</Link>

					<div
						className={cn(
							"flex items-center gap-6 border-l pl-6 ml-2",
							isHome && !scrolled ? "border-primary-foreground/20" : "border-foreground/10",
						)}
					>
						<LanguageToggle className={isHome && !scrolled ? "text-primary-foreground" : ""} />
						<Link
							href={`tel:${phone}`}
							className="hidden xl:flex font-mono opacity-60 items-center gap-2 text-sm tracking-normal"
						>
							<Phone size={12} />
							{phone}
						</Link>
					</div>
				</div>

				{/* Mobile Menu Toggle */}
				<button
					type="button"
					onClick={() => setIsOpen(!isOpen)}
					className="lg:hidden p-2 z-50 relative text-foreground"
					aria-label="Toggle Menu"
				>
					{isOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</nav>

			<MobileMenu
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				navItems={navItems}
				phone={phone}
			/>
		</>
	);
}

// ============================================
// NavLink Component
// ============================================
interface NavLinkProps {
	href: string;
	children: React.ReactNode;
	onClick?: () => void;
}

function NavLink({ href, children, onClick }: NavLinkProps) {
	return (
		<Link
			href={href}
			onClick={onClick}
			className="relative group overflow-hidden block h-4 font-semibold"
		>
			<span className="block transition-transform duration-300 group-hover:-translate-y-full">
				{children}
			</span>
			<span className="block transition-transform duration-300 group-hover:-translate-y-full opacity-60">
				{children}
			</span>
		</Link>
	);
}
