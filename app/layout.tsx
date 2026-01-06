import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Polis Protocol",
    description: "The Operating System for Human Flourishing.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
