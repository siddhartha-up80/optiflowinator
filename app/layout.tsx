import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OptiFlow Inator | Share and Optimize Code | Collaborate Efficiently",
  description:
    "OptiFlowInator allows you to analyze and share code snippets seamlessly while leveraging AI-powered optimization for efficient collaboration and enhanced coding experiences. Join our platform to streamline your code and collaborate with fellow developers effortlessly! -By Siddhartha Singh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="wuKkVFD1dhs31EjQNk81yBbw-temshhMPPc8JGAUC94"
      />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
