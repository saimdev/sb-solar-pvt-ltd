import React from "react";
import { ArrowRight, Sun, Zap, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-sky-50 via-blue-50 to-emerald-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-120px)] py-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
              <Sun className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium text-gray-700">
                Sustainable Energy Solutions
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Power Your Future with
              <span className="text-accent block mt-2">Solar Energy</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              We specialize in cutting-edge solar energy solutions that help
              reduce costs, increase efficiency, and build a sustainable future
              for generations to come.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent">
                  7+
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Years Experience
                </div>
              </div>
              <div className="text-center border-x border-gray-200">
                <div className="text-3xl md:text-4xl font-bold text-accent">
                  100+
                </div>
                <div className="text-sm text-gray-600 mt-1">Projects Done</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent">
                  98%
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Client Satisfaction
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary text-lg group">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="btn-secondary text-lg">
                Learn More
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Eco-Friendly
                  </div>
                  <div className="text-sm text-gray-600">100% Clean Energy</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    Cost Savings
                  </div>
                  <div className="text-sm text-gray-600">
                    Up to 70% Reduction
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=900&fit=crop"
                alt="Solar Panel Installation"
                className="rounded-2xl shadow-2xl"
              />

              {/* Floating Card */}
              <div className="absolute bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <Sun className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">4MW+</div>
                    <div className="text-sm text-gray-600">
                      Energy Generated Daily
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          className="w-full h-auto fill-white"
        >
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
