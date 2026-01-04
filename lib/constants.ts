// Project category options - used by both Sanity schema and frontend
export const PROJECT_CATEGORIES = [
	{ id: "exterior", label: "Exterior Design" },
	{ id: "interior", label: "Interior Design" },
	{ id: "construction", label: "Construction" },
	{ id: "finishing", label: "Finishing Work" },
	{ id: "renovation", label: "Renovation" },
] as const;

// Type for category IDs
export type ProjectCategoryId = (typeof PROJECT_CATEGORIES)[number]["id"];

