import {
  CartesianGrid,
  Legend,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useConversionRate } from "@/features/conversion-rate/services/useConversionRate";

export const ConversionChart = () => {
  const data = useConversionRate([0]);

  console.log(data);

  return (
    <LineChart data={data} style={{ width: "100%" }} responsive>
      <CartesianGrid />
      <XAxis dataKey="date" />
      <YAxis dataKey="conversionRate" />
      <Tooltip />
      <Legend />
    </LineChart>
  );
};

export default ConversionChart;
