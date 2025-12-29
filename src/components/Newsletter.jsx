import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <section className="section-padding bg-gradient-to-r from-accent to-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get Latest Updates and News by 
            <br className="hidden sm:block" />
            Subscribing Our Newsletter!
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-8">
            <div className="flex flex-col sm:flex-row gap-4 bg-white rounded-full p-2 shadow-2xl">
              <div className="flex-1 flex items-center px-4">
                <Mail className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-transparent border-none outline-none text-gray-900 placeholder:text-gray-500"
                />
              </div>
              <button
                type="submit"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                Subscribe Now
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Privacy Note */}
          <p className="text-white/80 text-sm mt-6">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
