import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
      en: {
        translation: {
          welcome: "Welcome",
          homeTitle: "Home Page",
          all: "All"
        }
      },
      fr: {
        translation: {
          welcome: "Bienvenue",
          homeTitle: "Page d'accueil",
          all: "Tout"
        }
      },
    };

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;
