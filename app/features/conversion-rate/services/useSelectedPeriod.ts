import { useSearchParams } from "react-router";
import { CHART_PERIOD_OPTIONS } from "../constants";
import { QueryParamKeys } from "~/shared/types";
import { useMemo } from "react";

export default function useSelectedPeriod() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedPeriod = useMemo(() => {
    const param = searchParams.get(QueryParamKeys.SelectedPeriod);

    return param || CHART_PERIOD_OPTIONS[0].value;
  }, [searchParams]);

  const update = (value: string) => {
    setSearchParams({
      [QueryParamKeys.SelectedPeriod]: value,
    });
  };

  return {
    selectedPeriod,
    update,
  };
}
