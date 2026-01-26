import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StickyContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-construction-primary text-white rounded-full shadow-2xl hover:bg-construction-accent hover:scale-110 transition-all flex items-center justify-center ring-2 ring-construction-primary/50"
          aria-label="Contact options"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          )}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-20 right-0 bg-white rounded-xl shadow-2xl p-4 w-64"
            >
              <div className="space-y-3">
                <a
                  href="tel:+18283352845"
                  className="flex items-center gap-3 p-3 bg-construction-primary/10 rounded-lg hover:bg-construction-primary/20 transition-colors border border-construction-primary/30"
                >
                  <svg className="w-5 h-5 text-construction-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <div className="text-xs text-gray-700">Call us</div>
                    <div className="font-semibold text-construction-dark">(828) 335-2845</div>
                  </div>
                </a>

                <a
                  href="mailto:drew@abconstruction.builders"
                  className="flex items-center gap-3 p-3 bg-construction-primary/10 rounded-lg hover:bg-construction-primary/20 transition-colors border border-construction-primary/30"
                >
                  <svg className="w-5 h-5 text-construction-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <div className="text-xs text-gray-700">Email us</div>
                    <div className="font-semibold text-construction-dark text-sm">drew@abconstruction.builders</div>
                  </div>
                </a>

                <a
                  href="/contact"
                  className="block text-center py-3 bg-construction-primary text-white rounded-lg font-semibold hover:bg-construction-accent transition-colors shadow-lg"
                >
                  Get Quote
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop Sticky Bar */}
      <div className="hidden md:block fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-construction-secondary to-construction-dark text-white shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-construction-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+18283352845" className="text-lg font-semibold hover:text-construction-accent transition-colors">
                  (828) 335-2845
                </a>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-construction-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:drew@abconstruction.builders" className="hover:text-construction-accent transition-colors">
                  drew@abconstruction.builders
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-construction-accent font-semibold">Ready to start your project?</span>
              <a
                href="/contact"
                className="px-6 py-2 bg-construction-primary text-white rounded-lg font-semibold hover:bg-construction-accent hover:text-construction-dark transition-all hover:scale-105"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for desktop sticky bar */}
      <div className="hidden md:block h-20"></div>
    </>
  );
}
