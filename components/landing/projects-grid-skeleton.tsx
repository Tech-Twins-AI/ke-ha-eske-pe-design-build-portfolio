// Skeleton items with varying heights for masonry effect
const SKELETON_ITEMS = [
	{ id: "s1", height: 380 },
	{ id: "s2", height: 340 },
	{ id: "s3", height: 300 },
	{ id: "s4", height: 420 },
	{ id: "s5", height: 300 },
	{ id: "s6", height: 400 },
	{ id: "s7", height: 360 },
	{ id: "s8", height: 280 },
	{ id: "s9", height: 420 },
	{ id: "s10", height: 280 },
	{ id: "s11", height: 380 },
	{ id: "s12", height: 340 },
];

export function ProjectsGridSkeleton() {
	return (
		<div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-3">
			{SKELETON_ITEMS.map((item) => (
				<div key={item.id} className="mb-3 break-inside-avoid-column block">
					<div
						className="bg-muted/50 animate-pulse w-full"
						style={{ height: item.height }}
					/>
				</div>
			))}
		</div>
	);
}
