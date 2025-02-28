import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import reportWebVitals from './reportWebVitals';

// Google Analytics
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_ID;

const initializeAnalytics = () => {
  if (GA_MEASUREMENT_ID && import.meta.env.PROD) {
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, { 
      anonymize_ip: true,
      allow_ad_personalization_signals: false
    });
  }
};

// Only initialize if consent given
if (localStorage.getItem('cookieConsent') === 'true') {
  initializeAnalytics();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

reportWebVitals();
