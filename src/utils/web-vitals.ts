import { ReportHandler, getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

/**
 * Initialize Web Vitals reporting
 * @param onPerfEntry - Report handler for the collected metrics
 */
export function reportWebVitals(onPerfEntry?: ReportHandler): void {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Import web-vitals and report each metric
    getCLS(onPerfEntry); // Cumulative Layout Shift
    getFID(onPerfEntry); // First Input Delay
    getFCP(onPerfEntry); // First Contentful Paint
    getLCP(onPerfEntry); // Largest Contentful Paint
    getTTFB(onPerfEntry); // Time to First Byte
  }
}

/**
 * Log Web Vitals to console during development
 */
export function logWebVitalsToConsole(): void {
  if (process.env.NODE_ENV === 'development') {
    reportWebVitals((metric) => {
      console.log(`Web Vital: ${metric.name} - ${metric.value}`);
    });
  }
}

/**
 * Send Web Vitals metrics to Google Analytics
 * @param id - Google Analytics ID
 */
export function sendWebVitalsToGoogleAnalytics(id: string): void {
  reportWebVitals(({ name, delta, id: metricId, value }) => {
    // This assumes the global `gtag()` function exists, put in place by the Google Analytics script
    window.gtag?.('event', name, {
      // Google Analytics metrics must be integers, so we round
      value: Math.round(name === 'CLS' ? delta * 1000 : delta),
      // We use custom metrics to avoid affecting bounce rate
      metric_id: metricId,
      metric_value: value,
      metric_delta: delta,
      // Use non-interaction to avoid affecting bounce rate
      non_interaction: true,
    });
  });
}

// Define gtag function globally
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Initialize Google Analytics with Web Vitals tracking
 * @param measurementId - Google Analytics measurement ID (G-XXXXXXX)
 */
export function initAnalyticsWithWebVitals(measurementId: string): void {
  // Only load analytics if the user has consented
  const cookiePreferences = localStorage.getItem('cookiePreferences');
  if (cookiePreferences) {
    const { analytics } = JSON.parse(cookiePreferences);
    if (!analytics) return;
  }

  // Load Google Analytics script
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.async = true;
  document.head.appendChild(script);

  // Initialize Google Analytics
  window.gtag = function gtag() {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', measurementId, {
    // Send pageview on SPA route changes
    send_page_view: true,
    // Anonymize IP for GDPR compliance
    anonymize_ip: true,
  });

  // Send Web Vitals to Google Analytics
  sendWebVitalsToGoogleAnalytics(measurementId);
}
