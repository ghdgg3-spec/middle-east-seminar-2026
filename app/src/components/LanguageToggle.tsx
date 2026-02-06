import { useLanguage } from '@/hooks/useLanguage';

export function LanguageToggle() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button 
      onClick={toggleLanguage}
      className="lang-toggle"
      aria-label="Toggle language"
    >
      <span className={`font-techno lang-option ${language === 'en' ? 'active' : ''}`}>
        {t('lang.en')}
      </span>
      <span className={`font-techno lang-option ${language === 'ko' ? 'active' : ''}`}>
        {t('lang.ko')}
      </span>
    </button>
  );
}
