// "use client";

import { Quote } from "lucide-react";
// import { motion } from "motion/react";
import Image from "next/image";
import type { TESTIMONIALS_QUERYResult } from "@/sanity/types";

// Generate initials from name
function getInitials(name: string): string {
	return name
		.split(" ")
		.map((word) => word[0])
		.join("")
		.toUpperCase()
		.slice(0, 2);
}

export function TestimonialCard({
	name,
	role,
	company,
	quote,
	avatar,
}: TESTIMONIALS_QUERYResult[number]) {
	return (
		<div className="relative p-8 md:p-10 border border-border bg-muted/30 flex flex-col h-full group transition-all duration-500 hover:bg-background hover:shadow-xl hover:shadow-foreground/5">
			{/* Background Quote Icon */}
			<div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
				<Quote size={80} strokeWidth={1} />
			</div>

			{/* Quote Content */}
			<div className="mb-10 relative z-10">
				<p className="text-lg leading-relaxed text-foreground font-light italic line-clamp-7">
					"{quote}"
				</p>
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
