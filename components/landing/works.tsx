import { sanityFetch } from "@/sanity/lib/live";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { WorksGrid } from "./works-grid";

export async function Works() {
	const { data: projects } = await sanityFetch({ query: PROJECTS_QUERY });

	return <WorksGrid projects={projects} />;
}