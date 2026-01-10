"use client";

import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import type { ProjectCategory } from "@/lib/constants";

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
		transition: { staggerChildren: 0.1 },
	},
};

interface CategoryHeaderProps {
	categoryData: ProjectCategory;
}

export function CategoryHeader({ categoryData }: CategoryHeaderProps) {
	return (
		<motion.section
			initial="hidden"
			animate="visible"
			variants={staggerContainer}
			className="px-6 md:px-12 mb-16 md:mb-20"
		>
			<div className="max-w-360 mx-auto">
				{/* Breadcrumb */}
				<motion.div variants={fadeUp} className="mb-8">
					<Link
						href="/#work"
						className="text-label tracking-wide-xl uppercase text-secondary font-bold hover:text-foreground transition-colors inline-flex items-center gap-2"
					>
						<ArrowLeft size={16} />
						<span>Our Work</span>
					</Link>
				</motion.div>

				{/* Title */}
				<motion.h1
					variants={fadeUp}
					className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6"
				>
					{categoryData.label}
				</motion.h1>

				{/* Description */}
				<motion.p
					variants={fadeUp}
					className="text-xl text-secondary font-light max-w-2xl leading-relaxed"
				>
					{categoryData.description}
				</motion.p>

				{/* Divider */}
				<motion.div
					initial={{ scaleX: 0 }}
					animate={{ scaleX: 1 }}
					transition={{ duration: 1, delay: 0.3, ease: "circOut" }}
					className="w-12 h-[2px] bg-foreground mt-8 origin-left"
				/>
			</div>
		</motion.section>
	);
}
