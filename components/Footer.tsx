// components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Logo and brief description */}
        <div className="mb-8">
          <Link href="/" className="flex items-center space-x-2 mb-4">
            <img src="/icon.png" alt="CloudMyco logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-gray-900">CloudMyco</span>
          </Link>
          <p className="text-gray-600 max-w-md">
            Independent sovereign carbon infrastructure advisory. 
            Helping nations build, launch, and own their carbon registries.
          </p>
        </div>

        {/* Navigation sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-600 hover:text-carbon-600 transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/services#assessment" className="text-gray-600 hover:text-carbon-600 transition-colors">
                  Needs Assessment
                </Link>
              </li>
              <li>
                <Link href="/services#selection" className="text-gray-600 hover:text-carbon-600 transition-colors">
                  Vendor Selection
                </Link>
              </li>
              <li>
                <Link href="/services#oversight" className="text-gray-600 hover:text-carbon-600 transition-colors">
                  Deployment Oversight
                </Link>
              </li>
              <li>
                <Link href="/services#training" className="text-gray-600 hover:text-carbon-600 transition-colors">
                  Capacity Building
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-lg">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-carbon-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/mission" className="text-gray-600 hover:text-carbon-600 transition-colors">
                  Mission
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-lg">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-carbon-600 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-carbon-600 transition-colors">
                  Request Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4 text-lg">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-carbon-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-carbon-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social links - GitHub and LinkedIn only */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/cloudmyco" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-carbon-600 transition-colors"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a 
              href="https://linkedin.com/company/cloudmyco" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-carbon-600 transition-colors"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-gray-50 border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600">
          <p>© {currentYear} CloudMyco. All rights reserved. | Independent sovereign carbon infrastructure advisory.</p>
        </div>
      </div>
    </footer>
  );
}