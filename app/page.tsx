'use client';

import Link from 'next/link';
import Head from 'next/head';
import {
  CheckCircle2,
  ArrowRight,
  Building2,
  Users,
  Settings,
} from 'lucide-react';

export default function Home() {
  return (
    <>
      <Head>
        <title>CloudMyco | Implementation Support for Carbon Registries</title>
        <meta name="description" content="CloudMyco Advisory is a solo consultancy. I help countries, registries, and project developers get their carbon infrastructure up and running. No software. No bias. Just the work." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://cloudmyco.com/" />
        <meta property="og:title" content="CloudMyco | Implementation Support for Carbon Registries" />
        <meta property="og:description" content="CloudMyco Advisory is a solo consultancy. I help countries, registries, and project developers get their carbon infrastructure up and running. No software. No bias. Just the work." />
        <meta property="og:image" content="https://cloudmyco.com/icon.png" />
        
        {/* Additional SEO tags */}
        <meta name="keywords" content="carbon registry implementation, registry onboarding, registry training, carbon market consultant, registry support, carbon credit issuance, MRV support" />
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
                <span>Implementation support for carbon registries. No software. No bias. Just the work.</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Imagine.
                <br />
                <span className="bg-gradient-to-r from-carbon-600 to-blockchain-600 bg-clip-text text-transparent">
                  Build. Trust.
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                CloudMyco Advisory is a solo consultancy. I help countries, registries, and project developers get their carbon infrastructure up and running. No software to sell. No vendor bias. Just implementation.
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
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-50 transition-all border-2 border-gray-200 font-semibold text-lg"
                >
                  Request Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem We Solve - Updated */}
        <section className="py-20 bg-white border-y border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">The Bottleneck in Global Carbon Markets</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                <span className="font-semibold">Countries have registries. They need help using them.</span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-red-50 p-8 rounded-2xl border border-red-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Without Implementation Support, Nothing Moves</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Ministry staff need training on registry workflows
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Project developers need help registering their first project
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Documentation is missing or incomplete
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Teams need ongoing support after launch
                  </li>
                </ul>
                <p className="mt-4 text-gray-700 font-medium">Result: No credits issued. No projects registered. No capacity built.</p>
              </div>

              <div className="bg-green-50 p-8 rounded-2xl border border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">The Cost of Inaction</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Billions in climate finance left on the table
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Article 6 readiness unfulfilled
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    Staff trained, then lost to attrition without documentation
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-2">✗</span>
                    International buyers look elsewhere for credits
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* What I Actually Do - Replaces Hybrid Solution and What We Do */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-carbon-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What I Actually Do</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Two service lines. One consultant. No fluff.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl border-2 border-carbon-500 shadow-lg text-center">
                <div className="w-16 h-16 bg-carbon-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-carbon-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Onboarding Support</h3>
                <p className="text-gray-600 mb-4">Get registry users trained and operational.</p>
                <ul className="space-y-2 text-left text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-carbon-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Train ministry staff on registry workflows</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-carbon-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Help project developers register their first project</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-carbon-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Document processes so your team can repeat them</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl border-2 border-blockchain-500 shadow-lg text-center">
                <div className="w-16 h-16 bg-blockchain-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-blockchain-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Ongoing Support</h3>
                <p className="text-gray-600 mb-4">Keep existing registries running smoothly after launch.</p>
                <ul className="space-y-2 text-left text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blockchain-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Annual governance and compliance reviews</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blockchain-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Refresher training for new staff</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blockchain-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Audit documentation and reporting support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why CloudMyco - Simplified Solo Consultant Message */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why CloudMyco</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-700 mb-8">
                I am one person. No team to bill. No software to sell. No vendor allegiance. I show up, do the work, and leave your team better off than before.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="p-6 bg-gray-50 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Independent</h3>
                  <p className="text-gray-600">No software. No commissions. Just implementation.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Experienced</h3>
                  <p className="text-gray-600">ex-Apple. Carbon markets. Registry infrastructure.</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Solo</h3>
                  <p className="text-gray-600">Lower overhead. Faster response. Direct accountability.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Single CTA */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-carbon-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Let's Get Your Registry Running</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Need help with onboarding? Ongoing support? Just want to talk through what you need?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-carbon-600 text-white rounded-lg hover:bg-carbon-700 transition-all font-semibold text-lg shadow-lg"
            >
              Request Consultation
            </Link>
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
                Implementation support for carbon registries. No software. No bias. Just the work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-gray-900 font-semibold mb-4 text-lg">Services</h4>
                <ul className="space-y-2">
                  <li><Link href="/services" className="text-gray-600 hover:text-carbon-600 transition-colors">Onboarding Support</Link></li>
                  <li><Link href="/services" className="text-gray-600 hover:text-carbon-600 transition-colors">Ongoing Support</Link></li>
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
