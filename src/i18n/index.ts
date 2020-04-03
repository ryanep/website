import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from '../locales/en/translations.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: translations,
    },
    lng: 'en',
    fallbackLng: 'en',
    ns: ['translations'],
    defaultNS: 'translations',
    debug: process.env.NODE_ENV === 'development',
    react: {
      wait: true,
      useSuspense: false,
    },
  });

export default i18n;
