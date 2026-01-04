export function WorksSkeleton() {
    return (
        <section className="py-16 md:py-24 px-6 md:px-12 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header Skeleton */}
                <div className="text-center mb-16">
                    <div className="h-12 w-64 bg-muted/50 animate-pulse mx-auto rounded mb-12" />
                    {/* Category Filter Skeleton */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-12">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="h-6 w-24 bg-muted/50 animate-pulse rounded" />
                        ))}
                    </div>
                </div>

                {/* Projects Grid Skeleton */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="aspect-16/10 bg-muted/30 animate-pulse relative overflow-hidden"
                        >
                            {/* Gradient overlay */}
                            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-muted/60 to-transparent" />
                            {/* Content skeleton */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                <div className="h-3 w-24 bg-muted/50 rounded mb-2" />
                                <div className="h-6 w-40 bg-muted/50 rounded" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Divider */}
                <div className="mt-16 h-px w-24 bg-border mx-auto" />
            </div>
        </section>
    );
}