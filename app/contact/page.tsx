'use client'

import Link from 'next/link'
import { Mail, ArrowLeft, Building2, Globe } from 'lucide-react'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-carbon-50">
      <NavBar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center text-carbon-600 hover:text-carbon-700 mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Interested in deploying CloudMyco for your national carbon registry? We'd love to hear from you.
          </p>

          {/* Contact Card */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 p-12 shadow-xl">
            <div className="flex items-center justify-center mb-8">
              <div className="w-16 h-16 bg-carbon-100 rounded-xl flex items-center justify-center">
                <Mail className="w-8 h-8 text-carbon-600" />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
              Contact Email
            </h2>

            <p className="text-lg text-gray-600 text-center mb-8">
              For pilot program inquiries, technical questions, or partnership opportunities:
            </p>

            <div className="flex items-center justify-center">
              <a 
                href="mailto:contact@cloudmyco.com" 
                className="inline-flex items-center px-8 py-4 bg-carbon-600 text-white rounded-lg hover:bg-carbon-700 transition-all hover:scale-105 font-semibold text-lg shadow-lg"
              >
                <Mail className="w-5 h-5 mr-3" />
                contact@cloudmyco.com
              </a>
            </div>

            <div className="mt-12 pt-12 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                What to Include in Your Email
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">For Pilot Programs</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Country/jurisdiction</li>
                    <li>• Current registry status</li>
                    <li>• Timeline requirements</li>
                    <li>• Expected transaction volume</li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">For Technical Questions</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Infrastructure requirements</li>
                    <li>• Integration needs</li>
                    <li>• Security certifications</li>
                    <li>• Compliance requirements</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Building2 className="w-6 h-6 text-carbon-600 mr-3" />
                <h3 className="text-lg font-bold text-gray-900">For Governments</h3>
              </div>
              <p className="text-gray-600 text-sm">
                We work directly with ministries of environment, central banks, and national regulatory bodies 
                to ensure full compliance with your sovereignty requirements.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-blockchain-600 mr-3" />
                <h3 className="text-lg font-bold text-gray-900">Response Time</h3>
              </div>
              <p className="text-gray-600 text-sm">
                We typically respond to pilot program inquiries within 2 business days. 
                For urgent technical questions, please note "URGENT" in your subject line.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}