import React, { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Mian Ehaz Ali",
      role: "CEO, ADG LDI (PVT) LTD.",
      image: "../../ejaz.jpg",
      text: "Their engineers are quick to onboard and have contributed to multiple project rollouts. Besides high-quality work, the team values a thriving customer-forward culture.",
      rating: 5,
    },
    {
      name: "Mian Qamar Abbas Anjum",
      role: "CEO, Just Hunters",
      image: "../../qamar.jpeg",
      text: "Outstanding service and professionalism. They delivered our solar project on time and within budget. Highly recommend their expertise!",
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="section-padding bg-gradient-to-br from-accent to-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Heading */}
          <div className="text-white">
            <span className="text-white/90 font-semibold text-lg">
              We are the best so
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
              Check What
              <br />
              Clients Are Saying
            </h2>
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white text-accent rounded-full flex items-center justify-center hover:bg-white/90 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white text-accent rounded-full flex items-center justify-center hover:bg-white/90 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Right - Testimonial Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-2xl">
              {/* Quote Icon */}
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Quote className="w-8 h-8 text-accent" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-secondary text-secondary"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-accent/20"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>

              {/* Dots Indicator */}
              <div className="flex gap-2 mt-8 justify-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-accent w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-8 -right-8 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
            <div className="absolute -z-10 -bottom-8 -left-8 w-40 h-40 bg-white/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
