import { ArrowLeft, Calendar, MapPin, Maximize2, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/landing";
import { PROJECT_CATEGORIES } from "@/lib/constants";
import { sanityFetch } from "@/sanity/lib/live";
import { PROJECT_QUERY } from "@/sanity/lib/queries";

const getCategoryLabel = (categoryId: string | null) => {
	const category = PROJECT_CATEGORIES.find((c) => c.id === categoryId);
	return category?.label ?? categoryId;
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const { data: project } = await sanityFetch({
		query: PROJECT_QUERY,
		params: { slug },
	});

	if (!project) {
		notFound();
	}

	return (
		<section className="bg-background min-h-screen pt-32 pb-20">
			<div className="max-w-7xl mx-auto px-6 md:px-12">

				{/* Hero Section */}
				<div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-24">
					{/* Left Content */}
					<div className="lg:w-1/3 flex flex-col justify-end pb-12">
						<span className="text-xs tracking-widest uppercase text-secondary font-semibold mb-6 block">
							{getCategoryLabel(project.category)}
						</span>
						<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[0.9] mb-10">
							{project.title}
						</h1>
						<div className="w-16 h-[2px] bg-foreground mb-10" />
					</div>

					{/* Featured Image */}
					<div className="lg:w-2/3">
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
					</div>
				</div>

				{/* Metadata Bar */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-border mb-24">
					{[
						{ label: "Client", value: project.clientName || "—", icon: User },
						{ label: "Location", value: project.location || "—", icon: MapPin },
						{ label: "Area", value: project.area ? `${project.area} m²` : "—", icon: Maximize2 },
						{ label: "Year", value: project.year || "—", icon: Calendar },
					].map((item) => (
						<div key={item.label} className="flex items-start gap-4">
							<item.icon size={20} strokeWidth={1.5} className="text-secondary mt-1 shrink-0" />
							<div>
								<h4 className="text-xs tracking-widest uppercase text-secondary font-semibold mb-2">
									{item.label}
								</h4>
								<p className="text-lg font-semibold tracking-tight">{item.value}</p>
							</div>
						</div>
					))}
				</div>

				{/* Concept & Gallery Section */}
				<div className="flex flex-col lg:flex-row gap-20">
					{/* Sticky Left - Concept & Specifications */}
					<div className="lg:w-1/3">
						<div className="lg:sticky lg:top-32 space-y-12">
							{/* The Concept */}
							{project.description && (
								<div>
									<h3 className="text-2xl font-bold tracking-tight mb-8">The Concept</h3>
									<p className="text-secondary leading-relaxed font-light">{project.description}</p>
								</div>
							)}

							{/* Specifications */}
							{project.specifications && project.specifications.length > 0 && (
								<div>
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
								</div>
							)}
						</div>
					</div>

					{/* Gallery Right */}
					<div className="lg:w-2/3 space-y-12">
						{project.gallery?.map(
							(imageUrl, i) =>
								imageUrl && (
									<div key={imageUrl} className="space-y-4">
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
									</div>
								),
						)}
					</div>
				</div>

				<CTA />
			</div>
		</section>
	);
}
