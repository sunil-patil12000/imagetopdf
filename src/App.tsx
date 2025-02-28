import React, { useState, useEffect } from 'react';
import { FileImage, Upload, Settings, Download, ArrowRight, Check, Info, Shield, Zap, Award, Moon, Sun } from 'lucide-react';
import ConversionTool from './components/ConversionTool'; // Changed to default import
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Blog from './components/Blog';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { BlogPage } from './components/BlogPage';
import NewHome from './components/Home'; // Import the new Home component
import Helmet from 'react-helmet'; // Import Helmet for SEO optimizations
import Breadcrumb from './components/Breadcrumb'; // Import Breadcrumb component
import LanguageSelector from './components/LanguageSelector'; // Import LanguageSelector component
import LiveChat from './components/LiveChat'; // Import LiveChat component
import CookieConsent from './components/CookieConsent'; // Import CookieConsent component
import { logWebVitalsToConsole, initAnalyticsWithWebVitals } from './utils/web-vitals'; // Import Web Vitals utilities

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [cookieConsent, setCookieConsent] = useState(false);
  const location = useLocation();
  const activeSection = location.pathname;

  useEffect(() => {
    // Apply dark mode class to document
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Save preference to localStorage
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookieConsent');
    if (savedConsent) setCookieConsent(JSON.parse(savedConsent));
  }, []);

  useEffect(() => {
    // Log web vitals during development
    logWebVitalsToConsole();
    
    // Initialize Google Analytics with Web Vitals tracking
    // Only use this if analytics cookies are accepted
    const cookiePreferences = localStorage.getItem('cookiePreferences');
    if (cookiePreferences) {
      const prefs = JSON.parse(cookiePreferences);
      if (prefs.analytics) {
        initAnalyticsWithWebVitals('G-XXXXXXXXXX'); // Replace with your GA measurement ID
      }
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleConsent = (allowed: boolean) => {
    setCookieConsent(allowed);
    localStorage.setItem('cookieConsent', JSON.stringify(allowed));
    if (allowed) initializeAnalytics(); // Your GA init function
  };

  return (
    
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
        {/* SEO Optimizations */}
        <Helmet>
          <title>Convert Images to PDF Online – Free, Fast & No Watermark</title>
          <meta name="description" content="Easily convert JPG, PNG, BMP, and more to PDF online for free. No registration, no watermark, instant high-quality conversion!" />
          <meta name="keywords" content="image to PDF converter online, free image to PDF tool, convert JPG to PDF online, no watermark image to PDF, PNG to PDF, BMP to PDF" />
          <meta property="og:title" content="Convert Images to PDF Online – Free, Fast & No Watermark" />
          <meta property="og:description" content="Easily convert JPG, PNG, BMP, and more to PDF online for free. No registration, no watermark, instant high-quality conversion!" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://imagetopdf.com" />
          <meta property="og:image" content="https://imagetopdf.com/og-image.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Convert Images to PDF Online – Free, Fast & No Watermark" />
          <meta name="twitter:description" content="Easily convert JPG, PNG, BMP, and more to PDF online for free. No registration, no watermark, instant high-quality conversion!" />
          <meta name="twitter:image" content="https://imagetopdf.com/twitter-image.jpg" />
          <link rel="canonical" href="https://imagetopdf.com" />
          
          {/* Hreflang tags for international SEO */}
          <link rel="alternate" hrefLang="x-default" href="https://imagetopdf.com/" />
          <link rel="alternate" hrefLang="en" href="https://imagetopdf.com/" />
          <link rel="alternate" hrefLang="es" href="https://imagetopdf.com/es/" />
          <link rel="alternate" hrefLang="fr" href="https://imagetopdf.com/fr/" />
          <link rel="alternate" hrefLang="de" href="https://imagetopdf.com/de/" />
          <link rel="alternate" hrefLang="zh" href="https://imagetopdf.com/zh/" />
          <link rel="alternate" hrefLang="ja" href="https://imagetopdf.com/ja/" />
          <link rel="alternate" hrefLang="ar" href="https://imagetopdf.com/ar/" />
          <link rel="alternate" hrefLang="hi" href="https://imagetopdf.com/hi/" />
          
          {/* Structured Data Markup for Product and FAQs */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Image to PDF Converter",
              "applicationCategory": "WebApplication",
              "operatingSystem": "All",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1250"
              }
            })}
          </script>
          
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How do I convert an image to PDF online?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Simply upload your image files, adjust any settings if needed, and click 'Convert to PDF'. Your PDF will be ready to download instantly."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is this image to PDF converter really free?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our tool is completely free to use with no hidden fees. We don't add any watermarks to your PDFs."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What image formats can I convert to PDF?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our converter supports all major image formats including JPG, JPEG, PNG, BMP, GIF, TIFF, and WebP."
                  }
                }
              ]
            })}
          </script>
        </Helmet>
        {/* Navigation */}
        <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <FileImage className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">ImageToPDF</span>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <Link 
                  to="/" 
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === '/' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === '/about' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  About
                </Link>
                <Link
                  to="/blog"
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    activeSection === '/blog' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  Blog
                </Link>
                <button
                  onClick={toggleDarkMode}
                  className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
                
                {/* Language Selector */}
                <div className="ml-4">
                  <LanguageSelector darkMode={darkMode} />
                </div>
              </div>
              
              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={toggleDarkMode}
                  className="mr-2 p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
                <button
                  className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
                >
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Mobile menu, show/hide based on menu state */}
            <div className="md:hidden hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/" className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === '/' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}>Home</Link>
                <Link to="/about" className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === '/about' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}>About</Link>
                <Link to="/blog" className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === '/blog' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}>Blog</Link>
              </div>
            </div>
          </div>
        </nav>

        <Breadcrumb />

        <Routes>
        <Route path="/" element={<NewHome darkMode={darkMode} />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogPage />} />
        </Routes>

        <Footer darkMode={darkMode} />

        {cookieConsent === null && (
          <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center">
            <p className="text-sm">
              We use cookies to analyze traffic. 
              <a href="/privacy" className="text-blue-400 hover:text-blue-300">Learn more</a>
            </p>
            <div className="flex gap-2">
              <button 
                onClick={() => handleConsent(true)}
                className="px-4 py-2 bg-green-600 rounded hover:bg-green-700"
              >
                Accept
              </button>
              <button
                onClick={() => handleConsent(false)}
                className="px-4 py-2 bg-gray-600 rounded hover:bg-gray-700"
              >
                Decline
              </button>
            </div>
          </div>
        )}
        <LiveChat darkMode={darkMode} />
        <CookieConsent darkMode={darkMode} />
      </div>
  
  );
}

export default App;