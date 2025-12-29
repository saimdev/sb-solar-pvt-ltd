import React from "react";
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const services = [
    "Chemical Engineering",
    "Engineering for Builder",
    "Power & Energy Sector",
    "Oil & Gas Energy",
    "Industrial Construction",
    "Chemical Research",
  ];

  const recentPosts = [
    {
      title: "A Lab's Guide to Remote Patient Monitoring",
      date: "September 20, 2024",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=85&h=75&fit=crop",
    },
    {
      title: "Microbiologics Introduces SARS-CoV-2",
      date: "September 20, 2024",
      image:
        "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=85&h=75&fit=crop",
    },
    {
      title: "Blood Protein Signatures Change Across Lifespan",
      date: "September 20, 2024",
      image:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=85&h=75&fit=crop",
    },
  ];

  const instagramImages = [
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=150&h=150&fit=crop",
    "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=150&h=150&fit=crop",
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Column */}
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold">
                <span className="text-accent">SBSolar</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We specialize in cutting-edge solar energy solutions that help
              reduce costs, increase efficiency, and build a sustainable future
              for generations to come.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-start gap-3 text-gray-400 hover:text-accent transition-colors"
              >
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>Office 405, Shadman Mall, Shadman Market, LHR</span>
              </a>
              <a
                href="mailto:info@industio.com"
                className="flex items-center gap-3 text-gray-400 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>info@sbsolar.com</span>
              </a>
              <a
                href="tel:1231244567678"
                className="flex items-center gap-3 text-gray-400 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>(+92)326-1400444</span>
              </a>
            </div>
          </div>

          {/* Latest Posts Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Latest Post</h3>
            <div className="space-y-4">
              {recentPosts.map((post, index) => (
                <a key={index} href="#" className="flex gap-3 group">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-20 h-16 object-cover rounded-lg flex-shrink-0"
                  />
                  <div>
                    <p className="text-gray-400 text-xs mb-1">{post.date}</p>
                    <h4 className="text-sm font-medium text-white group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-accent transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Instagram Column */}
          <div>
            <h3 className="text-xl font-bold mb-6">Instagram</h3>
            <div className="grid grid-cols-3 gap-2">
              {instagramImages.map((image, index) => (
                <a
                  key={index}
                  href="#"
                  className="relative overflow-hidden rounded-lg group aspect-square"
                >
                  <img
                    src={image}
                    alt={`Instagram ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors"></div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © Copyright <span className="text-white">SBSolar 2025</span>.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
