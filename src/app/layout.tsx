import type { Metadata } from "next";
import "./globals.css";

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
				className={`antialiased`}>
				{children}
				<div className="absolute bottom-5 select-none w-full flex flex-row justify-center gap-x-2 items-center">
					<a href="https://github.com/IamSTEINI/dxby-overhaul">
						Source code
					</a>
					{" · "}
					<span>© 2026</span>
				</div>
			</body>
		</html>
	);
}
