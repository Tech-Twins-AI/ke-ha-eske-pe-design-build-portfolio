import type { Language } from "@/sanity/lib/languages";
import { sanityFetch } from "@/sanity/lib/live";
import { TESTIMONIALS_QUERY } from "@/sanity/lib/queries";
import { TestimonialsCarousel } from "./testimonials-carousel";

interface TestimonialsProps {
	lang: Language;
}

export async function Testimonials({ lang }: TestimonialsProps) {
	const { data: testimonials } = await sanityFetch({
		query: TESTIMONIALS_QUERY,
		params: { lang },
	});

	return <TestimonialsCarousel testimonials={testimonials} />;
}
