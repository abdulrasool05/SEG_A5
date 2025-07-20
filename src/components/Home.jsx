import "./Home.css";
import BarGraph from "./BarGraph";
import LineGraph from "./LineGraph";
import barGraphData from "../barGraphData";
import lineGraphData from "../lineGraphData";
import { useTranslation } from "react-i18next";

import { useState } from "react";

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [era, setEra] = useState("All");
  const [yearRange, setYearRange] = useState({ start: 2016, end: 2025 });
  const { i18n } = useTranslation(); // <- gives access to the i18n instance

  const [language, setLanguage] = useState(i18n.language || "en");

  const toggleLanguage = () => {
    const newLang = language === "en" ? "fr" : "en";
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
  };

  const filteredGraphData = barGraphData.filter((team) =>
    selectedCountry === "All" ? true : team.country === selectedCountry
  );

  const filteredLineData = lineGraphData.filter(
    (item) => item.year >= yearRange.start && item.year <= yearRange.end
  );

  return (
    <>
      <button onClick={toggleLanguage}>
        {language === "en" ? "Français" : "English"}
      </button>
      <div style={{ width: "100%", height: "500px", marginBottom: "13rem" }}>
        <BarGraph
          data={filteredGraphData}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          era={era}
          setEra={setEra}
        />
      </div>
      <div style={{ width: "100%", height: "500px", marginBottom: "10rem" }}>
        <LineGraph
          data={filteredLineData}
          yearRange={yearRange}
          setYearRange={setYearRange}
        />
      </div>
    </>
  );
}
