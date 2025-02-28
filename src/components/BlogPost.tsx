import React from 'react';
import { Helmet } from 'react-helmet';
import { getCanonicalUrl, getHreflangLinks } from '../utils/canonical-url';

interface BlogPostProps {
  title: string;
  metaDescription: string;
  publishDate: string;
  author: string;
  content: React.ReactNode;
  slug: string;
  featuredImage?: string;
  darkMode: boolean;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  metaDescription,
  publishDate,
  author,
  content,
  slug,
  featuredImage,
  darkMode
}) => {
  const canonicalUrl = getCanonicalUrl(`/blog/${slug}`);
  const formattedDate = new Date(publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  // Get hreflang links data
  const hreflangLinks = getHreflangLinks(`/blog/${slug}`);
  
  return (
    <div className={`py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto ${darkMode ? 'text-white' : 'text-gray-800'}`}>
      <Helmet>
        <title>{title} | ImageToPDF</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        {hreflangLinks.map(link => (
          <link key={link.key} rel={link.rel} hrefLang={link.hrefLang} href={link.href} />
        ))}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalUrl} />
        {featuredImage && <meta property="og:image" content={featuredImage} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={metaDescription} />
        {featuredImage && <meta name="twitter:image" content={featuredImage} />}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            'headline': title,
            'description': metaDescription,
            'author': {
              '@type': 'Person',
              'name': author
            },
            'datePublished': publishDate,
            'dateModified': publishDate,
            'publisher': {
              '@type': 'Organization',
              'name': 'ImageToPDF',
              'logo': {
                '@type': 'ImageObject',
                'url': 'https://imgtopdf.sunilpatil.tech/logo.png'
              }
            },
            'mainEntityOfPage': {
              '@type': 'WebPage',
              '@id': canonicalUrl
            },
            'image': featuredImage
          })}
        </script>
      </Helmet>

      <header className="mb-8">
        <h1 className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{title}</h1>
        <div className={`flex items-center text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <time dateTime={publishDate}>{formattedDate}</time>
          <span className="mx-2">•</span>
          <span>By {author}</span>
        </div>
      </header>

      {featuredImage && (
        <div className="mb-8">
          <img 
            src={featuredImage} 
            alt={`Featured image for ${title}`} 
            className="w-full h-auto rounded-lg shadow-md"
            loading="lazy"
          />
        </div>
      )}

      <article className={`prose max-w-none ${darkMode ? 'prose-invert' : ''}`}>
        {content}
      </article>

      <div className={`mt-12 pt-6 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Share this article</h3>
        <div className="flex space-x-4">
          <a 
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(canonicalUrl)}&text=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
            aria-label="Share on Twitter"
          >
            Twitter
          </a>
          <a 
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(canonicalUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
            aria-label="Share on Facebook"
          >
            Facebook
          </a>
          <a 
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(canonicalUrl)}&title=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-full ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}
            aria-label="Share on LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
