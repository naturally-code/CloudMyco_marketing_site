// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar"; // <- our navigation component

/* ------------------------------------------------------------------
   Font & SEO metadata
------------------------------------------------------------------- */
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "CloudMyco – Independent Advisory for Sovereign Carbon Markets",
  description:
    "Independent guidance for nations building sovereign carbon registries. Strategy, vendor selection, deployment oversight, and capacity building—with zero vendor bias.",
  keywords: [
    "carbon markets",
    "Article 6",
    "carbon registry",
    "carbon credits",
    "UNFCCC",
    "climate finance",
    "sovereign carbon infrastructure",
    "carbon market advisory",
    "government carbon registry"
  ],
  icons: {
    icon: "/favicon.ico",
  },
};

/* ------------------------------------------------------------------
   Root layout – the outer shell of every page
------------------------------------------------------------------- */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      {/* Head section – Next will merge this with the default meta tags */}
      <head>
        {/* Explicit charset & viewport for good measure */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </head>

      <body className="font-sans antialiased bg-gray-50 min-h-screen flex flex-col">
        {/* Global navigation */}
        <NavBar />

        {/* Main content area */}
        <main className="flex-grow">{children}</main>

        {/* Footer is now included in each page component */}
      </body>
    </html>
  );
}