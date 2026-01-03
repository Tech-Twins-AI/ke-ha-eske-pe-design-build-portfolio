"use client";

import { motion } from "motion/react";
import Image from "next/image";
import buildBgUrl from "@/public/build-hero-bg.avif";
import designBgUrl from "@/public/design-hero-bg.png";

export function Hero() {
	return (
		<section className="min-h-screen flex flex-col md:flex-row">
			{/* Left Side: THE BEGINNING (Design) */}
			<div className="flex-1 bg-background text-foreground flex flex-col justify-center items-center p-10 pt-28 md:pt-32 md:p-20 relative overflow-hidden">
				{/* Background Image */}
				<motion.div
					initial={{ opacity: 0, scale: 1.1 }}
					animate={{ opacity: 0.25, scale: 1 }}
					transition={{ duration: 2.5, ease: "easeOut", delay: 0.2 }}
					className="absolute inset-0 z-0"
				>
					<Image
						src={designBgUrl}
						alt="Construction background"
						fill
						className="object-cover grayscale"
						priority
					/>
					<div className="absolute inset-0 bg-gradient-radial from-transparent to-black/60" />
				</motion.div>

				{/* Grid Overlay */}
				<div className="absolute inset-0 bg-grid z-10" />

				{/* Content */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: "easeOut" }}
					className="z-10 text-center"
				>
					<div className="font-amharic text-secondary text-lg md:text-xl mb-1 tracking-widest opacity-60">
						ከሀ
					</div>
					<h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">THE BEGINNING</h1>
					<p className="text-base md:text-lg max-w-sm mx-auto leading-relaxed text-muted-foreground">
						Design. Vision. The first line drawn on the map of Addis Ababa.
					</p>
				</motion.div>
			</div>

			{/* Right Side: THE END (Build) */}
			<div className="flex-1 bg-accent text-accent-foreground flex flex-col justify-center items-center p-10 pt-28 md:pt-32 md:p-20 relative overflow-hidden">
				{/* Background Image */}
				<motion.div
					initial={{ opacity: 0, scale: 1.1 }}
					animate={{ opacity: 0.25, scale: 1 }}
					transition={{ duration: 2.5, ease: "easeOut", delay: 0.2 }}
					className="absolute inset-0 z-0"
				>
					<Image
						src={buildBgUrl}
						alt="Construction background"
						fill
						className="object-cover grayscale brightness-[0.4]"
						priority
					/>
					<div className="absolute inset-0 bg-gradient-radial from-transparent to-black/60" />
				</motion.div>

				{/* Grid Overlay */}
				<div className="absolute inset-0 bg-grid-light opacity-60 pointer-events-none z-10" />

				{/* Content */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
					className="z-10 text-center flex flex-col items-center"
				>
					<div className="font-amharic text-accent-foreground/40 text-lg md:text-xl mb-1 tracking-widest uppercase">
						እስከ ፐ
					</div>
					<h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">THE END</h1>
					<p className="text-base md:text-lg max-w-sm mx-auto leading-relaxed text-accent-foreground/70">
						Build. Reality. The final brick cemented with precision.
					</p>
				</motion.div>
			</div>
		</section>
	);
}
