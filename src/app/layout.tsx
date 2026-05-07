import type { Metadata } from "next";
import { League_Spartan, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({ 
  subsets: ["latin"],
  variable: "--font-heading",
});

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Christella. | Web Designer & Developer",
  description: "Premium web design, development, and SEO services to help your business stand out.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${leagueSpartan.variable} ${libreBaskerville.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
