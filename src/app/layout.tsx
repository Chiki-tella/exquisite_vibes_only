import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Arik. | Web Designer & Developer",
  description: "Premium web design, development, and SEO services to help your business stand out.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${outfit.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
