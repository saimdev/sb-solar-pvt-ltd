import React from "react";
import { Award, Users, Shield, CheckCircle2 } from "lucide-react";

const About = () => {
  const features = [
    { icon: Award, title: "Award Winning", desc: "We won many awards" },
    { icon: Users, title: "Expert Team", desc: "15+ certified professionals" },
    { icon: Shield, title: "Best Support", desc: "LifeTime" },
  ];

  const benefits = [
    "Sustainable and renewable energy source",
    "Significant reduction in electricity bills",
    "Low maintenance and long-lasting systems",
    "Increase property value and appeal",
    "Government incentives and tax benefits",
    "Energy independence and reliability",
  ];

  return (
    <section className="section-padding bg-white" id="about">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <img
                  src="https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=400&h=500&fit=crop"
                  alt="Solar Installation"
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=400&h=300&fit=crop"
                  alt="Solar Panels"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
              </div>
              <div className="pt-12">
                <img
                  src="https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=400&h=600&fit=crop"
                  alt="Solar Farm"
                  className="rounded-2xl shadow-lg w-full h-96 object-cover"
                />
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-8 -left-8 bg-accent text-white p-8 rounded-2xl shadow-xl">
              <div className="text-5xl font-bold">7+</div>
              <div className="text-lg font-medium mt-2">
                Years of Experience
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-accent font-semibold text-lg">
                About SBSolar
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              We are the best Solar Energy Solutions
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              We specialize in structural engineering for solar installations.
              We work nationally, leveraging our expertise in more than 20
              sectors by working from our offices in Lahore and Islamabad.
            </p>

            <p className="text-gray-600 leading-relaxed">
              We develop our projects with commitment and responsibility,
              generating quality turnkey solutions that help businesses and
              homeowners transition to clean, renewable energy.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-3 gap-6 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>

            {/* Benefits List */}
            <div className="bg-gray-50 rounded-xl p-6 mt-8">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">
                Why Choose Solar Energy?
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <a href="#about" className="btn-primary">
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
