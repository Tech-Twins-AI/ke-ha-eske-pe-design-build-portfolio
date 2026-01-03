"use client";

import { ArrowRight } from "lucide-react";
import { type ButtonHTMLAttributes, forwardRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

// Button Variants
type ButtonVariant = "primary" | "outline" | "ghost" | "link";
type ButtonSize = "sm" | "default" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: ButtonVariant;
	size?: ButtonSize;
	children: ReactNode;
	/** Show arrow animation on hover (only for primary variant) */
	showArrow?: boolean;
	/** Full width button */
	fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			variant = "primary",
			size = "default",
			children,
			showArrow = false,
			fullWidth = false,
			className,
			disabled,
			...props
		},
		ref,
	) => {
		// Base styles shared by all variants
		const baseStyles =
			"relative inline-flex items-center justify-center font-medium uppercase transition-all duration-300 ease-out disabled:opacity-50 disabled:cursor-not-allowed";

		// Size variants
		const sizeStyles: Record<ButtonSize, string> = {
			sm: "px-5 py-2.5 text-[10px] tracking-widest",
			default: "px-8 py-4 text-xs tracking-[0.2em]",
			lg: "px-12 py-5 text-sm tracking-[0.3em]",
		};

		// Variant styles
		const variantStyles: Record<ButtonVariant, string> = {
			primary:
				"bg-background text-foreground border border-primary hover:bg-primary hover:text-primary-foreground",
			outline:
				"bg-transparent text-foreground border border-primary hover:bg-primary hover:text-primary-foreground",
			ghost: "bg-transparent text-foreground border-none hover:opacity-60",
			link: "bg-transparent text-foreground border-none p-0 underline-offset-4 hover:underline",
		};

		// Link variant doesn't need padding from size, just font size
		const linkSizeStyles: Record<ButtonSize, string> = {
			sm: "text-[10px] tracking-widest",
			default: "text-xs tracking-[0.2em]",
			lg: "text-sm tracking-[0.3em]",
		};

		// Combined class names using cn utility
		const combinedClassName = cn(
			baseStyles,
			variant === "link" ? linkSizeStyles[size] : sizeStyles[size],
			variantStyles[variant],
			fullWidth && "w-full",
			className,
		);

		// Primary variant with arrow animation
		if (variant === "primary" && showArrow) {
			return (
				<button
					ref={ref}
					className={cn("group overflow-hidden", combinedClassName)}
					disabled={disabled}
					{...props}
				>
					{/* Arrow slide-in layer */}
					<span className="absolute inset-0 flex items-center justify-center w-full h-full text-primary-foreground duration-300 -translate-x-full bg-primary group-hover:translate-x-0 ease-out">
						<ArrowRight className="w-5 h-5" />
					</span>
					{/* Text slide-out layer */}
					<span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease-out">
						{children}
					</span>
					{/* Invisible text for width calculation */}
					<span className="relative invisible">{children}</span>
				</button>
			);
		}

		// Standard button (all other variants)
		return (
			<button ref={ref} className={combinedClassName} disabled={disabled} {...props}>
				{children}
			</button>
		);
	},
);

Button.displayName = "Button";

export { Button, type ButtonProps, type ButtonVariant, type ButtonSize };
