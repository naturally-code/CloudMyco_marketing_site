'use client'

import Link from 'next/link'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { ArrowLeft, Book, FileText, Code, Shield } from 'lucide-react'

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-carbon-50">
      <NavBar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center text-carbon-600 hover:text-carbon-700 mb-8 font-medium">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Documentation
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Complete technical documentation for deploying and operating CloudMyco national carbon registries.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-carbon-500 transition-all">
              <Book className="w-12 h-12 text-carbon-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Installation Guide</h3>
              <p className="text-gray-600 mb-4">
                Step-by-step instructions for deploying CloudMyco on your national infrastructure. Includes hardware requirements, network configuration, and security hardening.
              </p>
              <a href="mailto:contact@cloudmyco.com?subject=Request: Installation Guide" className="text-carbon-600 hover:text-carbon-700 font-semibold">
                Request Documentation →
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-blockchain-500 transition-all">
              <Code className="w-12 h-12 text-blockchain-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">API Reference</h3>
              <p className="text-gray-600 mb-4">
                Complete API documentation with authentication, endpoints, request/response formats, and code examples in Python, JavaScript, and cURL.
              </p>
              <a href="mailto:contact@cloudmyco.com?subject=Request: API Documentation" className="text-blockchain-600 hover:text-blockchain-700 font-semibold">
                Request Documentation →
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-purple-500 transition-all">
              <Shield className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Security Whitepaper</h3>
              <p className="text-gray-600 mb-4">
                Detailed security architecture including encryption, key management, blockchain anchoring, audit logging, and compliance certifications.
              </p>
              <a href="mailto:contact@cloudmyco.com?subject=Request: Security Whitepaper" className="text-purple-600 hover:text-purple-700 font-semibold">
                Request Documentation →
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-green-500 transition-all">
              <FileText className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Compliance Guide</h3>
              <p className="text-gray-600 mb-4">
                Article 6, ISO 14064, and national regulatory requirements. Includes regulatory update procedures and UNFCCC reporting automation.
              </p>
              <a href="mailto:contact@cloudmyco.com?subject=Request: Compliance Guide" className="text-green-600 hover:text-green-700 font-semibold">
                Request Documentation →
              </a>
            </div>
          </div>

          <div className="mt-16 bg-carbon-50 rounded-2xl p-8 border border-carbon-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Custom Documentation?</h2>
            <p className="text-gray-600 mb-6">
              We can provide customized technical documentation tailored to your specific regulatory requirements and infrastructure setup.
            </p>
            <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-carbon-600 text-white rounded-lg hover:bg-carbon-700 font-semibold">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}