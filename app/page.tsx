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
        <title>CloudMyco | Sovereign Carbon Infrastructure. Host Country Readiness. Project Developer Matching.</title>
        <meta name="description" content="Sovereign carbon advisory for nation states. Article 6 readiness, LoA frameworks, corresponding adjustments, CORSIA eligibility, and vetted project developer matching. Independent. Unbiased. Sovereignty-first." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cloudmyco.com/" />
        <meta property="og:title" content="CloudMyco | Sovereign Carbon Infrastructure. Host Country Readiness. Project Developer Matching." />
        <meta property="og:description" content="Sovereign carbon advisory for nation states. Article readiness, LoA frameworks, corresponding adjustments, CORSIA eligibility, and vetted project developer matching." />
        <meta property="og:image" content="https://cloudmyco.com/icon.png" />
        
        {/* Additional SEO tags */}
        <meta name="keywords" content="Article 6, Letter of Authorization, corresponding adjustment, CORSIA eligibility, CBAM compliance, ICVCM Core Carbon Principles, Designated National Authority, ITMO, host country framework, jurisdictional readiness, UNFCCC centralized accounting platform, Biennial Transparency Report, sovereign carbon infrastructure, host country readiness, project developer matching, interoperability, system standardization" />
        <meta name="author" content="CloudMyco" />
        <meta name="robots" content="index, follow" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://cloudmyco.com/" />
        
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="shortcut icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-carbon-50">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="flex items-center space-x-2">
                <img src="/icon.png" alt="CloudMyco logo" className="h-8 w-8" />
                <span className="text-xl font-bold text-gray-900">CloudMyco</span>
              </Link>

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

              <button className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <img src="/icon.png" alt="CloudMyco" className="h-32 w-32 mx-auto mb-6" />
              </div>
              
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-carbon-100 text-carbon-800 rounded-full text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                <span>Sovereign carbon infrastructure. Host country readiness. Project developer matching.</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Imagine.
                <br />
                <span className="bg-gradient-to-r from-carbon-600 to-blockchain-600 bg-clip-text text-transparent">
                  Build. Trust.
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                CloudMyco is a sovereign carbon advisory firm. We help nation states build the technical infrastructure and governance frameworks required to participate in Article 6.2 of the Paris Agreement, CORSIA, and CBAM compliance markets. We then connect credit-ready nations with vetted, high-integrity project developers.
                <br />
                <strong className="text-gray-900">
                  Independent expertise. Zero vendor bias. Full sovereignty.
                </strong>
              </p>

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

        {/* The Problem We Solve */}
        <section className="py-20 bg-white border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Bottleneck in Global Carbon Markets</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                It is no longer a lack of projects. It is a lack of <span className="font-semibold">host country readiness</span>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-red-50 p-8 rounded-2xl border border-red-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Without Readiness, Nothing Moves</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    No Letter of Authorization (LoA) frameworks
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    No corresponding adjustment policies
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    No UNFCCC reporting systems
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    No digital registries
                  </li>
                </ul>
                <p className="mt-4 text-gray-700 font-medium">Result: No compliance-grade credits for CORSIA or Article 6 </p>
              </div>

              <div className="bg-green-50 p-8 rounded-2xl border border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">The Cost of Inaction</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Project developers cannot get credits authorized
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Airlines cannot meet CORSIA obligations
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Corporations cannot defend against CBAM
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Nations leave climate finance on the table
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                CloudMyco exists to close this gap. We build host country readiness from the ground up—with <span className="font-semibold">interoperability and system standardization</span> as core requirements, not afterthoughts.
              </p>
            </div>
          </div>
        </section>

        {/* Our Hybrid Solution */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-carbon-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Hybrid Solution</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Sovereign advisory + Vetted developer network + Facilitation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl border-2 border-carbon-500 shadow-lg text-center">
                <div className="w-16 h-16 bg-carbon-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-8 h-8 text-carbon-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Model A: Sovereign Advisory</h3>
                <p className="text-gray-600">
                  We work directly with Ministries of Environment, Designated National Authorities (DNAs), and NDC implementation units to design LoA processes, corresponding adjustment policies, MRV systems, and UNFCCC-aligned registry infrastructure.
                </p>
                <p className="text-sm text-carbon-600 mt-4 font-semibold">Interoperability built in. Standardization first.</p>
              </div>

              <div className="bg-white p-8 rounded-2xl border-2 border-blockchain-500 shadow-lg text-center">
                <div className="w-16 h-16 bg-blockchain-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-blockchain-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">The Bridge</h3>
                <p className="text-gray-600">
                  We maintain a vetted network of high-integrity project developers. Once a nation is credit-ready and its systems are standardized for cross-border recognition, we match the right developers to the right opportunities.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border-2 border-green-500 shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Model B: Facilitation</h3>
                <p className="text-gray-600">
                  We help project developers navigate the LoA and corresponding adjustment process in host countries where we have relationships—ensuring credits are tagged, authorized, and traceable across registries.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                End-to-end advisory for host country readiness and compliance market access.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="group p-8 rounded-2xl border-2 border-gray-200 hover:border-carbon-500 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-carbon-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clipboard className="w-6 h-6 text-carbon-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Article 6 Readiness</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-carbon-600 mr-2 mt-0.5 flex-shrink-0" />
                    Letter of Authorization (LoA) framework design
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-carbon-600 mr-2 mt-0.5 flex-shrink-0" />
                    Corresponding adjustment policy and procedures
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-carbon-600 mr-2 mt-0.5 flex-shrink-0" />
                    Designated National Authority (DNA) capacity building
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-carbon-600 mr-2 mt-0.5 flex-shrink-0" />
                    UNFCCC Biennial Transparency Report (BTR) support
                  </li>
                </ul>
              </div>

              <div className="group p-8 rounded-2xl border-2 border-gray-200 hover:border-blockchain-500 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-blockchain-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Scale className="w-6 h-6 text-blockchain-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">CORSIA & CBAM Advisory</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-blockchain-600 mr-2 mt-0.5 flex-shrink-0" />
                    Host country positioning for aviation-grade credits
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-blockchain-600 mr-2 mt-0.5 flex-shrink-0" />
                    CBAM defense strategies for domestic industries
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-blockchain-600 mr-2 mt-0.5 flex-shrink-0" />
                    Compliance market access planning
                  </li>
                </ul>
              </div>

              <div className="group p-8 rounded-2xl border-2 border-gray-200 hover:border-purple-500 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Settings className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Registry & MRV Infrastructure</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    Digital registry selection and implementation
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    MRV system design
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    Integration with UNFCCC centralized accounting platforms
                  </li>
                </ul>
              </div>

              <div className="group p-8 rounded-2xl border-2 border-gray-200 hover:border-green-500 hover:shadow-xl transition-all">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Vetted Developer Network</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Pre-qualified project developers
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Matchmaking between credit-ready nations and developers
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    Due diligence aligned with ICVCM Core Carbon Principles (CCPs)
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center text-carbon-600 hover:text-carbon-700 font-semibold"
              >
                View all services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Why CloudMyco */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-carbon-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why CloudMyco</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Most carbon consultants work for project developers. We work for sovereign nations first.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Differentiation</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-carbon-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold">Nation-first:</span> We build host country readiness from the ground up
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-carbon-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold">Interoperability as standard:</span> Every system connects to UNFCCC, Climate Warehouse, and global registries
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-carbon-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold">Vetted developer network:</span> We bring credit-ready nations to the right partners
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-carbon-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="font-semibold">Not a broker:</span> We are a sovereign advisor with unique leverage
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Ecosystem</h3>
                <p className="text-gray-600 mb-4">We work alongside and integrate with:</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blockchain-600 mr-2 flex-shrink-0 mt-0.5" />
                    UNDP National Carbon Registry
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blockchain-600 mr-2 flex-shrink-0 mt-0.5" />
                    World Bank Climate Warehouse
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blockchain-600 mr-2 flex-shrink-0 mt-0.5" />
                    Gold Standard / Verra
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blockchain-600 mr-2 flex-shrink-0 mt-0.5" />
                    UNFCCC centralized accounting platforms
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">For Nation States</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's build your Article 6 readiness.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-carbon-600 text-white rounded-lg hover:bg-carbon-700 transition-all font-semibold text-lg shadow-lg mb-16"
            >
              Request Consultation
            </Link>

            <div className="border-t border-gray-200 pt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">For Project Developers</h2>
              <p className="text-lg text-gray-600 mb-6">
                Looking for a credit-ready host country? Start here.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-50 transition-all border-2 border-gray-200 font-semibold text-lg"
              >
                Inquire About Host Countries
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-8">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <img src="/icon.png" alt="CloudMyco logo" className="h-8 w-8" />
                <span className="text-xl font-bold text-gray-900">CloudMyco</span>
              </Link>
              <p className="text-gray-600 max-w-md">
                Sovereign carbon advisory. Host country readiness. Project developer matching. Independent. Unbiased. Sovereignty-first.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-gray-900 font-semibold mb-4 text-lg">Services</h4>
                <ul className="space-y-2">
                  <li><Link href="/services" className="text-gray-600 hover:text-carbon-600 transition-colors">All Services</Link></li>
                  <li><Link href="/services#readiness" className="text-gray-600 hover:text-carbon-600 transition-colors">Article 6 Readiness</Link></li>
                  <li><Link href="/services#corsia" className="text-gray-600 hover:text-carbon-600 transition-colors">CORSIA & CBAM</Link></li>
                  <li><Link href="/services#registry" className="text-gray-600 hover:text-carbon-600 transition-colors">Registry & MRV</Link></li>
                  <li><Link href="/services#developers" className="text-gray-600 hover:text-carbon-600 transition-colors">Developer Matching</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-gray-900 font-semibold mb-4 text-lg">Company</h4>
                <ul className="space-y-2">
                  <li><Link href="/about" className="text-gray-600 hover:text-carbon-600 transition-colors">About Us</Link></li>
                  <li><Link href="/mission" className="text-gray-600 hover:text-carbon-600 transition-colors">Mission</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-gray-900 font-semibold mb-4 text-lg">Contact</h4>
                <ul className="space-y-2">
                  <li><Link href="/contact" className="text-gray-600 hover:text-carbon-600 transition-colors">Contact Us</Link></li>
                  <li><Link href="/contact" className="text-gray-600 hover:text-carbon-600 transition-colors">Request Consultation</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-gray-900 font-semibold mb-4 text-lg">Legal</h4>
                <ul className="space-y-2">
                  <li><Link href="/privacy" className="text-gray-600 hover:text-carbon-600 transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-gray-600 hover:text-carbon-600 transition-colors">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border-t border-gray-200 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600">
              <p>© {new Date().getFullYear()} CloudMyco. All rights reserved. | Imagine. Build. Trust.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
