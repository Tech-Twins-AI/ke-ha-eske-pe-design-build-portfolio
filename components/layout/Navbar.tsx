"use client";

import { Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { type ReactNode, useEffect, useState } from "react";
import { Button } from "@/components/ui";
import { LanguageToggle } from "@/components/LanguageToggle";
import { cn } from "@/lib/utils";

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
                    className="fixed inset-0 bg-background z-999 flex flex-col justify-center items-center"
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
                            <button
                                type="button"
                                onClick={onClose}
                                className="text-4xl font-bold tracking-tighter hover:opacity-60 transition-opacity"
                            >
                                Consult
                            </button>
                        </motion.div>

                        <motion.div variants={itemVariants} className="mt-8">
                            <div className="font-mono text-sm tracking-widest opacity-60">{phone}</div>
                        </motion.div>
                    </div>

                    {/* Decorative Background Text */}
                    <div className="absolute bottom-12 left-12 opacity-5 pointer-events-none hidden md:block select-none">
                        <span className="text-[20vh] font-bold leading-none">KH EP</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

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
    const baseStyles = "relative overflow-hidden py-1 font-bold uppercase text-xs tracking-[0.25em]";

    // Use anchor for hash links, Link for internal routes
    const isHashLink = href.startsWith("#");

    const MotionLink = isHashLink ? motion.a : motion(Link);

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

    // Navigation items
    const navItems = [
        { label: "Work", href: "#work" },
        { label: "About", href: "#about" },
    ];

    const phone = "+251922451812";

    return (
        <>
            {/* Main Navigation Bar */}
            <nav className="fixed w-full px-6 md:px-12 py-6 flex justify-between items-center z-1000 text-foreground  backdrop-blur-lg">
                {/* Logo & Brand */}
                <Link href="/" className="flex items-center gap-3 md:gap-5">
                    {/* Logo Placeholder - Replace with actual logo */}
                    <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full overflow-hidden bg-primary text-primary-foreground shadow-sm border border-border flex items-center justify-center font-bold text-lg md:text-xl">
                        KH
                    </div>

                    <div className="flex flex-col gap-0">
                        <div className="flex items-baseline">
                            <span className="font-bold text-base md:text-xl tracking-[0.2em] whitespace-nowrap uppercase">
                                KE HA ESKE PE
                                <span className="font-light text-[8px] md:text-[11px] tracking-widest opacity-60 ml-2 border-l border-primary/20 pl-2">
                                    DESIGN AND BUILD
                                </span>
                            </span>
                        </div>
                        <div className="flex items-baseline">
                            <span className="text-[10px] md:text-sm font-amharic opacity-80 font-medium whitespace-nowrap">
                                ከሀ እስከ ፐ
                                <span className="opacity-40 font-light text-[8px] md:text-[10px] ml-2 border-l border-primary/20 pl-2">
                                    ንድፍ እና ግንባታ
                                </span>
                            </span>
                        </div>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10">
                    {navItems.map((item) => (
                        <NavLink key={item.href} href={item.href}>
                            {item.label}
                        </NavLink>
                    ))}

                    <Button variant="primary" size="sm">
                        Consult
                    </Button>

                    <div className="flex items-center gap-2 border-l border-primary/10 pl-6 ml-2">
                        <LanguageToggle/>
                        <Link href={`tel:${phone}`} className="text-secondary flex items-center gap-2 text-xs">
                            <Phone size={16} />
                            {phone}
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 z-1001 relative"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <MobileMenu
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                navItems={navItems}
                phone={phone}
            />
        </>
    );
}
