import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      all: "All",
      barTitle: "All Time Champions League Wins",
      modernEra: "Modern-Era",
      spain: "Spain",
      england: "England",
      germany: "Germany",
      italy: "Italy",
      lineTitle: "Champions League Top Scorers",
      year: "Year",
      goals: "Goals",
      player: "Player",
      realMadrid: "Real Madrid",
      barcelona: "FC Barcelona",
      bayern: "Bayern",
      inter: "Inter Milan",
      acmilan: "AC Milan",
      chelsea: "Chelsea",
      liverpool: "Liverpool",
      city: "Manchester City"
    }
  },
  fr: {
    translation: {
      all: "Tout",
      barTitle: "Victoires en Ligue des Champions de tous les temps",
      modernEra: "Ère moderne",
      spain: "Espagne",
      england: "Angleterre",
      germany: "Allemagne",
      italy: "Italie",
      lineTitle: "Meilleurs buteurs de la Ligue des Champions",
      year: "Année",
      goals: "Buts",
      player: "Joueur",
      realMadrid: "Real Madrid",
      barcelona: "FC Barcelone",
      bayern: "Bayern",
      inter: "Inter Milan",
      acmilan: "AC Milan",
      chelsea: "Chelsea",
      liverpool: "Liverpool",
      city: "Manchester City"
    }
  }
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
