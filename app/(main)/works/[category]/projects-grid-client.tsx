"use client";

import { FolderOpen } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useState, useTransition } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { loadMoreProjects } from "@/app/actions";
import { Button } from "@/components/ui";
import type { PROJECTS_INITIAL_QUERYResult } from "@/sanity/types";

type Project = PROJECTS_INITIAL_QUERYResult[number];

interface ProjectCardProps {
	project: Project;
}

function ProjectCard({ project }: ProjectCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "0px 0px -50px 0px" }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			tabIndex={0}
			className="group relative overflow-hidden bg-muted focus:outline-none"
		>
			{/* Image - natural height for masonry effect */}
			{project.featuredImage && (
				<Image
					src={project.featuredImage}
					alt={project.title}
					width={800}
					height={600}
					sizes="(max-width: 768px) 100vw, 33vw"
					style={{ width: "100%", height: "auto", display: "block" }}
					className="object-cover transition-all duration-700 ease-out grayscale group-hover:grayscale-0 group-focus:grayscale-0 group-hover:scale-105 group-focus:scale-105 group-hover:brightness-105 group-focus:brightness-105"
				/>
			)}

			{/* Gradient Overlay - hidden by default, visible on hover/focus */}
			<div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent transition-all duration-700 opacity-0 group-hover:opacity-100 group-focus:opacity-100" />

			{/* Content - hidden by default, appears on hover/focus */}
			<div className="absolute inset-0 flex flex-col justify-end p-8 text-primary-foreground z-10 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500">
				<div className="translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
					<h3 className="text-xl md:text-2xl font-bold tracking-tight leading-tight">
						{project.title}
					</h3>
					{project.location && (
						<p className="text-sm text-primary-foreground/70 font-light mt-2">{project.location}</p>
					)}
				</div>
			</div>
		</motion.div>
	);
}

interface ProjectsGridClientProps {
	initialProjects: PROJECTS_INITIAL_QUERYResult;
	totalCount: number;
	category: string;
}

export function ProjectsGridClient({
	initialProjects,
	totalCount,
	category,
}: ProjectsGridClientProps) {
	const [projects, setProjects] = useState<Project[]>(initialProjects);
	const [isPending, startTransition] = useTransition();

	const hasMore = projects.length < totalCount;

	// Get cursor from last project for pagination
	const lastProject = projects[projects.length - 1];

	const handleLoadMore = () => {
		if (!lastProject) return;

		startTransition(async () => {
			const newProjects = await loadMoreProjects(category, lastProject._createdAt, lastProject._id);
			setProjects((prev) => [...prev, ...newProjects]);
		});
	};

	if (projects.length === 0) {
		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="flex flex-col items-center justify-center py-24 text-secondary"
			>
				<FolderOpen size={48} strokeWidth={1} className="mb-4 opacity-50" />
				<p className="text-sm tracking-widest uppercase">No projects yet</p>
				<p className="text-xs text-secondary/60 mt-2">Check back soon for updates</p>
			</motion.div>
		);
	}

	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
			>
				<ResponsiveMasonry
					columnsCountBreakPoints={{ 350: 1, 600: 2, 768: 3, 1024: 4 }}
					gutterBreakPoints={{ 350: "12px", 600: "16px", 768: "24px", 1024: "32px" }}
				>
					<Masonry>
						{projects.map((project) => (
							<ProjectCard key={project._id} project={project} />
						))}
					</Masonry>
				</ResponsiveMasonry>
			</motion.div>

			{/* Load More Button */}
			{hasMore && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="flex justify-center mt-12"
				>
					<Button variant="outline" onClick={handleLoadMore} disabled={isPending}>
						{isPending ? "Loading..." : "Load More"}
					</Button>
				</motion.div>
			)}
		</>
	);
}
