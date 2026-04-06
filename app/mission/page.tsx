import Link from 'next/link'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { ArrowLeft, Globe, Shield, Users, Compass, Target, Heart, Award, Eye, Handshake, Hammer, Building2 } from 'lucide-react'

export default function MissionPage() {
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
            Our Mission
          </h1>
          
          <p className="text-2xl text-gray-700 mb-12 leading-relaxed">
            To help nation states build the technical infrastructure and governance frameworks required to participate in Article 6.2, CORSIA, and CBAM compliance markets—then connect credit-ready nations with vetted, high-integrity project developers.
          </p>

          {/* Why CloudMyco Exists - Updated with host country readiness */}
          <div className="bg-white rounded-2xl border-2 border-carbon-500 p-8 mb-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why I Exist</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The bottleneck in global carbon markets is no longer a lack of projects. It is a lack of host country readiness. Most nations lack Letter of Authorization (LoA) frameworks, corresponding adjustment policies, UNFCCC reporting systems, and digital registries. Without these, they cannot issue compliance-grade credits for CORSIA or Article 6.2.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I believe carbon registries should operate like central bank systems: owned and controlled by governments, with compliance built in. But countries shouldn't have to navigate this complexity alone—or rely on advice from companies trying to sell them software.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I exist to close the readiness gap. I provide independent, unbiased expertise to help nations build LoA frameworks, corresponding adjustment policies, MRV systems, and UNFCCC-aligned registry infrastructure—with <span className="font-semibold">interoperability and system standardization</span> as core requirements, not afterthoughts.
            </p>
          </div>

          {/* Our Guiding Principles - Updated with hybrid model language */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How I Guide</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-carbon-500 transition-colors text-center">
              <div className="w-12 h-12 bg-carbon-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-carbon-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Imagine</h3>
              <p className="text-gray-700">I help nations see what's possible—a future where you own your carbon economy, where your data stays in your borders, where your assets serve your people, and where you are ready for compliance markets.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blockchain-500 transition-colors text-center">
              <div className="w-12 h-12 bg-blockchain-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Hammer className="w-6 h-6 text-blockchain-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Build</h3>
              <p className="text-gray-700">I take the tedious steps—LoA frameworks, corresponding adjustment policies, MRV systems, registry infrastructure—because the mountain will be summited. This work is possible.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-500 transition-colors text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trust</h3>
              <p className="text-gray-700">I connect credit-ready nations with vetted, high-integrity project developers—then help both sides navigate the authorization and transfer process. Governance built in. No exceptions.</p>
            </div>
          </div>

          {/* What I Believe - Updated with compliance market focus */}
          <div className="bg-carbon-50 rounded-2xl p-8 mb-12 border border-carbon-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What I Believe</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-carbon-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">1</span>
                </div>
                <p className="text-lg text-gray-700"><span className="font-semibold">Host country readiness is the bottleneck.</span> Without LoA frameworks, corresponding adjustment policies, and UNFCCC-aligned systems, compliance markets cannot function.</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-carbon-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">2</span>
                </div>
                <p className="text-lg text-gray-700"><span className="font-semibold">Interoperability is not optional.</span> A registry that cannot speak to other registries cannot issue ITMOs. Standardization is the foundation of trust.</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-carbon-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">3</span>
                </div>
                <p className="text-lg text-gray-700"><span className="font-semibold">Sovereignty and compliance are not in conflict.</span> The right infrastructure delivers both. Governance built in, not as an afterthought.</p>
              </div>
            </div>
          </div>

          {/* My Values - Updated with Imagine. Build. Trust. order */}
          <div className="space-y-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">My Values</h2>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-carbon-100 rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-carbon-600" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Imagine — The Certainty of a Future Worth Pursuing</h3>
                <p className="text-gray-700 leading-relaxed">
                  Imagination is not fantasy. It is the first step of architecture. I believe in the certainty of a future where nations own their carbon economies, where restoration is real, and where sovereignty is absolute.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blockchain-100 rounded-lg flex items-center justify-center">
                  <Hammer className="w-6 h-6 text-blockchain-600" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Build — The Tedious Steps, Because the Mountain Will Be Summited</h3>
                <p className="text-gray-700 leading-relaxed">
                  This work is possible. I take the tedious steps—LoA frameworks, corresponding adjustment policies, MRV systems, registry infrastructure—because the mountain will be summited. There is no such thing as a problem without a solution.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Handshake className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Trust — Governance Built In, Not as an Afterthought</h3>
                <p className="text-gray-700 leading-relaxed">
                  Trust is engineered, not assumed. I build governance into infrastructure from the first line of code. Interoperability and system standardization are core requirements. No backdoors. No exceptions. Your data, your keys, your jurisdiction.
                </p>
              </div>
            </div>
          </div>

          {/* Closing Statement - Updated with compliance market language */}
          <div className="bg-gradient-to-br from-carbon-600 to-blockchain-600 rounded-2xl p-8 text-white mb-12">
            <p className="text-2xl font-light leading-relaxed mb-4">
              "We have one planet. The infrastructure we build today determines whether climate ambition becomes climate execution tomorrow."
            </p>
            <p className="text-lg text-carbon-100">
              CloudMyco helps nations imagine, build, and trust that infrastructure—on their terms, with their sovereignty intact, and ready for compliance markets.
            </p>
          </div>

          {/* CTA - Dual audience */}
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              Ready to build your nation's Article 6 readiness? Or looking for a credit-ready host country?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-carbon-600 text-white rounded-lg hover:bg-carbon-700 transition-all hover:scale-105 font-semibold text-lg shadow-lg"
              >
                For Nation States
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-50 transition-all border-2 border-gray-200 font-semibold text-lg"
              >
                For Project Developers
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
