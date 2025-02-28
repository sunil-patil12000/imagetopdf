import React, { useState, useEffect } from 'react';
import { FileImage, Upload, Settings, Download, ArrowRight, Check, Info, Shield, Zap, Award, Moon, Sun } from 'lucide-react';
import ConversionTool from './components/ConversionTool';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Blog from './components/Blog';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BlogPage } from './components/BlogPage';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [cookieConsent, setCookieConsent] = useState(false);

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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleConsent = (allowed: boolean) => {
    setCookieConsent(allowed);
    localStorage.setItem('cookieConsent', JSON.stringify(allowed));
    if (allowed) initializeAnalytics(); // Your GA init function
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <div>
             <ConversionTool darkMode={darkMode} />
            
            <section className="bg-white dark:bg-gray-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-12 lg:py-24">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Features</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md shadow-sm">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">Fast Conversion</h3>
                      <p className="text-gray-600 dark:text-gray-400">Convert your images to PDF in seconds.</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md shadow-sm">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">High-Quality Output</h3>
                      <p className="text-gray-600 dark:text-gray-400">Get high-quality PDFs that are perfect for printing or sharing.</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md shadow-sm">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">Easy to Use</h3>
                      <p className="text-gray-600 dark:text-gray-400">Our intuitive interface makes it easy to convert your images to PDF.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
           
          </div>
        );
      case 'blog':
        return <Blog />;
      case 'about':
        return <About />;
      default:
        return <ConversionTool darkMode={darkMode} />;
    }
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
        {/* Navigation */}
        <nav className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50 transition-colors duration-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <FileImage className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">ImageToPDF</span>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <Link to="/" className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === 'home' ? 'text-blue-600 dark:text-blue-400' : ''}`}>Home</Link>
                <Link to="/blog" className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === 'blog' ? 'text-blue-600 dark:text-blue-400' : ''}`}>Blog</Link>
                <button 
                  onClick={() => setActiveSection('about')}
                  className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium transition-colors ${activeSection === 'about' ? 'text-blue-600 dark:text-blue-400' : ''}`}
                >
                  About
                </button>
                <button
                  onClick={toggleDarkMode}
                  className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </button>
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
          </div>
          
          {/* Mobile menu, show/hide based on menu state */}
          <div className="md:hidden hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeSection === 'home' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}>Home</Link>
              <Link to="/blog" className={`block px-3 py-2 rounded-md text-base font-medium ${
                activeSection === 'blog' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}>Blog</Link>
              <button 
                onClick={() => setActiveSection('about')}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === 'about' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                About
              </button>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={
            <main className="flex-1">
              {renderContent()}
            </main>
          } />
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
      </div>
    </Router>
  );
}

export default App;