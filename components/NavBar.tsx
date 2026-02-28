// components/NavBar.tsx
"use client";

import Link from "next/link";

export default function NavBar() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/product", label: "Product" },
    { href: "/docs", label: "Docs" },
    { href: "/contact", label: "Contact" },
    // Request Access goes to the same contact page
    { href: "/contact", label: "Request Access", special: true },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Logo + brand */}
        <Link href="/" className="flex items-center space-x-2">
          {/* Put your favicon/logo here */}
          <img src="/favicon.ico" alt="logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-gray-900">CloudMyco</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`${
                l.special
                  ? "px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                  : "text-gray-700 hover:text-gray-900"
              } transition-colors`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
