import React, { useState } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Approved", "Materials"];

  const projects = [
    {
      title: "Residential Solar Installation",
      category: "Materials",
      image:
        "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=700&fit=crop",
    },
    {
      title: "Commercial Solar Farm",
      category: "Materials",
      image:
        "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&h=700&fit=crop",
    },
    {
      title: "Industrial Solar System",
      category: "Approved",
      image:
        "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=500&h=700&fit=crop",
    },
    {
      title: "Solar Panel Installation",
      category: "Materials",
      image:
        "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=500&h=700&fit=crop",
    },
    {
      title: "Energy Storage Project",
      category: "Approved",
      image:
        "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=500&h=700&fit=crop",
    },
    {
      title: "Rooftop Solar Array",
      category: "Approved",
      image:
        "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=500&h=700&fit=crop",
    },
    {
      title: "Solar Carport System",
      category: "Materials",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=500&h=700&fit=crop",
    },
    {
      title: "Off-Grid Solar Solution",
      category: "Approved",
      image:
        "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=500&h=700&fit=crop",
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="section-padding bg-white" id="projects">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-accent font-semibold text-lg">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Check Our Work
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeFilter === filter
                  ? "bg-accent text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-96 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-white text-xl font-bold mb-3">
                    {project.title}
                  </h3>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-white hover:text-accent transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
