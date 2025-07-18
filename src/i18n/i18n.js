import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend'; // necessary to load files from directory

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // my project's path to translation files
    },
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
