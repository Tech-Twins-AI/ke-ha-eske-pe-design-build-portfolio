"use client";

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { TestimonialCard } from "@/components/testimonial-card";

const testimonies = [
	{
		name: "Abebe Kebede",
		role: "Homeowner",
		quote:
			"From the initial design to the final touches, Ke Ha Eske Pe delivered beyond our expectations. Their attention to detail and commitment to quality is unmatched.",
	},
	{
		name: "Sara Tesfaye",
		role: "Business Owner",
		quote:
			"Working with this team transformed our office space completely. They understood our vision and executed it flawlessly. Highly recommended for any commercial project.",
	},
	{
		name: "Michael Hailu",
		role: "Property Developer",
		quote:
			"Professional, reliable, and truly talented. They managed our multi-unit project with exceptional skill. The results speak for themselves.",
	},
	{
		name: "Hanan Ahmed",
		role: "Restaurant Owner",
		quote:
			"They transformed our restaurant space into something truly special. The design perfectly captures our brand while being functional for our daily operations. Outstanding work!",
	},
	{
		name: "Daniel Wolde",
		role: "Hotel Manager",
		quote:
			"Ke Ha Eske Pe renovated our entire hotel lobby and guest rooms. The project was completed on time and within budget. Our guests constantly compliment the beautiful design.",
	},
	{
		name: "Meron Tadesse",
		role: "Architect",
		quote:
			"As a fellow architect, I can appreciate the level of craftsmanship and attention to detail in their work. They bring designs to life with precision and artistry.",
	},
	{
		name: "Yohannes Girma",
		role: "Retail Store Owner",
		quote:
			"Our new store design has significantly increased foot traffic and sales. The team understood our brand identity and created a space that truly represents who we are.",
	},
	{
		name: "Bethlehem Assefa",
		role: "Clinic Director",
		quote:
			"They designed our medical facility with both aesthetics and functionality in mind. The space is welcoming for patients while meeting all our operational needs perfectly.",
	},
];

export function Testimonials() {
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
				className="text-center mb-16 md:mb-20"
			>
				<h2 className="text-3xl md:text-5xl font-bold tracking-[0.3em] uppercase">
					WHAT THEY SAY ABOUT US
				</h2>
				<div className="w-12 h-[2px] bg-foreground mx-auto mt-8" />
			</motion.div>

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
				className="flex gap-6 will-change-transform cursor-grab active:cursor-grabbing"
			>
				{testimonies.map((testimony) => (
					<motion.div
						key={testimony.name}
						className="w-[320px] md:w-[400px] shrink-0"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<TestimonialCard name={testimony.name} role={testimony.role} quote={testimony.quote} />
					</motion.div>
				))}
			</motion.div>

			{/* drag hint */}
			<p className="text-center text-sm text-secondary mt-8 tracking-widest uppercase">
				← Drag to explore →
			</p>

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
