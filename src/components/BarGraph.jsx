import { ResponsiveContainer, BarChart, Bar, Rectangle, XAxis } from "recharts";
import { useState, useEffect } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useTranslation } from "react-i18next";
import "./BarGraph.css";
export default function BarGraph({
  data,
  selectedCountry,
  setSelectedCountry,
  era,
  setEra,
}) {
  const { t } = useTranslation();

  const radios = [
    { name: t("all"), value: "All" },
    { name: t("modernEra"), value: "Modern-Era" },
  ];

  const [tickFontSize, setTickFontSize] = useState(16);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1367) {
        setTickFontSize(12);
      } else {
        setTickFontSize(16);
      }
    };
    handleResize();
  }, []);

  return (
    <>
      <div className="text-center mb-3">
        <h1 className="barTitle">{t("barTitle")}</h1>
        <p1>{t("barP")}</p1>
      </div>

      <div className="d-flex justify-content-center align-items-center gap-3 mb-4">
        <ButtonGroup className="custom-toggle-group">
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant="outline-none"
              className={`custom-toggle-btn ${
                era === radio.value ? "active" : ""
              }`}
              name="radio"
              value={radio.value}
              checked={era === radio.value}
              onChange={(e) => setEra(e.target.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
        <DropdownButton
          id="dropdown-basic-button"
          title={
            selectedCountry === "All"
              ? t("winner")
              : t(selectedCountry.toLowerCase())
          }
          onSelect={(val) => setSelectedCountry(val)}
          className="custom-dropdown"
          variant="outline-none"
        >
          <Dropdown.Item eventKey="All">{t("all")}</Dropdown.Item>
          <Dropdown.Item eventKey="Spain">{t("spain")}</Dropdown.Item>
          <Dropdown.Item eventKey="Germany">{t("germany")}</Dropdown.Item>
          <Dropdown.Item eventKey="Italy">{t("italy")}</Dropdown.Item>
          <Dropdown.Item eventKey="England">{t("england")}</Dropdown.Item>
        </DropdownButton>
      </div>
      <ResponsiveContainer height="100%" width="100%">
        <BarChart
          accessibilityLayer
          barCategoryGap="10%"
          barGap={4}
          data={data}
          margin={{
            bottom: 5,
            left: 20,
            right: 30,
            top: 30,
          }}
          syncMethod="index"
        >
          <XAxis
            dataKey="team"
            tick={{ fill: "#f0f0f0", dy: 7, fontSize: tickFontSize }}
            axisLine={{ stroke: "#f0f0f0" }}
            tickLine={{ stroke: "#f0f0f0" }}
          />
          <Bar
            activeBar={<Rectangle fill="#f0f0f0" stroke="#00bfa6" />}
            dataKey={era == "All" ? "wins" : "modernEraWins"}
            fill="#00bfa6"
            label={{ position: "top", fill: "#f0f0f0", fontSize: 20 }}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
