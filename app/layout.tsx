import type { Metadata } from "next";
import { Noto_Sans_Ethiopic } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Main font - Helvetica Neue (local)
const helveticaNeue = localFont({
	src: [
		{
			path: "../public/fonts/helvetica-neue-5/HelveticaNeueLight.otf",
			weight: "300",
			style: "normal",
		},
		{
			path: "../public/fonts/helvetica-neue-5/HelveticaNeueRoman.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/helvetica-neue-5/HelveticaNeueMedium.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../public/fonts/helvetica-neue-5/HelveticaNeueHeavy.otf",
			weight: "600",
			style: "normal",
		},
		{
			path: "../public/fonts/helvetica-neue-5/HelveticaNeueBold.otf",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-helvetica-neue",
	display: "swap",
});

// Amharic font - Noto Sans Ethiopic
const notoSansEthiopic = Noto_Sans_Ethiopic({
	variable: "--font-amharic",
	subsets: ["ethiopic"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
});

export const metadata: Metadata = {
	title: {
		template: "%s | Ke Ha Eske Pe",
		default: "Ke Ha Eske Pe Design And Build",
	},
	description:
		"Ke Ha Eske Pe Design and Build - From design to construction, we deliver your vision with precision.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" data-scroll-behavior="smooth">
			<body className={`${helveticaNeue.variable} ${notoSansEthiopic.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
