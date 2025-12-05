import { useState, useEffect } from 'react';

export function LanguageToggle() {
  const [lang, setLang] = useState<'ro' | 'en'>('ro');
  const [mounted, setMounted] = useState(false);

  // Hydration fix
  useEffect(() => {
    setMounted(true);
    // Check localStorage and URL params
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang') as 'ro' | 'en' | null;
    const stored = localStorage.getItem('language') as 'ro' | 'en' | null;
    
    // Priority: URL param > localStorage > default (ro)
    const initialLang = urlLang || stored || 'ro';
    
    setLang(initialLang);
    if (!stored && initialLang) {
      localStorage.setItem('language', initialLang);
    }
    
    // Update html lang attribute
    document.documentElement.setAttribute('lang', initialLang);
  }, []);

  const switchLanguage = (newLang: 'ro' | 'en') => {
    setLang(newLang);
    localStorage.setItem('language', newLang);
    document.documentElement.setAttribute('lang', newLang);
    
    // Update URL without reload
    const url = new URL(window.location.href);
    url.searchParams.set('lang', newLang);
    window.history.replaceState({}, '', url.toString());
    
    // Reload to apply language changes
    window.location.reload();
  };

  if (!mounted) {
    return (
      <div className="flex items-center gap-3 text-base bg-stone/40 dark:bg-white/10 rounded-xl px-4 py-2">
        <button
          aria-label="Switch to Romanian"
          className="text-ash dark:text-[#B8C5D0] transition-colors font-semibold px-2.5 py-1 rounded-lg"
        >
          RO
        </button>
        <span className="text-stone/50 dark:text-white/30">|</span>
        <button
          aria-label="Switch to English"
          className="text-ash dark:text-[#B8C5D0] transition-colors font-semibold px-2.5 py-1 rounded-lg"
        >
          EN
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 text-base bg-stone/40 dark:bg-white/10 rounded-xl px-4 py-2">
      <button
        onClick={() => switchLanguage('ro')}
        aria-label="Switch to Romanian"
        className={`transition-colors font-semibold px-2.5 py-1 rounded-lg ${
          lang === 'ro'
            ? 'text-sage dark:text-moss bg-white/90 dark:bg-white/10'
            : 'text-ash dark:text-[#B8C5D0] hover:text-sage dark:hover:text-moss hover:bg-white/90 dark:hover:bg-white/10'
        }`}
      >
        RO
      </button>
      <span className="text-stone/50 dark:text-white/30">|</span>
      <button
        onClick={() => switchLanguage('en')}
        aria-label="Switch to English"
        className={`transition-colors font-semibold px-2.5 py-1 rounded-lg ${
          lang === 'en'
            ? 'text-sage dark:text-moss bg-white/90 dark:bg-white/10'
            : 'text-ash dark:text-[#B8C5D0] hover:text-sage dark:hover:text-moss hover:bg-white/90 dark:hover:bg-white/10'
        }`}
      >
        EN
      </button>
    </div>
  );
}

