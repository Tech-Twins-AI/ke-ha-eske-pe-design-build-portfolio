import {
	Body,
	Container,
	Head,
	Heading,
	Hr,
	Html,
	Link,
	Preview,
	Section,
	Text,
} from "@react-email/components";

interface ContactEmailProps {
	name: string;
	email: string;
	message: string;
}

export function ContactEmail({ name, email, message }: ContactEmailProps) {
	return (
		<Html>
			<Head />
			<Preview>New contact from {name}</Preview>
			<Body style={main}>
				<Container style={container}>
					{/* Header */}
					<Section style={header}>
						<Heading style={h1}>New Contact Form Submission</Heading>
						<Text style={subtitle}>Ke Ha Eske Pe Design & Build</Text>
					</Section>

					<Hr style={hr} />

					{/* Content */}
					<Section style={content}>
						<Text style={label}>From</Text>
						<Text style={value}>{name}</Text>

						<Text style={label}>Email</Text>
						<Link href={`mailto:${email}`} style={link}>
							{email}
						</Link>

						<Text style={label}>Message</Text>
						<Section style={messageBox}>
							<Text style={messageText}>{message}</Text>
						</Section>
					</Section>

					<Hr style={hr} />

					{/* Footer */}
					<Text style={footer}>
						This message was sent from the Ke Ha Eske Pe website contact form.
					</Text>
				</Container>
			</Body>
		</Html>
	);
}

// Styles
const main = {
	backgroundColor: "#f5f5f5",
	fontFamily: "Arial, sans-serif",
};

const container = {
	backgroundColor: "#ffffff",
	margin: "40px auto",
	padding: "40px",
	maxWidth: "600px",
};

const header = {
	marginBottom: "24px",
};

const h1 = {
	color: "#000000",
	fontSize: "24px",
	fontWeight: "bold" as const,
	margin: "0 0 8px 0",
	letterSpacing: "-0.5px",
};

const subtitle = {
	color: "#666666",
	fontSize: "14px",
	margin: "0",
	textTransform: "uppercase" as const,
	letterSpacing: "1px",
};

const hr = {
	borderColor: "#e5e5e5",
	margin: "24px 0",
};

const content = {
	marginBottom: "24px",
};

const label = {
	color: "#888888",
	fontSize: "12px",
	margin: "16px 0 4px 0",
	textTransform: "uppercase" as const,
	letterSpacing: "1px",
};

const value = {
	color: "#000000",
	fontSize: "18px",
	fontWeight: "600" as const,
	margin: "0",
};

const link = {
	color: "#000000",
	fontSize: "16px",
	textDecoration: "underline",
};

const messageBox = {
	backgroundColor: "#f5f5f5",
	borderLeft: "3px solid #000000",
	padding: "16px",
	marginTop: "8px",
};

const messageText = {
	color: "#333333",
	fontSize: "16px",
	lineHeight: "1.6",
	margin: "0",
	whiteSpace: "pre-wrap" as const,
};

const footer = {
	color: "#888888",
	fontSize: "12px",
	textAlign: "center" as const,
	margin: "0",
};
