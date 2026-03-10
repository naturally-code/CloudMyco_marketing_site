// components/NavBar.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [mounted, setMounted] = useState(false);
  
  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/mission", label: "Mission" },
    { href: "/contact", label: "Contact" },
    { href: "/contact", label: "Request Consultation", special: true },
  ];

  // Handle hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        {/* Logo + brand */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/icon.png" alt="CloudMyco logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-gray-900">CloudMyco</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`${
                l.special
                  ? "px-4 py-2 bg-carbon-600 text-white rounded-md hover:bg-carbon-700 font-medium"
                  : "text-gray-700 hover:text-gray-900 font-medium"
              } transition-colors`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}