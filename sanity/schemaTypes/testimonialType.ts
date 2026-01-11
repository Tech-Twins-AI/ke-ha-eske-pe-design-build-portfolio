import { defineField, defineType } from "sanity";

export const testimonialType = defineType({
	name: "testimonial",
	title: "Testimonial",
	type: "document",
	fields: [
		defineField({
			name: "name",
			title: "Client Name",
			type: "internationalizedArrayString",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "role",
			title: "Role / Title",
			type: "internationalizedArrayString",
			description: "e.g., Owner, CEO, Project Manager",
		}),
		defineField({
			name: "company",
			title: "Company / Organization",
			type: "internationalizedArrayString",
			description: "Business or organization name (optional)",
		}),
		defineField({
			name: "quote",
			title: "Testimonial Quote",
			type: "internationalizedArrayText",
			validation: (rule) => rule.required(),
		}),
		defineField({
			name: "avatar",
			title: "Avatar",
			type: "image",
			options: { hotspot: true },
			description: "Optional profile photo",
		}),
	],
	preview: {
		select: {
			title: "name",
			subtitle: "company",
			media: "avatar",
		},
	},
});