"use client";

import { useInView, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

interface AnimatedCounterProps {
	value: number;
	direction?: "up" | "down";
	className?: string;
	suffix?: string;
}

export function AnimatedCounter({
	value,
	direction = "up",
	className,
	suffix = "",
}: AnimatedCounterProps) {
	const ref = useRef<HTMLSpanElement>(null);
	const motionValue = useMotionValue(direction === "down" ? value : 0);
	const springValue = useSpring(motionValue, {
		damping: 50,
		stiffness: 200,
	});
	const isInView = useInView(ref, { once: true });

	useEffect(() => {
		if (isInView) {
			motionValue.set(direction === "down" ? 0 : value);
		}
	}, [motionValue, isInView, direction, value]);

	useEffect(() => {
		const unsubscribe = springValue.on("change", (latest) => {
			if (ref.current) {
				ref.current.textContent = Math.floor(latest).toString() + suffix;
			}
		});
		return unsubscribe;
	}, [springValue, suffix]);

	return (
		<span className={className} ref={ref}>
			{direction === "down" ? value : 0}
			{suffix}
		</span>
	);
}
