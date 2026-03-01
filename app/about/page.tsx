'use client'

import Link from 'next/link'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { ArrowLeft, Building2, Lock, Scale, Code, Shield, Globe, Layers } from 'lucide-react'

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
            🏛 About CloudMyco
          </h1>
          
          <p className="text-2xl text-gray-600 mb-6 leading-relaxed font-semibold">
            Banking-Grade, Blockchain-Secured Infrastructure for National Carbon Economies
          </p>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Most countries seeking to participate in carbon markets lack internal registry infrastructure capable of supporting issuance, retirement, audit traceability, and sovereign control. Building that infrastructure from scratch typically takes 2–5 years. CloudMyco reduces that timeline to eight weeks.
          </p>

          {/* What CloudMyco Becomes */}
          <div className="bg-white rounded-2xl border-2 border-carbon-500 p-8 mb-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Provide</h2>
            <p className="text-lg text-gray-600 mb-6">
              We provide licensed sovereign infrastructure that becomes:
            </p>
            
            <div className="grid gap-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-carbon-600 rounded-full mt-2.5"></div>
                <p className="text-gray-700">The <span className="font-semibold">audit ledger spine</span> of a country's carbon economy</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-carbon-600 rounded-full mt-2.5"></div>
                <p className="text-gray-700">The <span className="font-semibold">blockchain-anchored record</span> of issuance and retirement</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-carbon-600 rounded-full mt-2.5"></div>
                <p className="text-gray-700">The <span className="font-semibold">verification interface</span> for accredited auditors</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-carbon-600 rounded-full mt-2.5"></div>
                <p className="text-gray-700">The <span className="font-semibold">compliance interface</span> for ministries and regulators</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-carbon-600 rounded-full mt-2.5"></div>
                <p className="text-gray-700">The <span className="font-semibold">interoperability bridge</span> to voluntary programs and Article 6 frameworks</p>
              </div>
            </div>
          </div>

          {/* Core Characteristics */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-carbon-50 p-6 rounded-xl border border-carbon-200 text-center">
              <Shield className="w-10 h-10 text-carbon-600 mx-auto mb-3" />
              <p className="font-semibold text-gray-900">Immutable</p>
            </div>
            <div className="bg-carbon-50 p-6 rounded-xl border border-carbon-200 text-center">
              <Globe className="w-10 h-10 text-carbon-600 mx-auto mb-3" />
              <p className="font-semibold text-gray-900">Distributed</p>
            </div>
            <div className="bg-carbon-50 p-6 rounded-xl border border-carbon-200 text-center">
              <Code className="w-10 h-10 text-carbon-600 mx-auto mb-3" />
              <p className="font-semibold text-gray-900">Verifiable</p>
            </div>
            <div className="bg-carbon-50 p-6 rounded-xl border border-carbon-200 text-center">
              <Building2 className="w-10 h-10 text-carbon-600 mx-auto mb-3" />
              <p className="font-semibold text-gray-900">Financial-Grade</p>
            </div>
            <div className="bg-carbon-50 p-6 rounded-xl border border-carbon-200 text-center">
              <Lock className="w-10 h-10 text-carbon-600 mx-auto mb-3" />
              <p className="font-semibold text-gray-900">Sovereign-Controlled</p>
            </div>
            <div className="bg-carbon-50 p-6 rounded-xl border border-carbon-200 text-center">
              <Layers className="w-10 h-10 text-carbon-600 mx-auto mb-3" />
              <p className="font-semibold text-gray-900">Tamper-Evident</p>
            </div>
          </div>

          {/* Credit Characteristics */}
          <div className="bg-gradient-to-br from-gray-900 to-carbon-800 rounded-2xl p-8 text-white mb-12">
            <h2 className="text-2xl font-bold mb-6">Every Credit Recorded Within CloudMyco Is:</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-carbon-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>Anchored to a blockchain ledger</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-carbon-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>Versioned and traceable</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-carbon-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>Tamper-evident</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 bg-carbon-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>Audit-defensible</span>
              </div>
            </div>
          </div>

          {/* Our Position */}
          <div className="bg-white rounded-2xl border-2 border-blockchain-500 p-8 mb-12 shadow-lg text-center">
            <p className="text-2xl font-light text-gray-700 italic mb-4">
              "We are not another registry. We are the infrastructure layer that powers sovereign registries."
            </p>
            <p className="text-lg text-gray-600">
              — CloudMyco
            </p>
          </div>

          {/* How We're Different */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How We're Different</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <Building2 className="w-10 h-10 text-carbon-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Built for Governments</h3>
                <p className="text-gray-600">
                  Not startups. Our design principles come from central bank systems, not venture-backed SaaS. This is critical infrastructure.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <Lock className="w-10 h-10 text-blockchain-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">True Data Sovereignty</h3>
                <p className="text-gray-600">
                  Your data physically stays in your country. Your keys, your jurisdiction, your control. No CloudMyco employees can access your data.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <Scale className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Compliance Built-In</h3>
                <p className="text-gray-600">
                  Article 6, ISO 14064, and national regulations coded directly into the software. Updates distributed automatically like banking software.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <Code className="w-10 h-10 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Open Source</h3>
                <p className="text-gray-600">
                  Apache 2.0 licensed. Governments can audit the code, modify it, and operate independently. No vendor lock-in ever.
                </p>
              </div>
            </div>
          </div>

          {/* Working With Us */}
          <div className="bg-carbon-50 rounded-2xl p-8 border border-carbon-200 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Working With Us</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">For Governments:</h3>
                <p className="text-gray-600">
                  We work directly with ministries, regulatory bodies, and national data centers to ensure full sovereignty compliance. Our deployment includes hardware procurement guidance, staff training, and ongoing support.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">For Technical Teams:</h3>
                <p className="text-gray-600">
                  We provide complete documentation, source code access, and integration support. Your team maintains full operational control.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">For International Bodies:</h3>
                <p className="text-gray-600">
                  We support World Bank Climate Warehouse integration, UNFCCC reporting automation, and cross-registry verification—all while maintaining data sovereignty.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-6 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
            
            <div className="border-l-4 border-carbon-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sovereignty is Non-Negotiable</h3>
              <p className="text-gray-600">
                No backdoors, no admin access, no data sharing. Ever. National sovereignty comes before commercial convenience.
              </p>
            </div>

            <div className="border-l-4 border-blockchain-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Transparency Through Code</h3>
              <p className="text-gray-600">
                Open source isn't just about licensing—it's about governments being able to verify exactly what the software does.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Long-Term Thinking</h3>
              <p className="text-gray-600">
                Carbon registries will exist for decades. We build infrastructure that lasts, not startup products that pivot.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-br from-carbon-600 to-blockchain-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Interested in Deploying CloudMyco?</h2>
            <p className="text-carbon-50 mb-6">
              We're currently onboarding pilot registries. More countries will be added throughout 2026.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-carbon-700 rounded-lg hover:bg-carbon-50 transition-all hover:scale-105 font-semibold text-lg shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}