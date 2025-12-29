import React from "react";
import {
  Sun,
  Home,
  Building2,
  Factory,
  Zap,
  Battery,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Sun,
      category: "Residential",
      title: "Residential Solar Installation",
      description:
        "Our residential solar services provide homeowners with custom-designed systems that maximize energy production and savings.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    },
    {
      icon: Building2,
      category: "Commercial",
      title: "Commercial Solar Solutions",
      description:
        "We help businesses reduce operational costs with commercial-scale solar installations tailored to their energy needs.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    },
    {
      icon: Factory,
      category: "Industrial",
      title: "Industrial Solar Systems",
      description:
        "Large-scale solar solutions designed for manufacturing facilities and industrial operations requiring high energy output.",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop",
    },
    {
      icon: Zap,
      category: "Energy",
      title: "Solar Farm Development",
      description:
        "Complete solar farm design, construction, and management services for utility-scale renewable energy projects.",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
    },
    {
      icon: Battery,
      category: "Storage",
      title: "Energy Storage Solutions",
      description:
        "Advanced battery storage systems to maximize solar energy utilization and ensure power availability 24/7.",
      image:
        "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&h=400&fit=crop",
    },
    {
      icon: Home,
      category: "Maintenance",
      title: "Solar Panel Maintenance",
      description:
        "Comprehensive maintenance and monitoring services to ensure optimal performance and longevity of your solar investment.",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section className="section-padding bg-gray-50" id="services">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-lg">
            Services That We Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Solar Energy Solutions for Every Need
          </h2>
          <p className="text-gray-600 text-lg">
            We provide comprehensive solar energy services from consultation and
            design to installation, maintenance, and monitoring for residential,
            commercial, and industrial clients.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Icon */}
                <div className="absolute top-6 left-6">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                </div>

                {/* Category */}
                <div className="absolute bottom-6 left-6">
                  <span className="inline-block bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                    {service.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary text-lg">
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
