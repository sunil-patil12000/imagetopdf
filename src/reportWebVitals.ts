type Metric = {
  name: string;
  value: number;
  rating: string;
  delta: number;
  entries: PerformanceEntry[];
};

export default function reportWebVitals(onPerfEntry?: (metric: Metric) => void) {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }

  // Conversion tracking
  window.addEventListener('pdf_converted', () => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: `${import.meta.env.VITE_GA_ID}/convert`
      });
    }
  });
}
