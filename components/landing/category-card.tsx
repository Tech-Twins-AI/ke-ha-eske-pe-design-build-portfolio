"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import type { ProjectCategory } from "@/lib/constants";

interface CategoryCardProps {
	category: ProjectCategory;
	featuredImage: string | null;
	projectCount?: number;
	/** Large variant for bento grid hero card */
	variant?: "default" | "large";
}

export function CategoryCard({
	category,
	featuredImage,
	projectCount = 0,
	variant = "default",
}: CategoryCardProps) {
	const isLarge = variant === "large";

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true, margin: "0px 0px -50px 0px" }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			tabIndex={0}
			className={`group relative overflow-hidden bg-muted h-full ${
				isLarge ? "aspect-square md:aspect-auto" : "aspect-4/5"
			}`}
		>
			{/* Background Image */}
			{featuredImage && (
				<Image
					src={featuredImage}
					alt={category.label}
					fill
					sizes="(max-width: 768px) 100vw, 50vw"
					className="object-cover transition-all duration-700 ease-out grayscale group-hover:grayscale-0 group-focus-within:grayscale-0 group-hover:scale-105 group-focus-within:scale-105"
				/>
			)}

			<div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent transition-all duration-700 opacity-80 group-hover:opacity-60 group-focus-within:opacity-60" />

			<div className="absolute inset-0 bg-grid-light opacity-[0.08] pointer-events-none" />

			{/* Content */}
			<div
				className={`absolute inset-0 flex flex-col justify-end text-primary-foreground z-10 ${
					isLarge ? "p-8 md:p-12" : "p-6 md:p-8"
				}`}
			>
				<div className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-focus-within:-translate-y-2">
					<p className="text-label tracking-wide-sm uppercase text-primary-foreground/80 mb-3 font-bold">
						{projectCount} {projectCount === 1 ? "Project" : "Projects"}
					</p>

					<h3
						className={`font-bold tracking-tight leading-tight mb-4 ${
							isLarge ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"
						}`}
					>
						{category.label}
					</h3>

					<Link
						href={`/works/${category.id}`}
						className="group/link inline-flex items-center gap-3 text-2xs tracking-wide-lg uppercase font-bold transition-all duration-300 hover:gap-4 focus:outline-none focus:gap-4"
					>
						<span className="relative">
							View More
							{/* Animated underline */}
							<span className="absolute left-0 -bottom-1 w-0 h-px bg-current transition-all duration-300 group-hover/link:w-full group-focus/link:w-full" />
						</span>
						<ArrowRight size={14} />
					</Link>
				</div>
			</div>

			<div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-500">
				<div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-primary-foreground/30" />
			</div>
		</motion.div>
	);
}
