"use client";

import { Calendar, MapPin, Maximize2, User } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { CTA } from "@/components/landing/cta";
import type { PROJECT_QUERYResult } from "@/sanity/types";

interface ProjectContentProps {
	project: NonNullable<PROJECT_QUERYResult>;
	categoryLabel: string | null;
}

// Animation variants for consistent fade + slide-up
const fadeUp = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6 },
	},
};

const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.1 },
	},
};

const metaItemVariant = {
	hidden: { opacity: 0, y: 15 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5 },
	},
};

const galleryItemVariant = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.7 },
	},
};

export function ProjectContent({ project, categoryLabel }: ProjectContentProps) {
	const metaItems = [
		{ label: "Client", value: project.clientName || "—", icon: User },
		{ label: "Location", value: project.location || "—", icon: MapPin },
		{ label: "Area", value: project.area ? `${project.area} m²` : "—", icon: Maximize2 },
		{ label: "Year", value: project.year || "—", icon: Calendar },
	];

	return (
		<section className="bg-background min-h-screen pt-32 pb-20">
			<div className="max-w-7xl mx-auto px-6 md:px-12">
				{/* Hero Section */}
				<div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24">
					{/* Left Content */}
					<motion.div
						initial="hidden"
						animate="visible"
						variants={staggerContainer}
						className="lg:w-1/3 flex flex-col justify-end pb-12"
					>
						<motion.span
							variants={fadeUp}
							className="text-xs tracking-widest uppercase text-secondary font-semibold mb-6 block"
						>
							{categoryLabel}
						</motion.span>
						<motion.h1
							variants={fadeUp}
							className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[0.9] mb-10"
						>
							{project.title}
						</motion.h1>
						<motion.div
							initial={{ scaleX: 0, originX: 0 }}
							animate={{ scaleX: 1 }}
							transition={{ duration: 0.8, delay: 0.4, ease: "circOut" }}
							className="w-16 h-[2px] bg-foreground mb-10"
						/>
					</motion.div>

					{/* Featured Image */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
						className="lg:w-2/3"
					>
						<div className="aspect-4/3 bg-muted overflow-hidden relative group">
							{project.featuredImage && (
								<Image
									src={project.featuredImage}
									alt={project.title}
									fill
									className="object-cover transition-transform duration-700 group-hover:scale-105"
									priority
								/>
							)}
						</div>
					</motion.div>
				</div>

				{/* Metadata Bar */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-50px" }}
					variants={staggerContainer}
					className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-8 md:py-12 border-y border-border mb-16 md:mb-24"
				>
					{metaItems.map((item) => (
						<motion.div
							key={item.label}
							variants={metaItemVariant}
							className="flex items-start gap-3 md:gap-4"
						>
							<item.icon
								size={16}
								strokeWidth={1.5}
								className="text-secondary mt-0.5 md:mt-1 shrink-0 md:w-5 md:h-5"
							/>
							<div>
								<h4 className="text-2xs md:text-xs tracking-widest uppercase text-secondary font-semibold mb-1 md:mb-2">
									{item.label}
								</h4>
								<p className="text-base md:text-lg font-semibold tracking-tight">{item.value}</p>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Concept & Gallery Section */}
				<div className="flex flex-col lg:flex-row gap-20 py-8 md:py-12">
					{/* Sticky Left - Concept & Specifications */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
						variants={staggerContainer}
						className="lg:w-1/3"
					>
						<div className="lg:sticky lg:top-32 space-y-12">
							{/* The Concept */}
							{project.description && (
								<motion.div variants={fadeUp}>
									<h3 className="text-2xl font-bold tracking-tight mb-8">The Concept</h3>
									<p className="text-secondary leading-relaxed font-light">{project.description}</p>
								</motion.div>
							)}

							{/* Specifications */}
							{project.specifications && project.specifications.length > 0 && (
								<motion.div variants={fadeUp}>
									<h4 className="text-xs tracking-widest uppercase font-bold mb-6">
										Specifications
									</h4>
									<ul className="space-y-3">
										{project.specifications.map((spec) => (
											<li
												key={spec.label}
												className="flex items-center gap-3 text-sm text-secondary font-light"
											>
												<div className="w-1 h-1 bg-foreground rounded-full shrink-0" />
												<span>
													<span className="font-semibold text-foreground">{spec.label}:</span>{" "}
													{spec.value}
												</span>
											</li>
										))}
									</ul>
								</motion.div>
							)}
						</div>
					</motion.div>

					{/* Gallery Right */}
					<div className="lg:w-2/3 space-y-12">
						{project.gallery?.map(
							(imageUrl, i) =>
								imageUrl && (
									<motion.div
										key={imageUrl}
										initial="hidden"
										whileInView="visible"
										viewport={{ once: true, margin: "-100px" }}
										variants={galleryItemVariant}
										className="space-y-4"
									>
										<div className="bg-muted aspect-video md:aspect-16/10 overflow-hidden relative group">
											<Image
												src={imageUrl}
												alt={`${project.title} - Image ${i + 1}`}
												fill
												className="object-cover transition-transform duration-700 group-hover:scale-105"
											/>
										</div>
										<div className="flex justify-end">
											<span className="text-xs tracking-widest uppercase text-secondary font-semibold">
												View {i + 1}
											</span>
										</div>
									</motion.div>
								),
						)}
					</div>
				</div>

				<CTA />
			</div>
		</section>
	);
}
