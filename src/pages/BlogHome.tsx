import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { getCanonicalUrl, getHreflangLinks } from '../utils/canonical-url';

interface BlogHomeProps {
  darkMode: boolean;
}

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  publishDate: string;
  slug: string;
  featuredImage?: string;
  author: string;
}

const BlogHome: React.FC<BlogHomeProps> = ({ darkMode }) => {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'How to Convert Images to PDF Online: Free, Fast & Secure Solutions [2024 Guide]',
      excerpt: 'Discover the best free online tools to convert images (JPG, PNG, GIF) to PDF instantly. Learn step-by-step methods, key features, and expert tips for seamless document creation.',
      publishDate: '2024-02-15',
      slug: 'convert-images-to-pdf-guide',
      featuredImage: '/blog-images/convert-images-to-pdf-header.webp',
      author: 'ImageToPDF Team'
    },
    {
      id: '2',
      title: '10 Advanced PDF Editing Tips You Need to Know',
      excerpt: 'Take your PDF editing skills to the next level with these professional tips and tricks. Learn how to manipulate text, images, and more in any PDF document.',
      publishDate: '2024-01-20',
      slug: 'advanced-pdf-editing-tips',
      featuredImage: '/blog-images/advanced-pdf-editing.webp',
      author: 'PDF Expert'
    },
    {
      id: '3',
      title: 'The Complete Guide to PDF Compression',
      excerpt: 'Learn how to reduce PDF file sizes without losing quality. Perfect for email attachments, website uploads, and saving storage space.',
      publishDate: '2023-12-05',
      slug: 'pdf-compression-guide',
      featuredImage: '/blog-images/pdf-compression.webp',
      author: 'Compression Pro'
    }
  ];

  const canonicalUrl = getCanonicalUrl('/blog');
  const formattedDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Get hreflang links data
  const hreflangLinks = getHreflangLinks('/blog');

  return (
    <div className={`py-8 px-4 sm:px-6 lg:px-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <Helmet>
        <title>Image to PDF Blog: Guides, Tips & Tutorials | ImageToPDF</title>
        <meta 
          name="description" 
          content="Expert guides on converting, editing, and optimizing PDFs. Learn tips, tricks, and best practices for working with PDF files."
        />
        <link rel="canonical" href={canonicalUrl} />
        {hreflangLinks.map(link => (
          <link key={link.key} rel={link.rel} hrefLang={link.hrefLang} href={link.href} />
        ))}
        <meta property="og:title" content="Image to PDF Blog: Guides, Tips & Tutorials | ImageToPDF" />
        <meta 
          property="og:description" 
          content="Expert guides on converting, editing, and optimizing PDFs. Learn tips, tricks, and best practices for working with PDF files."
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            'headline': 'Image to PDF Blog: Guides, Tips & Tutorials',
            'description': 'Expert guides on converting, editing, and optimizing PDFs. Learn tips, tricks, and best practices for working with PDF files.',
            'publisher': {
              '@type': 'Organization',
              'name': 'ImageToPDF',
              'logo': {
                '@type': 'ImageObject',
                'url': 'https://imgtopdf.sunilpatil.tech/logo.png'
              }
            },
            'url': canonicalUrl
          })}
        </script>
      </Helmet>

      <div className="max-w-7xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Image to PDF Blog
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Expert guides, tutorials, and tips for converting images to PDF and working with documents
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className={`rounded-lg overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              {post.featuredImage && (
                <Link to={`/blog/${post.slug}`}>
                  <img 
                    src={post.featuredImage} 
                    alt={post.title} 
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                </Link>
              )}
              <div className="p-6">
                <Link to={`/blog/${post.slug}`}>
                  <h2 className={`text-xl font-bold mb-2 hover:text-blue-500 transition-colors ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {post.title}
                  </h2>
                </Link>
                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {formattedDate(post.publishDate)} • By {post.author}
                </p>
                <p className={`mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="text-blue-500 hover:text-blue-700 font-medium inline-flex items-center"
                >
                  Read more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className={`mt-16 p-8 rounded-lg ${
          darkMode ? 'bg-gray-800' : 'bg-blue-50'
        }`}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Subscribe to Our Newsletter
            </h2>
            <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Get the latest PDF tips, tricks, and tutorials delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className={`px-4 py-2 rounded-md flex-1 max-w-md ${
                  darkMode 
                    ? 'bg-gray-700 text-white border-gray-600' 
                    : 'bg-white border-gray-300'
                } border focus:outline-none focus:ring-2 focus:ring-blue-500`}
                required
              />
              <button 
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className={`mt-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHome;
