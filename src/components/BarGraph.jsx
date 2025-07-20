import { ResponsiveContainer, BarChart, Bar, Rectangle, XAxis } from "recharts";
import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useTranslation } from "react-i18next";
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

  return (
    <>
      <h1>{t("barTitle")}</h1>
      <div className="d-flex justify-content-center align-items-center gap-3">
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              variant={"outline-success"}
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
          title={t(selectedCountry.toLowerCase())}
          onSelect={(val) => setSelectedCountry(val)}
        >
          <Dropdown.Item eventKey="All">{t("all")}</Dropdown.Item>
          <Dropdown.Item eventKey="Spain">{t("spain")}</Dropdown.Item>
          <Dropdown.Item eventKey="Germany">{t("germany")}</Dropdown.Item>
          <Dropdown.Item eventKey="Italy">{t("italy")}</Dropdown.Item>
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
          <XAxis dataKey="team" />
          <Bar
            activeBar={<Rectangle fill="pink" stroke="blue" />}
            dataKey={era == "All" ? "wins" : "modernEraWins"}
            fill="#8884d8"
            label={{ position: "top", fill: "black", fontSize: 14 }}
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
