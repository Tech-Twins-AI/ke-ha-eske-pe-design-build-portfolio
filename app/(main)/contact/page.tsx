"use client";

import { CheckCircle, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { Button, Input, Textarea } from "@/components/ui";

const contactItems = [
	{
		icon: Phone,
		label: "Phone",
		value: "+251 922 451 812",
		href: "tel:+251922451812",
	},
	{
		icon: Mail,
		label: "Email",
		value: "kehaeskepedesignandbuild@gmail.com",
		href: "mailto:kehaeskepedesignandbuild@gmail.com",
	},
	{
		icon: MapPin,
		label: "Location",
		value: "Addis Ababa, Ethiopia",
		href: "https://maps.app.goo.gl/xhuiKiiySgGYGP7H9",
	},
];

export default function ContactPage() {
	const [formState, setFormState] = useState({ name: "", email: "", message: "" });
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		// TODO: Replace with actual API call
		setTimeout(() => {
			setIsSubmitting(false);
			setIsSuccess(true);
			setFormState({ name: "", email: "", message: "" });
		}, 1500);
	};

	return (
		<section className="py-44 px-6 md:px-12 relative">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
					{/* Left: Info */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2 }}
					>
						<p className="text-sm tracking-wide-sm uppercase text-muted-foreground mb-6 font-semibold">
							Get In Touch
						</p>
						<h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-12">
							Let&apos;s Build <span className="block">Together</span>
						</h1>

						<div className="space-y-12">
							{contactItems.map((item) => (
								<Link
									key={item.label}
									href={item.href}
									target={item.href.startsWith("http") ? "_blank" : "_self"}
									className="flex items-start gap-6 group"
								>
									<div className="mt-1 text-muted-foreground group-hover:text-foreground transition-colors">
										<item.icon size={20} />
									</div>
									<div>
										<p className="text-sm tracking-wide-sm uppercase text-muted-foreground font-semibold mb-2">
											{item.label}
										</p>
										<p className="text-xl font-light leading-snug group-hover:underline decoration-border">
											{item.value}
										</p>
									</div>
								</Link>
							))}
						</div>
					</motion.div>

					{/* Right: Form */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.4 }}
						className="relative"
					>
						<AnimatePresence mode="wait">
							{!isSuccess ? (
								<motion.form
									key="form"
									onSubmit={handleSubmit}
									className="space-y-8 bg-muted p-8 md:p-12 border border-border"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								>
									<Input
										id="name"
										label="Your Name"
										placeholder="John Doe"
										required
										type="text"
										value={formState.name}
										onChange={(e) => setFormState({ ...formState, name: e.target.value })}
									/>

									<Input
										id="email"
										label="Email Address"
										placeholder="john@example.com"
										required
										type="email"
										value={formState.email}
										onChange={(e) => setFormState({ ...formState, email: e.target.value })}
									/>

									<Textarea
										id="message"
										label="Message"
										placeholder="I need help with..."
										required
										rows={4}
										value={formState.message}
										onChange={(e) => setFormState({ ...formState, message: e.target.value })}
									/>

									<Button
										type="submit"
										variant="outline"
										disabled={isSubmitting}
										className="w-full justify-center"
									>
										{isSubmitting ? (
											<Loader2 className="w-5 h-5 animate-spin text-primary-foreground" />
										) : (
											<span className="flex items-center gap-3">
												Send Message
												<Send size={16} />
											</span>
										)}
									</Button>
								</motion.form>
							) : (
								<motion.div
									key="success"
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									className="flex flex-col items-center justify-center text-center p-12 bg-muted border border-border h-full min-h-[500px]"
								>
									<CheckCircle size={32} className="text-foreground mb-8" />
									<h4 className="text-2xl font-bold mb-4">Message Sent Successfully!</h4>
									<p className="text-muted-foreground mb-6">
										We&apos;ll get back to you as soon as possible.
									</p>
									<button
										type="button"
										onClick={() => setIsSuccess(false)}
										className="text-sm tracking-wide-sm uppercase font-bold underline underline-offset-8"
									>
										Send another message
									</button>
								</motion.div>
							)}
						</AnimatePresence>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
