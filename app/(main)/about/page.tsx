"use client";

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

export default function AboutPage() {
	return (
		<main className="bg-background pt-32 pb-0">
			<div className="max-w-7xl mx-auto  px-6 md:px-12">
				{/* Hero Header */}
				<div className="text-center my-32">
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="text-sm tracking-wide-sm uppercase text-muted-foreground mb-6 font-semibold"
					>
						Who We Are
					</motion.p>
					<motion.h1
						initial={{ y: 30, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						className="text-5xl md:text-6xl font-bold tracking-widest uppercase mb-8"
					>
						Beyond <span className="block">Structures</span>
					</motion.h1>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5 }}
						className="max-w-xl mx-auto text-muted-foreground text-lg font-light leading-relaxed"
					>
						We are not just builders; we are narrators of space. From the first sketch to the final
						brick, we craft environments that endure.
					</motion.p>
				</div>

				{/* Philosophy Grid */}
				<Philosophy />
			</div>

			{/* Leadership Section */}
			<div className="bg-background my-24">
				<div className="max-w-7xl mx-auto px-6 md:px-12">
					<div className="text-center mb-24">
						<p className="text-sm tracking-wide-sm uppercase text-muted-foreground mb-6 font-semibold">
							Leadership
						</p>
						<h2 className="text-4xl md:text-5xl font-bold tracking-widest uppercase">
							The Architect
						</h2>
					</div>

					<div className="flex flex-col gap-12 lg:gap-16">
						<motion.div
							key={architect.name}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1 }}
							className="group cursor-pointer"
						>
							<div className="aspect-3/4 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 mb-8 bg-muted relative max-w-lg mx-auto">
								<Image
									src={architect.image}
									alt={architect.name}
									fill
									className="object-cover group-hover:scale-105 w-xl  transition-transform duration-1000"
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
						</motion.div>
					</div>
				</div>
			</div>

			<CTA />
		</main>
	);
}
