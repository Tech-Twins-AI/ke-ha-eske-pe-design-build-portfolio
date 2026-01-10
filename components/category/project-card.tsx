"use client";

import { Maximize2 } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "@/components/ui";
import type { PROJECTS_INITIAL_QUERYResult } from "@/sanity/types";

export type Project = PROJECTS_INITIAL_QUERYResult[number];

interface ProjectCardProps {
	project: Project;
	onExpand: () => void;
}

export function ProjectCard({ project, onExpand }: ProjectCardProps) {
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
			{project.featuredImage?.url && (
				<Image
					src={project.featuredImage.url}
					alt={project.title}
					width={project.featuredImage.width ?? 800}
					height={project.featuredImage.height ?? 600}
					placeholder={project.featuredImage.lqip ? "blur" : "empty"}
					blurDataURL={project.featuredImage.lqip ?? undefined}
					sizes="(max-width: 768px) 100vw, 25vw"
					className="w-full h-auto object-cover transition-all duration-700 ease-out grayscale group-hover:grayscale-0 group-focus:grayscale-0 group-hover:scale-105 group-focus:scale-105 group-hover:brightness-105 group-focus:brightness-105"
				/>
			)}

			<div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/20 to-transparent transition-all duration-700 opacity-0 group-hover:opacity-100 group-focus:opacity-100" />

			{/* Expand Button - Bottom Right */}
			<Button
				variant="ghost"
				size="sm"
				onClick={onExpand}
				className="absolute bottom-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 hover:bg-black/70 hover:scale-110 hover:opacity-100 z-20"
				aria-label="View fullscreen"
			>
				<Maximize2 size={16} className="text-white" />
			</Button>

			{/* Content - hidden by default, appears on hover/focus */}
			<div className="absolute inset-0 flex flex-col justify-end p-8 text-primary-foreground z-10 opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-500">
				<div className="translate-y-4 group-hover:translate-y-0 group-focus:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]">
					<h3 className="text-base md:text-lg font-semibold tracking-tight leading-tight line-clamp-2">
						{project.title}
					</h3>
					{project.location && (
						<p className="text-sm md:text-base text-primary-foreground/70 mt-2">
							{project.location}
						</p>
					)}
				</div>
			</div>
		</motion.div>
	);
}
