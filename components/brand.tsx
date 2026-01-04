import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "@/public/logo.svg";

type BrandVariant = "logo" | "logo-with-text" | "full";

interface BrandProps {
	variant?: BrandVariant;
	className?: string;
	logoSize?: number;
}

export function Brand({ variant = "full", className, logoSize = 64 }: BrandProps) {
	const showName = variant !== "logo";
	const showTagline = variant === "full";

	return (
		<Link href="/" className={cn("flex items-center gap-3 md:gap-5", className)}>
			{/* Logo */}
			<Image
				src={logo}
				alt="Logo"
				width={logoSize}
				height={logoSize}
				className="bg-background rounded-full"
			/>

			{/* Text content */}
			{showName && (
				<div className="flex items-baseline">
					<span className="font-semibold text-base md:text-xl whitespace-nowrap tracking-normal">
						KE HA ESKE PE
						{showTagline && (
							<span className="font-light text-xs tracking-wider text-secondary ml-2 border-l border-primary/20 pl-2">
								DESIGN AND BUILD
							</span>
						)}
					</span>
				</div>
			)}
		</Link>
	);
}