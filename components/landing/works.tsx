"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import ProjectCard from "../project-card";

// Mock project data - will be replaced with Sanity data later
const projects = [
	{
		id: 1,
		title: "Modern Bedroom",
		category: "Interior Design",
		categoryKey: "interior",
		imageUrl: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
	},
	{
		id: 2,
		title: "Workstation",
		category: "Interior Design",
		categoryKey: "interior",
		imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
	},
	{
		id: 3,
		title: "Ticket Office",
		category: "Interior Design",
		categoryKey: "interior",
		imageUrl: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
	},
	{
		id: 4,
		title: "Entrance Lobby",
		category: "Interior Design",
		categoryKey: "interior",
		imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
	},
	{
		id: 5,
		title: "Conference Room",
		category: "Interior Design",
		categoryKey: "interior",
		imageUrl: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&q=80",
	},
	{
		id: 6,
		title: "TV Studio",
		category: "Interior Design",
		categoryKey: "interior",
		imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80",
	},
	{
		id: 7,
		title: "Modern Villa",
		category: "Exterior Design",
		categoryKey: "exterior",
		imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
	},
	{
		id: 8,
		title: "Office Building",
		category: "Exterior Design",
		categoryKey: "exterior",
		imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
	},
	{
		id: 9,
		title: "Structural Framework",
		category: "Construction",
		categoryKey: "construction",
		imageUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
	},
	{
		id: 10,
		title: "Luxurious Villa",
		category: "Finishing Work",
		categoryKey: "finishing",
		imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
	},
	{
		id: 11,
		title: "Heritage Restoration",
		category: "Renovation",
		categoryKey: "renovation",
		imageUrl: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=800&q=80",
	},
];

const categories = [
	{ id: "all", label: "All Projects" },
	{ id: "exterior", label: "Exterior Design" },
	{ id: "interior", label: "Interior Design" },
	{ id: "construction", label: "Construction" },
	{ id: "finishing", label: "Finishing Work" },
	{ id: "renovation", label: "Renovation" },
];

export function Works() {
	const [activeFilter, setActiveFilter] = useState("all");

	const filteredProjects =
		activeFilter === "all" ? projects : projects.filter((p) => p.categoryKey === activeFilter);

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
								className={`relative py-2 text-sm tracking-[0.2em] uppercase font-bold transition-all duration-300 ${activeFilter === cat.id
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
					<AnimatePresence mode="popLayout">
						{filteredProjects.map((project) => (
							<ProjectCard key={project.id} project={project} />
						))}
					</AnimatePresence>
				</motion.div>

				{/* Bottom Divider */}
				<div className="mt-16 h-px w-24 bg-border mx-auto" />
			</div>
		</section>
	);
}
