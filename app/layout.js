import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Vibe Camp",
	description: "Build great things",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" data-theme="light" className="scroll-smooth">
			<head>
				<script
					defer
					data-website-id="6753d1f7fe1f291c616ab92b"
					data-domain="vibecamp.ai"
					src="https://vibecamp.ai/js/script.js"
				></script>
			</head>
			<body className={inter.className}>
				<div>
					<Toaster />
				</div>
				{children}
			</body>
		</html>
	);
}
