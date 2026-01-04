"use client";

import { Quote } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import type { TESTIMONIALS_QUERYResult } from "@/sanity/types";

// Generate initials from name
function getInitials(name: string): string {
	const words = name.split(" ");
	if (words.length === 1) {
		return words[0][0].toUpperCase();
	}
	return (words[0][0] + words[words.length - 1][0]).toUpperCase();
}

// Threshold for showing "Read more" (characters)
const QUOTE_THRESHOLD = 200;

export function TestimonialCard({
	name,
	role,
	company,
	quote,
	avatar,
}: TESTIMONIALS_QUERYResult[number]) {
	const [isExpanded, setIsExpanded] = useState(false);
	const isLongQuote = quote.length > QUOTE_THRESHOLD;

	return (
		<div className="relative p-8 md:p-10 border border-border bg-muted/30 flex flex-col group transition-all duration-500 hover:bg-background hover:shadow-xl hover:shadow-foreground/5">
			{/* Background Quote Icon */}
			<div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
				<Quote size={80} strokeWidth={1} />
			</div>

			{/* Quote Content with smooth height animation */}
			<div className="mb-6 relative z-10">
				<motion.div
					initial={false}
					animate={{
						height: isExpanded ? "auto" : "7.5rem", // ~5 lines at text-lg
					}}
					transition={{
						height: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
					}}
					style={{ overflow: "hidden" }}
				>
					<p className="text-lg leading-relaxed text-foreground font-light italic">"{quote}"</p>
				</motion.div>

				{/* Read More / Read Less Button */}
				{isLongQuote && (
					<motion.button
						type="button"
						onClick={() => setIsExpanded(!isExpanded)}
						className="mt-3 text-xs uppercase tracking-widest text-secondary hover:text-foreground transition-colors duration-300 underline underline-offset-4"
						whileTap={{ scale: 0.95 }}
					>
						{isExpanded ? "Read less" : "Read more"}
					</motion.button>
				)}
			</div>

			{/* Author Info */}
			<div className="mt-auto pt-8 border-t border-border flex items-center gap-4">
				{/* Avatar */}
				<div className="w-12 h-12 rounded-full overflow-hidden bg-primary text-primary-foreground flex items-center justify-center shrink-0">
					{avatar ? (
						<Image
							src={avatar}
							alt={name}
							width={200}
							height={200}
							className="w-full h-full object-cover"
						/>
					) : (
						<span className="text-sm font-bold">{getInitials(name)}</span>
					)}
				</div>

				{/* Name & Role */}
				<div>
					<h4 className="font-bold text-sm tracking-widest uppercase mb-1">{name}</h4>
					<p className="text-xs uppercase text-secondary tracking-widest mb-1">{role}</p>
					<p className="text-xs uppercase text-secondary tracking-widest">{company}</p>
				</div>
			</div>
		</div>
	);
}
