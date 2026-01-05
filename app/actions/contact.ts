"use server";

import { Resend } from "resend";
import { z } from "zod";
import { ContactEmail } from "@/components/emails/contact-email";

// Define the contact form schema
const contactSchema = z.object({
	name: z
		.string()
		.min(2, "Name must be at least 2 characters")
		.max(100, "Name must be less than 100 characters"),
	email: z.string().email("Please enter a valid email address"),
	message: z
		.string()
		.min(10, "Message must be at least 10 characters")
		.max(5000, "Message must be less than 5000 characters"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export interface ContactFormState {
	success: boolean;
	message: string;
	errors?: {
		name?: string[];
		email?: string[];
		message?: string[];
	};
}

export async function sendContactEmail(
	_prevState: ContactFormState | null,
	formData: FormData,
): Promise<ContactFormState> {
	const rawData = {
		name: formData.get("name"),
		email: formData.get("email"),
		message: formData.get("message"),
	};

	// Validate with Zod
	const validatedFields = contactSchema.safeParse(rawData);

	if (!validatedFields.success) {
		return {
			success: false,
			message: "Please fix the errors below",
			errors: validatedFields.error.flatten().fieldErrors,
		};
	}

	const { name, email, message } = validatedFields.data;

	// Guard check for Resend API key
	if (!process.env.RESEND_API_KEY) {
		console.error("RESEND_API_KEY is not configured");
		return {
			success: false,
			message: "Email service is not configured. Please contact us directly.",
		};
	}

	const resend = new Resend(process.env.RESEND_API_KEY);

	try {
		const { error } = await resend.emails.send({
			from: "Ke Ha Eske Pe <onboarding@resend.dev>",
			to: ["kehaeskepedesignandbuild@gmail.com"],
			replyTo: email,
			subject: `New Contact: ${name}`,
			react: ContactEmail({ name, email, message }),
		});

		if (error) {
			console.error("Resend error:", error);
			return {
				success: false,
				message: "Failed to send message. Please try again later.",
			};
		}

		return {
			success: true,
			message: "Message sent successfully! We'll get back to you soon.",
		};
	} catch (error) {
		console.error("Contact form error:", error);
		return {
			success: false,
			message: "An unexpected error occurred. Please try again later.",
		};
	}
}
