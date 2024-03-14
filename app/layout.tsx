import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { CodeEditorProvider } from "./context/CodeEditorContext";
import { SessionProvider } from "next-auth/react";

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
      <body
        className={inter.className}
        style={{
          backgroundImage: 'url("/images/background.jpg")',
          backgroundPosition: "center",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
        }}
      >
        <SessionProvider>
          {/* <div>
            <Navbar />
          </div> */}
          <div className="min-h-screen">
            <CodeEditorProvider>{children}</CodeEditorProvider>
          </div>
          <div>
            <Footer />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
