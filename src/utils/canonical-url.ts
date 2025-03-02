/**
 * Utility functions to manage canonical URLs for SEO
 */

/**
 * Generate the canonical URL for the current page
 * @param path - The current path (e.g., '/about')
 * @param lang - Optional language code (e.g., 'en', 'es')
 * @returns The full canonical URL
 */
export function getCanonicalUrl(path: string, lang?: string): string {
  // Base domain
  const baseDomain = 'https://imgtopdf.sunilpatil.tech';
  
  // Remove trailing slashes
  const cleanPath = path.replace(/\/+$/, '');
  
  // If it's the homepage
  if (cleanPath === '' || cleanPath === '/') {
    if (!lang || lang === 'en') {
      return baseDomain;
    } else {
      return `${baseDomain}/${lang}/`;
    }
  }
  
  // For other pages, construct the URL with language prefix if provided
  if (lang && lang !== 'en') {
    return `${baseDomain}/${lang}${cleanPath.startsWith('/') ? cleanPath : '/' + cleanPath}`;
  }
  
  return `${baseDomain}${cleanPath.startsWith('/') ? cleanPath : '/' + cleanPath}`;
}

/**
 * Get an array of alternate language URLs for the current page
 * Used for hreflang tags
 * 
 * @param path - The current path (e.g., '/about')
 * @returns Array of language and URL pairs
 */
export function getAlternateLanguageUrls(path: string): Array<{lang: string, url: string}> {
  // Supported languages
  const languages = ['en', 'es', 'fr', 'de', 'zh', 'ja', 'ar', 'hi'];
  
  return languages.map(lang => ({
    lang,
    url: getCanonicalUrl(path, lang)
  }));
}

/**
 * Get the hreflang markup for the current page
 * @param path - The current path
 * @returns Array of link elements for hreflang
 */
export function getHreflangLinks(path: string): JSX.Element[] {
  const alternateUrls = getAlternateLanguageUrls(path);
  
  // Create link elements for each language
  const links = alternateUrls.map(({ lang, url }) => 
    <link key={`hreflang-${lang}`} rel="alternate" hrefLang={lang} href={url} />
  );
  
  // Add x-default (usually points to English version)
  links.push(
    <link key="hreflang-x-default" rel="alternate" hrefLang="x-default" href={getCanonicalUrl(path, 'en')} />
  );
  
  return links;
}

/**
 * Get the current language from the URL path
 * @returns The language code or 'en' as default
 */
export function getCurrentLanguage(): string {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') return 'en';
  
  // Get the path from the URL
  const path = window.location.pathname;
  
  // Extract language from path pattern: /{lang}/rest-of-path
  const langMatch = path.match(/^\/([a-z]{2})(?:\/|$)/);
  
  // If a two-letter language code is found, return it
  if (langMatch && ['en', 'es', 'fr', 'de', 'zh', 'ja', 'ar', 'hi'].includes(langMatch[1])) {
    return langMatch[1];
  }
  
  // Default to English
  return 'en';
}
