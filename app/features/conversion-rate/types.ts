export type RawData = {
  date: string;
  visits: Record<string, number | undefined>;
  conversions: Record<string, number | undefined>;
};

export type ChartData = {
  date: string;
  conversionRate: number;
};

export type ConversionVariation = {
  id?: number;
  name: string;
};
