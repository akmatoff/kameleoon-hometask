import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { QueryParamKeys } from "~/shared/types";
import { VARIATIONS } from "../constants";

export default function useSelectedVariations() {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedVariations = useMemo(() => {
    const param = searchParams.get(QueryParamKeys.SelectedVariations);

    const ids =
      !param || param.length === 0
        ? VARIATIONS.map((v) => v.id)
        : param.split(",").map((id) => Number(id));

    return VARIATIONS.filter((v) => ids.includes(v.id));
  }, [searchParams]);

  const update = (value: string[]) => {
    console.log(value);
    setSearchParams({
      [QueryParamKeys.SelectedVariations]: value.join(","),
    });
  };

  return {
    selectedVariations,
    update,
  };
}
