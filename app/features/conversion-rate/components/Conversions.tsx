import useSelectedVariations from "../services/useSelectedVariations";
import ConversionChart from "./ConversionChart";
import { VARIATIONS } from "../constants";
import MultiSelect from "~/shared/ui/MultiSelect/MultiSelect";

export const Conversions = () => {
  const { selectedVariations, update } = useSelectedVariations();

  return (
    <div style={{ width: "100%" }}>
      <MultiSelect
        items={VARIATIONS.map((v) => ({ label: v.name, value: String(v.id) }))}
        selectedValues={selectedVariations.map((v) => String(v.id))}
        onChange={(values) => update(values.map((v) => String(v)))}
      />
      <ConversionChart />
    </div>
  );
};

export default Conversions;
