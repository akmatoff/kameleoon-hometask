import data from "@/data/data.json";
import { useMemo } from "react";
import type { ChartData, RawData, ViewMode } from "../types";
import { VARIATIONS } from "../constants";
import { format, parseISO, startOfWeek } from "date-fns";

export const useConversionRate = (viewMode: ViewMode = "day"): ChartData[] => {
  const rawData = data.data as RawData[];

  return useMemo(() => {
    if (viewMode === "day") {
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
    }

    const weekMap: Record<
      string,
      { conversions: Record<number, number>; visits: Record<number, number> }
    > = {};

    rawData.forEach((item) => {
      const weekKey = format(
        startOfWeek(parseISO(item.date), { weekStartsOn: 1 }),
        "yyyy-MM-dd"
      );

      if (!weekMap[weekKey]) {
        weekMap[weekKey] = { conversions: {}, visits: {} };
      }

      VARIATIONS.forEach((variation) => {
        const id = variation.id!;

        weekMap[weekKey].conversions[id] =
          (weekMap[weekKey].conversions[id] || 0) + (item.conversions[id] || 0);

        weekMap[weekKey].visits[id] =
          (weekMap[weekKey].visits[id] || 0) + (item.visits[id] || 0);
      });
    });

    return Object.entries(weekMap).map(([week, { conversions, visits }]) => {
      const record: ChartData = { date: week };

      VARIATIONS.forEach((variation) => {
        const id = variation.id!;
        const conv = conversions[id] || 0;
        const vis = visits[id] || 0;
        record[id] = vis ? (conv / vis) * 100 : 0;
      });

      return record;
    });
  }, [viewMode, rawData]);
};
