import React from 'react';
import ConversionTool from './ConversionTool';
import { FileImage, Shield, Award, Clock, Users, Globe, Download, Zap, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HomeProps {
  darkMode: boolean;
}

const Home: React.FC<HomeProps> = ({ darkMode }) => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "How to Optimize PDF Files for SEO",
      excerpt: "Learn how properly formatted PDF files can improve your website's search engine rankings.",
      date: "February 25, 2025",
      author: "Alex Johnson",
      image: "https://via.placeholder.com/300x200",
      category: "SEO"
    },
    {
      id: 2,
      title: "5 Ways to Convert Images to PDF on Mobile",
      excerpt: "Discover the best tools and techniques for converting images to PDF on your smartphone.",
      date: "February 18, 2025",
      author: "Samantha Lee",
      image: "https://via.placeholder.com/300x200",
      category: "Mobile"
    },
    {
      id: 3,
      title: "The Complete Guide to PDF Accessibility",
      excerpt: "Make your PDFs accessible to everyone with these essential tips and best practices.",
      date: "February 10, 2025",
      author: "Marcus Chen",
      image: "https://via.placeholder.com/300x200",
      category: "Accessibility"
    }
  ];

  return (
    <div className="flex-1">
      {/* Hero Section with H1 */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 py-12 mb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Image to PDF Converter Online
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-6">
            Convert JPG, PNG, and other images to PDF instantly - free, no watermark, no registration required
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#converter" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition duration-150">
              Convert Now
            </a>
            <a href="#features" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 bg-opacity-60 hover:bg-opacity-70 transition duration-150">
              Learn More
            </a>
          </div>
        </div>
      </section>
      
      {/* Conversion Tool Section */}
      <div id="converter">
        <ConversionTool darkMode={darkMode} />
      </div>
      
      {/* Features Section */}
      <section id="features" className="py-12 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <span className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">Features</span>
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Why Choose Our Image to PDF Converter
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
              Our powerful tool offers everything you need for seamless image to PDF conversion
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-6 transition-all duration-200 hover:shadow-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Fast Conversion</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                Convert your JPG, PNG, and other images to PDF in seconds with our optimized algorithms.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-6 transition-all duration-200 hover:shadow-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">100% Secure Processing</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                Your files never leave your browser and are processed locally for complete privacy and security.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-6 transition-all duration-200 hover:shadow-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">No Watermark PDF Output</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                Get high-quality PDFs with no watermarks, perfect for professional use, printing or sharing.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-6 transition-all duration-200 hover:shadow-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                <Download className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Free Unlimited Downloads</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                Download your converted PDFs instantly without any limitations or restrictions.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-6 transition-all duration-200 hover:shadow-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Works on All Devices</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                Use our tool on any device with a modern web browser - mobile, tablet, or desktop with no installation required.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md p-6 transition-all duration-200 hover:shadow-lg">
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white">Batch Processing</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-300">
                Convert multiple images at once and combine them into a single PDF document with just a few clicks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">Blog</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Latest Articles
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
              Stay updated with the latest tips, tricks, and insights
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map(post => (
              <div 
                key={post.id} 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-200 hover:shadow-lg"
              >
                <div className="h-48 w-full overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
                    loading="lazy" // Added lazy loading for images
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                      {post.category}
                    </span>
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      By {post.author}
                    </span>
                    <Link 
                      to={`/blog/${post.id}`} 
                      className="text-blue-600 dark:text-blue-400 font-medium hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/blog" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 transition-colors"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 bg-white dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <span className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">FAQ</span>
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
              Everything you need to know about our Image to PDF converter
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200 dark:divide-gray-700">
            {/* FAQ Item 1 */}
            <div className="py-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                How do I convert an image to PDF online?
              </h3>
              <div className="mt-2">
                <p className="text-base text-gray-500 dark:text-gray-300">
                  Simply upload your image files by clicking the upload button or dragging and dropping files into the designated area. Adjust any settings if needed, and click 'Convert to PDF'. Your PDF will be ready to download instantly.
                </p>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="py-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                Is this image to PDF converter really free?
              </h3>
              <div className="mt-2">
                <p className="text-base text-gray-500 dark:text-gray-300">
                  Yes, our tool is completely free to use with no hidden fees or limitations. We don't add any watermarks to your PDFs, and there's no need to create an account or register.
                </p>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="py-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                What image formats can I convert to PDF?
              </h3>
              <div className="mt-2">
                <p className="text-base text-gray-500 dark:text-gray-300">
                  Our converter supports all major image formats including JPG, JPEG, PNG, BMP, GIF, TIFF, and WebP. You can even mix different formats in a single PDF.
                </p>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="py-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                Is my data safe when using this tool?
              </h3>
              <div className="mt-2">
                <p className="text-base text-gray-500 dark:text-gray-300">
                  Absolutely! Our image to PDF converter processes your files directly in your browser. Your images are never uploaded to our servers, ensuring complete privacy and security.
                </p>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="py-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                Can I combine multiple images into a single PDF?
              </h3>
              <div className="mt-2">
                <p className="text-base text-gray-500 dark:text-gray-300">
                  Yes, you can upload multiple images at once and they will be combined into a single PDF document. You can also rearrange the order of the images before conversion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 dark:bg-blue-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to convert your images?</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Free, secure, and no registration required. Start converting your images to PDF now!
          </p>
          <a 
            href="#converter" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 transition duration-150"
          >
            Convert Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
