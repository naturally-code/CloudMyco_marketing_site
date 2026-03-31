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
            Imagine. Trust. Build.
          </p>
          
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            Most countries seeking to participate in carbon markets lack internal registry infrastructure capable of supporting issuance, retirement, audit traceability, and sovereign control. Building that infrastructure from scratch takes 2–5 years. The path to restoration already exists—I help nations build it.
          </p>

          {/* Who We Are - Reframed with Imagine. Trust. Build. */}
          <div className="bg-white rounded-2xl border-2 border-carbon-500 p-8 mb-12 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who I Am</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I founded CloudMyco because I believe the path to climate restoration already exists—and where it doesn't, we need only imagine it to build it. After years navigating carbon markets as a researcher and technologist (ex-Apple, AI/ML for data integrity), I saw the same problem again and again: nations ready to participate, but lacking the trusted guidance to build infrastructure they could truly own.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I don't sell software. I provide the expertise, strategy, and oversight to ensure your registry serves your nation's interests first. I'm here because the work is possible—and I know how to do it.
            </p>
          </div>

          {/* What We Do - Framed as Imagine. Trust. Build. */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-carbon-500 transition-colors text-center">
              <div className="w-12 h-12 bg-carbon-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-carbon-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Imagine</h3>
              <p className="text-gray-700 text-sm">I help nations see what's possible. A registry that serves its people. A carbon economy that strengthens sovereignty. Imagination is the first step of architecture.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blockchain-500 transition-colors text-center">
              <div className="w-12 h-12 bg-blockchain-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Handshake className="w-6 h-6 text-blockchain-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trust</h3>
              <p className="text-gray-700 text-sm">I build governance into infrastructure from the start—not as an afterthought. Your data stays in your borders. Your keys stay in your possession. Your jurisdiction applies.</p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-green-500 transition-colors text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Hammer className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Build</h3>
              <p className="text-gray-700 text-sm">I take the tedious steps because the mountain will be summited. This work is detail work—ledger work, audit trails, procurement processes—and it is absolutely doable.</p>
            </div>
          </div>

          {/* Our Approach - Reframed around the three pillars */}
          <div className="bg-carbon-50 rounded-2xl p-8 border border-carbon-200 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">How I Work</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-carbon-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">1</span>
                </div>
                <p className="text-lg text-gray-700"><span className="font-semibold">Imagine:</span> I start with clarity. What's possible? What do you need? What does success look like for your nation?</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-carbon-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">2</span>
                </div>
                <p className="text-lg text-gray-700"><span className="font-semibold">Trust:</span> I build governance into every recommendation. No vendor bias. No backdoors. No compromises on sovereignty.</p>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-carbon-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">3</span>
                </div>
                <p className="text-lg text-gray-700"><span className="font-semibold">Build:</span> I take the tedious steps alongside you—procurement, deployment, training—because the mountain will be summited. This work is possible.</p>
              </div>
            </div>
          </div>

          {/* Why Independent Advisory - Now framed as Why CloudMyco */}
          <div className="bg-gradient-to-br from-carbon-600 to-blockchain-600 rounded-2xl p-8 text-white mb-12">
            <h2 className="text-3xl font-bold mb-6">Why CloudMyco</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Independent</h3>
                <p className="text-carbon-100">I don't sell software. I don't take commissions. My only loyalty is to your sovereignty and long-term success.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Deeply Expert</h3>
                <p className="text-carbon-100">Carbon registry infrastructure is my only focus. I speak both technology and policy because both matter.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Pragmatic</h3>
                <p className="text-carbon-100">This work is tedious. It is possible. I take the tedious steps because I know the mountain will be summited.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Sovereignty-First</h3>
                <p className="text-carbon-100">Your data, your keys, your jurisdiction. Every recommendation prioritizes national control.</p>
              </div>
            </div>
          </div>

          {/* Our Values - Updated with Imagine. Trust. Build. framework */}
          <div className="space-y-6 mb-12">
            <h2 className="text-3xl font-bold text-gray-900">My Values</h2>
            
            <div className="border-l-4 border-carbon-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Imagine — The Certainty of a Future Worth Pursuing</h3>
              <p className="text-gray-700">
                Imagination is not fantasy. It is the first step of architecture. I believe in the certainty of a future where nations own their carbon economies.
              </p>
            </div>

            <div className="border-l-4 border-blockchain-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trust — Governance Built In, Not as an Afterthought</h3>
              <p className="text-gray-700">
                Trust is engineered, not assumed. I build governance into infrastructure from the first line of code. No exceptions. No backdoors.
              </p>
            </div>

            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Build — The Tedious Steps, Because the Mountain Will Be Summited</h3>
              <p className="text-gray-700">
                This work is possible. I take the tedious steps—ledger work, audit trails, procurement processes—because the mountain will be summited. There is no such thing as a problem without a solution.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-br from-carbon-600 to-blockchain-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready to Imagine, Trust, and Build?</h2>
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
