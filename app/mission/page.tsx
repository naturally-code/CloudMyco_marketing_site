import Link from 'next/link'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { ArrowLeft, Globe, Shield, Users, Compass, Target, Heart, Award } from 'lucide-react'

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
            Our Mission: <span className="text-carbon-600">Independent Guidance</span>
          </h1>
          
          <p className="text-2xl text-gray-700 mb-12 leading-relaxed">
            To accelerate the global energy transition by providing independent, trusted guidance to nations building sovereign carbon market infrastructure.
          </p>

          {/* Why CloudMyco Exists */}
          <div className="bg-white rounded-2xl border-2 border-carbon-500 p-8 mb-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why We Exist</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Carbon markets have a trust problem. When registries depend on foreign SaaS platforms or vendors with conflicting interests, countries surrender control of their most sensitive environmental data. This isn't just a technical issue—it's a sovereignty issue.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We believe carbon registries should operate like central bank systems: owned and controlled by governments, with compliance built in. But countries shouldn't have to navigate this complexity alone—or rely on advice from companies trying to sell them software.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              CloudMyco exists to fill that gap. We provide independent, unbiased expertise that puts national sovereignty first—because the only person who should control your carbon economy is you.
            </p>
          </div>

          {/* Our Guiding Principles */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Guiding Principles</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-carbon-500 transition-colors">
              <div className="w-12 h-12 bg-carbon-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-carbon-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">True Independence</h3>
              <p className="text-gray-700">We don't build, sell, or take commissions on software. Our only loyalty is to your nation's long-term success.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-carbon-500 transition-colors">
              <div className="w-12 h-12 bg-blockchain-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-blockchain-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sovereignty First</h3>
              <p className="text-gray-700">Every recommendation prioritizes national control. Your data, your keys, your jurisdiction—always.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-carbon-500 transition-colors">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Deep Specialization</h3>
              <p className="text-gray-700">Carbon registry infrastructure is our only focus—not a side practice or one of many services.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-carbon-500 transition-colors">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Knowledge Transfer</h3>
              <p className="text-gray-700">We train your team to operate independently. No vendor lock-in. No dependence. Ever.</p>
            </div>
          </div>

          {/* What We Believe */}
          <div className="bg-carbon-50 rounded-2xl p-8 mb-12 border border-carbon-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Believe</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-carbon-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-lg text-gray-700"><span className="font-semibold">Carbon markets are critical infrastructure.</span> They should be treated with the same seriousness as central bank systems.</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-carbon-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-lg text-gray-700"><span className="font-semibold">Sovereignty is non-negotiable.</span> Your data, your rules, your control—no exceptions.</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-carbon-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-lg text-gray-700"><span className="font-semibold">Guidance should be unbiased.</span> Nations deserve advice that puts their interests first, not a vendor's bottom line.</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-carbon-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-lg text-gray-700"><span className="font-semibold">Knowledge is power.</span> We measure success by how independently your team can operate when we're done.</p>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="space-y-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
            
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-carbon-100 rounded-lg flex items-center justify-center">
                  <Compass className="w-6 h-6 text-carbon-600" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Independence</h3>
                <p className="text-gray-700 leading-relaxed">
                  We answer to one master: our clients' long-term success. No vendor partnerships, no referral fees, no hidden agendas. Just honest, unbiased guidance.
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Integrity</h3>
                <p className="text-gray-700 leading-relaxed">
                  We tell you what you need to hear, not what's easy to sell. If a vendor isn't right for you, we'll say so. If you're not ready, we'll tell you that too.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Partnership</h3>
                <p className="text-gray-700 leading-relaxed">
                  We don't just advise—we walk alongside you. From strategy through deployment and beyond, we're invested in your success, not our quarterly revenue.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-700 leading-relaxed">
                  Carbon markets are too important for "good enough." We hold ourselves to the highest standards because the stakes—our planet, your sovereignty—demand nothing less.
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
              CloudMyco helps nations build that infrastructure—on their terms, with their sovereignty intact.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
              Ready to build your nation's carbon future with a trusted, independent partner?
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