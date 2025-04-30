import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your API
      console.log('Submitting email:', email);
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">Get Fitness Tips & Exclusive Workouts</h2>
          <p className="mb-6 text-blue-100">
            Subscribe to our newsletter and receive weekly workout routines, fitness tips,
            and exclusive offers directly to your inbox.
          </p>
          
          {submitted ? (
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 inline-block">
              <p className="text-white">
                Thank you for subscribing! Check your email for fitness content.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow py-3 px-4 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-600 font-medium py-3 px-6 rounded-md hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center"
              >
                Subscribe <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          )}
          
          <p className="mt-4 text-sm text-blue-200">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;