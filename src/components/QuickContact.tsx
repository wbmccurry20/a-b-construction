import { useState } from 'react';
import { motion } from 'framer-motion';

export default function QuickContact() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success - will connect to Web3Forms when key is added
    setStatus('success');
    setEmail('');
    setPhone('');
    
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className="bg-gray-900 p-8 shadow-2xl border-2 border-gray-700">
      <div className="flex items-start gap-4 mb-6">
        <div className="w-12 h-12 bg-construction-primary flex items-center justify-center flex-shrink-0 shadow-lg ring-2 ring-construction-primary/50">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <div>
          <h3 className="text-2xl font-heading font-bold mb-2 text-white">
            Get Started Today
          </h3>
          <p className="text-gray-100 font-medium">
            Leave your contact info and we'll call you within 24 hours
          </p>
        </div>
      </div>

      {status === 'success' ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-construction-primary/20 rounded-lg p-6 text-center border-2 border-construction-primary shadow-lg"
        >
          <svg className="w-12 h-12 mx-auto mb-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="font-semibold text-white">Thanks! We'll be in touch soon.</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="quick-phone" className="block text-sm font-bold mb-2 text-white">
              Phone Number *
            </label>
            <input
              type="tel"
              id="quick-phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="(828) 335-2845"
              className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-construction-primary placeholder:text-gray-500 font-medium shadow-md"
            />
          </div>

          <div>
            <label htmlFor="quick-email" className="block text-sm font-bold mb-2 text-white">
              Email (optional)
            </label>
            <input
              type="email"
              id="quick-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-construction-primary placeholder:text-gray-500 font-medium shadow-md"
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-4 bg-construction-primary text-white font-heading font-bold text-lg uppercase tracking-wider hover:bg-construction-accent hover:text-construction-dark hover:shadow-xl transition-all"
          >
            Request a Call Back
          </button>

          <p className="text-xs text-gray-300 text-center font-medium">
            We respect your privacy. No spam, ever.
          </p>
        </form>
      )}
    </div>
  );
}
