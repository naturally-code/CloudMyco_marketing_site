import Link from 'next/link'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { ArrowLeft, Globe, Shield, Users, Database, LineChart, Lock } from 'lucide-react'

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
            Building the Financial Spine of <span className="text-carbon-600">Sovereign Carbon Markets</span>
          </h1>
          
          <p className="text-2xl text-gray-600 mb-12 leading-relaxed">
            CloudMyco exists to bring nations into the modern climate economy with banking-grade, blockchain-anchored carbon infrastructure.
          </p>

          {/* Why CloudMyco Exists */}
          <div className="bg-white rounded-2xl border-2 border-carbon-500 p-8 mb-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why CloudMyco Exists</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Carbon markets have a trust problem. When registries depend on foreign SaaS platforms, countries surrender control of their most sensitive environmental data. This isn't just a technical issue—it's a sovereignty issue.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              We believe carbon registries should operate like central bank systems: on-premise infrastructure, owned and controlled by governments, with automatic compliance built in.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We license sovereign-ready infrastructure that transforms carbon from an environmental measurement into a structured financial asset class — backed by verifiable digital infrastructure.
            </p>
          </div>

          {/* Core Capabilities */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Sovereign-Ready Infrastructure</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-carbon-500 transition-colors">
              <div className="w-12 h-12 bg-carbon-100 rounded-lg flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-carbon-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Launch & Operate</h3>
              <p className="text-gray-600">Domestic carbon markets with full sovereign control over your carbon economy</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-carbon-500 transition-colors">
              <div className="w-12 h-12 bg-blockchain-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blockchain-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Issue & Track</h3>
              <p className="text-gray-600">Issue, track, and retire carbon credits with immutable blockchain-secured audit records</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-carbon-500 transition-colors">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Prevent Double Counting</h3>
              <p className="text-gray-600">Cryptographic guarantees that every credit is counted once and only once</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-carbon-500 transition-colors">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <LineChart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Monetize & Grow</h3>
              <p className="text-gray-600">Monetize verified sequestration and strengthen GDP through domestic carbon markets</p>
            </div>
          </div>

          {/* Strategic Benefits */}
          <div className="bg-carbon-50 rounded-2xl p-8 mb-12 border border-carbon-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Economic & Strategic Benefits</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-carbon-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-lg text-gray-700"><span className="font-semibold">Strengthen GDP</span> through domestic carbon monetization</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-carbon-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-lg text-gray-700"><span className="font-semibold">Increase economic and energy independence</span> through sovereign control</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-carbon-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-lg text-gray-700"><span className="font-semibold">Retain sovereignty</span> over environmental assets and data</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-carbon-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-lg text-gray-700"><span className="font-semibold">Align with 2030 and 2050</span> global climate commitments</p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="space-y-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Principles</h2>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-carbon-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-carbon-600" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sovereignty First</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your data never leaves your borders. Your encryption keys stay in your possession. Your legal jurisdiction applies. No exceptions, no backdoors, no compromises.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blockchain-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blockchain-600" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Automatic Compliance</h3>
                <p className="text-gray-600 leading-relaxed">
                  Regulatory compliance shouldn't be manual work. We build international standards (Article 6, ISO 14064) directly into the software, with automatic updates distributed like banking software.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Open Source Forever</h3>
                <p className="text-gray-600 leading-relaxed">
                  No vendor lock-in. Full transparency. Governments can audit every line of code. If CloudMyco disappears tomorrow, registries continue operating independently. This is critical infrastructure, not a startup product.
                </p>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="bg-gradient-to-br from-gray-900 to-carbon-800 rounded-2xl p-8 text-white mb-12">
            <p className="text-2xl font-light leading-relaxed mb-4">
              "We have one planet. Infrastructure determines whether climate ambition becomes climate execution."
            </p>
            <p className="text-lg text-carbon-200">
              CloudMyco builds that infrastructure.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-6">
              Ready to join pioneering nations in sovereign carbon infrastructure?
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-carbon-600 text-white rounded-lg hover:bg-carbon-700 transition-all hover:scale-105 font-semibold text-lg shadow-lg"
            >
              Request Pilot Access
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}