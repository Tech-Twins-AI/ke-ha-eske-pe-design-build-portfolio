"use client";

import { CheckCircle, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import { type ContactFormState, sendContactEmail } from "@/app/actions";
import { Button, Input, Textarea } from "@/components/ui";
import { useTranslations } from "@/lib/translations";

// Animation variants for consistent fade + slide-up
const fadeUp = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
	},
};

const staggerContainer = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.1 },
	},
};

const contactItemVariant = {
	hidden: { opacity: 0, y: 15 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
	},
};

const initialState: ContactFormState = {
	success: false,
	message: "",
};

export default function ContactPage() {
	const [state, formAction, isPending] = useActionState(sendContactEmail, initialState);
	const [showSuccess, setShowSuccess] = useState(false);
	const t = useTranslations();

	const contactItems = [
		{
			icon: Phone,
			label: t.contact.labels.phone,
			value: "+251 922 451 812",
			href: "tel:+251922451812",
		},
		{
			icon: Mail,
			label: t.contact.labels.email,
			value: "kehaeskepedesignandbuild@gmail.com",
			href: "mailto:kehaeskepedesignandbuild@gmail.com",
		},
		{
			icon: MapPin,
			label: t.contact.labels.location,
			value: "Addis Ababa, Ethiopia",
			href: "https://maps.app.goo.gl/xhuiKiiySgGYGP7H9",
		},
	];

	// Show success message when form submission succeeds
	useEffect(() => {
		if (state.success) {
			setShowSuccess(true);
		}
	}, [state.success]);

	const handleReset = () => {
		setShowSuccess(false);
	};

	return (
		<section className="pt-32 md:pt-44 pb-20 md:pb-24 px-6 md:px-12 relative">
			{/* Background Decoration */}
			<div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none hidden lg:block">
				<span className="text-[30vh] font-bold leading-none select-none tracking-tighter">
					CONTACT
				</span>
			</div>

			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
					{/* Left: Info */}
					<motion.div initial="hidden" animate="visible" variants={staggerContainer}>
						<motion.p
							variants={fadeUp}
							className="text-label tracking-wide-xl uppercase text-secondary mb-6 font-bold"
						>
							{t.contact.sectionLabel}
						</motion.p>
						<motion.h1
							variants={fadeUp}
							className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-12"
						>
							{t.contact.title} <span className="block">{t.contact.titleHighlight}</span>
						</motion.h1>

						<motion.div
							variants={staggerContainer}
							initial="hidden"
							animate="visible"
							className="space-y-12"
						>
							{contactItems.map((item) => (
								<motion.div key={item.label} variants={contactItemVariant}>
									<Link
										href={item.href}
										target={item.href.startsWith("http") ? "_blank" : "_self"}
										className="flex items-start gap-6 group"
									>
										<div className="mt-1 text-secondary group-hover:text-foreground transition-colors">
											<item.icon size={20} />
										</div>
										<div>
											<p className="text-2xs md:text-label tracking-wide-sm uppercase text-secondary font-bold mb-2">
												{item.label}
											</p>
											<p className="text-base md:text-xl font-light leading-snug group-hover:underline decoration-foreground/10 break-all">
												{item.value}
											</p>
										</div>
									</Link>
								</motion.div>
							))}
						</motion.div>
					</motion.div>

					{/* Right: Form */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
						className="relative"
					>
						<AnimatePresence mode="wait">
							{!showSuccess ? (
								<motion.form
									key="form"
									action={formAction}
									className="space-y-8 bg-muted p-8 md:p-12 border border-foreground/5"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
								>
									{/* Error message */}
									{state.message && !state.success && (
										<motion.div
											initial={{ opacity: 0, y: -10 }}
											animate={{ opacity: 1, y: 0 }}
											className="p-4 bg-red-50 border border-red-200 text-red-800 text-sm"
										>
											{state.message}
										</motion.div>
									)}

									<div>
										<Input
											id="name"
											name="name"
											label={t.contact.form.name}
											placeholder={t.contact.form.namePlaceholder}
											required
											type="text"
											defaultValue={state.data?.name}
											aria-describedby={state.errors?.name ? "name-error" : undefined}
										/>
										{state.errors?.name && (
											<p id="name-error" className="mt-2 text-sm text-red-600">
												{state.errors.name[0]}
											</p>
										)}
									</div>

									<div>
										<Input
											id="email"
											name="email"
											label={t.contact.form.email}
											placeholder={t.contact.form.emailPlaceholder}
											required
											type="email"
											defaultValue={state.data?.email}
											aria-describedby={state.errors?.email ? "email-error" : undefined}
										/>
										{state.errors?.email && (
											<p id="email-error" className="mt-2 text-sm text-red-600">
												{state.errors.email[0]}
											</p>
										)}
									</div>

									<div>
										<Textarea
											id="message"
											name="message"
											label={t.contact.form.message}
											placeholder={t.contact.form.messagePlaceholder}
											required
											rows={4}
											defaultValue={state.data?.message}
											aria-describedby={state.errors?.message ? "message-error" : undefined}
										/>
										{state.errors?.message && (
											<p id="message-error" className="mt-2 text-sm text-red-600">
												{state.errors.message[0]}
											</p>
										)}
									</div>

									<Button
										type="submit"
										variant="outline"
										disabled={isPending}
										className="w-full justify-center"
									>
										{isPending ? (
											<Loader2 className="w-5 h-5 animate-spin" />
										) : (
											<span className="flex items-center gap-3">
												{t.contact.form.submit}
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
									className="flex flex-col items-center justify-center text-center p-12 bg-muted border border-foreground/5 h-full min-h-[500px]"
								>
									<CheckCircle size={64} className="text-foreground mb-8" />
									<h4 className="text-2xl font-bold mb-4">{t.contact.success.title}</h4>
									<p className="text-secondary mb-6">
										{t.contact.success.description}
									</p>
									<button
										type="button"
										onClick={handleReset}
										className="text-label tracking-wide-lg uppercase font-bold underline underline-offset-8"
									>
										{t.contact.success.sendAnother}
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
