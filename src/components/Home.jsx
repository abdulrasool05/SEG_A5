import "./Home.css";
import BarGraph from "./BarGraph";
import LineGraph from "./LineGraph";
import barGraphData from "../barGraphData";
import lineGraphData from "../lineGraphData";
import { useTranslation } from "react-i18next";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";

import { useState } from "react";

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [era, setEra] = useState("All");
  const [yearRange, setYearRange] = useState({ start: 2016, end: 2025 });
  const { i18n, t } = useTranslation();

  const [language, setLanguage] = useState(i18n.language || "en");

  const filteredGraphData = barGraphData.filter((team) =>
    selectedCountry === "All" ? true : team.country === selectedCountry
  );

  const filteredLineData = lineGraphData.filter(
    (item) => item.year >= yearRange.start && item.year <= yearRange.end
  );

  return (
    <>
      <Navbar className=" navBar">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Brand className="d-flex align-items-center gap-2 navText">
            <img
              alt=""
              src="/images/logo1.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
            <span className="navTitle">{t("navTitle")}</span>
          </Navbar.Brand>
        </Container>

        <ButtonGroup className="languageToggle custom-toggle-group">
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
            className={`custom-toggle-btn ${language === "en" ? "active" : ""}`}
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
            className={`custom-toggle-btn ${language === "fr" ? "active" : ""}`}
          >
            Français
          </ToggleButton>
        </ButtonGroup>
      </Navbar>

      <div className="graph-container">
        <div className="graph-item">
          <BarGraph
            data={filteredGraphData}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            era={era}
            setEra={setEra}
          />
        </div>
        <div className="graph-item">
          <LineGraph
            data={filteredLineData}
            yearRange={yearRange}
            setYearRange={setYearRange}
          />
        </div>
      </div>
    </>
  );
}
