// Column heights for masonry effect
const COLUMN_HEIGHTS = [
	{ id: "col-0", heights: [280, 200, 320] },
	{ id: "col-1", heights: [240, 300, 180] },
	{ id: "col-2", heights: [200, 260, 280] },
	{ id: "col-3", heights: [320, 180, 240] },
];

export function ProjectsGridSkeleton() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
			{COLUMN_HEIGHTS.map((column) => (
				<div key={column.id} className="grid gap-3">
					{column.heights.map((height) => (
						<div
							key={`${column.id}`}
							className="bg-muted animate-pulse h-auto max-w-full"
							style={{ height }}
						/>
					))}
				</div>
			))}
		</div>
	);
}
