import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ositaukwuaba.com"),
  title: { default: "Osita Ukwuaba | Dependable AI Researcher", template: "%s | Osita Ukwuaba" },
  description: "PhD researcher developing dependable AI systems through neuromorphic computing, SNN reliability, AI control, and evaluations.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: { title: "Osita Ukwuaba | Dependable AI Researcher", description: "Research in neuromorphic computing, SNN reliability, AI control, and evaluations.", url: "https://ositaukwuaba.com", siteName: "Osita Ukwuaba", type: "website" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
