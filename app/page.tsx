import { Button } from "@/components/ui";

export default function Home() {
	return (
		<main className="min-h-screen p-12 space-y-16">
			{/* Header */}
			<div className="space-y-2">
				<h1 className="text-4xl font-bold tracking-tight">UI Components Preview</h1>
				<p className="text-muted-foreground">Button & Grid Background Utilities</p>
			</div>

			{/* Grid Background Utilities */}
			<section className="space-y-6">
				<h2 className="text-xl font-bold tracking-wide uppercase text-secondary">
					Grid Background Utilities (Functional)
				</h2>
				<p className="text-sm text-muted-foreground">
					Using Tailwind v4 functional utilities with --value()
				</p>

				{/* Theme-based grids */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* Small Grid (20px) */}
					<div className="relative h-48 border border-border overflow-hidden">
						<div className="absolute inset-0 bg-grid-sm" />
						<div className="relative z-10 flex items-center justify-center h-full">
							<span className="bg-background px-3 py-1 text-sm font-medium">bg-grid-sm (20px)</span>
						</div>
					</div>

					{/* Medium Grid (24px) - Default */}
					<div className="relative h-48 border border-border overflow-hidden">
						<div className="absolute inset-0 bg-grid-md" />
						<div className="relative z-10 flex items-center justify-center h-full">
							<span className="bg-background px-3 py-1 text-sm font-medium">bg-grid-md (24px)</span>
						</div>
					</div>

					{/* Large Grid (40px) */}
					<div className="relative h-48 border border-border overflow-hidden">
						<div className="absolute inset-0 bg-grid-lg" />
						<div className="relative z-10 flex items-center justify-center h-full">
							<span className="bg-background px-3 py-1 text-sm font-medium">bg-grid-lg (40px)</span>
						</div>
					</div>
				</div>

				{/* Arbitrary value grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* Arbitrary 32px */}
					<div className="relative h-48 border border-border overflow-hidden">
						<div className="absolute inset-0 bg-grid-[32px]" />
						<div className="relative z-10 flex items-center justify-center h-full">
							<span className="bg-background px-3 py-1 text-sm font-medium">
								bg-grid-[32px] (arbitrary)
							</span>
						</div>
					</div>

					{/* Arbitrary 16px */}
					<div className="relative h-48 border border-border overflow-hidden">
						<div className="absolute inset-0 bg-grid-[16px]" />
						<div className="relative z-10 flex items-center justify-center h-full">
							<span className="bg-background px-3 py-1 text-sm font-medium">
								bg-grid-[16px] (arbitrary)
							</span>
						</div>
					</div>
				</div>

				{/* Dark Background Grids */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* Light Grid Small on Dark */}
					<div className="relative h-48 bg-accent overflow-hidden">
						<div className="absolute inset-0 bg-grid-light-sm" />
						<div className="relative z-10 flex items-center justify-center h-full">
							<span className="bg-accent text-accent-foreground px-3 py-1 text-sm font-medium">
								bg-grid-light-sm
							</span>
						</div>
					</div>

					{/* Light Grid Medium on Dark */}
					<div className="relative h-48 bg-accent overflow-hidden">
						<div className="absolute inset-0 bg-grid-light-md" />
						<div className="relative z-10 flex items-center justify-center h-full">
							<span className="bg-accent text-accent-foreground px-3 py-1 text-sm font-medium">
								bg-grid-light-md
							</span>
						</div>
					</div>

					{/* Light Grid Large on Dark */}
					<div className="relative h-48 bg-accent overflow-hidden">
						<div className="absolute inset-0 bg-grid-light-lg" />
						<div className="relative z-10 flex items-center justify-center h-full">
							<span className="bg-accent text-accent-foreground px-3 py-1 text-sm font-medium">
								bg-grid-light-lg
							</span>
						</div>
					</div>
				</div>
			</section>

			{/* Primary Variant */}
			<section className="space-y-6">
				<h2 className="text-xl font-bold tracking-wide uppercase text-secondary">
					Button - Primary Variant
				</h2>
				<div className="flex flex-wrap gap-6 items-center">
					<Button variant="primary" size="sm">
						Small
					</Button>
					<Button variant="primary" size="default">
						Default
					</Button>
					<Button variant="primary" size="lg">
						Large
					</Button>
					<Button variant="primary" disabled>
						Disabled
					</Button>
				</div>
			</section>

			{/* Primary with Arrow Animation */}
			<section className="space-y-6">
				<h2 className="text-xl font-bold tracking-wide uppercase text-secondary">
					Button - Primary with Arrow (CTA Style)
				</h2>
				<div className="flex flex-wrap gap-6 items-center">
					<Button variant="primary" size="lg" showArrow>
						Start Your Project
					</Button>
					<Button variant="primary" size="default" showArrow>
						Get Started
					</Button>
				</div>
			</section>

			{/* Outline Variant */}
			<section className="space-y-6">
				<h2 className="text-xl font-bold tracking-wide uppercase text-secondary">
					Button - Outline Variant
				</h2>
				<div className="flex flex-wrap gap-6 items-center">
					<Button variant="outline" size="sm">
						Consult
					</Button>
					<Button variant="outline" size="default">
						View Work
					</Button>
					<Button variant="outline" size="lg">
						Contact Us
					</Button>
				</div>
			</section>

			{/* Ghost Variant */}
			<section className="space-y-6">
				<h2 className="text-xl font-bold tracking-wide uppercase text-secondary">
					Button - Ghost Variant
				</h2>
				<div className="flex flex-wrap gap-6 items-center">
					<Button variant="ghost" size="sm">
						አማ
					</Button>
					<Button variant="ghost" size="default">
						Learn More
					</Button>
				</div>
			</section>

			{/* Dark Background Demo with Grid */}
			<section className="relative space-y-6 bg-accent p-8 -mx-12 overflow-hidden">
				<div className="absolute inset-0 bg-grid-light-md" />
				<div className="relative z-10">
					<h2 className="text-xl font-bold tracking-wide uppercase text-accent-foreground">
						On Dark Background with Grid
					</h2>
					<div className="flex flex-wrap gap-6 items-center mt-6">
						<Button
							variant="outline"
							size="lg"
							className="border-white text-white hover:bg-white hover:text-black"
						>
							Start Your Project
						</Button>
					</div>
				</div>
			</section>
		</main>
	);
}
