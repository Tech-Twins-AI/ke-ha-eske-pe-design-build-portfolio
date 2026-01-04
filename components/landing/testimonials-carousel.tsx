"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { TestimonialCard } from "@/components/landing/testimonial-card";
import type { TESTIMONIALS_QUERYResult } from "@/sanity/types";

interface TestimonialsCarouselProps {
	testimonials: TESTIMONIALS_QUERYResult;
}

export function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
	const [width, setWidth] = useState(0);
	const carousel = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (carousel.current) {
			setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
		}
	}, []);

	return (
		<section className="py-24 md:py-32 max-w-7xl mx-auto overflow-hidden">
			{/* Header */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
				className="text-center mb-16 md:mb-20 px-6 md:px-12"
			>
				<h2 className="text-3xl md:text-5xl font-bold tracking-[0.3em] uppercase">
					WHAT THEY SAY ABOUT US
				</h2>
				<div className="w-12 h-[2px] bg-foreground mx-auto mt-8" />
			</motion.div>

			<div className="relative">
				{/* Left Gradient */}
				<div className="absolute left-0 top-0 bottom-0 w-6 md:w-12 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />

				{/* Right Gradient */}
				<div className="absolute right-0 top-0 bottom-0 w-6 md:w-12 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

				{/* Carousel */}
				<motion.div
					ref={carousel}
					drag="x"
					whileDrag={{ scale: 0.98 }}
					dragElastic={0.1}
					dragConstraints={{ right: 0, left: -width }}
					dragTransition={{
						bounceDamping: 30,
						power: 0.1,
						timeConstant: 500,
					}}
					transition={{ duration: 0.2, ease: "easeInOut" }}
					className={`flex gap-6 will-change-transform cursor-grab active:cursor-grabbing ${testimonials.length > 3 ? "" : "justify-center"}`}
				>
					{testimonials.map((testimony) => (
						<motion.div
							key={testimony._id}
							className="max-w-md shrink-0"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
						>
							<TestimonialCard {...testimony} />
						</motion.div>
					))}
				</motion.div>
			</div>

			{/* drag hint */}
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className="text-center text-sm text-secondary mt-8 tracking-widest uppercase flex items-center justify-center gap-2"
			>
				<ArrowLeft size={14} />
				<span>Drag to explore</span>
				<ArrowRight size={14} />
			</motion.div>

			{/* Bottom Divider */}
			<motion.div
				initial={{ opacity: 0, scaleX: 0 }}
				whileInView={{ opacity: 1, scaleX: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 1.5, ease: "circOut" }}
				className="h-px bg-border mt-12 max-w-sm mx-auto origin-left"
			/>
		</section>
	);
}
