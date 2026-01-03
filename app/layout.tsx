import type { Metadata } from "next";
import { Montserrat, Noto_Sans_Ethiopic } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "@/components/layout";

const montserrat = Montserrat({
	variable: "--font-montserrat",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
});

const notoSansEthiopic = Noto_Sans_Ethiopic({
	variable: "--font-amharic",
	subsets: ["ethiopic"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "Ke Ha Eske Pe Design And Build",
	description: "From A to Z - Design and Build | ከሀ እስከ ፐ - ንድፍ እና ግንባታ",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${montserrat.variable} ${notoSansEthiopic.variable} antialiased`}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
