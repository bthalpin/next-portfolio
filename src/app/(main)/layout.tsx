import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ContactProvider } from "@/contexts/ContactProvider";
import "@/styles/globals.css";


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
			<body className={'page_container'} >
				<ContactProvider>
					<Header />
					<div className={'main'}>
						{children}
					</div>
					<Footer />
				</ContactProvider>
			</body>
		</html>
	);
}
