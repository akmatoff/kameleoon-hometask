import useSelectedVariations from "../services/useSelectedVariations";
import ConversionChart from "./ConversionChart";
import { CHART_PERIOD_OPTIONS, VARIATIONS } from "../constants";
import MultiSelect from "~/shared/ui/MultiSelect/MultiSelect";
import Select from "~/shared/ui/Select/Select";
import useSelectedPeriod from "../services/useSelectedPeriod";

export const Conversions = () => {
  const { selectedVariations, update } = useSelectedVariations();
  const { selectedPeriod, update: updatePeriod } = useSelectedPeriod();

  const handleSelect = (values: string[]) => {
    if (values.length === 0) {
      update(VARIATIONS.map((v) => String(v.id)));
      return;
    }

    update(values.map((v) => String(v)));
  };

  return (
    <div style={{ width: "100%" }}>
      <div>
        <MultiSelect
          items={VARIATIONS.map((v) => ({
            label: v.name,
            value: String(v.id),
          }))}
          selectedValues={selectedVariations.map((v) => String(v.id))}
          onChange={handleSelect}
        />
        <Select
          items={CHART_PERIOD_OPTIONS.map((option) => ({
            label: option.label,
            value: option.value,
          }))}
          value={selectedPeriod}
          onChange={(value) => updatePeriod(value)}
        />
      </div>

      <ConversionChart />
    </div>
  );
};

export default Conversions;
