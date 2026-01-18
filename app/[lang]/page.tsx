import { Suspense } from "react";
import {
	AtmosphericDivider,
	CategoryShowcaseSkeleton,
	CTA,
	Hero,
	Philosophy,
	Testimonials,
	Works,
} from "@/components/landing";
import { TestimonialsSkeleton } from "@/components/landing/testimonials-skeloton";
import type { Language } from "@/sanity/lib/languages";
import type { LangPageProps } from "@/types";

export default async function Home({ params }: LangPageProps) {
	const { lang } = await params;

	return (
		<main>
			<Hero />
			<Philosophy />
			<AtmosphericDivider />
			<Suspense fallback={<CategoryShowcaseSkeleton />}>
				<Works lang={lang as Language} />
			</Suspense>
			<Suspense fallback={<TestimonialsSkeleton />}>
				<Testimonials lang={lang as Language} />
			</Suspense>
			<CTA />
		</main>
	);
}
