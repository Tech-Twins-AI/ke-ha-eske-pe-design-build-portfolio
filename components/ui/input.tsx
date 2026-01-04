import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, label, id, ...props }, ref) => {
		return (
			<div className="space-y-2">
				{label && (
					<label
						htmlFor={id}
						className="text-sm tracking-[0.2em] uppercase font-semibold text-muted-foreground"
					>
						{label}
					</label>
				)}
				<input
					id={id}
					ref={ref}
					className={cn(
						"w-full bg-transparent border-b border-border py-3 focus:outline-none focus:border-foreground transition-colors text-lg font-light placeholder:text-sm placeholder:text-muted-foreground/70",
						className,
					)}
					{...props}
				/>
			</div>
		);
	},
);

Input.displayName = "Input";
