// src/sanity/schemaTypes/projectType.ts
import { defineField, defineType } from "sanity";

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
				list: [
					{ title: "Exterior Design", value: "exterior" },
					{ title: "Interior Design", value: "interior" },
					{ title: "Construction", value: "construction" },
					{ title: "Finishing Work", value: "finishing" },
					{ title: "Renovation", value: "renovation" },
				],
				layout: "radio",
			},
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "location",
			title: "Location",
			type: "string",
		}),
		defineField({
			name: "year",
			title: "Year Completed",
			type: "number",
			validation: (rule) => rule.min(1990).max(2030),
		}),
		defineField({
			name: "clientName",
			title: "Client Name",
			type: "string",
		}),
		defineField({
			name: "description",
			title: "Description",
			type: "text",
			rows: 5,
		}),
		defineField({
			name: "featuredImage",
			title: "Featured Image",
			type: "image",
			options: { hotspot: true },
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "gallery",
			title: "Project Gallery",
			type: "array",
			of: [
				{
					type: "image",
					options: { hotspot: true },
				},
			],
		}),
		defineField({
			name: "specifications",
			title: "Specifications",
			type: "array",
			of: [
				{
					type: "object",
					name: "spec",
					fields: [
						{ name: "label", type: "string", title: "Label" },
						{ name: "value", type: "string", title: "Value" },
					],
					preview: {
						select: { title: "label", subtitle: "value" },
					},
				},
			],
		}),
	],
	// Preview in Sanity Studio list
	preview: {
		select: {
			title: "title",
			subtitle: "category",
			media: "featuredImage",
		},
	},
});
