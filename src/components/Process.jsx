import React from "react";
import { Search, DollarSign, CreditCard, CheckCircle } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Analysis Client's Needs",
      description: "Make understand what you need.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=500&fit=crop",
    },
    {
      number: "02",
      icon: DollarSign,
      title: "Discuss About Budget",
      description: "Decide about your budget for project",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&h=500&fit=crop",
    },
    {
      number: "03",
      icon: CreditCard,
      title: "Get Payment",
      description: "Confirm payment to get solutions.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=500&fit=crop",
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Make Solutions!",
      description: "Yeah! You did it.",
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&h=500&fit=crop",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-lg">
            Work Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Easy Steps to Get Started!
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line - Hidden on last item */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-1/2 w-full h-0.5 bg-gray-200 -z-10">
                  <div className="h-full bg-accent w-0 group-hover:w-full transition-all duration-500"></div>
                </div>
              )}

              <div className="text-center">
                {/* Image Circle */}
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full overflow-hidden shadow-xl">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-accent/20 group-hover:bg-accent/40 transition-colors"></div>
                  </div>

                  {/* Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <step.icon className="w-10 h-10 text-accent" />
                    </div>
                  </div>

                  {/* Number Badge */}
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center font-bold text-2xl shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
