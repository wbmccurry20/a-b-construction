export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-construction-dark text-white border-t-4 border-construction-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-construction-secondary flex items-center justify-center">
                <span className="text-white font-bold">A&B</span>
              </div>
              <div className="font-heading font-bold text-lg">
                A&B Construction
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Family-owned and mountain-built. Serving Burnsville and the surrounding communities of Western North Carolina.
            </p>
            <a href="mailto:info@abconstruction.builders" className="inline-flex text-sm text-construction-accent hover:text-white transition-colors">
              Start a conversation ↗
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-300 hover:text-construction-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-construction-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-300 hover:text-construction-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-gray-300 hover:text-construction-primary transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/process" className="text-gray-300 hover:text-construction-primary transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-300 hover:text-construction-primary transition-colors">
                  Field Notes
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-construction-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">New Home Construction</li>
              <li className="text-gray-300">Renovations</li>
              <li className="text-gray-300">Home Additions</li>
              <li className="text-gray-300">Outdoor Living</li>
              <li className="text-gray-300">Energy-conscious building</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (828) 335-2845
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@abconstruction.builders
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                120 W Main Street<br />Burnsville, NC 28714
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>&copy; {currentYear} A&B Construction. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-construction-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-construction-primary transition-colors">
              Terms of Service
            </a>
            <a href="/blog" className="hover:text-construction-primary transition-colors">
              Field Notes
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
