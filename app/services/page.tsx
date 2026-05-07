'use client'

import Link from 'next/link'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { ArrowLeft, Users, Settings, CheckCircle } from 'lucide-react'

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-carbon-50">
      <NavBar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center text-carbon-600 hover:text-carbon-700 mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Services
          </h1>
          
          <p className="text-xl text-gray-700 mb-12 max-w-3xl leading-relaxed">
            Two service lines. One consultant. No fluff. I help countries, registries, and project developers get their carbon infrastructure up and running.
          </p>

          {/* Service 1 - Onboarding Support */}
          <div className="bg-white rounded-2xl border-2 border-carbon-500 p-8 mb-8 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-carbon-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-8 h-8 text-carbon-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Onboarding Support</h2>
                <p className="text-lg text-gray-600 mb-4">Get registry users trained and operational.</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-carbon-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Train ministry staff on registry workflows</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-carbon-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Help project developers register their first project</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-carbon-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Document processes so your team can repeat them</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service 2 - Ongoing Support */}
          <div className="bg-white rounded-2xl border-2 border-blockchain-500 p-8 mb-12 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-blockchain-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Settings className="w-8 h-8 text-blockchain-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Ongoing Support</h2>
                <p className="text-lg text-gray-600 mb-4">Keep existing registries running smoothly after launch.</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blockchain-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Annual governance and compliance reviews</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blockchain-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Refresher training for new staff</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blockchain-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Audit documentation and reporting support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why CloudMyco - Simplified solo consultant message */}
          <div className="bg-gradient-to-br from-carbon-600 to-blockchain-600 rounded-2xl p-8 text-white mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Why CloudMyco</h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xl text-carbon-100 mb-6">
                I am one person. No team to bill. No software to sell. No vendor allegiance. I show up, do the work, and leave your team better off than before.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div>
                  <h3 className="text-lg font-bold mb-1">Independent</h3>
                  <p className="text-carbon-100 text-sm">No software. No commissions. Just implementation.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Experienced</h3>
                  <p className="text-carbon-100 text-sm">ex-Apple. Carbon markets. Registry infrastructure.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">Solo</h3>
                  <p className="text-carbon-100 text-sm">Lower overhead. Direct accountability.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA - Single CTA only */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Let's Get Your Registry Running</h2>
            <p className="text-lg text-gray-600 mb-6">
              Need help with onboarding? Ongoing support? Just want to talk through what you need?
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-carbon-600 text-white rounded-lg hover:bg-carbon-700 transition-all hover:scale-105 font-semibold text-lg shadow-lg"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
