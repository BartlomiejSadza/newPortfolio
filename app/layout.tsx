import type { Metadata } from "next";
import { ThemeProvider } from "./provider";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
	icons: "me.jpeg",
	title: "Bartlomiej Sadza",
	description: "Bartlomiej Sadza new Portfolio",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className='antialiased'
				suppressHydrationWarning>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem={false}
					disableTransitionOnChange>
					{children}
					<SpeedInsights />
					<Analytics />
					<GoogleAnalytics gaId="G-MB11JLSWMZ" />
				</ThemeProvider>
			</body>
		</html>
	);
}
