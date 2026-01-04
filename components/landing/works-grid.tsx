"use client";

import { FolderOpen } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { PROJECT_CATEGORIES } from "@/lib/constants";
import type { PROJECTS_QUERYResult } from "@/sanity/types";
import ProjectCard from "./project-card";

interface WorksGridProps {
	projects: PROJECTS_QUERYResult;
}

const categories = [{ id: "all", label: "All Projects" }, ...PROJECT_CATEGORIES];

export function WorksGrid({ projects }: WorksGridProps) {
	const [activeFilter, setActiveFilter] = useState("all");

	const filteredProjects =
		activeFilter === "all" ? projects : projects.filter((p) => p.category === activeFilter);

	return (
		<section id="works" className="py-16 md:py-24 px-6 md:px-12 bg-background overflow-hidden">
			<div className="max-w-7xl mx-auto">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="text-center mb-16"
				>
					<h2 className="text-3xl md:text-5xl font-bold tracking-[0.3em] mb-12 uppercase">
						OUR WORK
					</h2>

					{/* Category Filter */}
					<div className="flex flex-wrap justify-center gap-4 md:gap-12">
						{categories.map((cat) => (
							<button
								key={cat.id}
								type="button"
								onClick={() => setActiveFilter(cat.id)}
								className={`relative py-2 text-sm tracking-[0.2em] uppercase font-semibold transition-all duration-300 ${
									activeFilter === cat.id
										? "text-foreground"
										: "text-secondary hover:text-foreground"
								}`}
							>
								{cat.label}
								{activeFilter === cat.id && (
									<motion.div
										layoutId="activeWorkTab"
										className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground"
									/>
								)}
							</button>
						))}
					</div>
				</motion.div>

				{/* Projects Grid */}
				<motion.div
					layout
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true, margin: "0px 0px -50px 0px" }}
					transition={{ duration: 0.5, ease: "easeOut" }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"
				>
					{filteredProjects.length > 0 ? (
						<AnimatePresence mode="popLayout">
							{filteredProjects.map((project) => (
								<ProjectCard key={project._id} project={project} />
							))}
						</AnimatePresence>
					) : (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className="col-span-full flex flex-col items-center justify-center py-24 text-secondary"
						>
							<FolderOpen size={48} strokeWidth={1} className="mb-4 opacity-50" />
							<p className="text-sm tracking-widest uppercase">No projects yet</p>
						</motion.div>
					)}
				</motion.div>

				{/* Bottom Divider */}
				<div className="mt-16 h-px w-24 bg-border mx-auto" />
			</div>
		</section>
	);
}
