"use client";

import { Cog, Hammer, HeartHandshake } from "lucide-react";
import { motion } from "motion/react";
import { AnimatedCounter } from "@/components/ui";

export function Philosophy() {
	const stats = [
		{
			label: "Successful Projects",
			value: 100,
			suffix: "+",
		},
		{
			label: "Satisfied Clients",
			value: 50,
			suffix: "+",
		},
		{
			label: "Years Experience",
			value: 10,
			suffix: "+",
		},
	];
	return (
		<section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-background overflow-hidden">
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
							<h2 className="text-3xl md:text-5xl font-bold tracking-[0.3em] mb-8 uppercase">
								OUR PHILOSOPHY
							</h2>
							<p className="text-2xl md:text-3xl font-light tracking-tight leading-tight mb-8">
								The Visionary Alphabet
							</p>
							<div className="w-12 h-[2px] bg-foreground mb-8" />
							<p className="text-lg text-muted-foreground leading-relaxed font-light mb-10">
								The name
								<span className="font-semibold block">
									&nbsp;'Ke Ha Eske Pe' (<span className="font-amharic">ከሀ እስከ ፐ</span>)
								</span>
								&nbsp;signifies the complete Amharic alphabet. It represents our core notion:
								bridging the gap between design and construction to ensure your vision remains
								uncompromised from the first letter to the last.
							</p>

							{/* Stats Grid */}
							<div className="grid grid-cols-3 gap-8 border-t border-border pt-8">
								{stats.map((stat) => (
									<div key={stat.label}>
										<AnimatedCounter
											value={stat.value}
											suffix={stat.suffix}
											className="text-3xl font-bold tracking-tighter"
										/>
										<div className="text-sm text-secondary leading-tight">{stat.label}</div>
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
								<div className="flex items-center gap-2">
									<Cog size={28} className="text-foreground" />
									<h4 className="text-base md:text-xl font-bold tracking-tight uppercase">
										Bridging The Fragmentation
									</h4>
								</div>
								<p className="text-muted-foreground leading-relaxed font-light">
									In traditional projects, design and construction are often handled by separate
									entities. This fragmentation frequently leads to miscommunication, budget
									overruns, and undesired outputs that deviate from the original intent.
								</p>
							</div>

							<div className="space-y-4">
								<div className="flex items-center gap-2">
									<HeartHandshake size={28} className="text-foreground" />
									<h4 className="text-base md:text-xl font-bold tracking-tight uppercase">
										Single-Point Accountability
									</h4>
								</div>
								<p className="text-muted-foreground leading-relaxed font-light">
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
							className="border-t border-border pt-12"
						>
							<div className="flex flex-col md:flex-row gap-8 items-start">
								<div className="flex-1">
									<div className="flex items-center gap-3 mb-4">
										<Hammer size={28} className="text-foreground" />
										<h4 className="text-base md:text-xl font-bold tracking-tight uppercase">
											From Paper To Ground
										</h4>
									</div>
									<p className="text-muted-foreground leading-relaxed font-light">
										Our primary mission is to ensure that every stroke on the blueprint is
										translated with absolute fidelity onto the physical site. We don't just design;
										we deliver the reality exactly as it was envisioned.
									</p>
								</div>

								{/* Vertical Divider */}
								<div className="hidden md:block w-px h-24 bg-border self-center" />

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
							className="h-px bg-border mt-4"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
