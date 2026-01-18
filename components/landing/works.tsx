import { PROJECT_CATEGORIES } from "@/lib/constants";
import { sanityFetch } from "@/sanity/lib/live";
import { FEATURED_PROJECTS_QUERY, PROJECTS_QUERY } from "@/sanity/lib/queries";
import type { WithLanguage } from "@/types";
import { CategoryShowcase } from "./category-showcase";

export async function Works({ lang }: WithLanguage) {
	// Fetch featured projects for showcase cards
	const { data: featuredProjects } = await sanityFetch({
		query: FEATURED_PROJECTS_QUERY,
		params: { lang },
	});

	// Fetch all projects to calculate counts per category
	const { data: allProjects } = await sanityFetch({
		query: PROJECTS_QUERY,
		params: { category: null, isFeatured: null, lang },
	});

	// Calculate project counts per category
	const projectCounts = PROJECT_CATEGORIES.reduce(
		(acc, cat) => {
			acc[cat.id] = allProjects.filter((p) => p.category === cat.id).length;
			return acc;
		},
		{} as Record<string, number>,
	);

	return <CategoryShowcase featuredProjects={featuredProjects} projectCounts={projectCounts} />;
}
