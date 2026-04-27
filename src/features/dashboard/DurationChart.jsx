import styled from "styled-components";
import Heading from "../../ui/Heading";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { useDarkMode } from "../../context/DarkModeContext";

const ChartBox = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);
  padding: 2.4rem 3.2rem;
  grid-column: 3 / span 2;

  & > *:first-child {
    margin-bottom: 1.6rem;
  }

  & .recharts-pie-label-text {
    font-weight: 600;
  }
`;

const DURATION_LABELS = [
  { duration: "1 night", nights: (n) => n === 1 },
  { duration: "2 nights", nights: (n) => n === 2 },
  { duration: "3 nights", nights: (n) => n === 3 },
  { duration: "4-5 nights", nights: (n) => n >= 4 && n <= 5 },
  { duration: "6-7 nights", nights: (n) => n >= 6 && n <= 7 },
  { duration: "8-14 nights", nights: (n) => n >= 8 && n <= 14 },
  { duration: "15-21 nights", nights: (n) => n >= 15 && n <= 21 },
  { duration: "21+ nights", nights: (n) => n > 21 },
];

const COLORS = {
  light: [
    "#ef4444",
    "#f97316",
    "#eab308",
    "#84cc16",
    "#22c55e",
    "#14b8a6",
    "#3b82f6",
    "#a855f7",
  ],
  dark: [
    "#b91c1c",
    "#c2410c",
    "#a16207",
    "#4d7c0f",
    "#15803d",
    "#0f766e",
    "#1d4ed8",
    "#7e22ce",
  ],
};

function prepareData(stays, isDarkMode) {
  const palette = isDarkMode ? COLORS.dark : COLORS.light;

  const counts = DURATION_LABELS.map((item, i) => ({
    duration: item.duration,
    color: palette[i],
    value: stays.filter((s) => item.nights(s.numNights)).length,
  }));

  return counts.filter((obj) => obj.value > 0);
}

function DurationChart({ confirmedStays }) {
  const { isDarkMode } = useDarkMode();
  const data = prepareData(confirmedStays, isDarkMode);

  return (
    <ChartBox>
      <Heading as="h2">Stay duration summary</Heading>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            nameKey="duration"
            dataKey="value"
            innerRadius={85}
            outerRadius={110}
            cx="40%"
            cy="50%"
            paddingAngle={3}
          >
            {data.map((entry) => (
              <Cell
                key={entry.duration}
                fill={entry.color}
                stroke={entry.color}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            verticalAlign="middle"
            align="right"
            width="30%"
            layout="vertical"
            iconSize={15}
            iconType="circle"
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartBox>
  );
}

export default DurationChart;
