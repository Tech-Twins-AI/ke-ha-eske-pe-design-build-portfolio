import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ProjectsGridSkeleton } from "@/components/landing/projects-grid-skeleton";
import { PROJECT_CATEGORIES } from "@/lib/constants";
import { CategoryHeader } from "./category-header";
import { ProjectsGrid } from "./projects-grid";

interface CategoryPageProps {
	params: Promise<{ category: string }>;
}

// Generate static params for all categories
export async function generateStaticParams() {
	return PROJECT_CATEGORIES.map((cat) => ({
		category: cat.id,
	}));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
	const { category } = await params;
	const categoryData = PROJECT_CATEGORIES.find((c) => c.id === category);

	if (!categoryData) {
		return { title: "Category Not Found" };
	}

	return {
		title: `${categoryData.label} | Ke Ha Eske Pe`,
		description: categoryData.description,
	};
}

export default async function CategoryPage({ params }: CategoryPageProps) {
	const { category } = await params;

	// Validate category exists
	const categoryData = PROJECT_CATEGORIES.find((c) => c.id === category);
	if (!categoryData) {
		notFound();
	}

	return (
		<main className="bg-background pt-32 pb-20 md:pb-24 min-h-screen">
			{/* Header - renders immediately */}
			<CategoryHeader categoryData={categoryData} />

			{/* Projects Grid - with Suspense */}
			<section className="px-6 md:px-12">
				<div className="max-w-360 mx-auto">
					<Suspense fallback={<ProjectsGridSkeleton />}>
						<ProjectsGrid category={category} />
					</Suspense>
				</div>
			</section>

			{/* Bottom Divider */}
			<div className="h-px bg-foreground/10 mt-16 max-w-xs mx-auto" />
		</main>
	);
}
