import type { ConversionVariation } from "./types";

import data from "@/data/data.json";

export const VARIATIONS: ConversionVariation[] =
  data.variations.map((variation) => ({
    id: variation.id ?? 0,
    name: variation.name,
  })) || [];

export const CHART_PERIOD_OPTIONS = [
  { value: "day", label: "day" },
  { value: "week", label: "week" },
];
