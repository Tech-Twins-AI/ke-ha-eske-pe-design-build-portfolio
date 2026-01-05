"use client";

import { Square } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedCounter } from "@/components/ui";

export function Philosophy() {
	const stats = [
		{
			label: "SUCCESSFUL\nPROJECTS",
			value: 100,
			suffix: "+",
		},
		{
			label: "SATISFIED\nCLIENTS",
			value: 50,
			suffix: "+",
		},
		{
			label: "YEARS\nEXPERIENCE",
			value: 10,
			suffix: "+",
		},
	];

	return (
		<section
			id="about"
			className="pt-24 md:pt-32 pb-12 md:pb-16 px-6 md:px-12 bg-background overflow-hidden"
		>
			<div className="max-w-7xl mx-auto">
				<div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
					{/* Left Side: Title and Company Essence */}
					<div className="lg:w-1/3">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
						>
							{/* Section Label */}
							<h2 className="text-label tracking-wide-lg uppercase text-secondary mb-6 font-bold">
								OUR PHILOSOPHY
							</h2>

							{/* Main Heading */}
							<h3 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight mb-8">
								The Visionary Alphabet
							</h3>

							{/* Divider */}
							<div className="w-12 h-[2px] bg-foreground mb-8" />

							{/* Description */}
							<p className="text-lg text-secondary leading-relaxed font-light mb-10">
								The name 'Ke Ha Eske Pe' (<span className="font-amharic">ከሀ እስከ ፐ</span>) signifies
								the complete Amharic alphabet. It represents our core notion: bridging the gap
								between design and construction to ensure your vision remains uncompromised from the
								first letter to the last.
							</p>

							{/* Stats Grid */}
							<div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-foreground/5 pt-8">
								{stats.map((stat) => (
									<div key={stat.label}>
										<AnimatedCounter
											value={stat.value}
											suffix={stat.suffix}
											className="text-2xl font-bold tracking-tighter"
										/>
										<div className="text-2xs uppercase tracking-wide-sm text-secondary leading-tight whitespace-pre-line">
											{stat.label}
										</div>
									</div>
								))}
							</div>
						</motion.div>
					</div>

					{/* Right Side: Philosophy Cards */}
					<div className="lg:w-2/3 flex flex-col gap-12 md:gap-16">
						{/* Two Column Cards */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="grid md:grid-cols-2 gap-12"
						>
							<div className="space-y-4">
								<h4 className="text-xl font-bold tracking-tight uppercase">
									Bridging The Fragmentation
								</h4>
								<p className="text-secondary leading-relaxed font-light">
									In traditional projects, design and construction are often handled by separate
									entities. This fragmentation frequently leads to miscommunication, budget
									overruns, and undesired outputs that deviate from the original intent.
								</p>
							</div>

							<div className="space-y-4">
								<h4 className="text-xl font-bold tracking-tight uppercase">
									Single-Point Accountability
								</h4>
								<p className="text-secondary leading-relaxed font-light">
									We serve as your single contract point. By overseeing everything from the initial
									design stage through heavy construction and final furnishing, we eliminate
									friction and guarantee the quality of the final result.
								</p>
							</div>
						</motion.div>

						{/* Vision Block */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="border-t border-foreground/5 pt-12"
						>
							<div className="flex flex-col md:flex-row gap-8 items-start">
								<div className="flex-1">
									<div className="flex items-center gap-3 mb-4">
										<Square size={18} className="text-foreground" />
										<h4 className="text-sm font-bold tracking-wide-sm uppercase">
											From Paper To Ground
										</h4>
									</div>
									<p className="text-secondary leading-relaxed font-light">
										Our primary mission is to ensure that every stroke on the blueprint is
										translated with absolute fidelity onto the physical site. We don't just design;
										we deliver the reality exactly as it was envisioned.
									</p>
								</div>

								{/* Vertical Divider */}
								<div className="hidden md:block w-px h-24 bg-foreground/5 self-center" />

								{/* Quote */}
								<div className="flex-1 flex items-center justify-center">
									<p className="text-xl md:text-2xl italic text-foreground font-light leading-relaxed">
										Ensuring what is on the paper is perfectly delivered on the ground.
									</p>
								</div>
							</div>
						</motion.div>

						{/* Bottom Line Animation */}
						<motion.div
							initial={{ opacity: 0, width: 0 }}
							whileInView={{ opacity: 1, width: "100%" }}
							viewport={{ once: true }}
							transition={{ duration: 1.5, ease: "circOut" }}
							className="h-px bg-foreground/5 mt-4"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
