"use client";

import { FolderOpen } from "lucide-react";
import { motion } from "motion/react";
import { useState, useTransition } from "react";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import { loadMoreProjects } from "@/app/actions";
import { Button } from "@/components/ui";
import { type Project, ProjectCard } from "./project-card";

interface ProjectsGridClientProps {
	initialProjects: Project[];
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
	const [expandedImage, setExpandedImage] = useState<{ src: string; alt: string } | null>(null);

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
				className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3"
			>
				{projects.map((project) => (
					<div key={project._id} className="mb-3 break-inside-avoid-column block">
						<ProjectCard
							project={project}
							onExpand={() =>
								setExpandedImage({
									src: project.featuredImage?.url ?? "",
									alt: project.title,
								})
							}
						/>
					</div>
				))}
			</motion.div>

			{/* Lightbox */}
			<Lightbox
				open={expandedImage !== null}
				close={() => setExpandedImage(null)}
				slides={expandedImage ? [expandedImage] : []}
				plugins={[Zoom]}
				carousel={{ finite: true }}
				render={{
					buttonPrev: () => null,
					buttonNext: () => null,
				}}
			/>

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
