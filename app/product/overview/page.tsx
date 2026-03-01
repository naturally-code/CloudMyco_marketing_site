'use client'

import Link from 'next/link'
import NavBar from '../../../components/NavBar'
import Footer from '../../../components/Footer'
import { ArrowLeft, Database, Scale, Zap, CheckCircle2, Lock, Server, Shield, Layers, Users, Key, Globe } from 'lucide-react'


export default function ProductPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-carbon-50">
      <NavBar />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/" 
            className="inline-flex items-center text-carbon-600 hover:text-carbon-700 mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Product Overview
          </h1>
          
          <p className="text-2xl text-gray-600 mb-4 max-w-4xl font-semibold">
            Licensed Blockchain Infrastructure for National Carbon Markets
          </p>
          
          <p className="text-xl text-gray-600 mb-12 max-w-4xl leading-relaxed">
            CloudMyco is sovereign-licensed, banking-grade software that enables countries to operate secure, defensible, and monetizable carbon markets. It is the records backbone of a national carbon economy.
          </p>

          {/* Core Capabilities Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Core Capabilities</h2>
            
            {/* 1. Blockchain-Anchored Audit Ledger */}
            <div className="bg-white rounded-2xl border-2 border-carbon-500 p-6 mb-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-carbon-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Layers className="w-6 h-6 text-carbon-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">1. Blockchain-Anchored Audit Ledger</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-carbon-600 rounded-full mt-2 mr-2"></div>
                      <span className="text-gray-700">Seals carbon project data to a distributed ledger</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-carbon-600 rounded-full mt-2 mr-2"></div>
                      <span className="text-gray-700">Creates immutable credit lifecycle records</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-carbon-600 rounded-full mt-2 mr-2"></div>
                      <span className="text-gray-700">Maintains tamper-evident submission histories</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-carbon-600 rounded-full mt-2 mr-2"></div>
                      <span className="text-gray-700">Prevents retroactive data manipulation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Credit Lifecycle Infrastructure */}
            <div className="bg-white rounded-2xl border-2 border-blockchain-500 p-6 mb-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blockchain-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-blockchain-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">2. Credit Lifecycle Infrastructure</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <div className="font-semibold text-gray-800 mb-2">Core Actions:</div>
                      <div className="space-y-1">
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-blockchain-600 rounded-full mt-2 mr-2"></div>
                          <span>Issuance</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-blockchain-600 rounded-full mt-2 mr-2"></div>
                          <span>Transfer</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-blockchain-600 rounded-full mt-2 mr-2"></div>
                          <span>Retirement</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-blockchain-600 rounded-full mt-2 mr-2"></div>
                          <span>Cancellation</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-800 mb-2">Safeguards:</div>
                      <div className="space-y-1">
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-blockchain-600 rounded-full mt-2 mr-2"></div>
                          <span>Version tracking</span>
                        </div>
                        <div className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-blockchain-600 rounded-full mt-2 mr-2"></div>
                          <span>Deduplication safeguards</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-3 italic">
                    Each action is cryptographically anchored and independently verifiable.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Regulator & Verifier Interfaces */}
            <div className="bg-white rounded-2xl border-2 border-purple-500 p-6 mb-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">3. Regulator & Verifier Interfaces</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-2"></div>
                      <span>Role-based access control</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-2"></div>
                      <span>Field-level submission comparisons</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-2"></div>
                      <span>RFI workflows</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-2"></div>
                      <span>Workpaper packaging</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-2"></div>
                      <span>Audit dashboards</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-3">
                    Designed for regulatory oversight and financial defensibility.
                  </p>
                </div>
              </div>
            </div>

            {/* 4. Sovereign Governance Layer */}
            <div className="bg-white rounded-2xl border-2 border-green-500 p-6 mb-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-green-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">4. Sovereign Governance Layer</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2"></div>
                      <span>National rule customization</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2"></div>
                      <span>Policy-driven issuance logic</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2"></div>
                      <span>Article 6 readiness</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2"></div>
                      <span>Controlled interoperability with voluntary standards</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-2"></div>
                      <span>Cross-registry compatibility</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-3">
                    Governments maintain control of their carbon economy while benefiting from distributed infrastructure resilience.
                  </p>
                </div>
              </div>
            </div>

            {/* 5. Financial-Grade Security Architecture */}
            <div className="bg-white rounded-2xl border-2 border-amber-500 p-6 mb-6 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-amber-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">5. Financial-Grade Security Architecture</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 mr-2"></div>
                      <span>Multi-factor authentication</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 mr-2"></div>
                      <span>Key management & cryptographic signing</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 mr-2"></div>
                      <span>Blockchain anchoring</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 mr-2"></div>
                      <span>WORM-grade archival retention</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 mr-2"></div>
                      <span>Secure API access for licensed partners</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-amber-600 rounded-full mt-2 mr-2"></div>
                      <span>Structured audit logging</span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <p className="text-gray-800 font-medium">
                      Carbon markets are financial markets.<br />
                      Financial markets require banking-grade infrastructure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Built For Section */}
          <div className="bg-gradient-to-br from-carbon-600 to-blockchain-600 rounded-2xl p-8 text-white mb-16">
            <h2 className="text-3xl font-bold mb-6">Built for Emerging & Expanding Carbon Economies</h2>
            <p className="text-xl text-carbon-50 mb-6">
              CloudMyco is designed for:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3"></div>
                <span>Countries launching domestic ETS systems</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3"></div>
                <span>Ministries establishing national carbon registries</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3"></div>
                <span>Sovereign Article 6 frameworks</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3"></div>
                <span>Emerging markets seeking climate monetization</span>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3"></div>
                <span>Governments modernizing legacy registry systems</span>
              </div>
            </div>
            <p className="mt-6 text-carbon-50 border-t border-carbon-500 pt-4">
              Instead of fragmented systems built over several years, governments deploy a complete sovereign carbon infrastructure stack in eight weeks.
            </p>
          </div>

          {/* Why It Matters */}
          <div className="bg-white rounded-2xl border-2 border-carbon-500 p-8 mb-16 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why It Matters</h2>
            <p className="text-lg text-gray-600 mb-6">
              Without secure infrastructure, carbon markets remain political. With blockchain-anchored financial infrastructure, carbon becomes measurable, governable, and monetizable.
            </p>
            <p className="text-lg text-gray-700 font-semibold mb-4">CloudMyco enables nations to:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 bg-carbon-600 rounded-full mt-2 mr-3"></div>
                <span>Quantify their sequestration capacity</span>
              </div>
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 bg-carbon-600 rounded-full mt-2 mr-3"></div>
                <span>Control and monetize domestic carbon assets</span>
              </div>
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 bg-carbon-600 rounded-full mt-2 mr-3"></div>
                <span>Strengthen internal economic resilience</span>
              </div>
              <div className="flex items-start">
                <div className="w-1.5 h-1.5 bg-carbon-600 rounded-full mt-2 mr-3"></div>
                <span>Participate in global markets from a position of sovereignty</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-carbon-50 rounded-lg border border-carbon-200">
              <p className="text-xl font-light italic text-gray-700">
                Climate ambition requires financial architecture.<br />
                <span className="font-semibold not-italic">CloudMyco provides that architecture.</span>
              </p>
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <div className="flex items-center mb-6">
                <Server className="w-8 h-8 text-carbon-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Infrastructure Requirements</h2>
              </div>
              
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-carbon-600 font-bold mr-2">•</span>
                  <span><strong>Compute:</strong> 5 servers (32 cores, 128GB RAM each)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-carbon-600 font-bold mr-2">•</span>
                  <span><strong>Database:</strong> 2 PostgreSQL servers (with replication)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-carbon-600 font-bold mr-2">•</span>
                  <span><strong>Storage:</strong> 100TB object storage (MinIO, encrypted)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-carbon-600 font-bold mr-2">•</span>
                  <span><strong>Blockchain:</strong> Polygon CDK validator node</span>
                </li>
                <li className="flex items-start">
                  <span className="text-carbon-600 font-bold mr-2">•</span>
                  <span><strong>Network:</strong> Redundant firewall, 1Gbps internet</span>
                </li>
                <li className="flex items-start">
                  <span className="text-carbon-600 font-bold mr-2">•</span>
                  <span><strong>Cost:</strong> $250k-$500k hardware + $5k-$20k/month operations</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-gray-200 p-8">
              <div className="flex items-center mb-6">
                <Key className="w-8 h-8 text-blockchain-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Security Features</h2>
              </div>
              
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Lock className="w-5 h-5 text-blockchain-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>At Rest:</strong> AES-256 encryption, country-held keys</span>
                </li>
                <li className="flex items-start">
                  <Lock className="w-5 h-5 text-blockchain-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>In Transit:</strong> TLS 1.3, mutual TLS for services</span>
                </li>
                <li className="flex items-start">
                  <Lock className="w-5 h-5 text-blockchain-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Access:</strong> Multi-factor authentication, RBAC</span>
                </li>
                <li className="flex items-start">
                  <Lock className="w-5 h-5 text-blockchain-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Audit:</strong> Tamper-proof logs, blockchain-sealed daily</span>
                </li>
                <li className="flex items-start">
                  <Lock className="w-5 h-5 text-blockchain-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span><strong>Compliance:</strong> SOC 2 Type II certified</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Deployment Timeline */}
          <div className="bg-gradient-to-br from-carbon-600 to-blockchain-600 rounded-2xl p-8 text-white mb-16">
            <h2 className="text-3xl font-bold mb-6">8-Week Deployment Timeline</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-4xl font-bold mb-2">Weeks 1-2</div>
                <p className="text-carbon-100">Hardware procurement & network setup</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Weeks 3-4</div>
                <p className="text-carbon-100">Software installation & configuration</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Weeks 5-6</div>
                <p className="text-carbon-100">Staff training & integration testing</p>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Weeks 7-8</div>
                <p className="text-carbon-100">Production deployment & go-live</p>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Software</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-carbon-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Complete CloudMyco Node software suite</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-carbon-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Issuer, VVB, Admin, and Public portals</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-carbon-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Blockchain validator node</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-carbon-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Automated backup system</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Services</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blockchain-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>On-site installation support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blockchain-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Staff training (IT & Registry teams)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blockchain-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Quarterly software updates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blockchain-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>24/7 technical support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Deploy?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Request technical documentation or schedule a consultation with our team.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-carbon-600 text-white rounded-lg hover:bg-carbon-700 transition-all hover:scale-105 font-semibold text-lg shadow-lg"
            >
              Request Technical Details
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}