import { notFound } from "next/navigation";
import { PROJECT_CATEGORIES } from "@/lib/constants";
import { sanityFetch } from "@/sanity/lib/live";
import { PROJECT_QUERY } from "@/sanity/lib/queries";
import { ProjectContent } from "./project-content";

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

	const categoryLabel = getCategoryLabel(project.category);

	return <ProjectContent project={project} categoryLabel={categoryLabel} />;
}
