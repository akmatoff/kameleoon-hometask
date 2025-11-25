import data from "@/data/data.json";
import { useMemo } from "react";
import type { ChartData, RawData } from "../types";
import { VARIATIONS } from "../constants";

export const useConversionRate = (): ChartData[] => {
  const rawData = data.data as RawData[];

  return useMemo(() => {
    return rawData.map((item) => {
      const record: ChartData = {
        date: item.date,
      };

      VARIATIONS.forEach((variation) => {
        const conversions = item.conversions[variation.id!] || 0;
        const visits = item.visits[variation.id!] || 0;

        record[variation.id!] = (conversions / visits) * 100 || 0;
      });

      return record;
    });
  }, []);
};
