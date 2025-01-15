import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Brian Halpin",
	description: "Brian Halpin Portfolio",
};

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href={'/images/icon.ico'} />
				
				<link rel="apple-touch-icon" href="/images/logo192.png" />
				
				<link rel="manifest" href="/manifest.json" />
			
			</head>
			<body className={`${geistSans.variable} ${geistMono.variable}`}>
				<Header />
				<div className={'main'}>
					{children}
				</div>
				<Footer />
			</body>
		</html>
	);
}
