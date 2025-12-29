import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'Solar Energy: The Future of Sustainable Power',
      author: 'Donald Reo',
      date: '28 Jun/24',
      excerpt: 'Discover how solar energy is revolutionizing the way we power our homes and businesses with clean, renewable technology.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=700&h=450&fit=crop'
    },
    {
      title: 'Top Benefits of Installing Solar Panels',
      author: 'Donald Reo',
      date: '28 Jun/24',
      excerpt: 'Learn about the financial and environmental advantages of switching to solar energy for your property.',
      image: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=700&h=450&fit=crop'
    },
    {
      title: 'How Solar Technology is Advancing',
      author: 'Donald Reo',
      date: '28 Jun/24',
      excerpt: 'Explore the latest innovations in solar panel technology and how they are making renewable energy more efficient.',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=700&h=450&fit=crop'
    },
    {
      title: 'Guide to Solar Panel Maintenance',
      author: 'Donald Reo',
      date: '22 Jun/24',
      excerpt: 'Essential tips and best practices for maintaining your solar panels to ensure optimal performance and longevity.',
      image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=700&h=450&fit=crop'
    }
  ];

  return (
    <section className="section-padding bg-gray-50" id="blog">
      <div className="container-custom">
        {/* Section Header */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-12">
          <div>
            <span className="text-accent font-semibold text-lg">Latest Blogs</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
              Learn More from
              <br />
              Latest Blogs
            </h2>
          </div>
          <div>
            <p className="text-gray-600 text-lg">
              Our consulting engineering offices, BGS & BNS, specialize in construction engineering 
              in Wallonia and the Grand Duchy of Luxembourg. We support architects.
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-64">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#blog" className="btn-primary text-lg">
            Our Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
