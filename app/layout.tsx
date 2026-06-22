import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://main--portfolio-alexandram28.netlify.app"),

	title: "alexandra",
	authors: {
		name: "alexandra",
	},

	description:
		"I'm an AI & fullstack engineer with ~5 years' experience, focused on shipping production AI systems — multi-agent orchestration, RAG pipelines, LLM tool-use, and real-time voice agents — on top of solid fullstack foundations in Python/FastAPI and TypeScript/Next.js. I've been sole developer or top contributor on multiple AI products, taking them from architecture to deployment. My pharmacy background brings genuine fluency for regulated and health-adjacent domains.",
	openGraph: {
		title: "Alexandra",
		description:
			"I'm an AI & fullstack engineer with ~5 years' experience, focused on shipping production AI systems — multi-agent orchestration, RAG pipelines, LLM tool-use, and real-time voice agents — on top of solid fullstack foundations in Python/FastAPI and TypeScript/Next.js. I've been sole developer or top contributor on multiple AI products, taking them from architecture to deployment. My pharmacy background brings genuine fluency for regulated and health-adjacent domains.",
		url: "https://main--portfolio-alexandram28.netlify.app",
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
