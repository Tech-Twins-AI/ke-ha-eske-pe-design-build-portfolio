import { forwardRef, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, label, id, ...props }, ref) => {
		return (
			<div className="space-y-2">
				{label && (
					<label
						htmlFor={id}
						className="text-[10px] tracking-[0.2em] uppercase font-bold text-muted-foreground"
					>
						{label}
					</label>
				)}
				<textarea
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

Textarea.displayName = "Textarea";
