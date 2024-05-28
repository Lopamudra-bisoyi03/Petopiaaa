import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to Petopia",
          share: "Share stories, photos, and videos of your pets!"
        }
      },
      es: {
        translation: {
          welcome: "Bienvenido a Petopia",
          share: "¡Comparte historias, fotos y videos de tus mascotas!"
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
