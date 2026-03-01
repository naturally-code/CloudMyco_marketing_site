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
  title: "CloudMyco – Financial Infrastructure for Carbon Markets",
  description:
    "Turnkey Article 6 infrastructure for national carbon registries. Make compliance automatic. Make fraud expensive. Launch in 8 weeks.",
  keywords: [
    "carbon markets",
    "Article 6",
    "blockchain",
    "carbon registry",
    "carbon credits",
    "UNFCCC",
    "climate finance",
  ],
  icons: {
    // Place the file in the public folder (public/favicon.ico)
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

        {/* Main content area – keep it centered and padded */}
        <main className="flex-grow container mx-auto px-4 py-8">{children}</main>

        {/* Optional footer could go here if you want a site‑wide one */}
      </body>
    </html>
  );
}
