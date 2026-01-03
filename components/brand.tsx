import Link from "next/link";
import { cn } from "@/lib/utils";

type BrandVariant = "logo" | "logo-text" | "full";

interface BrandProps {
    variant?: BrandVariant;
    className?: string;
}

export function Brand({ variant = "full", className }: BrandProps) {
    const showName = variant !== "logo";
    const showTagline = variant === "full";

    return (
        <Link href="/" className={cn("flex items-center gap-3 md:gap-5", className)}>
            {/* Logo */}
            <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 rounded-full overflow-hidden bg-primary text-primary-foreground shadow-sm border border-border flex items-center justify-center font-bold text-lg md:text-xl">
                KH
            </div>

            {/* Text content */}
            {showName && (
                <div className="flex items-baseline">
                    <span className="font-bold text-base md:text-xl tracking-[0.2em] whitespace-nowrap uppercase">
                        KE HA ESKE PE
                        {showTagline && (
                            <span className="font-light text-xs md:text-sm tracking-widest text-secondary ml-2 border-l border-primary/20 pl-2">
                                DESIGN AND BUILD
                            </span>
                        )}
                    </span>
                </div>
            )}
        </Link>
    );
}