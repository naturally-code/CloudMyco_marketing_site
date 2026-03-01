'use client';

import Link from 'next/link';
import Head from 'next/head';
import {
  Database,
  CheckCircle2,
  ArrowRight,
  Lock,
  Zap,
  Building2,
  Scale,
  Mail,
} from 'lucide-react';

export default function Home() {
  return (
    <>
      <Head>
        <title>CloudMyco | Banking‑Grade Infrastructure for Sovereign Carbon Markets</title>
        <meta name="description" content="Turnkey Article 6 infrastructure for national carbon registries. Ensure compliance, maintain data integrity, and launch in 8 weeks." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cloudmyco.com/" />
        <meta property="og:title" content="CloudMyco | Banking‑Grade Infrastructure for Sovereign Carbon Markets" />
        <meta property="og:description" content="Turnkey Article 6 infrastructure for national carbon registries. Ensure compliance, maintain data integrity, and launch in 8 weeks." />
        <meta property="og:image" content="https://cloudmyco.com/icon.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://cloudmyco.com/" />
        <meta property="twitter:title" content="CloudMyco | Banking‑Grade Infrastructure for Sovereign Carbon Markets" />
        <meta property="twitter:description" content="Turnkey Article 6 infrastructure for national carbon registries. Ensure compliance, maintain data integrity, and launch in 8 weeks." />
        <meta property="twitter:image" content="https://cloudmyco.com/icon.png" />
        
        {/* Additional SEO tags */}
        <meta name="keywords" content="carbon markets, Article 6, UNFCCC, carbon registry, blockchain, data sovereignty, climate finance" />
        <meta name="author" content="CloudMyco" />
        <meta name="robots" content="index, follow" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://cloudmyco.com/" />
        
        {/* Favicon - Using icon.png from public folder */}
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="shortcut icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-carbon-50">
        {/* --------------------------------------------------------------
            Navigation – Verify removed, Request Access button removed
        -------------------------------------------------------------- */}
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-carbon-600 to-blockchain-600 rounded-lg"></div>
                <span className="text-xl font-bold text-gray-900">CloudMyco</span>
              </div>

              {/* Desktop links */}
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/product" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Product
                </Link>
                <Link href="/docs" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Docs
                </Link>
                {/* Verify link removed per request */}
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* --------------------------------------------------------------
            Hero Section
        -------------------------------------------------------------- */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-carbon-100 text-carbon-800 rounded-full text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                <span>Banking‑Grade Infrastructure for Sovereign Nations</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Financial Infrastructure
                <br />
                <span className="bg-gradient-to-r from-carbon-600 to-blockchain-600 bg-clip-text text-transparent">
                  for Carbon Markets
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Turnkey Article 6 infrastructure for national carbon registries.
                <br />
                <strong className="text-gray-900">
                  Ensure compliance. Maintain data integrity. Launch in 8 weeks.
                </strong>
              </p>

              {/* CTA – only Documentation remains */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/docs"
                  className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-50 transition-all border-2 border-gray-200 font-semibold text-lg"
                >
                  View Documentation
                </Link>
              </div>

              <p className="mt-8 text-sm text-gray-500">
                World Bank Climate Warehouse compatible • UNFCCC Article 6 compliant • SOC 2 certified
              </p>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------------
            Value Proposition
        -------------------------------------------------------------- */}
        <section className="py-20 bg-white border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Like Central Bank Systems, For Carbon
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                CloudMyco applies the same principles used in core banking infrastructure to carbon markets:
                data sovereignty, regulatory compliance, and cryptographic verification.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Data Sovereignty */}
              <div className="group p-8 rounded-2xl border-2 border-gray-200 hover:border-carbon-500 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-carbon-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Lock className="w-6 h-6 text-carbon-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Data Sovereignty</h3>
                <p className="text-gray-600 mb-4">
                  Your data stays on servers you own and operate. Your encryption keys. Your jurisdiction. Your control.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-carbon-600 mr-2 mt-0.5 flex-shrink-0" />
                    Physical infrastructure in your country
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-carbon-600 mr-2 mt-0.5 flex-shrink-0" />
                    Legal jurisdiction under your law
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-carbon-600 mr-2 mt-0.5 flex-shrink-0" />
                    Encryption keys held by your government
                  </li>
                </ul>
              </div>

              {/* Regulatory Compliance */}
              <div className="group p-8 rounded-2xl border-2 border-gray-200 hover:border-blockchain-500 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-blockchain-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Scale className="w-6 h-6 text-blockchain-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Regulatory Compliance</h3>
                <p className="text-gray-600 mb-4">
                  Article 6 and ISO 14064 compliance built‑in. Regulatory updates distributed automatically like banking software.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-blockchain-600 mr-2 mt-0.5 flex-shrink-0" />
                    International standards hardcoded
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-blockchain-600 mr-2 mt-0.5 flex-shrink-0" />
                    National parameters configurable
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-blockchain-600 mr-2 mt-0.5 flex-shrink-0" />
                    UNFCCC reporting automated
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------------
            How It Works – The Hyphae
        -------------------------------------------------------------- */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-carbon-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Infrastructure</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Like mycelium connecting a forest ecosystem, CloudMyco's architecture creates an unbreakable chain of evidence and accountability.
              </p>
            </div>

            <div className="space-y-12">
              {/* Data Hypha – PRODUCTION */}
              <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white rounded-2xl border-2 border-carbon-500 shadow-lg">
                <div className="w-16 h-16 bg-carbon-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Database className="w-8 h-8 text-carbon-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Data Hypha → Evidence Provenance
                    </h3>
                    <span className="px-3 py-1 bg-carbon-600 text-white rounded-full text-xs font-semibold">
                      PRODUCTION
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Every file hashed, sealed, blockchain‑anchored. Tamper‑evident proof of “what existed when.”
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-carbon-100 text-carbon-800 rounded-full text-sm">
                      SHA‑256 hashing
                    </span>
                    <span className="px-3 py-1 bg-carbon-100 text-carbon-800 rounded-full text-sm">
                      Merkle trees
                    </span>
                    <span className="px-3 py-1 bg-carbon-100 text-carbon-800 rounded-full text-sm">
                      Blockchain anchoring
                    </span>
                    <span className="px-3 py-1 bg-carbon-100 text-carbon-800 rounded-full text-sm">
                      Immutable audit trail
                    </span>
                  </div>
                </div>
              </div>

              {/* Claim Hypha – PRODUCTION */}
              <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white rounded-2xl border-2 border-blockchain-500 shadow-lg">
                <div className="w-16 h-16 bg-blockchain-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Scale className="w-8 h-8 text-blockchain-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Claim Hypha → Assertion + Accountability
                    </h3>
                    <span className="px-3 py-1 bg-blockchain-600 text-white rounded-full text-xs font-semibold">
                      PRODUCTION
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Carbon claims cryptographically linked to evidence. Amendments leave permanent footprints. Multi‑sig verification required.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blockchain-100 text-blockchain-800 rounded-full text-sm">
                      Smart contracts
                    </span>
                    <span className="px-3 py-1 bg-blockchain-100 text-blockchain-800 rounded-full text-sm">
                      Amendment history
                    </span>
                    <span className="px-3 py-1 bg-blockchain-100 text-blockchain-800 rounded-full text-sm">
                      No silent edits
                    </span>
                    <span className="px-3 py-1 bg-blockchain-100 text-blockchain-800 rounded-full text-sm">
                      Immutable state machine
                    </span>
                  </div>
                </div>
              </div>

              {/* Model Hypha – BETA */}
              <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white rounded-2xl border border-gray-300 shadow-lg opacity-75">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Model Hypha → Advanced Analytics
                    </h3>
                    <span className="px-3 py-1 bg-purple-200 text-purple-900 rounded-full text-xs font-semibold">
                      BETA
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Machine learning capabilities for pattern detection and process optimization. Currently in testing phase.
                  </p>
                </div>
              </div>

              {/* Registry Hypha – BETA */}
              <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white rounded-2xl border border-gray-300 shadow-lg opacity-75">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Credit Hypha → Issuance + Retirement
                    </h3>
                    <span className="px-3 py-1 bg-green-200 text-green-900 rounded-full text-xs font-semibold">
                      BETA
                    </span>
                  </div>
                  <p className="text-gray-600 mb-3">
                    Digital carbon credit management system. Tokenization and retirement tracking currently in development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------------
            Why National Registries Choose CloudMyco
        -------------------------------------------------------------- */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Built for Governments, Not Startups
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Carbon registries are financial infrastructure. They require the same security, compliance, and sovereignty guarantees as central bank systems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional Approach */}
              <div className="p-6 border-l-4 border-carbon-600 bg-gray-50 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Traditional Approach (2‑3 Years)</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Build registry from scratch ($10M+)
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Hire specialized carbon experts (scarce talent)
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Implement Article 6 compliance manually
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Risk of non‑compliance = market exclusion
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Ongoing maintenance burden
                  </li>
                </ul>
              </div>

              {/* CloudMyco Approach */}
              <div className="p-6 border-l-4 border-blockchain-600 bg-blockchain-50 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">CloudMyco (8 Weeks)</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-carbon-600 mr-2 flex-shrink-0" />
                    Turnkey deployment (on your infrastructure)
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-carbon-600 mr-2 flex-shrink-0" />
                    Article 6 compliance built‑in (automatic)
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-carbon-600 mr-2 flex-shrink-0" />
                    No specialized staff needed
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-carbon-600 mr-2 flex-shrink-0" />
                    Automatic updates for regulatory changes
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-carbon-600 mr-2 flex-shrink-0" />
                    Full data sovereignty maintained
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------------
            Footer
        -------------------------------------------------------------- */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-carbon-400 to-blockchain-400 rounded-lg"></div>
                  <span className="text-xl font-bold">CloudMyco</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Banking‑grade infrastructure for sovereign carbon markets.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Product</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/product" className="hover:text-white transition-colors">Overview</Link></li>
                  <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
                  <li><Link href="/security" className="hover:text-white transition-colors">Security</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                  <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                  <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                  <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; {new Date().getFullYear()} CloudMyco. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}