"use client";

import { motion } from "motion/react";
import { PROJECT_CATEGORIES } from "@/lib/constants";
import type { FEATURED_PROJECTS_QUERYResult } from "@/sanity/types";
import { CategoryCard } from "./category-card";

interface CategoryShowcaseProps {
	featuredProjects: FEATURED_PROJECTS_QUERYResult;
	projectCounts: Record<string, number>;
}

export function CategoryShowcase({ featuredProjects, projectCounts }: CategoryShowcaseProps) {
	// Map featured projects to categories
	const getCategoryImage = (categoryId: string) => {
		const project = featuredProjects.find((p) => p.category === categoryId);
		return project?.featuredImage?.url ?? null;
	};

	return (
		<section id="work" className="py-20 md:py-24 px-6 md:px-12 bg-background overflow-hidden">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-5xl font-bold tracking-wide-lg mb-6 uppercase leading-relaxed">
						OUR WORK
					</h2>
					<p className="text-secondary text-lg max-w-2xl mx-auto mb-8">
						From initial design to final finishing. We deliver complete, end-to-end building
						solutions. Browse our work by category.
					</p>
					<div className="w-12 h-[2px] bg-foreground mx-auto" />
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, margin: "0px 0px -50px 0px" }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
				>
					{PROJECT_CATEGORIES.map((cat, index) => (
						<motion.div
							key={cat.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.1 * index }}
						>
							<CategoryCard
								category={cat}
								featuredImage={getCategoryImage(cat.id)}
								projectCount={projectCounts[cat.id] ?? 0}
							/>
						</motion.div>
					))}
				</motion.div>

				<div className="mt-12 h-px w-24 bg-foreground/10 mx-auto" />
			</div>
		</section>
	);
}
