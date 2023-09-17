import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Lennert Pfundtner",
	description:
		"Frontend Developer from Germany studying Computer Science at IU Internationale Hochschule",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
