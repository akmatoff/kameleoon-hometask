import type { ConversionVariation } from "./types";

import data from "@/data/data.json";

export const VARIATIONS: ConversionVariation[] =
  data.variations.map((variation) => ({
    id: variation.id ?? 0,
    name: variation.name,
  })) || [];

export const VIEW_MODE_OPTIONS = [
  { value: "day", label: "Day" },
  { value: "week", label: "Week" },
];
