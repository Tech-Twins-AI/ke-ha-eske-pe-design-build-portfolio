import { motion } from "motion/react";
import Image from "next/image";
import type { PROJECTS_QUERYResult } from "@/sanity/types";

const categoryLabels: Record<string, string> = {
	exterior: "Exterior Design",
	interior: "Interior Design",
	construction: "Construction",
	finishing: "Finishing Work",
	renovation: "Renovation",
};

interface ProjectCardProps {
	project: PROJECTS_QUERYResult[number];
}

export default function ProjectCard({ project }: ProjectCardProps) {
	return (
		<motion.div
			layout
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			viewport={{ once: true, margin: "0px 0px -50px 0px" }}
			transition={{ duration: 0.5, ease: "easeOut" }}
			tabIndex={0}
			className="group relative cursor-pointer overflow-hidden aspect-16/10 block bg-muted shadow-sm outline-none"
		>
			{/* Image */}
			{project.featuredImage && (
				<Image
					src={project.featuredImage}
					alt={project.title}
					fill
					className="object-cover transition-all duration-700 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-105 group-focus:grayscale-0 group-focus:scale-105 group-focus:brightness-105"
				/>
			)}

			{/* Gradient Overlay */}
			<div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent transition-all duration-700 opacity-80 group-hover:opacity-30 group-focus:opacity-30" />

			{/* Content */}
			<div className="absolute inset-0 flex flex-col justify-end p-8 text-primary-foreground z-10">
				<div className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-focus:-translate-y-2">
					<p className="text-2xs tracking-[0.4em] uppercase text-secondary mb-2 font-bold transition-opacity duration-500 opacity-70 group-hover:opacity-100 group-focus:opacity-100">
						{categoryLabels[project.category ?? ""] ?? project.category}
					</p>
					<h3 className="text-xl md:text-2xl font-bold tracking-tight leading-tight max-w-[90%]">
						{project.title}
					</h3>
				</div>
			</div>
		</motion.div>
	);
}
