import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      navTitle: "Champions League Statistics",
      all: "All",
      barTitle: "All Time Titles",
      modernEra: "Modern-Era",
      spain: "Spain",
      england: "England",
      germany: "Germany",
      italy: "Italy",
      lineTitle: "Most Goals Per Year",
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
      city: "Man City",
      barP: "The total number of UEFA Champions league titles each team has won throughout history",
      lineP: "Highest number of goals scored by a single player in each Champions League season",
      winner: 'Country of Winner',
      team: "Team"

    }
  },
  fr: {
    translation: {
      navTitle: "Statistiques de la Ligue des Champions",
      all: "Tout",
      barTitle: "Titres de tous les temps",
      modernEra: "Ère moderne",
      spain: "Espagne",
      england: "Angleterre",
      germany: "Allemagne",
      italy: "Italie",
      lineTitle: "Plus grand nombre de buts par an",
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
      city: "Manchester City",
      barP: "Le nombre total de titres de Ligue des champions de l'UEFA remportés par chaque équipe au cours de l'histoire",
      lineP: "Plus grand nombre de buts marqués par un seul joueur au cours de chaque saison de la Ligue des champions",
      winner: "Pays du gagnant",
      team: "Équipe"
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
