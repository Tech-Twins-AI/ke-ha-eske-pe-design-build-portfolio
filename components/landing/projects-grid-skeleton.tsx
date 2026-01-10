// Column heights for masonry effect
const COLUMN_HEIGHTS = [
	{ id: "col-0", heights: [380, 300, 420] },
	{ id: "col-1", heights: [340, 400, 280] },
	{ id: "col-2", heights: [300, 360, 380] },
	{ id: "col-3", heights: [420, 280, 340] },
];

export function ProjectsGridSkeleton() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
			{COLUMN_HEIGHTS.map((column) => (
				<div key={column.id} className="grid gap-3">
					{column.heights.map((height, index) => (
						<div
							key={`${column.id}-${index}`}
							className="bg-muted/50 animate-pulse w-full"
							style={{ height }}
						/>
					))}
				</div>
			))}
		</div>
	);
}
