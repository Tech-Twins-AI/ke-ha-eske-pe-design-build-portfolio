import { sanityFetch } from "@/sanity/lib/live";
import { PROJECTS_COUNT_QUERY, PROJECTS_INITIAL_QUERY } from "@/sanity/lib/queries";
import type { WithLanguage } from "@/types";
import { ProjectsGridClient } from "./projects-grid-client";

interface ProjectsGridProps extends WithLanguage {
	category: string;
}

export async function ProjectsGrid({ category, lang }: ProjectsGridProps) {
	// Fetch initial batch and total count in parallel
	const [projectsResult, countResult] = await Promise.all([
		sanityFetch({
			query: PROJECTS_INITIAL_QUERY,
			params: { category, lang },
		}),
		sanityFetch({
			query: PROJECTS_COUNT_QUERY,
			params: { category },
		}),
	]);

	return (
		<ProjectsGridClient
			initialProjects={projectsResult.data}
			totalCount={countResult.data}
			category={category}
		/>
	);
}
