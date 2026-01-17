import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CategoryHeader, ProjectsGrid } from "@/components/category";
import { ProjectsGridSkeleton } from "@/components/landing/projects-grid-skeleton";
import { PROJECT_CATEGORIES } from "@/lib/constants";
import type { Language } from "@/sanity/lib/languages";
import type { LangPageWithCategoryProps } from "@/types";

// Generate static params for all categories and languages
export async function generateStaticParams() {
	const languages = ["en", "am"];
	const params: { lang: string; category: string }[] = [];

	for (const lang of languages) {
		for (const cat of PROJECT_CATEGORIES) {
			params.push({ lang, category: cat.id });
		}
	}

	return params;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: LangPageWithCategoryProps): Promise<Metadata> {
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

export default async function CategoryPage({ params }: LangPageWithCategoryProps) {
	const { lang, category } = await params;

	// Validate category exists
	const categoryData = PROJECT_CATEGORIES.find((c) => c.id === category);
	if (!categoryData) {
		notFound();
	}

	return (
		<main className="bg-background pt-32 pb-20 md:pb-24 min-h-screen">
			{/* Header - renders immediately */}
			<CategoryHeader categoryData={categoryData} lang={lang as Language} />

			{/* Projects Grid - with Suspense */}
			<section className="px-6 md:px-12">
				<div className="max-w-360 mx-auto">
					<Suspense fallback={<ProjectsGridSkeleton />}>
						<ProjectsGrid category={category} lang={lang as Language} />
					</Suspense>
				</div>
			</section>

			{/* Bottom Divider */}
			<div className="h-px bg-foreground/10 mt-16 max-w-xs mx-auto" />
		</main>
	);
}
