'use client'

import Link from 'next/link'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'
import { ArrowLeft, Users, Settings, CheckCircle } from 'lucide-react'

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
            CloudMyco Advisory is a solo consultancy. I help countries, registries, and project developers get their carbon infrastructure up and running. No software to sell. No vendor bias. Just implementation.
          </p>

          {/* Who I Am - Simplified solo consultant */}
          <div className="bg-white rounded-2xl border-2 border-carbon-500 p-8 mb-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who I Am</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I'm Lucinda. After years navigating carbon markets as a researcher and technologist (ex-Apple, AI/ML for data integrity), I realized something: countries and registries don't just need policy advice. They need someone to actually do the implementation work.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              That's what CloudMyco Advisory is. A solo consultancy focused on one thing: getting carbon registries operational. Training staff. Helping developers register projects. Documenting processes. Providing ongoing support after launch.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I don't sell software. I don't take commissions. I don't have a team to bill. I show up, do the work, and leave your team better off than before.
            </p>
          </div>

          {/* What I Do - Two services only */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-carbon-500 transition-colors text-center">
              <div className="w-12 h-12 bg-carbon-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-carbon-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Onboarding Support</h3>
              <p className="text-gray-700 text-sm">Train ministry staff on registry workflows. Help project developers register their first project. Document processes so your team can repeat them.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blockchain-500 transition-colors text-center">
              <div className="w-12 h-12 bg-blockchain-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Settings className="w-6 h-6 text-blockchain-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ongoing Support</h3>
              <p className="text-gray-700 text-sm">Annual governance and compliance reviews. Refresher training for new staff. Audit documentation and reporting support.</p>
            </div>
          </div>

          {/* How I Work - Simplified */}
          <div className="bg-carbon-50 rounded-2xl p-8 border border-carbon-200 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How I Work</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-carbon-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">1</span>
                </div>
                <p className="text-lg text-gray-700"><span className="font-semibold">Listen:</span> Tell me what you need. Training. Documentation. Process setup. Ongoing reviews. I tailor my support to your specific situation.</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-carbon-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">2</span>
                </div>
                <p className="text-lg text-gray-700"><span className="font-semibold">Do the work:</span> I show up, train your team, document what matters, and make sure you have what you need to keep going after I leave.</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-carbon-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">3</span>
                </div>
                <p className="text-lg text-gray-700"><span className="font-semibold">Hand off:</span> You own everything. I leave documentation, trained staff, and clear processes. No vendor lock-in. No dependence.</p>
              </div>
            </div>
          </div>

          {/* Why CloudMyco - Simplified solo consultant message */}
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

          {/* CTA - Single CTA only */}
          <div className="text-center bg-gradient-to-br from-carbon-600 to-blockchain-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Let's Get Your Registry Running</h2>
            <p className="text-carbon-50 mb-6">
              Need help with onboarding? Ongoing support? Just want to talk through what you need?
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
