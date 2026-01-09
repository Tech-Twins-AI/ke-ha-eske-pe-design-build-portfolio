export function CategoryShowcaseSkeleton() {
	return (
		<section className="py-20 md:py-24 px-6 md:px-12 bg-background overflow-hidden">
			<div className="max-w-7xl mx-auto">
				{/* Header Skeleton */}
				<div className="text-center mb-16">
					<div className="h-12 w-48 bg-muted/50 animate-pulse mx-auto rounded mb-8" />
					<div className="w-12 h-[2px] bg-muted/50 mx-auto" />
				</div>

				{/* Category Cards Grid Skeleton */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
					{[1, 2, 3, 4, 5].map((i) => (
						<div key={i} className="aspect-4/5 bg-muted/30 animate-pulse relative overflow-hidden">
							{/* Gradient overlay */}
							<div className="absolute inset-0 bg-linear-to-t from-muted/80 via-muted/30 to-transparent" />

							{/* Content skeleton */}
							<div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
								{/* Project count */}
								<div className="h-3 w-20 bg-muted/50 rounded mb-3" />
								{/* Category title */}
								<div className="h-7 w-36 bg-muted/50 rounded mb-4" />
								{/* View more CTA */}
								<div className="h-4 w-24 bg-muted/40 rounded" />
							</div>
						</div>
					))}
				</div>

				{/* Bottom Divider */}
				<div className="mt-12 h-px w-24 bg-foreground/10 mx-auto" />
			</div>
		</section>
	);
}
