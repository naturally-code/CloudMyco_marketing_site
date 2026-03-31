import Link from 'next/link'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { ArrowLeft, Globe, Shield, Users, Compass, Target, Heart, Award, Eye, Handshake, Hammer } from 'lucide-react'

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
            To help nations imagine what's possible in carbon markets, earn trust through governance built in from the start, and build the infrastructure that makes restoration real.
          </p>

          {/* Why CloudMyco Exists - Reframed with Imagine. Trust. Build. */}
          <div className="bg-white rounded-2xl border-2 border-carbon-500 p-8 mb-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why I Exist</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Carbon markets have a trust problem. When registries depend on foreign SaaS platforms or vendors with conflicting interests, countries surrender control of their most sensitive environmental data. This isn't just a technical issue—it's a sovereignty issue.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I believe carbon registries should operate like central bank systems: owned and controlled by governments, with compliance built in. But countries shouldn't have to navigate this complexity alone—or rely on advice from companies trying to sell them software.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I exist to fill that gap. I provide independent, unbiased expertise that puts national sovereignty first—because the only people who should control your carbon economy are you.
            </p>
          </div>

          {/* Our Guiding Principles - Now framed as Imagine. Trust. Build. */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How I Guide</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-carbon-500 transition-colors text-center">
              <div className="w-12 h-12 bg-carbon-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-carbon-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Imagine</h3>
              <p className="text-gray-700">I help nations see what's possible—a future where you own your carbon economy, where your data stays in your borders, where your assets serve your people.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blockchain-500 transition-colors text-center">
              <div className="w-12 h-12 bg-blockchain-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-6 h-6 text-blockchain-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trust</h3>
              <p className="text-gray-700">I build governance into infrastructure from the start—not as an afterthought. Your keys, your jurisdiction, your control. No exceptions.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-500 transition-colors text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Hammer className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Build</h3>
              <p className="text-gray-700">I take the tedious steps because the mountain will be summited. This work is possible—ledger work, audit trails, procurement processes. I know how to do it.</p>
            </div>
          </div>

          {/* What We Believe - Reframed around the three pillars */}
          <div className="bg-carbon-50 rounded-2xl p-8 mb-12 border border-carbon-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What I Believe</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-carbon-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">1</span>
                </div>
                <p className="text-lg text-gray-700"><span className="font-semibold">Imagine:</span> The path to restoration already exists—and where it doesn't, we need only imagine it to build it.</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-carbon-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">2</span>
                </div>
                <p className="text-lg text-gray-700"><span className="font-semibold">Trust:</span> Governance belongs in infrastructure from the start, not as an afterthought. Trust is engineered, not assumed.</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-carbon-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">3</span>
                </div>
                <p className="text-lg text-gray-700"><span className="font-semibold">Build:</span> This work is tedious. It is possible. I take the tedious steps because the mountain will be summited.</p>
              </div>
            </div>
          </div>

          {/* Our Core Values - Reframed around Imagine. Trust. Build. */}
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
                  <Handshake className="w-6 h-6 text-blockchain-600" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Trust — Governance Built In, Not as an Afterthought</h3>
                <p className="text-gray-700 leading-relaxed">
                  Trust is engineered, not assumed. I build governance into infrastructure from the first line of code. No backdoors. No exceptions. Your data, your keys, your jurisdiction.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Hammer className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Build — The Tedious Steps, Because the Mountain Will Be Summited</h3>
                <p className="text-gray-700 leading-relaxed">
                  This work is possible. I take the tedious steps—ledger work, audit trails, procurement processes—because the mountain will be summited. There is no such thing as a problem without a solution.
                </p>
              </div>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="bg-gradient-to-br from-carbon-600 to-blockchain-600 rounded-2xl p-8 text-white mb-12">
            <p className="text-2xl font-light leading-relaxed mb-4">
              "We have one planet. The infrastructure we build today determines whether climate ambition becomes climate execution tomorrow."
            </p>
            <p className="text-lg text-carbon-100">
              CloudMyco helps nations imagine, trust, and build that infrastructure—on their terms, with their sovereignty intact.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              Ready to imagine your nation's carbon future, trust in governance built to last, and build the infrastructure that makes restoration real?
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
