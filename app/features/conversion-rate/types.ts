export type RawData = {
  date: string;
  visits: Record<string, number | undefined>;
  conversions: Record<string, number | undefined>;
};

export type ChartData = {
  date: string;
  [key: string]: number | string;
};

export type ConversionVariation = {
  id: number;
  name: string;
};

export type ViewMode = "day" | "week";
