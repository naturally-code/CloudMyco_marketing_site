'use client'

import Link from 'next/link'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { ArrowLeft, Building2, Users, Target, Award, Shield, Globe, Compass, Heart } from 'lucide-react'

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
            Independent Advisors for Sovereign Carbon Infrastructure
          </p>
          
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            Most countries seeking to participate in carbon markets lack internal registry infrastructure capable of supporting issuance, retirement, audit traceability, and sovereign control. Building that infrastructure from scratch typically takes 2–5 years—and navigating the vendor landscape alone is fraught with risk.
          </p>

          {/* Who We Are */}
          <div className="bg-white rounded-2xl border-2 border-carbon-500 p-8 mb-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              CloudMyco is an independent advisory firm dedicated to helping sovereign nations build, launch, and own their carbon market infrastructure. We don't build or sell software—we provide the expertise, strategy, and oversight to ensure your registry serves your nation's interests first.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team brings together deep expertise in carbon markets, climate policy, financial infrastructure, and technology. We've advised ministries of environment, central banks, and regulatory bodies across the globe—always with one guiding principle: sovereignty first.
            </p>
          </div>

          {/* What We Do - Updated for Consulting */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-carbon-500 transition-colors">
              <div className="w-12 h-12 bg-carbon-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-carbon-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Strategy & Assessment</h3>
              <p className="text-gray-700">Evaluate readiness, develop roadmaps, and align with Article 6 requirements—all tailored to your nation's unique context.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-carbon-500 transition-colors">
              <div className="w-12 h-12 bg-blockchain-100 rounded-lg flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-blockchain-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Vendor Selection</h3>
              <p className="text-gray-700">Unbiased RFP management and technical due diligence to find the right technology partner—no commissions, no vendor ties.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-carbon-500 transition-colors">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Deployment Oversight</h3>
              <p className="text-gray-700">Project management and security validation to ensure your registry meets specifications and maintains full sovereignty.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-carbon-500 transition-colors">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Capacity Building</h3>
              <p className="text-gray-700">Train your teams to operate independently. No vendor lock-in. No dependence. Ever.</p>
            </div>
          </div>

          {/* Our Approach */}
          <div className="bg-carbon-50 rounded-2xl p-8 border border-carbon-200 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Approach</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-carbon-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-lg text-gray-700"><span className="font-semibold">Independent:</span> We answer to one master—our clients' long-term success. No vendor partnerships, no referral fees, no hidden agendas.</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-carbon-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-lg text-gray-700"><span className="font-semibold">Sovereignty-First:</span> Every recommendation prioritizes national control. Your data, your keys, your jurisdiction—always.</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-carbon-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-lg text-gray-700"><span className="font-semibold">Knowledge Transfer:</span> We measure success by how independently your team can operate when we're done.</p>
              </div>
            </div>
          </div>

          {/* Why Independent Advisory */}
          <div className="bg-gradient-to-br from-carbon-600 to-blockchain-600 rounded-2xl p-8 text-white mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Independent Advisory Matters</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2">No Vendor Bias</h3>
                <p className="text-carbon-100">When advice comes from someone selling software, can you trust it? We never take commissions—so you get the truth.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Deep Specialization</h3>
                <p className="text-carbon-100">Carbon registry infrastructure is our only focus. Not a side practice. Not one of many services.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Government Experience</h3>
                <p className="text-carbon-100">We've worked with ministries, central banks, and regulators. We understand how sovereign institutions operate.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Long-Term Partnership</h3>
                <p className="text-carbon-100">We don't disappear after deployment. We're here for the life of your carbon economy.</p>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="space-y-6 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
            
            <div className="border-l-4 border-carbon-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Independence</h3>
              <p className="text-gray-700">
                No vendor ties. No commissions. No software to sell. Just unbiased expertise that puts your interests first.
              </p>
            </div>

            <div className="border-l-4 border-blockchain-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sovereignty</h3>
              <p className="text-gray-700">
                Your data, your keys, your jurisdiction. We never compromise on national control.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-700">
                We tell you what you need to hear, not what's easy to sell. If you're not ready, we'll tell you.
              </p>
            </div>

            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Partnership</h3>
              <p className="text-gray-700">
                We walk alongside you—from strategy through deployment and beyond. Your success is our success.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-br from-carbon-600 to-blockchain-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Build Your Nation's Carbon Future?</h2>
            <p className="text-carbon-50 mb-6">
              Let's talk about how independent guidance can help you build a sovereign registry that serves your nation for decades.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-carbon-700 rounded-lg hover:bg-carbon-50 transition-all hover:scale-105 font-semibold text-lg shadow-lg"
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