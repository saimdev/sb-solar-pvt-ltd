import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Phone, Mail, Clock } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-3 hidden lg:block">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <span>
                  Call us:{" "}
                  <a href="" className="hover:text-accent transition-colors">
                    (+92)326-1400444
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <span>
                  Email us:{" "}
                  <a
                    href="mailto:info@sbsolars.com"
                    className="hover:text-accent transition-colors"
                  >
                    info@sbsolar.com
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-accent" />
                <span>Office hours: 08:00 am – 06:00 pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-white"
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-gray-900">
                <span className="text-accent">SBSolar</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <div className="relative group">
                <a
                  href="/"
                  className="flex items-center gap-1 text-gray-700 hover:text-accent transition-colors font-medium"
                >
                  Home
                </a>
              </div>
              <a
                href="#about"
                className="text-gray-700 hover:text-accent transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-accent transition-colors font-medium"
              >
                Services
              </a>
              <a
                href="#projects"
                className="text-gray-700 hover:text-accent transition-colors font-medium"
              >
                Projects
              </a>
              <a
                href="#blog"
                className="text-gray-700 hover:text-accent transition-colors font-medium"
              >
                Blog
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a href="#contact" className="btn-primary">
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-700 hover:text-accent"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <nav className="container-custom py-4 flex flex-col gap-4">
              <a
                href="/"
                className="text-gray-700 hover:text-accent transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#pages"
                className="text-gray-700 hover:text-accent transition-colors font-medium"
              >
                Pages
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-accent transition-colors font-medium"
              >
                Services
              </a>
              <a
                href="#projects"
                className="text-gray-700 hover:text-accent transition-colors font-medium"
              >
                Projects
              </a>
              <a
                href="#blog"
                className="text-gray-700 hover:text-accent transition-colors font-medium"
              >
                Blog
              </a>
              <a href="#contact" className="btn-primary w-full justify-center">
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
