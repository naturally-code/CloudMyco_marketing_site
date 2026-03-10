'use client';

import Link from 'next/link';
import Head from 'next/head';
import {
  Clipboard,
  CheckCircle2,
  ArrowRight,
  Search,
  Settings,
  Users,
  Building2,
  Scale,
  Globe,
  Shield,
  Award,
  FileText,
} from 'lucide-react';

export default function Home() {
  return (
    <>
      <Head>
        <title>CloudMyco | Independent Sovereign Carbon Infrastructure Advisory</title>
        <meta name="description" content="Independent guidance for nations building sovereign carbon registries. Strategy, vendor selection, deployment oversight, and capacity building." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cloudmyco.com/" />
        <meta property="og:title" content="CloudMyco | Independent Sovereign Carbon Infrastructure Advisory" />
        <meta property="og:description" content="Independent guidance for nations building sovereign carbon registries. Strategy, vendor selection, deployment oversight, and capacity building." />
        <meta property="og:image" content="https://cloudmyco.com/icon.png" />
        
        
        {/* Additional SEO tags */}
        <meta name="keywords" content="carbon markets, Article 6, UNFCCC, carbon registry, blockchain, data sovereignty, climate finance, advisory, consulting" />
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
            Navigation – Updated for consultancy
        -------------------------------------------------------------- */}
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo on left */}
              <Link href="/" className="flex items-center space-x-2">
                <img src="/icon.png" alt="CloudMyco logo" className="h-8 w-8" />
                <span className="text-xl font-bold text-gray-900">CloudMyco</span>
              </Link>

              {/* Desktop links */}
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/services" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Services
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  About
                </Link>
                <Link href="/mission" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Mission
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors font-medium">
                  Contact
                </Link>
                <Link 
                  href="/contact" 
                  className="px-4 py-2 bg-carbon-600 text-white rounded-md hover:bg-carbon-700 transition-colors font-medium"
                >
                  Request Consultation
                </Link>
              </div>

              {/* Mobile menu button */}
              <button className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* --------------------------------------------------------------
            Hero Section
        -------------------------------------------------------------- */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              {/* Logo above hero title */}
              <div className="flex justify-center mb-6">
                <img src="/icon.png" alt="CloudMyco" className="h-32 w-32 mx-auto mb-6" />
              </div>
              
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-carbon-100 text-carbon-800 rounded-full text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                <span>Independent Sovereign Carbon Infrastructure Advisory</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Trusted Guidance for
                <br />
                <span className="bg-gradient-to-r from-carbon-600 to-blockchain-600 bg-clip-text text-transparent">
                  Sovereign Carbon Markets
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                CloudMyco helps nations build, launch, and own their carbon registries.
                <br />
                <strong className="text-gray-900">
                  Independent expertise. Zero vendor bias. Full sovereignty.
                </strong>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center px-8 py-4 bg-carbon-600 text-white rounded-lg hover:bg-carbon-700 transition-all font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-50 transition-all border-2 border-gray-200 font-semibold text-lg"
                >
                  Request Consultation
                </Link>
              </div>

              <p className="mt-8 text-sm text-gray-500">
                Trusted by ministries of environment • World Bank Climate Warehouse partners • Article 6 specialists
              </p>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------------
            Services Overview
        -------------------------------------------------------------- */}
        <section className="py-20 bg-white border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Sovereign Carbon Infrastructure Advisory
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We don't sell software. We provide the expertise, strategy, and oversight 
                to ensure your registry is sovereign, compliant, and built to last.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Service 1: Needs Assessment */}
              <div className="group p-8 rounded-2xl border-2 border-gray-200 hover:border-carbon-500 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-carbon-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clipboard className="w-6 h-6 text-carbon-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Needs Assessment & Strategy</h3>
                <p className="text-gray-600 mb-4">
                  Analyze current registry status, legal frameworks, and carbon market goals. Develop a tailored infrastructure roadmap.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-carbon-600 mr-2 mt-0.5 flex-shrink-0" />
                    Article 6 readiness evaluation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-carbon-600 mr-2 mt-0.5 flex-shrink-0" />
                    Technology requirements document
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-carbon-600 mr-2 mt-0.5 flex-shrink-0" />
                    Sovereign-first roadmap
                  </li>
                </ul>
              </div>

              {/* Service 2: Vendor Selection */}
              <div className="group p-8 rounded-2xl border-2 border-gray-200 hover:border-blockchain-500 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-blockchain-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Search className="w-6 h-6 text-blockchain-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Vendor Selection & Procurement</h3>
                <p className="text-gray-600 mb-4">
                  Manage RFP processes, evaluate solutions against sovereignty requirements, and provide unbiased recommendations.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-blockchain-600 mr-2 mt-0.5 flex-shrink-0" />
                    Full RFP management
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-blockchain-600 mr-2 mt-0.5 flex-shrink-0" />
                    Technical due diligence
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-blockchain-600 mr-2 mt-0.5 flex-shrink-0" />
                    Independent recommendations
                  </li>
                </ul>
              </div>

              {/* Service 3: Deployment Oversight */}
              <div className="group p-8 rounded-2xl border-2 border-gray-200 hover:border-purple-500 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Settings className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation & Deployment</h3>
                <p className="text-gray-600 mb-4">
                  Project manage technical deployment, oversee system integration, and validate security and sovereignty requirements.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    Technical project management
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    Security architecture validation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    Article 6 compliance verification
                  </li>
                </ul>
              </div>

              {/* Service 4: Capacity Building */}
              <div className="group p-8 rounded-2xl border-2 border-gray-200 hover:border-green-500 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Capacity Building & Training</h3>
                <p className="text-gray-600 mb-4">
                  Train local teams to operate independently. Develop manuals, SOPs, and governance frameworks.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    IT and registry team training
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Operational manuals & SOPs
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Long-term governance frameworks
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------------
            Why Independent Advisory
        -------------------------------------------------------------- */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-carbon-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Independent Guidance Matters</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Carbon registries are critical national infrastructure. They deserve unbiased expertise, not a sales pitch.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg text-center">
                <div className="w-16 h-16 bg-carbon-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-carbon-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">No Vendor Bias</h3>
                <p className="text-gray-600">
                  We don't build or sell software. Our only loyalty is to your sovereignty and long-term success.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg text-center">
                <div className="w-16 h-16 bg-blockchain-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blockchain-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Deep Specialization</h3>
                <p className="text-gray-600">
                  Carbon registry infrastructure is our only focus not a side practice or one of many services.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Knowledge Transfer</h3>
                <p className="text-gray-600">
                  We train your team to operate independently. No vendor lock-in. Ever.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------------
            How We Work
        -------------------------------------------------------------- */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Built for Sovereign Nations
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We work alongside your team, ensuring every decision prioritizes national control and long-term independence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Traditional Approach */}
              <div className="p-6 border-l-4 border-gray-300 bg-gray-50 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Vendor-Driven Approach</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Locked into proprietary platforms
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Vendor controls your data and keys
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Expensive customization fees
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Hard to switch providers
                  </li>
                </ul>
              </div>

              {/* CloudMyco Approach */}
              <div className="p-6 border-l-4 border-carbon-600 bg-carbon-50 rounded-r-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">CloudMyco Independent Advisory</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-carbon-600 mr-2 flex-shrink-0" />
                    You own everything data, keys, infrastructure
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-carbon-600 mr-2 flex-shrink-0" />
                    Unbiased vendor recommendations
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-carbon-600 mr-2 flex-shrink-0" />
                    Your team trained for independence
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-carbon-600 mr-2 flex-shrink-0" />
                    Sovereign control, always
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --------------------------------------------------------------
            Footer - Light theme (no social links)
        -------------------------------------------------------------- */}
        <footer className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Logo and brief description */}
            <div className="mb-8">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <img src="/icon.png" alt="CloudMyco logo" className="h-8 w-8" />
                <span className="text-xl font-bold text-gray-900">CloudMyco</span>
              </Link>
              <p className="text-gray-600 max-w-md">
                Independent sovereign carbon infrastructure advisory. 
                Helping nations build, launch, and own their carbon registries.
              </p>
            </div>

            {/* Navigation sections */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-gray-900 font-semibold mb-4 text-lg">Services</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/services" className="text-gray-600 hover:text-carbon-600 transition-colors">
                      All Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#assessment" className="text-gray-600 hover:text-carbon-600 transition-colors">
                      Needs Assessment
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#selection" className="text-gray-600 hover:text-carbon-600 transition-colors">
                      Vendor Selection
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#oversight" className="text-gray-600 hover:text-carbon-600 transition-colors">
                      Deployment Oversight
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#training" className="text-gray-600 hover:text-carbon-600 transition-colors">
                      Capacity Building
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-gray-900 font-semibold mb-4 text-lg">Company</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="text-gray-600 hover:text-carbon-600 transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/mission" className="text-gray-600 hover:text-carbon-600 transition-colors">
                      Mission
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-gray-900 font-semibold mb-4 text-lg">Contact</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/contact" className="text-gray-600 hover:text-carbon-600 transition-colors">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-600 hover:text-carbon-600 transition-colors">
                      Request Consultation
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-gray-900 font-semibold mb-4 text-lg">Legal</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/privacy" className="text-gray-600 hover:text-carbon-600 transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-gray-600 hover:text-carbon-600 transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright bar - Light theme (no social links) */}
          <div className="bg-gray-50 border-t border-gray-200 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600">
              <p>© {new Date().getFullYear()} CloudMyco. All rights reserved. | Independent sovereign carbon infrastructure advisory.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}