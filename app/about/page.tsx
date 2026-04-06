'use client'

import Link from 'next/link'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { ArrowLeft, Building2, Users, Target, Award, Shield, Globe, Compass, Heart, Eye, Handshake, Hammer } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-carbon-50">
      <NavBar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center text-carbon-600 hover:text-carbon-700 mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            About CloudMyco
          </h1>
          
          <p className="text-2xl text-gray-800 mb-6 leading-relaxed font-semibold">
            Imagine. Build. Trust.
          </p>
          
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            The bottleneck in global carbon markets is no longer a lack of projects. It is a lack of host country readiness. Most nations lack Letter of Authorization (LoA) frameworks, corresponding adjustment policies, UNFCCC reporting systems, and digital registries. CloudMyco exists to close this gap.
          </p>

          {/* Who We Are - Updated with hybrid model */}
          <div className="bg-white rounded-2xl border-2 border-carbon-500 p-8 mb-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who I Am</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I founded CloudMyco because I saw a critical gap in the carbon market ecosystem. After years navigating carbon markets as a researcher and technologist (ex-Apple, AI/ML for data integrity), I realized that the real bottleneck wasn't project supply—it was host country readiness.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              CloudMyco is a sovereign carbon advisory firm. We help nation states build the technical infrastructure and governance frameworks required to participate in Article 6 of the Paris Agreement, CORSIA, and CBAM compliance markets. We then connect credit-ready nations with vetted, high-integrity project developers.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I don't sell software. I don't take commissions. I provide independent, unbiased expertise to ensure your nation's carbon infrastructure is built to last—and built to connect.
            </p>
          </div>

          {/* What We Do - Framed as hybrid model */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-carbon-500 transition-colors text-center">
              <div className="w-12 h-12 bg-carbon-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-6 h-6 text-carbon-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sovereign Advisory</h3>
              <p className="text-gray-700 text-sm">LoA frameworks, corresponding adjustment policies, MRV systems, and UNFCCC-aligned registry infrastructure—with interoperability built in.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blockchain-500 transition-colors text-center">
              <div className="w-12 h-12 bg-blockchain-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-blockchain-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">The Bridge</h3>
              <p className="text-gray-700 text-sm">A vetted network of high-integrity project developers. Once a nation is credit-ready, we match the right developers to the right opportunities.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-500 transition-colors text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Facilitation</h3>
              <p className="text-gray-700 text-sm">Helping project developers navigate the LoA and corresponding adjustment process in host countries where we have relationships.</p>
            </div>
          </div>

          {/* Our Approach - How I Work */}
          <div className="bg-carbon-50 rounded-2xl p-8 border border-carbon-200 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How I Work</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-carbon-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">1</span>
                </div>
                <p className="text-lg text-gray-700"><span className="font-semibold">Imagine:</span> I start with clarity. What does success look like for your nation? What infrastructure do you need to participate in compliance markets?</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-carbon-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">2</span>
                </div>
                <p className="text-lg text-gray-700"><span className="font-semibold">Build:</span> I help you build the governance frameworks, LoA processes, corresponding adjustment policies, and registry infrastructure required for Article 6.2, CORSIA, and CBAM.</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-carbon-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">3</span>
                </div>
                <p className="text-lg text-gray-700"><span className="font-semibold">Trust:</span> I connect credit-ready nations with vetted, high-integrity project developers—then help both sides navigate the authorization and transfer process.</p>
              </div>
            </div>
          </div>

          {/* Why CloudMyco - Updated with nation-first positioning */}
          <div className="bg-gradient-to-br from-carbon-600 to-blockchain-600 rounded-2xl p-8 text-white mb-12">
            <h2 className="text-3xl font-bold mb-6">Why CloudMyco</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Nation-First</h3>
                <p className="text-carbon-100">Most carbon consultants work for project developers. I work for sovereign nations first. That gives me unique leverage to then connect the right developers to credit-ready markets.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Interoperability by Design</h3>
                <p className="text-carbon-100">Every system I help build is designed to connect—with UNFCCC centralized accounting platforms, World Bank Climate Warehouse, and global registry networks.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Independent & Unbiased</h3>
                <p className="text-carbon-100">I don't sell software. I don't take commissions. My only loyalty is to your sovereignty and long-term success.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Deeply Specialized</h3>
                <p className="text-carbon-100">Article 6 readiness, LoA frameworks, corresponding adjustments, CORSIA eligibility, CBAM defense—this is my only focus.</p>
              </div>
            </div>
          </div>

          {/* Our Values - Updated with Imagine. Build. Trust. */}
          <div className="space-y-6 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">My Values</h2>
            
            <div className="border-l-4 border-carbon-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Imagine — The Certainty of a Future Worth Pursuing</h3>
              <p className="text-gray-700">
                Imagination is not fantasy. It is the first step of architecture. I believe in the certainty of a future where nations own their carbon economies, where restoration is real, and where sovereignty is absolute.
              </p>
            </div>

            <div className="border-l-4 border-blockchain-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Build — The Tedious Steps, Because the Mountain Will Be Summited</h3>
              <p className="text-gray-700">
                This work is possible. I take the tedious steps—LoA frameworks, corresponding adjustment policies, MRV systems, registry infrastructure—because the mountain will be summited. There is no such thing as a problem without a solution.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trust — Governance Built In, Not as an Afterthought</h3>
              <p className="text-gray-700">
                Trust is engineered, not assumed. I build governance into infrastructure from the first line of code. Interoperability and system standardization are core requirements—not afterthoughts. No exceptions. No backdoors.
              </p>
            </div>
          </div>

          {/* CTA - Dual audience */}
          <div className="text-center bg-gradient-to-br from-carbon-600 to-blockchain-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">For Nation States</h2>
            <p className="text-carbon-50 mb-6">
              Let's build your Article 6 readiness.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-carbon-700 rounded-lg hover:bg-carbon-50 transition-all hover:scale-105 font-semibold text-lg shadow-lg mb-6"
            >
              Request a Consultation
            </Link>

            <div className="border-t border-carbon-500 pt-6 mt-6">
              <h2 className="text-2xl font-bold mb-4">For Project Developers</h2>
              <p className="text-carbon-50 mb-6">
                Looking for a credit-ready host country? Start here.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-carbon-700 rounded-lg hover:bg-carbon-50 transition-all hover:scale-105 font-semibold text-lg shadow-lg"
              >
                Inquire About Host Countries
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
