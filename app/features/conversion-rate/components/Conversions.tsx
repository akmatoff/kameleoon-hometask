import useSelectedVariations from "../services/useSelectedVariations";
import ConversionChart from "./ConversionChart";
import { VIEW_MODE_OPTIONS, VARIATIONS } from "../constants";
import MultiSelect from "~/shared/ui/MultiSelect/MultiSelect";
import Select from "~/shared/ui/Select/Select";
import useViewMode from "../services/useViewMode";
import ThemeToggle from "~/shared/ui/ThemeToggle/ThemeToggle";
import { useConversionRate } from "../services/useConversionRate";
import useZoom from "../services/useZoom";
import { LuImage, LuMinus, LuPlus } from "react-icons/lu";
import { useRef } from "react";
import useExport from "../services/useExport";
import Tooltip from "~/shared/ui/Tooltip/Tooltip";
import Button from "~/shared/ui/Button/Button";

export const Conversions = () => {
  const chartRef = useRef<HTMLDivElement | null>(null);

  const { selectedVariations, update } = useSelectedVariations();
  const { viewMode, update: updateViewMode } = useViewMode();

  const data = useConversionRate(viewMode);

  const { visibleData, zoomIn, zoomOut, canZoomOut, canZoomIn } = useZoom(data);

  const { exportPng } = useExport(chartRef);

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

        <Button
          data-tooltip-id="zoom-in"
          data-tooltip-content="Zoom In"
          onClick={() => zoomIn()}
          disabled={!canZoomIn}
        >
          <LuPlus />
        </Button>
        <Tooltip id="zoom-in" />

        <Button
          data-tooltip-id="zoom-out"
          data-tooltip-content="Zoom Out"
          onClick={() => zoomOut()}
          disabled={!canZoomOut}
        >
          <LuMinus />
        </Button>
        <Tooltip id="zoom-out" />

        <Button
          onClick={() => exportPng()}
          data-tooltip-id="export-png"
          data-tooltip-content="Export PNG"
        >
          <LuImage />
        </Button>
        <Tooltip id="export-png" />
      </div>

      <ConversionChart chartRef={chartRef} data={visibleData} />
    </div>
  );
};

export default Conversions;
