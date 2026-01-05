interface ContactEmailProps {
	name: string;
	email: string;
	message: string;
}

export function ContactEmail({ name, email, message }: ContactEmailProps) {
	return (
		<div
			style={{
				fontFamily: "Arial, sans-serif",
				maxWidth: "600px",
				margin: "0 auto",
				padding: "40px 20px",
				backgroundColor: "#ffffff",
			}}
		>
			<div
				style={{
					borderBottom: "2px solid #000000",
					paddingBottom: "20px",
					marginBottom: "30px",
				}}
			>
				<h1
					style={{
						fontSize: "24px",
						fontWeight: "bold",
						margin: "0",
						color: "#000000",
						letterSpacing: "-0.5px",
					}}
				>
					New Contact Form Submission
				</h1>
				<p
					style={{
						fontSize: "14px",
						color: "#666666",
						margin: "8px 0 0 0",
						textTransform: "uppercase",
						letterSpacing: "1px",
					}}
				>
					Ke Ha Eske Pe Design & Build
				</p>
			</div>

			<div style={{ marginBottom: "30px" }}>
				<div style={{ marginBottom: "20px" }}>
					<p
						style={{
							fontSize: "12px",
							color: "#888888",
							margin: "0 0 4px 0",
							textTransform: "uppercase",
							letterSpacing: "1px",
						}}
					>
						From
					</p>
					<p
						style={{
							fontSize: "18px",
							fontWeight: "600",
							margin: "0",
							color: "#000000",
						}}
					>
						{name}
					</p>
				</div>

				<div style={{ marginBottom: "20px" }}>
					<p
						style={{
							fontSize: "12px",
							color: "#888888",
							margin: "0 0 4px 0",
							textTransform: "uppercase",
							letterSpacing: "1px",
						}}
					>
						Email
					</p>
					<a
						href={`mailto:${email}`}
						style={{
							fontSize: "16px",
							color: "#000000",
							textDecoration: "underline",
						}}
					>
						{email}
					</a>
				</div>

				<div>
					<p
						style={{
							fontSize: "12px",
							color: "#888888",
							margin: "0 0 8px 0",
							textTransform: "uppercase",
							letterSpacing: "1px",
						}}
					>
						Message
					</p>
					<div
						style={{
							backgroundColor: "#f5f5f5",
							padding: "20px",
							borderLeft: "3px solid #000000",
						}}
					>
						<p
							style={{
								fontSize: "16px",
								lineHeight: "1.6",
								margin: "0",
								color: "#333333",
								whiteSpace: "pre-wrap",
							}}
						>
							{message}
						</p>
					</div>
				</div>
			</div>

			<div
				style={{
					borderTop: "1px solid #e5e5e5",
					paddingTop: "20px",
					marginTop: "30px",
				}}
			>
				<p
					style={{
						fontSize: "12px",
						color: "#888888",
						margin: "0",
						textAlign: "center" as const,
					}}
				>
					This message was sent from the Ke Ha Eske Pe website contact form.
				</p>
			</div>
		</div>
	);
}
