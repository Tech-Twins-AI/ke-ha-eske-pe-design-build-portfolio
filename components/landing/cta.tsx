"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Button } from "@/components/ui";

export function CTA() {
	return (
		<section className="pt-0 pb-10 px-6 bg-background flex flex-col items-center text-center">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.8 }}
			>
				{/* Headline */}
				<h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-10 max-w-2xl mx-auto uppercase leading-tight">
					Ready to translate your vision into reality?
				</h2>

				{/* CTA Button */}
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.3 }}
				>
					<Link href="/contact">
						<Button variant="primary" showArrow size="lg">
							Start Your Project
						</Button>
					</Link>
				</motion.div>
			</motion.div>
		</section>
	);
}
