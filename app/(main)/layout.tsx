import { Footer, Navbar } from "@/components/layout";
import { SanityLive } from "@/sanity/lib/live";

export default function MainLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<Navbar />
			{children}
			<Footer />
			<SanityLive />
		</div>
	);
}
