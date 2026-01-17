import { GoogleGenAI } from "@google/genai";
import { at, defineMigration, set } from "sanity/migrate";

// Initialize Gemini client
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Fields to translate per document type
const fieldsToTranslate = {
	project: ["title", "location"],
	testimonial: ["name", "role", "company", "quote"],
};

// Translate English text to Amharic using Gemini
async function translateToAmharic(text: string): Promise<string> {
	const response = await ai.models.generateContent({
		model: "gemini-2.5-flash",
		contents: `Translate the following English text to Amharic. Only return the translation, nothing else. If the text is a proper noun (like a person's name or company name), transliterate it to Amharic script instead of translating.\n\nText: ${text}`,
	});
	return response.text?.trim() || text;
}

// Add delay to avoid rate limits
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default defineMigration({
	title: "Translate content to Amharic using Gemini",
	documentTypes: ["project", "testimonial"],

	migrate: {
		// Note: document() can be async!
		async document(doc) {
			const docType = doc._type as keyof typeof fieldsToTranslate;
			const fields = fieldsToTranslate[docType] || [];
			const patches = [];

			for (const fieldName of fields) {
				const fieldValue = doc[fieldName];

				// Check if field is an internationalized array
				if (Array.isArray(fieldValue)) {
					const enValue = fieldValue.find(
						(v: { _key: string; value: string }) => v._key === "en",
					)?.value;
					const amExists = fieldValue.some((v: { _key: string }) => v._key === "am");

					// Only translate if English exists and Amharic is missing
					if (enValue && !amExists) {
						console.log(`Translating ${docType}.${fieldName}: "${enValue.substring(0, 50)}..."`);

						try {
							const amTranslation = await translateToAmharic(enValue);
							console.log(`  → "${amTranslation.substring(0, 50)}..."`);

							// Add Amharic translation to the array
							patches.push(
								at(fieldName, set([...fieldValue, { _key: "am", value: amTranslation }])),
							);

							// Rate limit: wait 13 seconds between API calls (free tier = 5 req/min)
							await delay(15000);
						} catch (error) {
							console.error(`  ✗ Failed to translate ${fieldName}:`, error);
						}
					}
				}
			}

			return patches;
		},
	},
});
