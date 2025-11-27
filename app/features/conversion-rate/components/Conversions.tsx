import useSelectedVariations from "../services/useSelectedVariations";
import ConversionChart from "./ConversionChart";
import { VIEW_MODE_OPTIONS, VARIATIONS } from "../constants";
import MultiSelect from "~/shared/ui/MultiSelect/MultiSelect";
import Select from "~/shared/ui/Select/Select";
import useViewMode from "../services/useViewMode";
import ThemeToggle from "~/shared/ui/ThemeToggle/ThemeToggle";
import { useConversionRate } from "../services/useConversionRate";
import useZoom from "../services/useZoom";
import { LuMinus, LuPlus } from "react-icons/lu";

export const Conversions = () => {
  const { selectedVariations, update } = useSelectedVariations();
  const { viewMode, update: updateViewMode } = useViewMode();

  const data = useConversionRate(viewMode);

  const { visibleData, zoomIn, zoomOut } = useZoom(data);

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

        <ThemeToggle />

        <button onClick={() => zoomIn()}>
          <LuPlus />
        </button>

        <button onClick={() => zoomOut()}>
          <LuMinus />
        </button>
      </div>

      <ConversionChart data={visibleData} />
    </div>
  );
};

export default Conversions;
