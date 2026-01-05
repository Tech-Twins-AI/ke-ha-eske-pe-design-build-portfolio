"use client";

import { Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Brand } from "@/components/brand";
import { cn } from "@/lib/utils";
import { LanguageToggle } from "../language-toggle";
import { Button } from "../ui";

// ============================================
// Navbar Component
// ============================================
export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();
	const isHome = pathname === "/";

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

	const navItems = [
		{ label: "Work", href: "#work" },
		{ label: "About", href: "/about" },
	];

	const phone = "+251922451812";

	return (
		<>
			{/* Main Navigation Bar */}
			<nav
				className={cn(
					"fixed w-full px-6 md:px-12 flex justify-between items-center z-50 transition-all duration-500 ease-in-out",
					scrolled
						? "py-4 bg-background/35 backdrop-blur-xl border-b border-foreground/5 shadow-sm"
						: "py-6 md:py-8 bg-transparent",
				)}
			>
				{/* Brand - stays dark (left side over white background) */}
				<motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
					<Brand />
				</motion.div>

				{/* Desktop Navigation - white only on home page when unscrolled */}
				<div
					className={cn(
						"hidden lg:flex items-center gap-10 text-xs tracking-wide-md uppercase font-bold transition-colors duration-500",
						isHome && !scrolled ? "text-primary-foreground" : "text-foreground",
					)}
				>
					{navItems.map((item) => (
						<NavLink key={item.href} href={item.href}>
							{item.label}
						</NavLink>
					))}

					<Link href="/contact">
						<Button
							variant="outline"
							size="sm"
							className={cn(
								isHome && !scrolled
									? "border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-accent"
									: "border-foreground text-foreground hover:bg-foreground hover:text-background",
							)}
						>
							Consult
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
	const isHashLink = href.startsWith("#");
	const Component = isHashLink ? "a" : Link;

	return (
		<Component href={href} onClick={onClick} className="relative group overflow-hidden py-1">
			<span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
				{children}
			</span>
			<span className="absolute left-0 top-full inline-block transition-transform duration-300 group-hover:-translate-y-full opacity-60">
				{children}
			</span>
		</Component>
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
	phone: string;
}

function MobileMenu({ isOpen, onClose, navItems, phone }: MobileMenuProps) {
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
								<a
									href={item.href}
									onClick={onClose}
									className="text-4xl font-bold tracking-tighter hover:text-secondary transition-colors"
								>
									{item.label}
								</a>
							</motion.div>
						))}

						<motion.div variants={itemVariants}>
							<Link
								href="/contact"
								onClick={onClose}
								className="text-4xl font-bold tracking-tighter hover:text-secondary transition-colors"
							>
								<Button variant="outline" onClick={onClose}>
									Consult
								</Button>
							</Link>
						</motion.div>

						<motion.div variants={itemVariants} className="mt-8 flex flex-col gap-4">
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
