"use client";

import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { Brand } from "../brand";

const TikTokIcon = ({ size = 20 }: { size?: number }) => {
	return (
		<svg width={size} height={size} viewBox="0 0 640 640" fill="currentColor" aria-hidden="true">
			<path d="M544.5 273.9C500.5 274 457.5 260.3 421.7 234.7L421.7 413.4C421.7 446.5 411.6 478.8 392.7 506C373.8 533.2 347.1 554 316.1 565.6C285.1 577.2 251.3 579.1 219.2 570.9C187.1 562.7 158.3 545 136.5 520.1C114.7 495.2 101.2 464.1 97.5 431.2C93.8 398.3 100.4 365.1 116.1 336C131.8 306.9 156.1 283.3 185.7 268.3C215.3 253.3 248.6 247.8 281.4 252.3L281.4 342.2C266.4 337.5 250.3 337.6 235.4 342.6C220.5 347.6 207.5 357.2 198.4 369.9C189.3 382.6 184.4 398 184.5 413.8C184.6 429.6 189.7 444.8 199 457.5C208.3 470.2 221.4 479.6 236.4 484.4C251.4 489.2 267.5 489.2 282.4 484.3C297.3 479.4 310.4 469.9 319.6 457.2C328.8 444.5 333.8 429.1 333.8 413.4L333.8 64L421.8 64C421.7 71.4 422.4 78.9 423.7 86.2C426.8 102.5 433.1 118.1 442.4 131.9C451.7 145.7 463.7 157.5 477.6 166.5C497.5 179.6 520.8 186.6 544.6 186.6L544.6 274z" />
		</svg>
	);
};

const TelegramIcon = ({ size = 20 }: { size?: number }) => {
	return (
		<svg width={size} height={size} viewBox="0 0 640 640" fill="currentColor" aria-hidden="true">
			<path d="M320 72C183 72 72 183 72 320C72 457 183 568 320 568C457 568 568 457 568 320C568 183 457 72 320 72zM435 240.7C431.3 279.9 415.1 375.1 406.9 419C403.4 437.6 396.6 443.8 390 444.4C375.6 445.7 364.7 434.9 350.7 425.7C328.9 411.4 316.5 402.5 295.4 388.5C270.9 372.4 286.8 363.5 300.7 349C304.4 345.2 367.8 287.5 369 282.3C369.2 281.6 369.3 279.2 367.8 277.9C366.3 276.6 364.2 277.1 362.7 277.4C360.5 277.9 325.6 300.9 258.1 346.5C248.2 353.3 239.2 356.6 231.2 356.4C222.3 356.2 205.3 351.4 192.6 347.3C177.1 342.3 164.7 339.6 165.8 331C166.4 326.5 172.5 322 184.2 317.3C256.5 285.8 304.7 265 328.8 255C397.7 226.4 412 221.4 421.3 221.2C423.4 221.2 427.9 221.7 430.9 224.1C432.9 225.8 434.1 228.2 434.4 230.8C434.9 234 435 237.3 434.8 240.6z" />
		</svg>
	);
};

const socialLinks = [
	{ icon: Phone, href: "tel:+251922451812", label: "Phone" },
	{ icon: Mail, href: "mailto:kehaeskepedesignandbuild@gmail.com", label: "Email" },
	{ icon: TelegramIcon, href: "https://t.me/NebiatSentayehu", label: "Telegram" },
	{ icon: Facebook, href: "https://www.facebook.com/share/17kChj9i7F/", label: "Facebook" },
	{
		icon: Instagram,
		href: "https://www.instagram.com/kehaeskepedesignandbuild?igsh=MWViMWh6cnRiczludQ==",
		label: "Instagram",
	},
	{ icon: MapPin, href: "https://maps.app.goo.gl/xhuiKiiySgGYGP7H9", label: "Location" },
	{
		icon: TikTokIcon,
		href: "https://www.tiktok.com/@kehaeskepedesignandbuild?_r=1&_t=ZM-92dl6mM17W4",
		label: "TikTok",
	},
];

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-primary text-primary-foreground py-16 px-6 md:px-12">
			<div className="max-w-4xl mx-auto flex flex-col items-center gap-10">
				{/* Logo */}
				<Brand variant="logo" />
				{/* Social Links */}
				<div className="flex items-center gap-6">
					{socialLinks.map((social) => (
						<Link
							key={social.label}
							href={social.href}
							target={social.href.startsWith("http") ? "_blank" : undefined}
							rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
							className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
							aria-label={social.label}
						>
							<social.icon size={20} />
						</Link>
					))}
				</div>

				{/* Copyright */}
				<div className="text-center space-y-3">
					<p className="text-sm font-bold tracking-widest uppercase">
						KE HA ESKE PE © {currentYear}
					</p>
					<p className="text-xs tracking-widest text-primary-foreground/60 uppercase">
						Design and Build
					</p>
					<p className="text-xs tracking-widest text-primary-foreground/60 uppercase">
						Design in Addis Ababa. Built for Eternity.
					</p>
				</div>
			</div>
		</footer>
	);
}
