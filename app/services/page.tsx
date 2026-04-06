F'use client'

import Link from 'next/link'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { ArrowLeft, Clipboard, Search, Settings, Users, CheckCircle, Eye, Handshake, Hammer } from 'lucide-react'

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
            Our Services
          </h1>
          
          <p className="text-xl text-gray-700 mb-12 max-w-3xl leading-relaxed">
            Sovereign carbon advisory for nation states. Host country readiness. Project developer matching. Every engagement is guided by the same principle: <span className="font-semibold">Imagine. Build. Trust.</span>
          </p>

          {/* Service 1 - Needs Assessment & Strategy */}
          <div className="bg-white rounded-2xl border-2 border-carbon-500 p-8 mb-8 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-carbon-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clipboard className="w-8 h-8 text-carbon-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-4 h-4 text-carbon-600" />
                  <span className="text-xs font-semibold text-carbon-600 uppercase tracking-wide">Imagine</span>
                  <span className="text-gray-300 mx-1">•</span>
                  <Hammer className="w-4 h-4 text-carbon-600" />
                  <span className="text-xs font-semibold text-carbon-600 uppercase tracking-wide">Build</span>
                  <span className="text-gray-300 mx-1">•</span>
                  <Handshake className="w-4 h-4 text-carbon-600" />
                  <span className="text-xs font-semibold text-carbon-600 uppercase tracking-wide">Trust</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Needs Assessment & Strategy Development</h2>
                <p className="text-lg text-gray-600 mb-4">Lay the foundation with clarity and purpose.</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-carbon-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Analyze current registry status, legal frameworks, and carbon market goals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-carbon-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Evaluate readiness for Article 6, CORSIA, and CBAM compliance markets</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-carbon-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Develop tailored infrastructure roadmap with interoperability as a core requirement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service 2 - Vendor Selection & Procurement */}
          <div className="bg-white rounded-2xl border-2 border-blockchain-500 p-8 mb-8 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-blockchain-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Search className="w-8 h-8 text-blockchain-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-4 h-4 text-blockchain-600" />
                  <span className="text-xs font-semibold text-blockchain-600 uppercase tracking-wide">Imagine</span>
                  <span className="text-gray-300 mx-1">•</span>
                  <Hammer className="w-4 h-4 text-blockchain-600" />
                  <span className="text-xs font-semibold text-blockchain-600 uppercase tracking-wide">Build</span>
                  <span className="text-gray-300 mx-1">•</span>
                  <Handshake className="w-4 h-4 text-blockchain-600" />
                  <span className="text-xs font-semibold text-blockchain-600 uppercase tracking-wide">Trust</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Vendor Selection & Procurement Support</h2>
                <p className="text-lg text-gray-600 mb-4">Navigate the market with confidence.</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blockchain-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Manage full Request for Proposal (RFP) process</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blockchain-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Evaluate vendor solutions for sovereignty, security, and compliance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blockchain-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Provide unbiased, independent recommendations—no commissions, no vendor ties</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service 3 - Implementation & Deployment */}
          <div className="bg-white rounded-2xl border-2 border-purple-500 p-8 mb-8 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Settings className="w-8 h-8 text-purple-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-4 h-4 text-purple-600" />
                  <span className="text-xs font-semibold text-purple-600 uppercase tracking-wide">Imagine</span>
                  <span className="text-gray-300 mx-1">•</span>
                  <Hammer className="w-4 h-4 text-purple-600" />
                  <span className="text-xs font-semibold text-purple-600 uppercase tracking-wide">Build</span>
                  <span className="text-gray-300 mx-1">•</span>
                  <Handshake className="w-4 h-4 text-purple-600" />
                  <span className="text-xs font-semibold text-purple-600 uppercase tracking-wide">Trust</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Implementation & Deployment Oversight</h2>
                <p className="text-lg text-gray-600 mb-4">Ensure delivery matches vision.</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Project manage technical deployment to meet specifications</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Oversee system integration with existing national infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Validate security architecture, data sovereignty, and interoperability requirements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Service 4 - Capacity Building & Training */}
          <div className="bg-white rounded-2xl border-2 border-green-500 p-8 mb-12 shadow-lg">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="w-4 h-4 text-green-600" />
                  <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">Imagine</span>
                  <span className="text-gray-300 mx-1">•</span>
                  <Hammer className="w-4 h-4 text-green-600" />
                  <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">Build</span>
                  <span className="text-gray-300 mx-1">•</span>
                  <Handshake className="w-4 h-4 text-green-600" />
                  <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">Trust</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Capacity Building & Training</h2>
                <p className="text-lg text-gray-600 mb-4">Transfer knowledge. Ensure independence.</p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Train local IT and registry teams to operate independently</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Develop operational manuals and standard procedures</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Establish governance frameworks for long-term success and interoperability</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Why CloudMyco - Guiding Philosophy */}
          <div className="bg-gradient-to-br from-carbon-600 to-blockchain-600 rounded-2xl p-8 text-white mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center">My Guiding Philosophy</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Imagine</h3>
                <p className="text-carbon-100 text-sm">I believe the path to restoration already exists—and where it doesn't, we need only imagine it to build it. Every engagement begins with clarity about what's possible.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Hammer className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Build</h3>
                <p className="text-carbon-100 text-sm">This work is tedious. It is possible. I take the steps—LoA frameworks, corresponding adjustment policies, MRV systems, registry infrastructure—because the mountain will be summited.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Handshake className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">Trust</h3>
                <p className="text-carbon-100 text-sm">I build governance into infrastructure from the start—not as an afterthought. No vendor bias. No backdoors. Your data, your keys, your jurisdiction.</p>
              </div>
            </div>
            <p className="text-center text-carbon-100 mt-6 pt-4 border-t border-carbon-500 text-sm">
              These principles guide every service I offer—from first conversation to final training.
            </p>
          </div>

          {/* CTA - Dual audience */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Begin?</h2>
            <p className="text-lg text-gray-600 mb-6">
              For nation states: Let's build your Article 6 readiness. For project developers: Looking for a credit-ready host country?
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
