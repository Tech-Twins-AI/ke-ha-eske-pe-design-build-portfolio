"use client";

import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useTranslations } from "@/lib/translations";
import { Brand } from "../brand";

// TikTok icon (not available in lucide-react)
const TikTokIcon = ({ size = 18 }: { size?: number }) => {
	return (
		<svg width={size} height={size} viewBox="0 0 640 640" fill="currentColor" aria-hidden="true">
			<path d="M544.5 273.9C500.5 274 457.5 260.3 421.7 234.7L421.7 413.4C421.7 446.5 411.6 478.8 392.7 506C373.8 533.2 347.1 554 316.1 565.6C285.1 577.2 251.3 579.1 219.2 570.9C187.1 562.7 158.3 545 136.5 520.1C114.7 495.2 101.2 464.1 97.5 431.2C93.8 398.3 100.4 365.1 116.1 336C131.8 306.9 156.1 283.3 185.7 268.3C215.3 253.3 248.6 247.8 281.4 252.3L281.4 342.2C266.4 337.5 250.3 337.6 235.4 342.6C220.5 347.6 207.5 357.2 198.4 369.9C189.3 382.6 184.4 398 184.5 413.8C184.6 429.6 189.7 444.8 199 457.5C208.3 470.2 221.4 479.6 236.4 484.4C251.4 489.2 267.5 489.2 282.4 484.3C297.3 479.4 310.4 469.9 319.6 457.2C328.8 444.5 333.8 429.1 333.8 413.4L333.8 64L421.8 64C421.7 71.4 422.4 78.9 423.7 86.2C426.8 102.5 433.1 118.1 442.4 131.9C451.7 145.7 463.7 157.5 477.6 166.5C497.5 179.6 520.8 186.6 544.6 186.6L544.6 274z" />
		</svg>
	);
};

// Telegram icon
const TelegramIcon = ({ size = 18 }: { size?: number }) => {
	return (
		<svg width={size} height={size} viewBox="0 0 640 640" fill="currentColor" aria-hidden="true">
			<path d="M320 72C183 72 72 183 72 320C72 457 183 568 320 568C457 568 568 457 568 320C568 183 457 72 320 72zM435 240.7C431.3 279.9 415.1 375.1 406.9 419C403.4 437.6 396.6 443.8 390 444.4C375.6 445.7 364.7 434.9 350.7 425.7C328.9 411.4 316.5 402.5 295.4 388.5C270.9 372.4 286.8 363.5 300.7 349C304.4 345.2 367.8 287.5 369 282.3C369.2 281.6 369.3 279.2 367.8 277.9C366.3 276.6 364.2 277.1 362.7 277.4C360.5 277.9 325.6 300.9 258.1 346.5C248.2 353.3 239.2 356.6 231.2 356.4C222.3 356.2 205.3 351.4 192.6 347.3C177.1 342.3 164.7 339.6 165.8 331C166.4 326.5 172.5 322 184.2 317.3C256.5 285.8 304.7 265 328.8 255C397.7 226.4 412 221.4 421.3 221.2C423.4 221.2 427.9 221.7 430.9 224.1C432.9 225.8 434.1 228.2 434.4 230.8C434.9 234 435 237.3 434.8 240.6z" />
		</svg>
	);
};

// Pinterest icon
const PinterestIcon = ({ size = 18 }: { size?: number }) => {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
			<path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.966 1.406-5.966s-.359-.72-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.622 0 11.988-5.367 11.988-11.987C24.005 5.367 18.639 0 12.017 0z" />
		</svg>
	);
};

// WhatsApp icon
const WhatsAppIcon = ({ size = 18 }: { size?: number }) => {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
			<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
		</svg>
	);
};

const socialLinks = [
	{ icon: Phone, href: "tel:+251922451812", label: "Phone" },
	{ icon: Mail, href: "mailto:kehaeskepedesignandbuild@gmail.com", label: "Email" },
	{ icon: Facebook, href: "https://www.facebook.com/share/17kChj9i7F/", label: "Facebook" },
	{
		icon: Instagram,
		href: "https://www.instagram.com/kehaeskepedesignandbuild?igsh=MWViMWh6cnRiczludQ==",
		label: "Instagram",
	},
	{ icon: PinterestIcon, href: "https://pin.it/4hfdvXfLB", label: "Pinterest" },
	{ icon: MapPin, href: "https://maps.app.goo.gl/xhuiKiiySgGYGP7H9", label: "Location" },
	{ icon: TelegramIcon, href: "https://t.me/NebiatSentayehu", label: "Telegram" },
	{
		icon: TikTokIcon,
		href: "https://www.tiktok.com/@kehaeskepedesignandbuild?_r=1&_t=ZM-92dl6mM17W4",
		label: "TikTok",
	},
	{ icon: WhatsAppIcon, href: "https://wa.me/251922451812", label: "WhatsApp" },
];

export function Footer() {
	const currentYear = new Date().getFullYear();
	const t = useTranslations();

	return (
		<footer className="bg-accent text-accent-foreground pt-10 pb-20 px-6">
			<div className="max-w-7xl mx-auto flex flex-col items-center">
				{/* Logo */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
					className="mb-10"
				>
					<Brand variant="logo" logoSize={64} />
				</motion.div>

				{/* Social Links */}
				<div className="grid grid-cols-5 md:flex md:flex-wrap md:justify-center gap-6 md:gap-10 mb-16 place-items-center">
					{socialLinks.map((social) => (
						<motion.div key={social.label} whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
							<Link
								href={social.href}
								target={social.href.startsWith("http") ? "_blank" : undefined}
								rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
								className="text-accent-foreground/40 hover:text-accent-foreground transition-all duration-300 hover:scale-110 inline-block"
								aria-label={social.label}
							>
								<social.icon size={18} />
							</Link>
						</motion.div>
					))}
				</div>

				{/* Copyright */}
				<div className="text-center text-xs tracking-wide-lg uppercase">
					<p className="mb-6 font-bold text-accent-foreground">
						{t.footer.company} © {currentYear}
					</p>
					<p className="text-gray-400 font-light max-w-xs mx-auto leading-loose">
						{t.footer.tagline}
					</p>
				</div>
			</div>
		</footer>
	);
}
