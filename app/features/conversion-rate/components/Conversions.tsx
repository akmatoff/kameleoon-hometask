import useSelectedVariations from "../services/useSelectedVariations";
import ConversionChart from "./ConversionChart";
import { VIEW_MODE_OPTIONS, VARIATIONS } from "../constants";
import MultiSelect from "~/shared/ui/MultiSelect/MultiSelect";
import Select from "~/shared/ui/Select/Select";
import useViewMode from "../services/useViewMode";

export const Conversions = () => {
  const { selectedVariations, update } = useSelectedVariations();
  const { viewMode, update: updateViewMode } = useViewMode();

  const handleSelect = (values: string[]) => {
    if (values.length === 0) {
      update(VARIATIONS.map((v) => String(v.id)));
      return;
    }

    update(values.map((v) => String(v)));
  };

  return (
    <div style={{ width: "100%", padding: "16px" }}>
      <div className="conversions__options">
        <MultiSelect
          items={VARIATIONS.map((v) => ({
            label: v.name,
            value: String(v.id),
          }))}
          selectedValues={selectedVariations.map((v) => String(v.id))}
          onChange={handleSelect}
        />
        <Select
          items={VIEW_MODE_OPTIONS.map((option) => ({
            label: option.label,
            value: option.value,
          }))}
          value={viewMode}
          onChange={(value) => updateViewMode(value)}
        />
      </div>

      <ConversionChart />
    </div>
  );
};

export default Conversions;
