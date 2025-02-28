import React, { useState, useEffect } from 'react';
import { X, Check, Shield } from 'lucide-react';

interface CookieConsentProps {
  darkMode: boolean;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ darkMode }) => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  // Cookie preference states
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true and disabled
    analytics: true,
    marketing: false,
    personalization: false,
  });

  // Check if the user has already given consent
  useEffect(() => {
    const consentGiven = localStorage.getItem('cookieConsent');
    if (!consentGiven) {
      // Only show banner if no consent has been given
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    setPreferences({
      necessary: true,
      analytics: true,
      marketing: true,
      personalization: true,
    });
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      personalization: true,
    });
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    setPreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      personalization: false,
    });
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      personalization: false,
    });
    setShowBanner(false);
  };

  const savePreferences = () => {
    saveConsent(preferences);
    setShowPreferences(false);
    setShowBanner(false);
  };

  const saveConsent = (prefs: typeof preferences) => {
    localStorage.setItem('cookieConsent', 'true');
    localStorage.setItem('cookiePreferences', JSON.stringify(prefs));
    
    // Example: initialize analytics based on preferences
    if (prefs.analytics) {
      console.log('Analytics cookies enabled');
      // Here you would initialize your analytics
    } else {
      console.log('Analytics cookies disabled');
      // Here you would disable analytics
    }
  };

  const togglePreferences = () => {
    setShowPreferences(!showPreferences);
  };

  return (
    <>
      {/* Main Cookie Banner */}
      {showBanner && !showPreferences && (
        <div 
          className={`fixed bottom-0 left-0 right-0 z-50 p-4 md:p-5 ${
            darkMode
              ? 'bg-gray-800 text-white border-t border-gray-700'
              : 'bg-white text-gray-800 border-t border-gray-200'
          } shadow-lg`}
          role="alert"
          aria-live="assertive"
        >
          <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="flex items-start mb-4 md:mb-0">
              <Shield className="h-6 w-6 mr-3 text-blue-500 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-lg font-medium mb-1">We value your privacy</h3>
                <p className="text-sm max-w-2xl">
                  We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. 
                  <button 
                    onClick={togglePreferences}
                    className="ml-1 text-blue-500 hover:text-blue-700 font-medium"
                  >
                    Read More
                  </button>
                </p>
              </div>
            </div>
            <div className="flex flex-shrink-0 space-x-3">
              <button 
                onClick={acceptNecessary}
                className={`px-3 py-2 text-sm font-medium rounded-md ${
                  darkMode
                    ? 'bg-gray-700 hover:bg-gray-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                }`}
              >
                Necessary Only
              </button>
              <button 
                onClick={togglePreferences}
                className={`px-3 py-2 text-sm font-medium rounded-md ${
                  darkMode
                    ? 'bg-gray-700 hover:bg-gray-600 text-white'
                    : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                }`}
              >
                Preferences
              </button>
              <button 
                onClick={acceptAll}
                className="px-3 py-2 text-sm font-medium rounded-md bg-blue-600 hover:bg-blue-700 text-white"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="cookie-preferences-modal" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            
            <div 
              className={`inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ${
                darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
              }`}
            >
              <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg leading-6 font-medium" id="cookie-preferences-modal">
                        Cookie Preferences
                      </h3>
                      <button 
                        onClick={() => setShowPreferences(false)}
                        className={`rounded-md p-1 ${
                          darkMode 
                            ? 'hover:bg-gray-700 text-gray-400 hover:text-gray-300' 
                            : 'hover:bg-gray-200 text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        <X className="h-5 w-5" />
                      </button>
                    </div>
                    
                    <div className="mt-4">
                      <p className="text-sm mb-4">
                        We use cookies and similar technologies on our website. Some are essential, while others help us improve your experience.
                      </p>
                      
                      {/* Cookie Options */}
                      <div className="space-y-4 mt-5">
                        {/* Necessary Cookies */}
                        <div className={`p-4 rounded-md ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium">Necessary Cookies</h4>
                            <div className="flex items-center">
                              <input 
                                type="checkbox" 
                                checked={preferences.necessary} 
                                disabled 
                                className="h-4 w-4 text-blue-600 rounded"
                              />
                            </div>
                          </div>
                          <p className="text-sm">
                            These cookies are required for the website to function and cannot be disabled.
                          </p>
                        </div>
                        
                        {/* Analytics Cookies */}
                        <div className={`p-4 rounded-md ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium">Analytics Cookies</h4>
                            <div className="flex items-center">
                              <input 
                                type="checkbox" 
                                checked={preferences.analytics} 
                                onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})} 
                                className="h-4 w-4 text-blue-600 rounded"
                              />
                            </div>
                          </div>
                          <p className="text-sm">
                            These cookies help us understand how visitors interact with our website, helping us improve it.
                          </p>
                        </div>
                        
                        {/* Marketing Cookies */}
                        <div className={`p-4 rounded-md ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium">Marketing Cookies</h4>
                            <div className="flex items-center">
                              <input 
                                type="checkbox" 
                                checked={preferences.marketing} 
                                onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})} 
                                className="h-4 w-4 text-blue-600 rounded"
                              />
                            </div>
                          </div>
                          <p className="text-sm">
                            These cookies are used to track visitors across websites to display relevant advertisements.
                          </p>
                        </div>
                        
                        {/* Personalization Cookies */}
                        <div className={`p-4 rounded-md ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium">Personalization Cookies</h4>
                            <div className="flex items-center">
                              <input 
                                type="checkbox" 
                                checked={preferences.personalization} 
                                onChange={(e) => setPreferences({...preferences, personalization: e.target.checked})} 
                                className="h-4 w-4 text-blue-600 rounded"
                              />
                            </div>
                          </div>
                          <p className="text-sm">
                            These cookies allow us to provide a more personalized experience based on your browsing history.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={`px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse ${darkMode ? 'border-t border-gray-700' : 'border-t border-gray-200'}`}>
                <button 
                  onClick={savePreferences}
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Save Preferences
                </button>
                <button 
                  onClick={() => setShowPreferences(false)}
                  className={`mt-3 w-full inline-flex justify-center rounded-md border ${
                    darkMode 
                      ? 'border-gray-600 bg-gray-700 hover:bg-gray-600 text-white' 
                      : 'border-gray-300 bg-white hover:bg-gray-50 text-gray-700'
                  } shadow-sm px-4 py-2 text-base font-medium focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm`}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
