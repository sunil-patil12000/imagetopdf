import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "5 Ways to Optimize Your Images Before Converting to PDF",
    excerpt: "Learn how to prepare your images for the best possible PDF quality with these simple optimization techniques.",
    author: "Michael Chen",
    date: "May 15, 2025",
    category: "Tips & Tricks",
    image: "https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Creating Professional Portfolios with Image to PDF Conversion",
    excerpt: "Discover how photographers and designers are using our tool to create stunning digital portfolios from their work.",
    author: "Emily Rodriguez",
    date: "April 28, 2025",
    category: "Case Studies",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "The Evolution of PDF Technology: Past, Present, and Future",
    excerpt: "A deep dive into how PDF technology has evolved and where it's headed in the digital document landscape.",
    author: "David Kim",
    date: "April 10, 2025",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1516131206008-dd041a9764fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "How Teachers Are Using Image to PDF Tools in Education",
    excerpt: "Explore innovative ways educators are using our conversion tool to create learning materials for students.",
    author: "Sarah Johnson",
    date: "March 22, 2025",
    category: "Education",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Securing Your Documents: Best Practices for PDF Handling",
    excerpt: "Learn essential security tips for handling sensitive documents when converting and sharing PDFs online.",
    author: "Alex Thompson",
    date: "March 5, 2025",
    category: "Security",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Batch Converting Images to PDF: A Time-Saving Guide",
    excerpt: "Master the art of efficiently converting multiple images to PDF in bulk with our advanced techniques.",
    author: "Jessica Lee",
    date: "February 18, 2025",
    category: "Tutorials",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Blog: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Our Blog
            </span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300 mb-10">
            Tips, tutorials, and insights about image to PDF conversion and document management
          </p>
        </div>

        {/* Featured Post */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-colors duration-200">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-48 w-full object-cover md:h-full md:w-48" src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Featured blog post" />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-blue-600 dark:text-blue-400 font-semibold">Featured</div>
              <a href="#" className="block mt-1 text-2xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                The Complete Guide to Converting Images to PDF in 2025
              </a>
              <p className="mt-2 text-gray-500 dark:text-gray-300">
                Everything you need to know about modern image to PDF conversion, from basic techniques to advanced workflows for professionals.
              </p>
              <div className="mt-4 flex items-center text-gray-500 dark:text-gray-400 text-sm">
                <User className="h-4 w-4 mr-1" />
                <span>John Doe</span>
                <span className="mx-2">•</span>
                <Calendar className="h-4 w-4 mr-1" />
                <span>June 1, 2025</span>
              </div>
              <div className="mt-6">
                <a href="#" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                  Read full article
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden flex flex-col transition-colors duration-200">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.image} alt={post.title} />
              </div>
              <div className="flex-1 p-6 flex flex-col">
                <div>
                  <span className="inline-block py-1 px-2 rounded-md text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300">
                    {post.category}
                  </span>
                </div>
                <a href="#" className="block mt-2 text-xl font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {post.title}
                </a>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-300 flex-grow">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center text-gray-500 dark:text-gray-400 text-sm">
                  <User className="h-4 w-4 mr-1" />
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="inline-flex rounded-md shadow">
            <a href="#" className="py-2 px-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Previous
            </a>
            <a href="#" className="py-2 px-4 border border-gray-300 dark:border-gray-600 bg-blue-600 dark:bg-blue-500 text-sm font-medium text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
              1
            </a>
            <a href="#" className="py-2 px-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              2
            </a>
            <a href="#" className="py-2 px-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              3
            </a>
            <a href="#" className="py-2 px-4 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              Next
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Blog;