// Initialize language from URL path
const currentLang = window.location.pathname.split('/')[1] || 'en';

// Load translations
async function loadTranslations(lang = 'en') {
  try {
    const response = await fetch(`/src/locales/${lang}.json`);
    return await response.json();
  } catch (error) {
    console.error('Error loading translations:', error);
    return {};
  }
}

// Update page content with translations
async function updateContent() {
  const translations = await loadTranslations(currentLang);
  
  // Update elements with data-i18n attributes
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.dataset.i18n;
    element.textContent = key.split('.').reduce((obj, i) => obj[i], translations);
  });

  // Update language switcher
  const switcher = document.getElementById('languageSwitcher');
  if (switcher) {
    switcher.value = `/${currentLang}/`;
  }
}

// Initialize translations
updateContent();


// Handle language paths correctly
document.getElementById('languageSwitcher')?.addEventListener('change', function() {
  const newPath = this.value;
  window.location.href = `${window.location.origin}${newPath}`;
});