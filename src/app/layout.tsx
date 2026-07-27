import type { Metadata } from "next";
import { Carlito } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const carlito = Carlito({
  variable: "--font-carlito",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Applications of Engineering Mathematics in CSE — Interactive Presentation",
  description:
    "A 5-member team presentation exploring how engineering mathematics powers Computer Science & Engineering — calculus, linear algebra, Fourier, Laplace, complex numbers, probability, graph theory and cryptography.",
  keywords: [
    "Engineering Mathematics",
    "Computer Science",
    "CSE",
    "AI",
    "Differential Equations",
    "Linear Algebra",
    "Fourier Transform",
    "Laplace Transform",
    "Complex Numbers",
    "Probability",
    "Graph Theory",
    "Cryptography",
    "Team Presentation",
  ],
  authors: [{ name: "Computer Science & Engineering Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${carlito.variable} antialiased bg-white text-gray-900`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
