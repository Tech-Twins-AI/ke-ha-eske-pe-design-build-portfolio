"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export function AtmosphericDivider() {
	const containerRef = useRef<HTMLElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start end", "end start"],
	});

	// Transform scroll progress to Y position (inverted: moves up as you scroll down)
	const yRaw = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

	// Add spring physics for smoother parallax (higher damping = slower)
	const y = useSpring(yRaw, {
		stiffness: 50,
		damping: 40,
		restDelta: 0.001,
	});

	return (
		<section
			ref={containerRef}
			className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden flex items-center justify-center"
		>
			{/* Parallax Background */}
			<motion.div style={{ y }} className="absolute inset-[-5%] z-0">
				<Image
					src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=70&w=1280&fm=webp"
					alt="Architectural building"
					fill
					className="object-cover grayscale brightness-[0.3]"
				/>
			</motion.div>

			{/* Grid Overlay */}
			<div className="absolute inset-0 z-10 bg-grid-light opacity-20 pointer-events-none" />

			{/* Content */}
			<div className="relative z-20 text-center px-6">
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 1, ease: "easeOut" }}
				>
					<h2 className="text-primary-foreground text-4xl md:text-7xl font-bold tracking-[0.4em] uppercase mb-4">
						Crafting Reality
					</h2>
					<div className="w-24 h-px bg-primary-foreground/30 mx-auto mb-6" />
					<p className="text-primary-foreground/60 text-xs md:text-sm tracking-wide-xl uppercase font-light">
						Precision In Every Line
					</p>
				</motion.div>
			</div>

			{/* Bottom Gradient Fade */}
			<div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent z-20" />
		</section>
	);
}
