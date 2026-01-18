import { defineField, defineType } from "sanity";
import { PROJECT_CATEGORIES } from "@/lib/constants";
import type { InternationalizedArrayString } from "@/sanity/types";

export const projectType = defineType({
	name: "project",
	title: "Project",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Project Title",
			type: "internationalizedArrayString",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
			},
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "category",
			title: "Category",
			type: "string",
			options: {
				list: PROJECT_CATEGORIES.map((cat) => ({
					title: cat.label,
					value: cat.id,
				})),
				layout: "radio",
			},
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "location",
			title: "Location",
			description: "Project location (e.g., Addis Ababa, Bole)",
			type: "internationalizedArrayString",
		}),
		defineField({
			name: "isFeatured",
			title: "Featured Project",
			description:
				"Mark as representative image for this category on homepage (only one per category allowed)",
			type: "boolean",
			initialValue: false,
			validation: (rule) =>
				rule.custom(async (isFeatured, context) => {
					// Only validate when setting to true
					if (!isFeatured) return true;

					const { document, getClient } = context;
					const client = getClient({ apiVersion: "2024-01-01" });

					// Check if another featured project exists in this category
					const existingFeatured = await client.fetch<{ title: string } | null>(
						`*[_type == "project" && category == $category && isFeatured == true && _id != $id && !(_id in path("drafts.**"))][0]{ title }`,
						{
							category: document?.category,
							id: document?._id?.replace("drafts.", ""),
						},
					);

					if (existingFeatured) {
						return `"${existingFeatured.title}" is already featured for this category. Please unmark it first.`;
					}

					return true;
				}),
		}),
		defineField({
			name: "featuredImage",
			title: "Featured Image",
			type: "image",
			options: { hotspot: true },
			validation: (rule) => rule.required(),
		}),
	],
	preview: {
		select: {
			title: "title",
			category: "category",
			media: "featuredImage",
		},
		prepare({ title, category, media }) {
			return {
				title:
					(title as InternationalizedArrayString)?.find((t) => t._key === "en")
						?.value || "Untitled",
				subtitle: category,
				media,
			};
		},
	},
});
