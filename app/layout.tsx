import type { Metadata } from "next";
import { Noto_Sans_Ethiopic } from "next/font/google";
import "./globals.css";

// Amharic font - Noto Sans Ethiopic
const notoSansEthiopic = Noto_Sans_Ethiopic({
	variable: "--font-amharic",
	subsets: ["ethiopic"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Ke Ha Eske Pe Design And Build",
	description: "Ke Ha Eske Pe Design and Build | ከሀ እስከ ፐ - ንድፍ እና ግንባታ",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${notoSansEthiopic.variable} antialiased`}>{children}</body>
		</html>
	);
}
