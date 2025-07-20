import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

export default function LineGraph({ data, yearRange, setYearRange }) {
  const radios = [
    { name: "2021-2025", value: { start: 2021, end: 2025 } },
    { name: "2016-2020", value: { start: 2016, end: 2020 } },
    { name: "2016-2025", value: { start: 2016, end: 2025 } },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div
          style={{
            backgroundColor: "white",
            border: "1px solid #ccc",
            padding: "10px",
          }}
        >
          <p>
            <strong>Year:</strong> {label}
          </p>
          <p>
            <strong>Goals:</strong> {data.goals}
          </p>
          <p>
            <strong>Player:</strong> {data.player}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <h1>Champions League Top Scorers</h1>
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`line-${idx}`}
            type="radio"
            name="yearRange"
            value={JSON.stringify(radio.value)}
            checked={JSON.stringify(yearRange) === JSON.stringify(radio.value)}
            onChange={(e) => setYearRange(JSON.parse(e.currentTarget.value))}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>

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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "gold",
              strokeWidth: 2,
            }}
            defaultIndex={3}
          />
          <Line
            activeDot={{
              r: 8,
            }}
            dataKey="goals"
            stroke="#8884d8"
            type="linear"
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
