'use client'

import Link from 'next/link'
import { Mail, ArrowLeft, Building2, Globe, Users, FileText, Shield } from 'lucide-react'
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
            Interested in building your nation's Article 6 readiness, securing host country authorization, or finding credit-ready markets? We'd love to hear from you.
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
              For sovereign advisory, host country readiness, project developer matching, or partnership opportunities:
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
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Building2 className="w-5 h-5 text-carbon-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">For Nation States</h4>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Country/jurisdiction</li>
                    <li>• Current Article 6 readiness status</li>
                    <li>• LoA framework status</li>
                    <li>• Corresponding adjustment policy status</li>
                    <li>• Timeline and priority needs</li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Users className="w-5 h-5 text-blockchain-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">For Project Developers</h4>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Project type and methodology</li>
                    <li>• Target host countries</li>
                    <li>• Credit vintage and volume</li>
                    <li>• CORSIA eligibility status</li>
                    <li>• ICVCM CCP alignment</li>
                  </ul>
                </div>

                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Shield className="w-5 h-5 text-purple-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">For Partners & Funders</h4>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Organization type</li>
                    <li>• Geographic focus</li>
                    <li>• Partnership opportunity</li>
                    <li>• Technical assistance needs</li>
                    <li>• Funding or implementation role</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info - Three columns for three audiences */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Building2 className="w-6 h-6 text-carbon-600 mr-3" />
                <h3 className="text-lg font-bold text-gray-900">For Nation States</h3>
              </div>
              <p className="text-gray-600 text-sm">
                We work directly with Ministries of Environment, Designated National Authorities (DNAs), and NDC implementation units to design LoA frameworks, corresponding adjustment policies, MRV systems, and UNFCCC-aligned registry infrastructure.
              </p>
              <p className="text-xs text-carbon-600 mt-3 font-medium">Let's build your Article 6 readiness.</p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 text-blockchain-600 mr-3" />
                <h3 className="text-lg font-bold text-gray-900">For Project Developers</h3>
              </div>
              <p className="text-gray-600 text-sm">
                Looking for a credit-ready host country? We maintain a vetted network of high-integrity project developers and help navigate the LoA and corresponding adjustment process in host countries where we have relationships.
              </p>
              <p className="text-xs text-blockchain-600 mt-3 font-medium">Find your next host country.</p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-gray-200">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-purple-600 mr-3" />
                <h3 className="text-lg font-bold text-gray-900">For Partners & Funders</h3>
              </div>
              <p className="text-gray-600 text-sm">
                We work alongside development finance institutions, UN agencies, and philanthropic partners to advance host country readiness and compliance market access. Explore partnership opportunities.
              </p>
              <p className="text-xs text-purple-600 mt-3 font-medium">Let's collaborate.</p>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="mt-12 p-6 bg-carbon-50 rounded-xl border border-carbon-200 text-center">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Trusted by:</span> Ministries of Environment • World Bank Climate Warehouse partners • Article 6 specialists • UNDP National Carbon Registry ecosystem
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
