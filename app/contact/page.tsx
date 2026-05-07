'use client'

import Link from 'next/link'
import { Mail, ArrowLeft, Users, Settings } from 'lucide-react'
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
            Need help with onboarding? Ongoing support? Just want to talk through what you need? Let's talk.
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
              For onboarding support, ongoing support, or just to ask a question:
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
                  <div className="flex items-center mb-2">
                    <Users className="w-5 h-5 text-carbon-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">For Onboarding Support</h4>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Type of registry or system</li>
                    <li>• Number of staff needing training</li>
                    <li>• Specific workflows or processes needing help</li>
                    <li>• Timeline and priority needs</li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Settings className="w-5 h-5 text-blockchain-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">For Ongoing Support</h4>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Current registry status and age</li>
                    <li>• Specific challenges you're facing</li>
                    <li>• Staff turnover or training needs</li>
                    <li>• Audit or compliance reporting needs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info - Two columns for two services */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-carbon-600 mr-3" />
                <h3 className="text-lg font-bold text-gray-900">Onboarding Support</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Training ministry staff. Helping project developers register their first project. Documenting processes so your team can repeat them.
              </p>
              <p className="text-xs text-carbon-600 mt-3 font-medium">Let's get your registry running.</p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Settings className="w-6 h-6 text-blockchain-600 mr-3" />
                <h3 className="text-lg font-bold text-gray-900">Ongoing Support</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Annual governance and compliance reviews. Refresher training for new staff. Audit documentation and reporting support.
              </p>
              <p className="text-xs text-blockchain-600 mt-3 font-medium">Let's keep your registry running.</p>
            </div>
          </div>

          {/* Trust Signals - Simplified */}
          <div className="mt-12 p-6 bg-carbon-50 rounded-xl border border-carbon-200 text-center">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Independent. Experienced. Solo.</span> No software to sell. No vendor bias. Just implementation.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
