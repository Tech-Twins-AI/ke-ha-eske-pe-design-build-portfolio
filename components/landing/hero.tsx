"use client";

import { motion } from "motion/react";
import Image from "next/image";
import buildBgUrl from "@/public/build-hero-bg.webp";
import designBgUrl from "@/public/design-hero-bg.webp";

const backgroundImageVariants = {
	initial: { opacity: 0, scale: 1.02 },
	animate: { opacity: 0.22, scale: 1 },
};

const buildBackgroundImageVariants = {
	initial: { opacity: 0, scale: 1.1 },
	animate: { opacity: 0.4, scale: 1 },
};

const contentVariants = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
};

export function Hero() {
	return (
		<section className="h-screen flex flex-col md:flex-row relative">
			{/* Left Side: THE BEGINNING (Design) */}
			<div className="flex-1 bg-background text-foreground flex flex-col justify-center items-center p-10 pt-24 md:pt-32 md:p-20 relative overflow-hidden shadow-[inset_-10px_0_30px_rgba(0,0,0,0.01)] border-r border-black/5">
				{/* Background Image */}
				<motion.div
					variants={backgroundImageVariants}
					initial="initial"
					animate="animate"
					transition={{ duration: 2.5, ease: "easeOut" }}
					className="absolute inset-0 z-0"
				>
					<Image
						src={designBgUrl}
						alt="Architectural design background"
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className="object-cover grayscale mix-blend-multiply brightness-[1.15] contrast-[1.1]"
						priority
					/>
				</motion.div>

				{/* Grid Overlay */}
				<div className="absolute inset-0 bg-grid opacity-[0.04] pointer-events-none z-5" />

				{/* Corner Decorative Gradient */}
				<div className="absolute top-0 left-0 w-48 h-48 bg-linear-to-br from-black/2 to-transparent pointer-events-none" />

				{/* Content */}
				<motion.div
					variants={contentVariants}
					initial="initial"
					animate="animate"
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="z-10 text-center"
				>
					<div className="font-amharic text-secondary text-lg md:text-xl mb-1 tracking-widest opacity-60">
						ከሀ
					</div>
					<h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">THE BEGINNING</h1>
					<p className="text-lg md:text-xl max-w-sm mx-auto leading-relaxed text-secondary/80">
						Design. Vision. The first line drawn on the map of Addis Ababa.
					</p>
				</motion.div>
			</div>

			{/* Right Side: THE END (Build) */}
			<div className="flex-1 bg-accent text-primary-foreground flex flex-col justify-center items-center p-10 pt-24 md:pt-32 md:p-20 relative overflow-hidden">
				{/* Background Image */}
				<motion.div
					variants={buildBackgroundImageVariants}
					initial="initial"
					animate="animate"
					transition={{ duration: 2.5, ease: "easeOut", delay: 0.2 }}
					className="absolute inset-0 z-0"
				>
					<Image
						src={buildBgUrl}
						alt="Construction background"
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className="object-cover grayscale brightness-[0.55]"
						priority
					/>
					{/* Radial Gradient Overlay */}
					<div className="absolute inset-0 bg-radial-dark" />
				</motion.div>

				{/* Grid Overlay */}
				<div className="absolute inset-0 bg-grid-light opacity-[0.12] pointer-events-none z-5" />

				{/* Content */}
				<motion.div
					variants={contentVariants}
					initial="initial"
					animate="animate"
					transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
					className="z-10 text-center flex flex-col items-center"
				>
					<div className="font-amharic text-primary-foreground/40 text-lg md:text-xl mb-1 tracking-widest uppercase">
						እስከ ፐ
					</div>
					<h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">THE END</h1>
					<p className="text-lg md:text-xl max-w-sm mx-auto leading-relaxed text-primary-foreground/70">
						Build. Reality. The final brick cemented with precision.
					</p>
				</motion.div>
			</div>
		</section>
	);
}
