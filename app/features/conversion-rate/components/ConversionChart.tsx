import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useSelectedVariations from "../services/useSelectedVariations";
import type { ChartData } from "../types";

const COLORS = ["var(--chart-1)", "var(--chart-2)", "var(--chart-3)"];

type Props = {
  data: ChartData[];
  chartRef: React.RefObject<HTMLDivElement | null>;
};
export const ConversionChart = ({ data, chartRef }: Props) => {
  const { selectedVariations } = useSelectedVariations();

  return (
    <ResponsiveContainer width="100%" height={650} ref={chartRef}>
      <LineChart
        data={data}
        margin={{ bottom: 20, top: 0, left: 8, right: 8 }}
        responsive
        accessibilityLayer
      >
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          stroke="var(--border-color)"
        />
        <XAxis
          dataKey="date"
          tick={{ fill: "var(--muted-foreground-color)" }}
          tickMargin={16}
          stroke="var(--border-color)"
          fontSize={12}
        />
        <YAxis
          width="auto"
          stroke="var(--border-color)"
          tickFormatter={(value) => `${value}%`}
          tick={{ fill: "var(--muted-foreground-color)" }}
          tickMargin={8}
          tickCount={8}
          fontSize={12}
          domain={[0, "auto"]}
        />
        <Tooltip />
        {/* <Legend /> */}

        {selectedVariations.map((variation, index) => (
          <Line
            key={variation.id}
            dataKey={variation.id}
            type="monotone"
            stroke={COLORS[index % COLORS.length]}
            strokeWidth={2}
            name={variation.name}
            dot={false}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ConversionChart;
