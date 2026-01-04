"use client";

import { Quote } from "lucide-react";
import { motion, type Variants } from "motion/react";

interface TestimonialCardProps {
	name: string;
	role: string;
	quote: string;
	variants?: Variants;
}

export function TestimonialCard({ name, role, quote, variants }: TestimonialCardProps) {
	return (
		<motion.div
			variants={variants}
			className="relative p-8 md:p-10 border border-border bg-muted/30 flex flex-col h-full group transition-all duration-500 hover:bg-background hover:shadow-xl hover:shadow-foreground/5"
		>
			{/* Background Quote Icon */}
			<div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:opacity-10 transition-opacity">
				<Quote size={80} strokeWidth={1} />
			</div>

			{/* Quote Content */}
			<div className="mb-10 relative z-10">
				<p className="text-lg leading-relaxed text-foreground font-light italic line-clamp-5">
					"{quote}"
				</p>
			</div>

			{/* Author Info */}
			<div className="mt-auto pt-8 border-t border-border">
				<h4 className="font-bold text-sm tracking-widest uppercase mb-1">{name}</h4>
				<p className="text-xs uppercase tracking-[0.2em] text-secondary">{role}</p>
			</div>
		</motion.div>
	);
}
