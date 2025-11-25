import data from "@/data/data.json";
import { useMemo } from "react";
import type { ChartData, RawData } from "../types";

export const useConversionRate = (
  selectedVariations: number[]
): ChartData[] => {
  const rawData = data.data as RawData[];

  return useMemo(() => {
    return rawData.map((item) => {
      const dataPoint: ChartData = {
        date: item.date,
        conversionRate: 0,
      };

      selectedVariations.forEach((variation) => {
        const id = variation.toString();
        item.visits[id] = item.visits[id] || 0;
        item.conversions[id] = item.conversions[id] || 0;

        dataPoint.conversionRate =
          (item.conversions[id] / item.visits[id]) * 100;
      });

      return dataPoint;
    });
  }, [selectedVariations]);
};
