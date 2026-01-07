import { defineField, defineType } from "sanity";
import { PROJECT_CATEGORIES } from "@/lib/constants";

export const projectType = defineType({
	name: "project",
	title: "Project",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Project Title",
			type: "string",
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
			subtitle: "category",
			media: "featuredImage",
		},
	},
});
