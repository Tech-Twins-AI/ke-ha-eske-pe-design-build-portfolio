import { sanityFetch } from "@/sanity/lib/live";
import { PROJECTS_COUNT_QUERY, PROJECTS_INITIAL_QUERY } from "@/sanity/lib/queries";
import { ProjectsGridClient } from "./projects-grid-client";

interface ProjectsGridProps {
	category: string;
}

export async function ProjectsGrid({ category }: ProjectsGridProps) {
	// Fetch initial batch and total count in parallel
	const [projectsResult, countResult] = await Promise.all([
		sanityFetch({
			query: PROJECTS_INITIAL_QUERY,
			params: { category },
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
