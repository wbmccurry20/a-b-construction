import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  client?: string;
}

export default function Navbar({ client }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b-2 border-construction-accent/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 group">
            <div className="w-12 h-12 bg-gradient-to-br from-construction-primary to-construction-accent rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-white font-bold text-xl">A&B</span>
            </div>
            <div className="hidden sm:block">
              <div className={`font-display font-bold text-xl transition-colors ${
                isScrolled ? 'text-construction-dark' : 'text-white drop-shadow-lg'
              }`}>
                Construction
              </div>
              <div className={`text-xs transition-colors ${
                isScrolled ? 'text-construction-steel' : 'text-white drop-shadow-md'
              }`}>
                Building the Future
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  isScrolled
                    ? 'text-construction-dark hover:text-construction-primary hover:bg-construction-primary/10'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
            
            {/* Phone CTA */}
            <a
              href="tel:+18283352845"
              className={`ml-2 px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                isScrolled
                  ? 'text-construction-primary hover:bg-construction-primary/10'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (828) 335-2845
            </a>

            {/* Get Quote Button */}
            <a
              href="/contact"
              className="ml-2 px-6 py-2.5 bg-gradient-to-r from-construction-primary to-construction-accent text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
            >
              Get Free Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? 'hover:bg-construction-primary/10 text-construction-dark'
                : 'hover:bg-white/10 text-white'
            }`}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden py-4 bg-white border-t"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-construction-dark hover:bg-construction-primary/10 hover:text-construction-primary transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile Phone */}
            <a
              href="tel:+18283352845"
              className="block px-4 py-3 text-construction-primary font-semibold flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (828) 335-2845
            </a>

            {/* Mobile Get Quote */}
            <a
              href="/contact"
              className="block mx-4 mt-4 px-6 py-3 bg-gradient-to-r from-construction-primary to-construction-accent text-white rounded-lg font-semibold text-center"
            >
              Get Free Quote
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
