import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("http://localhost:3000"),

	title: "alexandra",
	authors: {
		name: "alexandra",
	},

	description:
		"I'm a FullStack developer passionate about building a modern web application that users love.",
	openGraph: {
		title: "Alexandra",
		description:
			"I'm a FullStack developer passionate about building a modern web application that users love.",
		url: "http://localhost:3000",
		siteName: "alexandra",
		images: "/og.png",
		type: "website",
	},
	keywords: ["alexandra", "portfolio"],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={spaceGrotesk.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
