import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useTranslation } from "react-i18next";
import "./LineGraph.css";

export default function LineGraph({ data, yearRange, setYearRange }) {
  const radios = [
    { name: "2021-2025", value: { start: 2021, end: 2025 } },
    { name: "2016-2020", value: { start: 2016, end: 2020 } },
    { name: "2016-2025", value: { start: 2016, end: 2025 } },
  ];

  const { t } = useTranslation();

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;

      return (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#1a1a1a",
            padding: "10px",
            color: "#f0f0f0",
          }}
        >
          <img
            src={data.image}
            alt={data.player}
            style={{
              width: "70px",
              height: "70px",
              marginRight: "12px",
              objectFit: "cover",
            }}
          />
          <div>
            <p>
              <strong>{t("player")}:</strong> {data.player}
            </p>
            <p>
              <strong>{t("team")}:</strong> {data.team}
            </p>
            <p>
              <strong>{t("goals")}:</strong> {data.goals}
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div className="text-center mb-3">
        <h1 className="lineTitle">{t("lineTitle")}</h1>
        <p1>{t("lineP")}</p1>
      </div>

      <div className="d-flex justify-content-center mb-4">
        <ButtonGroup className="custom-toggle-group">
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              id={`line-${idx}`}
              type="radio"
              name="yearRange"
              value={JSON.stringify(radio.value)}
              checked={
                JSON.stringify(yearRange) === JSON.stringify(radio.value)
              }
              className={`custom-toggle-btn ${
                JSON.stringify(yearRange) === JSON.stringify(radio.value)
                  ? "active"
                  : ""
              }`}
              onChange={(e) => setYearRange(JSON.parse(e.currentTarget.value))}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>

      <ResponsiveContainer height="100%" width="100%">
        <LineChart
          data={data}
          margin={{
            bottom: 5,
            left: 20,
            right: 30,
            top: 5,
          }}
        >
          <XAxis
            dataKey="year"
            tick={{ fill: "#f0f0f0", dy: 7 }}
            axisLine={{ stroke: "#f0f0f0" }}
            tickLine={{ stroke: "#f0f0f0" }}
          />
          <YAxis
            tick={{ fill: "#f0f0f0" }}
            axisLine={{ stroke: "#f0f0f0" }}
            tickLine={{ stroke: "#f0f0f0" }}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "gold",
              strokeWidth: 2,
            }}
          />
          <Line
            activeDot={{
              r: 8,
            }}
            dataKey="goals"
            stroke="#00bfa6"
            type="linear"
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
