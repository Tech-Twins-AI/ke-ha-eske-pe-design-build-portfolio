import { at, defineMigration, set } from "sanity/migrate";

// Fields to convert for each document type
const fieldsToConvert = {
	testimonial: ["name", "role", "company", "quote"],
	project: ["title", "location"],
};

export default defineMigration({
	title: "Convert string fields to internationalized arrays",
	documentTypes: ["testimonial", "project"],

	migrate: {
		document(doc) {
			const docType = doc._type as keyof typeof fieldsToConvert;
			const fields = fieldsToConvert[docType] || [];
			const patches = [];

			for (const field of fields) {
				const value = doc[field];

				// Only convert if it's a plain string (not already an array)
				if (typeof value === "string") {
					patches.push(at(field, set([{ _key: "en", value }])));
				}
			}

			return patches;
		},
	},
});
