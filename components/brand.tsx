import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import logo from "@/public/logo-white.svg";

type BrandVariant = "logo" | "logo-with-text" | "full";

interface BrandProps {
	variant?: BrandVariant;
	className?: string;
	logoSize?: number;
}

export function Brand({ variant = "full", className, logoSize = 52 }: BrandProps) {
	const showName = variant !== "logo";
	const showTagline = variant === "full";

	return (
		<Link href="/" className={cn("flex items-center gap-3 md:gap-5", className)}>
			{/* Logo */}
			<div className="shrink-0 rounded-full overflow-hidden bg-background shadow-sm border border-border flex items-center justify-center transition-transform duration-500 hover:scale-105">
				<Image
					src={logo}
					alt="Ke Ha Eske Pe Logo"
					width={logoSize}
					height={logoSize}
					className={cn(
						"object-cover mix-blend-multiply ",
						!logoSize && "w-12 h-12 md:w-16 md:h-16",
					)}
				/>
			</div>

			{/* Text content */}
			{showName && (
				<div className="flex flex-col gap-0">
					{/* English line */}
					<div className="flex items-baseline">
						<span className="font-bold text-sm sm:text-base md:text-xl tracking-wide-sm whitespace-nowrap uppercase">
							KE HA ESKE PE
							{showTagline && (
								<span className="font-light text-[8px] md:text-label-md tracking-widest opacity-60 ml-2 border-l border-foreground/20 pl-2">
									DESIGN AND BUILD
								</span>
							)}
						</span>
					</div>

					{/* Amharic line */}
					<div className="flex items-baseline">
						<span className="text-label md:text-sm font-amharic opacity-80 font-medium whitespace-nowrap">
							ከሀ እስከ ፐ
							{showTagline && (
								<span className="opacity-40 font-light text-[8px] md:text-label ml-2 border-l border-foreground/20 pl-2">
									ንድፍ እና ግንባታ
								</span>
							)}
						</span>
					</div>
				</div>
			)}
		</Link>
	);
}
