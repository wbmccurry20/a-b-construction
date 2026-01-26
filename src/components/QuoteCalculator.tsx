import { useState } from 'react';
import { motion } from 'framer-motion';

interface QuoteCalculatorProps {
  client?: string;
}

interface ProjectDetails {
  projectType: string;
  squareFootage: string;
  timeline: string;
  budget: string;
}

export default function QuoteCalculator({ client }: QuoteCalculatorProps) {
  const [step, setStep] = useState(1);
  const [details, setDetails] = useState<ProjectDetails>({
    projectType: '',
    squareFootage: '',
    timeline: '',
    budget: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const projectTypes = [
    { value: 'kitchen', label: '🍳 Kitchen Remodel', base: 200 },
    { value: 'bathroom', label: '🚿 Bathroom Remodel', base: 250 },
    { value: 'addition', label: '📐 Room Addition', base: 175 },
    { value: 'deck', label: '🌲 Deck/Patio', base: 50 },
    { value: 'renovation', label: '🔨 Full Home Renovation', base: 125 },
  ];

  const calculateEstimate = () => {
    const selectedType = projectTypes.find(t => t.value === details.projectType);
    if (!selectedType || !details.squareFootage) return null;

    const sqft = parseInt(details.squareFootage);
    const basePrice = selectedType.base;
    const estimate = sqft * basePrice;
    
    return {
      low: (estimate * 0.85).toLocaleString(),
      high: (estimate * 1.15).toLocaleString(),
      avg: estimate.toLocaleString(),
    };
  };

  const submitToWeb3Forms = async () => {
    setSubmitting(true);
    const selectedType = projectTypes.find(t => t.value === details.projectType);
    const estimate = calculateEstimate();

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY,
          subject: `Quote Calculator Estimate - ${selectedType?.label}`,
          project_type: selectedType?.label,
          square_footage: details.squareFootage,
          timeline: details.timeline,
          budget: details.budget,
          estimated_cost: estimate?.avg,
          estimated_range: `$${estimate?.low} - $${estimate?.high}`,
        }),
      });
      setSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const estimate = calculateEstimate();

  return (
    <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-2xl mx-auto border-2 border-gray-700">
      <h3 className="text-3xl font-display font-bold text-white mb-2">
        Project Cost Calculator
      </h3>
      <p className="text-gray-100 font-medium mb-8">
        Get an instant estimate for your construction project
      </p>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <div
              key={s}
              className={`flex items-center justify-center w-10 h-10 rounded-full font-bold transition-all ${
                step >= s
                  ? 'bg-construction-primary text-white shadow-lg'
                  : 'bg-gray-700 text-gray-400'
              }`}
            >
              {s}
            </div>
          ))}
        </div>
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-construction-primary to-construction-accent"
            initial={{ width: '0%' }}
            animate={{ width: `${(step / 5) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Step 1: Project Type */}
      {step === 1 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-3"
        >
          <label className="block text-sm font-bold text-white mb-3">
            What type of project are you planning?
          </label>
          {projectTypes.map((type) => (
            <button
              key={type.value}
              onClick={() => {
                setDetails({ ...details, projectType: type.value });
                setStep(2);
              }}
              className="w-full p-4 text-left border-2 border-gray-600 rounded-lg hover:border-construction-primary hover:bg-construction-primary/10 transition-all group"
            >
              <span className="text-lg font-medium group-hover:text-construction-primary text-white">
                {type.label}
              </span>
              <span className="block text-sm text-gray-300 font-semibold mt-1">
                Starting at ${type.base}/sq ft
              </span>
            </button>
          ))}
        </motion.div>
      )}

      {/* Step 2: Square Footage */}
      {step === 2 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <label className="block text-sm font-bold text-white mb-3">
            Approximate square footage?
          </label>
          <input
            type="number"
            value={details.squareFootage}
            onChange={(e) =>
              setDetails({ ...details, squareFootage: e.target.value })
            }
            placeholder="e.g., 2000"
            className="w-full p-4 bg-white text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-construction-primary text-lg font-medium shadow-md"
          />
          <div className="flex gap-3 mt-6">
            <button
              onClick={() => setStep(1)}
              className="flex-1 px-6 py-3 border-2 border-gray-500 text-white rounded-lg font-semibold hover:border-construction-primary hover:bg-construction-primary/10"
            >
              Back
            </button>
            <button
              onClick={() => details.squareFootage && setStep(3)}
              disabled={!details.squareFootage}
              className="flex-1 px-6 py-3 bg-construction-primary text-white rounded-lg font-semibold hover:bg-construction-accent disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
            >
              Next
            </button>
          </div>
        </motion.div>
      )}

      {/* Step 3: Timeline */}
      {step === 3 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <label className="block text-sm font-bold text-white mb-3">
            When would you like to start?
          </label>
          <div className="space-y-3">
            {[
              { value: 'asap', label: 'As soon as possible' },
              { value: '1-3months', label: 'Within 1-3 months' },
              { value: '3-6months', label: 'Within 3-6 months' },
              { value: 'planning', label: 'Just planning ahead' },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setDetails({ ...details, timeline: option.value })}
                className={`w-full p-4 text-left border-2 rounded-lg transition-all text-white ${
                  details.timeline === option.value
                    ? 'border-construction-primary bg-construction-primary/10'
                    : 'border-gray-600 hover:border-construction-primary hover:bg-construction-primary/10'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="flex gap-3 mt-6">
            <button
              onClick={() => setStep(2)}
              className="flex-1 px-6 py-3 border-2 border-gray-500 text-white rounded-lg font-semibold hover:border-construction-primary hover:bg-construction-primary/10"
            >
              Back
            </button>
            <button
              onClick={() => details.timeline && setStep(4)}
              disabled={!details.timeline}
              className="flex-1 px-6 py-3 bg-construction-primary text-white rounded-lg font-semibold hover:bg-construction-accent disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
            >
              Next
            </button>
          </div>
        </motion.div>
      )}

      {/* Step 4: Budget */}
      {step === 4 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <label className="block text-sm font-bold text-white mb-3">
            What's your approximate budget?
          </label>
          <div className="space-y-3">
            {[
              { value: '<25k', label: 'Under $25,000' },
              { value: '25k-50k', label: '$25,000 - $50,000' },
              { value: '50k-100k', label: '$50,000 - $100,000' },
              { value: '100k+', label: 'Over $100,000' },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setDetails({ ...details, budget: option.value })}
                className={`w-full p-4 text-left border-2 rounded-lg transition-all text-white ${
                  details.budget === option.value
                    ? 'border-construction-primary bg-construction-primary/10'
                    : 'border-gray-600 hover:border-construction-primary hover:bg-construction-primary/10'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
          <div className="flex gap-3 mt-6">
            <button
              onClick={() => setStep(3)}
              className="flex-1 px-6 py-3 border-2 border-gray-500 text-white rounded-lg font-semibold hover:border-construction-primary hover:bg-construction-primary/10"
            >
              Back
            </button>
            <button
              onClick={() => details.budget && setStep(5)}
              disabled={!details.budget}
              className="flex-1 px-6 py-3 bg-construction-primary text-white rounded-lg font-semibold hover:bg-construction-accent disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
            >
              See Estimate
            </button>
          </div>
        </motion.div>
      )}

      {/* Step 5: Results */}
      {step === 5 && estimate && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <div className="mb-6">
            <div className="inline-block p-4 bg-construction-primary/10 rounded-full mb-4 border-2 border-construction-primary/50">
              <svg
                className="w-12 h-12 text-construction-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">
              Your Estimated Project Cost
            </h4>
            <p className="text-gray-100 font-medium">
              Based on {details.squareFootage} sq ft
            </p>
          </div>

          <div className="bg-gradient-to-br from-construction-primary to-construction-accent p-8 rounded-xl text-white mb-6">
            <div className="text-5xl font-bold mb-2">${estimate.avg}</div>
            <div className="text-sm opacity-90">
              Range: ${estimate.low} - ${estimate.high}
            </div>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-900/30 border-2 border-green-500 rounded-lg p-4 mb-6"
            >
              <p className="text-green-200 font-semibold">
                ✓ We've received your estimate request and will contact you soon!
              </p>
            </motion.div>
          ) : (
            <p className="text-sm text-gray-100 font-medium mb-6">
              This is a rough estimate. Want a detailed quote? Submit this estimate and we'll contact you.
            </p>
          )}

          <div className="flex gap-3">
            <button
              onClick={() => {
                setStep(1);
                setSubmitted(false);
                setDetails({ projectType: '', squareFootage: '', timeline: '', budget: '' });
              }}
              className="flex-1 px-6 py-3 border-2 border-gray-500 text-white rounded-lg font-semibold hover:border-construction-primary hover:bg-construction-primary/10"
            >
              Start Over
            </button>
            {!submitted ? (
              <button
                onClick={() => submitToWeb3Forms()}
                disabled={submitting}
                className="flex-1 px-6 py-3 bg-construction-primary text-white rounded-lg font-semibold hover:bg-construction-accent disabled:opacity-50 shadow-xl"
              >
                {submitting ? 'Sending...' : 'Submit Estimate'}
              </button>
            ) : (
              <a
                href="/contact"
                className="flex-1 px-6 py-3 bg-construction-primary text-white rounded-lg font-semibold hover:bg-construction-accent shadow-xl text-center"
              >
                Get Detailed Quote
              </a>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}
