import { sanityFetch } from "@/sanity/lib/live";
import { TESTIMONIALS_QUERY } from "@/sanity/lib/queries";
import type { WithLanguage } from "@/types";
import { TestimonialsCarousel } from "./testimonials-carousel";

export async function Testimonials({ lang }: WithLanguage) {
	const { data: testimonials } = await sanityFetch({
		query: TESTIMONIALS_QUERY,
		params: { lang },
	});

	return <TestimonialsCarousel testimonials={testimonials} />;
}
