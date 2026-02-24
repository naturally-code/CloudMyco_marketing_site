'use client'

import Link from 'next/link'
import { Shield, Database, Cpu, CheckCircle2, ArrowRight, Globe, Lock, Zap, Building2, Scale } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-carbon-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-carbon-600 to-blockchain-600 rounded-lg"></div>
              <span className="text-xl font-bold text-gray-900">CloudMyco</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/product" className="text-gray-600 hover:text-gray-900 transition-colors">Product</Link>
              <Link href="/sovereignty" className="text-gray-600 hover:text-gray-900 transition-colors">Sovereignty</Link>
              <Link href="/docs" className="text-gray-600 hover:text-gray-900 transition-colors">Docs</Link>
              <Link href="/verify" className="text-gray-600 hover:text-gray-900 transition-colors">Verify</Link>
              <Link href="/request-access" className="px-4 py-2 bg-carbon-600 text-white rounded-lg hover:bg-carbon-700 transition-colors">
                Request Access
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-carbon-100 text-carbon-800 rounded-full text-sm font-medium mb-6">
              <Building2 className="w-4 h-4" />
              <span>Banking-Grade Infrastructure for Sovereign Nations</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Financial Infrastructure
              <br />
              <span className="bg-gradient-to-r from-carbon-600 to-blockchain-600 bg-clip-text text-transparent">
                for Carbon Markets
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Turnkey Article 6 infrastructure for national carbon registries.
              <br />
              <strong className="text-gray-900">Make compliance automatic. Make fraud expensive. Launch in 2 weeks.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                href="/request-access"
                className="inline-flex items-center px-8 py-4 bg-carbon-600 text-white rounded-lg hover:bg-carbon-700 transition-all hover:scale-105 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Request Pilot Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/docs"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-50 transition-all border-2 border-gray-200 font-semibold text-lg"
              >
                View Documentation
              </Link>
            </div>

            <p className="mt-8 text-sm text-gray-500">
              Trusted by pilot registries in Costa Rica and California
            </p>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Like Central Bank Systems, For Carbon
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              CloudMyco applies the same principles used in core banking infrastructure to carbon markets: 
              data sovereignty, regulatory compliance, and cryptographic trust.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Data Sovereignty */}
            <div className="group p-8 rounded-2xl border-2 border-gray-200 hover:border-carbon-500 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-carbon-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Lock className="w-6 h-6 text-carbon-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Data Sovereignty</h3>
              <p className="text-gray-600 mb-4">
                Your data stays on servers you own and operate. Your encryption keys. Your jurisdiction. Your control.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-carbon-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Physical infrastructure in your country</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-carbon-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Legal jurisdiction under your law</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-carbon-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Encryption keys held by your government</span>
                </li>
              </ul>
            </div>

            {/* Regulatory Compliance */}
            <div className="group p-8 rounded-2xl border-2 border-gray-200 hover:border-blockchain-500 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-blockchain-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Scale className="w-6 h-6 text-blockchain-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600 mb-4">
                Article 6 and ISO 14064 compliance built-in. Regulatory updates distributed automatically like banking software.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-blockchain-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>International standards hardcoded</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-blockchain-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>National parameters configurable</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-blockchain-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>UNFCCC reporting automated</span>
                </li>
              </ul>
            </div>

            {/* Game-Theoretic Trust */}
            <div className="group p-8 rounded-2xl border-2 border-gray-200 hover:border-purple-500 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Game-Theoretic Trust</h3>
              <p className="text-gray-600 mb-4">
                Honesty is the Nash equilibrium. Lying requires coordination, is detectable, and carries permanent reputation damage.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Blockchain makes fraud expensive</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>AI detection + reputation scoring</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Compliance easier than cheating</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - The Four Hyphae */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-carbon-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Four Hyphae</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Like mycelium connecting a forest ecosystem, CloudMyco's architecture connects evidence, claims, verification, and issuance into an unbreakable chain of trust.
            </p>
          </div>

          <div className="space-y-12">
            {/* Data Hypha */}
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white rounded-2xl border border-gray-200 shadow-lg">
              <div className="w-16 h-16 bg-carbon-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Database className="w-8 h-8 text-carbon-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Data Hypha → Evidence Provenance</h3>
                <p className="text-gray-600 mb-3">
                  Every file hashed, sealed, blockchain-anchored. Tamper-evident proof of "what existed when."
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-carbon-100 text-carbon-800 rounded-full text-sm">SHA-256 hashing</span>
                  <span className="px-3 py-1 bg-carbon-100 text-carbon-800 rounded-full text-sm">Merkle trees</span>
                  <span className="px-3 py-1 bg-carbon-100 text-carbon-800 rounded-full text-sm">Blockchain anchoring</span>
                  <span className="px-3 py-1 bg-carbon-100 text-carbon-800 rounded-full text-sm">"Lost spreadsheet" impossible</span>
                </div>
              </div>
            </div>

            {/* Claim Hypha */}
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white rounded-2xl border border-gray-200 shadow-lg">
              <div className="w-16 h-16 bg-blockchain-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Scale className="w-8 h-8 text-blockchain-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Claim Hypha → Assertion + Accountability</h3>
                <p className="text-gray-600 mb-3">
                  Carbon claims cryptographically linked to evidence. Amendments leave permanent footprints. Multi-sig verification required.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blockchain-100 text-blockchain-800 rounded-full text-sm">Smart contracts</span>
                  <span className="px-3 py-1 bg-blockchain-100 text-blockchain-800 rounded-full text-sm">Amendment history</span>
                  <span className="px-3 py-1 bg-blockchain-100 text-blockchain-800 rounded-full text-sm">No silent edits</span>
                  <span className="px-3 py-1 bg-blockchain-100 text-blockchain-800 rounded-full text-sm">Immutable state machine</span>
                </div>
              </div>
            </div>

            {/* Model Hypha */}
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white rounded-2xl border border-gray-200 shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Cpu className="w-8 h-8 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Model Hypha → AI Fraud Detection</h3>
                <p className="text-gray-600 mb-3">
                  Local prediction engine (your servers). Federated learning (privacy-preserving). Good reputation = fast-track approval.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Runs on-premise</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Federated learning</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">No data exfiltration</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Reputation scoring</span>
                </div>
              </div>
            </div>

            {/* Registry Hypha */}
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white rounded-2xl border border-gray-200 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Globe className="w-8 h-8 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Registry Hypha → Issuance + Retirement</h3>
                <p className="text-gray-600 mb-3">
                  ERC-1155 carbon credits (traceable). Multi-sig issuance (no single point of failure). Permanent retirement records.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">ERC-1155 tokens</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Multi-sig governance</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Auditable issuance</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Immutable retirement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why National Registries Choose CloudMyco */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Built for Governments, Not Startups
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Carbon registries are financial infrastructure. They require the same security, 
              compliance, and sovereignty guarantees as central bank systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border-l-4 border-carbon-600 bg-gray-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Traditional Approach (2-3 Years)</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Build registry from scratch ($10M+)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Hire carbon experts (scarce talent)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Implement Article 6 compliance manually</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Risk of non-compliance = market exclusion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Ongoing maintenance burden</span>
                </li>
              </ul>
            </div>

            <div className="p-6 border-l-4 border-blockchain-600 bg-blockchain-50 rounded-r-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">CloudMyco (2-4 Weeks)</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-carbon-600 mr-2 flex-shrink-0" />
                  <span>Turnkey deployment (on your infrastructure)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-carbon-600 mr-2 flex-shrink-0" />
                  <span>Article 6 compliance built-in (automatic)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-carbon-600 mr-2 flex-shrink-0" />
                  <span>Regulatory updates distributed (like banking software)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-carbon-600 mr-2 flex-shrink-0" />
                  <span>Data sovereignty guaranteed (your servers, your keys)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-carbon-600 mr-2 flex-shrink-0" />
                  <span>Open source (no vendor lock-in)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-carbon-600 to-blockchain-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Launch Your National Carbon Registry?
          </h2>
          <p className="text-xl mb-8 text-carbon-50">
            Join Costa Rica and California in pioneering transparent, sovereign carbon markets.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/request-access"
              className="inline-flex items-center px-8 py-4 bg-white text-carbon-700 rounded-lg hover:bg-carbon-50 transition-all hover:scale-105 font-semibold text-lg shadow-lg"
            >
              Request Pilot Access
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/docs/sovereignty"
              className="inline-flex items-center px-8 py-4 bg-transparent text-white rounded-lg hover:bg-white/10 transition-all border-2 border-white font-semibold text-lg"
            >
              Read Sovereignty Docs
            </Link>
          </div>
          <p className="mt-8 text-sm text-carbon-100">
            World Bank Climate Warehouse compatible • UNFCCC Article 6 compliant • SOC 2 certified
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-carbon-600 to-blockchain-600 rounded-lg"></div>
                <span className="text-lg font-bold text-white">CloudMyco</span>
              </div>
              <p className="text-sm">
                Financial infrastructure for sovereign nations.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/product" className="hover:text-white transition-colors">Overview</Link></li>
                <li><Link href="/sovereignty" className="hover:text-white transition-colors">Data Sovereignty</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
                <li><Link href="/docs/api" className="hover:text-white transition-colors">API Reference</Link></li>
                <li><Link href="/verify" className="hover:text-white transition-colors">Verify Claims</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/mission" className="hover:text-white transition-colors">Mission</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2026 CloudMyco. Open source under Apache 2.0.</p>
            <p className="mt-2">Built for sovereign nations. Owned by governments. Operated independently.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
