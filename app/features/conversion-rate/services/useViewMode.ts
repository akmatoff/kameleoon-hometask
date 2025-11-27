import { useSearchParams } from "react-router";
import { VIEW_MODE_OPTIONS } from "../constants";
import { QueryParamKeys } from "~/shared/types";
import { useMemo } from "react";
import type { ViewMode } from "../types";

export default function useViewMode() {
  const [searchParams, setSearchParams] = useSearchParams();

  const viewMode = useMemo(() => {
    const param = searchParams.get(QueryParamKeys.ViewMode) as ViewMode;

    return param || VIEW_MODE_OPTIONS[0].value;
  }, [searchParams]);

  const update = (value: string) => {
    const newParams = new URLSearchParams(searchParams);

    if (value.length === 0) {
      newParams.delete(QueryParamKeys.ViewMode);
    } else {
      newParams.set(QueryParamKeys.ViewMode, value);
    }
    setSearchParams(newParams, { replace: true });
  };

  return {
    viewMode,
    update,
  };
}
