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

export const ConversionChart = () => {
  const data = useConversionRate();
  const { selectedVariations } = useSelectedVariations();

  return (
    <ResponsiveContainer width="100%" height={500}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis width="auto" />
        <Tooltip />
        <Legend />

        {selectedVariations.map((variation) => (
          <Line
            key={variation.id}
            dataKey={variation.id}
            type="monotone"
            stroke="var(--chart-1)"
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
