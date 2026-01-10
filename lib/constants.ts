// Project category options - used by both Sanity schema and frontend
export const PROJECT_CATEGORIES = [
	{
		id: "exterior",
		label: "Exterior Designs",
		description: "Facade designs, outdoor landscaping, and external architectural elements.",
	},
	{
		id: "interior",
		label: "Interior Designs",
		description:
			"Space planning, room layouts, and interior styling for residential and commercial spaces.",
	},
	{
		id: "construction",
		label: "Construction",
		description: "New builds, structural work, and ground-up construction projects.",
	},
	{
		id: "finishing",
		label: "Finishing Work",
		description: "Flooring, painting, trim work, and final installation details.",
	},
	{
		id: "renovation",
		label: "Renovation",
		description: "Remodeling, restoration, and upgrades to existing buildings and spaces.",
	},
] as const;

// Type for category IDs
export type ProjectCategoryId = (typeof PROJECT_CATEGORIES)[number]["id"];

// Type for category object
export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];
