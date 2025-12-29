import React from "react";
import { Linkedin, Twitter, Facebook, Mail } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Mr. Ashfaq Ahmad",
      role: "Founder",
      image: "../../ashfaq.jpeg",
    },
    {
      name: "Mr. Muhammad Usman Ahsan",
      role: "GM Operations",
      image: "../../rana.jpeg",
    },
    {
      name: "Eng. Muhammad Aon Mehdi",
      role: "Project Manager",
      image: "../../aon.jpeg",
    },
    {
      name: "Mr. Anees-Ur-Rehman",
      role: "Installation Manager",
      image: "../../anees2.jpg",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-lg">
            We are Dedicated
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Our Expert Team
          </h2>
          <p className="text-gray-600 text-lg">
            We work internationally, leveraging our expertise in more than 20
            countries by working from our offices in Florida (FL), Argentina,
            Uruguay, and Paraguay.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-contain group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-accent transition-colors">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
