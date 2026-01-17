import { Noto_Sans_Ethiopic } from "next/font/google";
import localFont from "next/font/local";

// Main font - Helvetica Neue (local)
export const helveticaNeue = localFont({
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
export const notoSansEthiopic = Noto_Sans_Ethiopic({
	variable: "--font-amharic",
	subsets: ["ethiopic"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
});

// Combined font class names for body
export const fontVariables = `${helveticaNeue.variable} ${notoSansEthiopic.variable}`;
