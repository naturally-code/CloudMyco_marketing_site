import Link from 'next/link'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { ArrowLeft } from 'lucide-react'

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
            To help countries, registries, and project developers get their carbon infrastructure up and running. No software to sell. No vendor bias. Just implementation.
          </p>

          {/* Why CloudMyco Exists - Simplified */}
          <div className="bg-white rounded-2xl border-2 border-carbon-500 p-8 mb-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why I Exist</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Countries have registries. They need help using them. Ministry staff need training. Project developers need help registering their first project. Documentation is missing or incomplete. Teams need ongoing support after launch.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              After years navigating carbon markets as a researcher and technologist (ex-Apple, AI/ML for data integrity), I realized that the real gap wasn't policy advice. It was implementation. Someone to actually do the work.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              That's what CloudMyco Advisory is. A solo consultancy focused on one thing: getting carbon registries operational. I show up, do the work, and leave your team better off than before.
            </p>
          </div>

          {/* What I Do - Simplified two services */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8">What I Do</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-carbon-500 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Onboarding Support</h3>
              <p className="text-gray-700">Train ministry staff on registry workflows. Help project developers register their first project. Document processes so your team can repeat them.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blockchain-500 transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ongoing Support</h3>
              <p className="text-gray-700">Annual governance and compliance reviews. Refresher training for new staff. Audit documentation and reporting support.</p>
            </div>
          </div>

          {/* What I Believe - Simplified */}
          <div className="bg-carbon-50 rounded-2xl p-8 mb-12 border border-carbon-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What I Believe</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-carbon-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">1</span>
                </div>
                <p className="text-lg text-gray-700"><span className="font-semibold">Implementation matters.</span> Policy is important. But without someone to train staff, register projects, and document processes, nothing moves.</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-carbon-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">2</span>
                </div>
                <p className="text-lg text-gray-700"><span className="font-semibold">Independence is essential.</span> No software to sell. No vendor bias. No commissions. Just honest implementation support.</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-carbon-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">3</span>
                </div>
                <p className="text-lg text-gray-700"><span className="font-semibold">Knowledge transfer is the goal.</span> I document everything. I train your team. I leave you better off than before. No vendor lock-in. No dependence.</p>
              </div>
            </div>
          </div>

          {/* Why CloudMyco - Solo consultant message */}
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

          {/* Closing Statement - Simplified */}
          <div className="bg-gradient-to-br from-gray-900 to-carbon-800 rounded-2xl p-8 text-white mb-12">
            <p className="text-2xl font-light leading-relaxed mb-4">
              "We have one planet. The work we do today determines whether climate ambition becomes climate execution tomorrow."
            </p>
            <p className="text-lg text-carbon-200">
              CloudMyco Advisory helps make that work happen—one registry, one training session, one project at a time.
            </p>
          </div>

          {/* CTA - Single CTA only */}
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-6">
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
