import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Sanity Studio | Ke Ha Eske Pe",
	description: "Content management studio",
};

// Studio has its own html/body since it's outside the [lang] route
export default function StudioLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
