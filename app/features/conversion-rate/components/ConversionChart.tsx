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
import { useConversionRate } from "@/features/conversion-rate/services/useConversionRate";
import useSelectedVariations from "../services/useSelectedVariations";
import useViewMode from "../services/useViewMode";
import type { ChartData } from "../types";
import { useRef } from "react";
import useExport from "../services/useExport";

const COLORS = ["var(--chart-1)", "var(--chart-2)", "var(--chart-3)"];

type Props = {
  data: ChartData[];
  chartRef: React.RefObject<HTMLDivElement | null>;
};
export const ConversionChart = ({ data, chartRef }: Props) => {
  const { selectedVariations } = useSelectedVariations();

  return (
    <ResponsiveContainer width="100%" height={500} ref={chartRef}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis width="auto" tickFormatter={(value) => `${value}%`} />
        <Tooltip />
        <Legend />

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
