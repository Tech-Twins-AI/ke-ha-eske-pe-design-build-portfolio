"use client";

import { Eye, Target } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { CTA } from "@/components/landing/cta";
import { Philosophy } from "@/components/landing/philosophy";

const architect = {
	name: "Nebiat Sentayehu",
	role: "CEO & Architect",
	image:
		"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
};

// Animation variants for consistent fade + slide-up
const fadeUp = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
	},
};

const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.15 },
	},
};

export default function AboutPage() {
	return (
		<main className="bg-background pt-32 pb-0">
			<div className="max-w-7xl mx-auto px-6 md:px-12">
				{/* Hero Header */}
				<motion.div
					initial="hidden"
					animate="visible"
					variants={staggerContainer}
					className="text-center mb-32"
				>
					<motion.h1
						variants={fadeUp}
						className="text-5xl md:text-6xl font-bold tracking-tighter uppercase mb-8"
					>
						A Little <span className="block text-secondary">About Us</span>
					</motion.h1>
					<motion.div
						initial={{ scaleX: 0 }}
						animate={{ scaleX: 1 }}
						transition={{ duration: 1.2, delay: 0.3, ease: "circOut" }}
						className="w-24 h-px bg-foreground mx-auto mb-12 origin-center"
					/>
				<motion.p
					variants={fadeUp}
					className="max-w-2xl mx-auto text-secondary text-xl font-light leading-relaxed"
				>
						The name &apos;Ke Ha Eske Pe&apos; (ከሀ እስከ ፐ) signifies the complete Amharic alphabet.
						It represents our core notion: bridging the gap between design and construction to
						ensure your vision remains uncompromised from the first letter to the last.
					</motion.p>
				</motion.div>

				{/* Mission & Vision Section */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-50px" }}
					variants={staggerContainer}
					className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-32 md:mb-40"
				>
					{/* Mission */}
					<motion.div variants={fadeUp} className="space-y-6">
						<div className="flex items-center gap-4">
							<Target size={28} strokeWidth={1.5} />
							<h3 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase">
								Our Mission
							</h3>
						</div>
						<p className="text-lg md:text-xl text-secondary font-light leading-relaxed">
							To redefine the construction landscape in Ethiopia by providing a seamless,
							integrated design-build experience that prioritizes architectural integrity above all else.
						</p>
					</motion.div>

					{/* Vision */}
					<motion.div variants={fadeUp} className="space-y-6">
						<div className="flex items-center gap-4">
							<Eye size={28} strokeWidth={1.5} />
							<h3 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase">
								Our Vision
							</h3>
						</div>
						<p className="text-lg md:text-xl text-secondary font-light leading-relaxed">
							To become the benchmark for contemporary Ethiopian architecture,
							creating spaces that honor tradition while embracing modern engineering.
						</p>
					</motion.div>
				</motion.div>

				{/* Philosophy Grid */}
				<Philosophy />
			</div>

			{/* Leadership Section */}
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-50px" }}
				variants={staggerContainer}
				className="bg-background my-24"
			>
				<div className="max-w-7xl mx-auto px-6 md:px-12">
					<motion.div variants={fadeUp} className="text-center mb-24">
						<p className="text-sm tracking-wide-sm uppercase text-muted-foreground mb-6 font-semibold">
							Leadership
						</p>
						<h2 className="text-4xl md:text-5xl font-bold tracking-widest uppercase">
							The Architect
						</h2>
					</motion.div>

					<motion.div variants={fadeUp} className="flex flex-col gap-12 lg:gap-16">
						<div className="group cursor-pointer">
							<div className="aspect-3/4 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 mb-8 bg-muted relative max-w-lg mx-auto">
								<Image
									src={architect.image}
									alt={architect.name}
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-1000"
								/>
							</div>
							<div className="text-center">
								<h3 className="text-xl font-bold tracking-tight uppercase mb-1">
									{architect.name}
								</h3>
								<p className="text-[10px] tracking-wide-sm uppercase text-muted-foreground font-bold">
									{architect.role}
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</motion.div>

			<CTA />
		</main>
	);
}
