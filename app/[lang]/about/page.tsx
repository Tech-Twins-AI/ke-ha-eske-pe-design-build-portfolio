"use client";

import {
	Briefcase,
	ClipboardList,
	Compass,
	Eye,
	HardHat,
	Home,
	Lightbulb,
	Ruler,
	ShieldCheck,
	Target,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { CTA } from "@/components/landing/cta";
import { useTranslations } from "@/lib/translations";

const architect = {
	name: "Nebiat Sentayehu",
	role: "CEO & Architect",
	image:
		"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
};

const valueIcons = [Ruler, ShieldCheck, Lightbulb, Briefcase];
const serviceIcons = [Compass, Home, HardHat, ClipboardList];

// Animation variants for consistent fade + slide-up
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
		transition: { staggerChildren: 0.15 },
	},
};

export default function AboutPage() {
	const t = useTranslations();

	const coreValues = [
		{
			icon: valueIcons[0],
			title: t.about.values.precision.title,
			description: t.about.values.precision.description,
		},
		{
			icon: valueIcons[1],
			title: t.about.values.integrity.title,
			description: t.about.values.integrity.description,
		},
		{
			icon: valueIcons[2],
			title: t.about.values.innovation.title,
			description: t.about.values.innovation.description,
		},
		{
			icon: valueIcons[3],
			title: t.about.values.accountability.title,
			description: t.about.values.accountability.description,
		},
	];

	const services = [
		{
			icon: serviceIcons[0],
			title: t.about.services.architectural.title,
			description: t.about.services.architectural.description,
		},
		{
			icon: serviceIcons[1],
			title: t.about.services.interior.title,
			description: t.about.services.interior.description,
		},
		{
			icon: serviceIcons[2],
			title: t.about.services.construction.title,
			description: t.about.services.construction.description,
		},
		{
			icon: serviceIcons[3],
			title: t.about.services.management.title,
			description: t.about.services.management.description,
		},
	];

	return (
		<main className="bg-background pt-32 pb-20 md:pb-24">
			<div className="max-w-7xl mx-auto px-6 md:px-12">
				{/* Hero Header */}
				<motion.div
					initial="hidden"
					animate="visible"
					variants={staggerContainer}
					className="text-center mb-32"
				>
					<motion.h1
						variants={fadeUp}
						className="text-5xl md:text-6xl font-bold tracking-tighter uppercase mb-8"
					>
						{t.about.heroTitle} <span className="block text-secondary">{t.about.heroTitleHighlight}</span>
					</motion.h1>
					<motion.div
						initial={{ scaleX: 0 }}
						animate={{ scaleX: 1 }}
						transition={{ duration: 1.2, delay: 0.3, ease: "circOut" }}
						className="w-24 h-px bg-foreground mx-auto mb-12 origin-center"
					/>
					<motion.p
						variants={fadeUp}
						className="max-w-2xl mx-auto text-secondary text-xl leading-relaxed"
					>
						{t.about.heroDescription}
					</motion.p>
				</motion.div>

				{/* Mission & Vision Section */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-50px" }}
					variants={staggerContainer}
					className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-32 md:mb-40"
				>
					{/* Mission */}
					<motion.div variants={fadeUp} className="space-y-6">
						<div className="flex items-center gap-4">
							<Target size={28} strokeWidth={1.5} />
							<h3 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase">
								{t.about.mission.title}
							</h3>
						</div>
						<p className="text-lg md:text-xl text-secondary leading-relaxed">
							{t.about.mission.description}
						</p>
					</motion.div>

					{/* Vision */}
					<motion.div variants={fadeUp} className="space-y-6">
						<div className="flex items-center gap-4">
							<Eye size={28} strokeWidth={1.5} />
							<h3 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase">
								{t.about.vision.title}
							</h3>
						</div>
						<p className="text-lg md:text-xl text-secondary leading-relaxed">
							{t.about.vision.description}
						</p>
					</motion.div>
				</motion.div>

				{/* Core Values Section */}
				<div className="mb-32 md:mb-40">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
						variants={staggerContainer}
						className="text-center mb-16 md:mb-20"
					>
						<motion.p
							variants={fadeUp}
							className="text-label tracking-wide-xl uppercase text-secondary mb-6 font-bold"
						>
							{t.about.coreValuesLabel}
						</motion.p>
						<motion.div
							initial={{ scaleX: 0 }}
							whileInView={{ scaleX: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, ease: "circOut" }}
							className="w-12 h-[2px] bg-foreground mx-auto"
						/>
					</motion.div>

					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
						variants={staggerContainer}
						className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12"
					>
						{coreValues.map((value) => (
							<motion.div
								key={value.title}
								variants={fadeUp}
								className="flex flex-col items-center text-center group"
							>
								<div className="mb-6 md:mb-8 p-5 md:p-6 rounded-full border border-foreground/5 group-hover:bg-foreground group-hover:text-background transition-all duration-500">
									<value.icon size={28} strokeWidth={1.5} />
								</div>
								<h4 className="text-lg font-bold tracking-tight uppercase mb-3 md:mb-4">
									{value.title}
								</h4>
								<p className="text-secondary leading-relaxed text-sm md:text-base">
									{value.description}
								</p>
							</motion.div>
						))}
					</motion.div>
				</div>

				{/* Services Section */}
				<div className="mb-32 md:mb-40 pt-16 md:pt-20 border-t border-foreground/5">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-50px" }}
						variants={staggerContainer}
						className="text-center mb-16 md:mb-24"
					>
						<motion.p
							variants={fadeUp}
							className="text-label tracking-wide-xl uppercase text-secondary mb-6 font-bold"
						>
							{t.about.servicesLabel}
						</motion.p>
						<motion.h3
							variants={fadeUp}
							className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight uppercase"
						>
							{t.about.servicesTitle}
						</motion.h3>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-foreground/5 overflow-hidden border border-foreground/5">
						{services.map((service, idx) => (
							<motion.div
								key={service.title}
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{ delay: idx * 0.1, duration: 0.5 }}
								className="bg-background p-10 md:p-14 lg:p-16 flex flex-col group hover:bg-muted transition-colors duration-500"
							>
								<div className="flex justify-between items-start mb-10 md:mb-12">
									<div className="flex items-center gap-5 md:gap-6">
										<span className="text-5xl md:text-6xl font-bold tracking-tighter opacity-10 group-hover:opacity-20 transition-opacity">
											0{idx + 1}
										</span>
										<div className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center bg-muted rounded-full group-hover:bg-foreground group-hover:text-background transition-all duration-500">
											<service.icon size={22} strokeWidth={1.5} />
										</div>
									</div>
								</div>

								<h4 className="text-xl md:text-2xl font-bold tracking-tight uppercase mb-4 md:mb-6 group-hover:translate-x-2 transition-transform duration-500">
									{service.title}
								</h4>
								<p className="text-secondary leading-relaxed text-base md:text-lg max-w-md">
									{service.description}
								</p>

								<div className="mt-10 md:mt-12 flex items-center gap-4 text-2xs tracking-wide-lg font-bold uppercase opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
									<div className="w-8 h-px bg-foreground" />
									{t.about.expertisePhase}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>

			{/* Leadership Section */}
			<motion.div
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-50px" }}
				variants={staggerContainer}
				className="bg-background my-20 md:my-24"
			>
				<div className="max-w-7xl mx-auto px-6 md:px-12">
					<motion.div variants={fadeUp} className="text-center mb-24">
						<p className="text-sm tracking-wide-sm uppercase text-muted-foreground mb-6 font-semibold">
							{t.about.leadershipLabel}
						</p>
						<h2 className="text-4xl md:text-5xl font-bold tracking-widest uppercase">
							{t.about.leadershipTitle}
						</h2>
					</motion.div>

					<motion.div variants={fadeUp} className="flex flex-col gap-12 lg:gap-16">
						<div>
							<div
								// biome-ignore lint/a11y/noNoninteractiveTabindex: intentional for keyboard accessibility
								tabIndex={0}
								className="group cursor-pointer aspect-3/4 overflow-hidden grayscale hover:grayscale-0 focus:grayscale-0 transition-all duration-700 mb-8 bg-muted relative max-w-lg mx-auto focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
							>
								{" "}
								<Image
									src={architect.image}
									alt={architect.name}
									fill
									sizes="(max-width: 1024px) 100vw, 512px"
									className="object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-1000"
								/>
							</div>
							<div className="text-center">
								<h3 className="text-xl font-bold tracking-tight uppercase mb-1">
									{architect.name}
								</h3>
								<p className="text-sm tracking-wide-sm uppercase text-muted-foreground font-semibold">
									{architect.role}
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</motion.div>

			<CTA />
		</main>
	);
}
