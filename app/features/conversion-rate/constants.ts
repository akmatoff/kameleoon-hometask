import type { ConversionVariation } from "./types";

import data from "@/data/data.json";

export const VARIATIONS: ConversionVariation[] = data.variations || [];
