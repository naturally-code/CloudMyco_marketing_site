'use client'

import Link from 'next/link'
import NavBar from '../../../components/NavBar'
import Footer from '../../../components/Footer'
import { ArrowLeft, Code, Key, Lock, Globe, BookOpen, Cpu, Shield, Database, Zap, ChevronRight, Copy, CheckCircle } from 'lucide-react'
import { useState } from 'react'

export default function APIReferencesPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const endpoints = [
    {
      method: 'GET',
      path: '/api/v1/projects',
      description: 'Retrieve a list of all carbon projects in the registry',
      auth: 'API Key required',
      response: 'Array of project objects with metadata',
      example: `{
  "projects": [
    {
      "id": "proj_123456",
      "name": "Reforestation Initiative",
      "status": "active",
      "methodology": "VM001",
      "country": "CRI",
      "creditCount": 150000,
      "createdAt": "2026-01-15T10:30:00Z"
    }
  ],
  "total": 1,
  "page": 1
}`
    },
    {
      method: 'GET',
      path: '/api/v1/projects/{id}',
      description: 'Retrieve detailed information about a specific project',
      auth: 'API Key required',
      response: 'Single project object with full metadata',
      example: `{
  "id": "proj_123456",
  "name": "Reforestation Initiative",
  "description": "5000 hectare reforestation project",
  "status": "active",
  "methodology": "VM001",
  "country": "CRI",
  "region": "Guanacaste",
  "developer": "EcoDevelopment Ltd",
  "verifier": "Verra Certified",
  "creditCount": 150000,
  "issuedCredits": 75000,
  "retiredCredits": 25000,
  "startDate": "2024-01-01",
  "endDate": "2034-12-31",
  "documents": [
    {
      "type": "PDD",
      "hash": "0x7d8a...",
      "url": "/api/v1/documents/pdd_123"
    }
  ],
  "createdAt": "2026-01-15T10:30:00Z",
  "updatedAt": "2026-02-28T14:20:00Z"
}`
    },
    {
      method: 'POST',
      path: '/api/v1/projects',
      description: 'Create a new carbon project submission',
      auth: 'API Key + Signature required',
      body: 'Project metadata JSON',
      response: 'Created project object with ID',
      example: `{
  "name": "Wind Farm Project",
  "description": "50MW wind energy generation",
  "methodology": "ACM0002",
  "country": "URY",
  "region": "Rocha",
  "developer": "GreenEnergy SA",
  "startDate": "2025-06-01",
  "endDate": "2035-05-31",
  "documents": [
    {
      "type": "PDD",
      "content": "base64-encoded-file"
    }
  ]
}`
    },
    {
      method: 'GET',
      path: '/api/v1/credits',
      description: 'List all carbon credits with filtering options',
      auth: 'API Key required',
      params: 'status, projectId, fromDate, toDate, page, limit',
      response: 'Paginated list of credits',
      example: `{
  "credits": [
    {
      "id": "crd_789012",
      "serialNumber": "CRI-2026-001-0001",
      "projectId": "proj_123456",
      "vintage": "2025",
      "status": "available",
      "quantity": 1000,
      "unit": "tCO2e",
      "issuanceDate": "2026-02-01T00:00:00Z",
      "blockchainTx": "0x8f3a...",
      "retirementDetails": null
    }
  ],
  "total": 1,
  "page": 1
}`
    },
    {
      method: 'POST',
      path: '/api/v1/credits/issue',
      description: 'Issue new carbon credits for a verified project',
      auth: 'API Key + Multi-signature required',
      body: 'Issuance request with quantity and vintage',
      response: 'Issued credit objects with serial numbers',
      example: `{
  "projectId": "proj_123456",
  "vintage": "2025",
  "quantity": 5000,
  "unit": "tCO2e",
  "notes": "Q1 2026 issuance"
}`
    },
    {
      method: 'POST',
      path: '/api/v1/credits/retire',
      description: 'Retire carbon credits from circulation',
      auth: 'API Key + Signature required',
      body: 'Retirement request with purpose and beneficiary',
      response: 'Retirement confirmation with blockchain anchor',
      example: `{
  "creditIds": ["crd_789012", "crd_789013"],
  "purpose": "offsetting",
  "beneficiary": "Acme Corporation",
  "retirementReason": "Voluntary offset",
  "notes": "FY2026 sustainability commitment"
}`
    },
    {
      method: 'GET',
      path: '/api/v1/verifications',
      description: 'Get verification status and history',
      auth: 'API Key required',
      response: 'Verification records with auditor details',
      example: `{
  "verifications": [
    {
      "id": "ver_345678",
      "projectId": "proj_123456",
      "auditor": "Verra Certified",
      "status": "approved",
      "report": "https://api.cloudmyco.com/reports/ver_345678",
      "verifiedAt": "2026-02-15T00:00:00Z",
      "blockchainAnchor": "0x9b2c..."
    }
  ]
}`
    },
    {
      method: 'GET',
      path: '/api/v1/audit/logs',
      description: 'Retrieve immutable audit logs',
      auth: 'Admin API Key + Government credentials',
      response: 'Blockchain-anchored audit trail',
      example: `{
  "logs": [
    {
      "timestamp": "2026-03-01T10:15:30Z",
      "action": "credit_issue",
      "actor": "registry_officer@minae.go.cr",
      "resource": "crd_789012",
      "changes": {
        "status": "issued"
      },
      "blockchainHash": "0x7e4d...",
      "previousHash": "0x3a2b..."
    }
  ],
  "continuationToken": "abc123..."
}`
    }
  ];

  const codeExamples = [
    {
      lang: 'cURL',
      code: `curl -X GET "https://api.cloudmyco.com/v1/projects" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`
    },
    {
      lang: 'JavaScript',
      code: `const response = await fetch('https://api.cloudmyco.com/v1/projects', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});
const data = await response.json();`
    },
    {
      lang: 'Python',
      code: `import requests

response = requests.get(
    'https://api.cloudmyco.com/v1/projects',
    headers={
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    }
)
data = response.json()`
    }
  ];

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

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-carbon-100 rounded-xl flex items-center justify-center">
              <Code className="w-8 h-8 text-carbon-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              API References
            </h1>
          </div>
          
          <p className="text-xl text-gray-600 mb-4 max-w-3xl">
            Sovereign, banking-grade API access for national carbon registries
          </p>
          
          <p className="text-lg text-gray-600 mb-12 max-w-3xl leading-relaxed">
            All API endpoints require authentication and operate under your nation's sovereign control. 
            Every request is logged to an immutable, blockchain-anchored audit trail.
          </p>

          {/* Authentication Notice */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-12 rounded-r-lg">
            <div className="flex items-start gap-4">
              <Key className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold text-amber-800 mb-2">Government Authentication Required</h3>
                <p className="text-amber-700">
                  API access is restricted to authorized government entities and licensed partners. 
                  Request credentials through your national registry administrator. All requests must be 
                  signed with your nation's cryptographic keys.
                </p>
              </div>
            </div>
          </div>

          {/* Code Examples Tabs */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Start Examples</h2>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              {codeExamples.map((ex, idx) => (
                <button
                  key={ex.lang}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-mono text-sm transition-colors"
                >
                  {ex.lang}
                </button>
              ))}
            </div>
            <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
              <pre className="text-gray-100 text-sm font-mono whitespace-pre-wrap">
                <code>{codeExamples[0].code}</code>
              </pre>
            </div>
          </div>

          {/* Base URL */}
          <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-carbon-600" />
              <h2 className="text-2xl font-bold text-gray-900">Base URL</h2>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg font-mono text-lg">
              https://[nation-code].registry.cloudmyco.com/api/v1
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Replace [nation-code] with your country's registry identifier (e.g., 'cri' for Costa Rica)
            </p>
          </div>

          {/* Endpoints */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Endpoints</h2>
          
          <div className="space-y-6 mb-16">
            {endpoints.map((endpoint, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6 border-b border-gray-200 bg-gray-50">
                  <div className="flex items-center gap-4">
                    <span className={`
                      px-3 py-1 rounded-full text-sm font-mono font-bold
                      ${endpoint.method === 'GET' ? 'bg-green-100 text-green-700' : ''}
                      ${endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700' : ''}
                      ${endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-700' : ''}
                      ${endpoint.method === 'DELETE' ? 'bg-red-100 text-red-700' : ''}
                    `}>
                      {endpoint.method}
                    </span>
                    <span className="font-mono text-lg text-gray-900">{endpoint.path}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{endpoint.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Authentication</h4>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Lock className="w-4 h-4 text-carbon-600" />
                        <span>{endpoint.auth}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Response</h4>
                      <span className="text-gray-700">{endpoint.response}</span>
                    </div>
                  </div>

                  {endpoint.body && (
                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Request Body</h4>
                      <p className="text-gray-700">{endpoint.body}</p>
                    </div>
                  )}

                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Example Response</h4>
                      <button
                        onClick={() => copyToClipboard(endpoint.example, idx)}
                        className="flex items-center gap-2 text-sm text-carbon-600 hover:text-carbon-700"
                      >
                        {copiedIndex === idx ? (
                          <>
                            <CheckCircle className="w-4 h-4" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-gray-100 text-sm font-mono">
                        <code>{endpoint.example}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rate Limits */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="w-6 h-6 text-carbon-600" />
              <h2 className="text-2xl font-bold text-gray-900">Rate Limits</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 mb-1">1000</div>
                <div className="text-gray-600">Requests per minute</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 mb-1">50,000</div>
                <div className="text-gray-600">Requests per day</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900 mb-1">10</div>
                <div className="text-gray-600">Concurrent connections</div>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              Higher limits available for government entities. Contact your registry administrator.
            </p>
          </div>

          {/* Security */}
          <div className="bg-gradient-to-br from-carbon-600 to-blockchain-600 rounded-2xl p-8 text-white mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Security & Sovereignty</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Request Signing</h3>
                <ul className="space-y-2 text-carbon-100">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>All requests signed with government-held private keys</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>ECDSA P-256 or Ed25519 signatures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>Timestamp-based nonces prevent replay attacks</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Blockchain Anchoring</h3>
                <ul className="space-y-2 text-carbon-100">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>Every state change anchored to sovereign blockchain</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>Merkle root committed daily to public ledger</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>Tamper-evident audit trail for all API activity</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* SDKs */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-carbon-600" />
              <h2 className="text-2xl font-bold text-gray-900">Client SDKs</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 border border-gray-200 rounded-lg hover:border-carbon-500 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">JavaScript/TypeScript</h3>
                <p className="text-sm text-gray-600 mb-3">Official Node.js and browser client</p>
                <code className="text-xs bg-gray-100 p-2 rounded block">npm install @cloudmyco/sdk</code>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg hover:border-carbon-500 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">Python</h3>
                <p className="text-sm text-gray-600 mb-3">Async and sync client support</p>
                <code className="text-xs bg-gray-100 p-2 rounded block">pip install cloudmyco-sdk</code>
              </div>
              
              <div className="p-4 border border-gray-200 rounded-lg hover:border-carbon-500 transition-colors">
                <h3 className="font-bold text-gray-900 mb-2">Java</h3>
                <p className="text-sm text-gray-600 mb-3">Spring Boot integration</p>
                <code className="text-xs bg-gray-100 p-2 rounded block">implementation 'com.cloudmyco:sdk:1.0.0'</code>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-br from-carbon-600 to-blockchain-600 rounded-2xl p-8 text-white">
            <Database className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl font-bold mb-4">Request API Access</h2>
            <p className="text-carbon-50 mb-6 max-w-2xl mx-auto">
              API credentials are issued exclusively to government entities and licensed partners. 
              Submit a request through your national registry administrator.
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-carbon-700 rounded-lg hover:bg-carbon-50 transition-all hover:scale-105 font-semibold text-lg shadow-lg"
            >
              Contact Registry Administrator
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}