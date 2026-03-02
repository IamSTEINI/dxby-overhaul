import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Navbar";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "D X B Y",
	description: "DXBY HOMEPAGE",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<NavBar />
				{children}
				<div className="absolute bottom-5 select-none w-full flex flex-row justify-center gap-x-2 items-center opacity-50">
					<a href="https://github.com/IamSTEINI/dxby-overhaul" className="link">
						Source code
					</a>
					{" · "}
					<span>© 2025</span>
				</div>
			</body>
		</html>
	);
}
