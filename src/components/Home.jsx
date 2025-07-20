import "./Home.css";
import BarGraph from "./BarGraph";
import LineGraph from "./LineGraph";
import barGraphData from "../barGraphData";
import lineGraphData from "../lineGraphData";
import { useTranslation } from "react-i18next";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

import { useState } from "react";

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [era, setEra] = useState("All");
  const [yearRange, setYearRange] = useState({ start: 2016, end: 2025 });
  const { i18n } = useTranslation(); // <- gives access to the i18n instance

  const [language, setLanguage] = useState(i18n.language || "en");

  const filteredGraphData = barGraphData.filter((team) =>
    selectedCountry === "All" ? true : team.country === selectedCountry
  );

  const filteredLineData = lineGraphData.filter(
    (item) => item.year >= yearRange.start && item.year <= yearRange.end
  );

  return (
    <>
      <ButtonGroup>
        <ToggleButton
          id="toggle1"
          type="radio"
          variant="outline-primary"
          name="language"
          value="en"
          checked={language === "en"}
          onChange={() => {
            i18n.changeLanguage("en");
            setLanguage("en");
          }}
        >
          English
        </ToggleButton>

        <ToggleButton
          id="toggle2"
          type="radio"
          variant="outline-primary"
          name="language"
          value="fr"
          checked={language === "fr"}
          onChange={() => {
            i18n.changeLanguage("fr");
            setLanguage("fr");
          }}
        >
          Français
        </ToggleButton>
      </ButtonGroup>
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
