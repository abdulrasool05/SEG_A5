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
    { name: "Modern-Era", value: "Modern-Era" },
  ];

  return (
    <>
      <h1>All Time Champions League Wins</h1>
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
          title={selectedCountry}
          onSelect={(val) => setSelectedCountry(val)}
        >
          <Dropdown.Item eventKey="All">All</Dropdown.Item>
          <Dropdown.Item eventKey="Spain">Spain</Dropdown.Item>
          <Dropdown.Item eventKey="England">England</Dropdown.Item>
          <Dropdown.Item eventKey="Germany">Germany</Dropdown.Item>
          <Dropdown.Item eventKey="Italy">Italy</Dropdown.Item>
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
