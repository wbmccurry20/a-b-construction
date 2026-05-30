import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    timeline: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.PUBLIC_WEB3FORMS_KEY || 'YOUR_ACCESS_KEY_HERE',
          subject: `New Quote Request from ${formData.name}`,
          from_name: formData.name,
          ...formData,
        }),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          timeline: '',
          budget: '',
          message: '',
        });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 bg-gray-900 p-8 shadow-2xl border-2 border-gray-700"
      >
        <div className="inline-block p-4 bg-construction-primary/20 rounded-full mb-4 border-2 border-construction-primary shadow-lg">
          <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">
          Thank You!
        </h3>
        <p className="text-gray-100 font-medium mb-6">
          We've received your message and will get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="px-6 py-3 bg-construction-primary text-white font-heading font-bold uppercase tracking-wider hover:bg-construction-accent hover:text-construction-dark hover:shadow-xl transition-all"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-gray-900 p-8 shadow-2xl border-2 border-gray-700">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-bold text-white mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-construction-primary font-medium shadow-md"
          placeholder="John Smith"
        />
      </div>

      {/* Email & Phone */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-white mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-construction-primary font-medium shadow-md"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-bold text-white mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-construction-primary font-medium shadow-md"
            placeholder="(828) 335-2845"
          />
        </div>
      </div>

      {/* Project Type */}
      <div>
        <label htmlFor="projectType" className="block text-sm font-bold text-white mb-2">
          Project Type *
        </label>
        <select
          id="projectType"
          name="projectType"
          value={formData.projectType}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-construction-primary font-medium shadow-md"
        >
          <option value="">Select a project type</option>
          <option value="new-construction">New Home Construction</option>
          <option value="renovation">Full Renovation</option>
          <option value="addition">Home Addition</option>
          <option value="kitchen-bath">Kitchen/Bath Remodel</option>
          <option value="outdoor">Outdoor Living Space</option>
          <option value="green">Green Building Project</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Timeline & Budget */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="timeline" className="block text-sm font-bold text-white mb-2">
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-construction-primary font-medium shadow-md"
          >
            <option value="">When to start?</option>
            <option value="asap">As soon as possible</option>
            <option value="1-3months">1-3 months</option>
            <option value="3-6months">3-6 months</option>
            <option value="6-12months">6-12 months</option>
            <option value="planning">Just planning</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="block text-sm font-bold text-white mb-2">
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-construction-primary font-medium shadow-md"
          >
            <option value="">Select budget range</option>
            <option value="under-50k">Under $50,000</option>
            <option value="50k-100k">$50,000 - $100,000</option>
            <option value="100k-250k">$100,000 - $250,000</option>
            <option value="250k-500k">$250,000 - $500,000</option>
            <option value="500k-plus">$500,000+</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-bold text-white mb-2">
          Project Details *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-construction-primary font-medium shadow-md resize-none"
          placeholder="Tell us about your project, location, any specific requirements..."
        />
      </div>

      {/* Error Message */}
      {status === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
          Something went wrong. Please try again or call us at (828) 335-2845.
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-8 py-4 bg-construction-primary text-white font-heading font-bold text-lg uppercase tracking-wider hover:bg-construction-accent hover:text-construction-dark hover:shadow-xl transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          'Get Your Free Quote'
        )}
      </button>

      <p className="text-xs text-center text-gray-300 font-medium">
        By submitting this form, you agree to be contacted by A&B Construction regarding your project.
      </p>
    </form>
  );
}
