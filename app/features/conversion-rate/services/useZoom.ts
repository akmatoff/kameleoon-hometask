import { useEffect, useMemo, useState } from "react";

export default function useZoom<T>(data: T[], step = 5) {
  const [windowSize, setWindowSize] = useState(data.length);
  const [centerIndex, setCenterIndex] = useState(Math.floor(data.length / 2));

  const minSize = 5;

  const zoomIn = () => {
    setWindowSize((windowSize) => Math.max(windowSize - step, minSize));
  };

  const zoomOut = () => {
    setWindowSize((windowSize) => Math.min(windowSize + step, data.length));
  };

  const reset = () => {
    setWindowSize(data.length);
    setCenterIndex(Math.floor(data.length / 2));
  };

  const canZoomOut = useMemo(() => {
    return windowSize < data.length;
  }, [windowSize, data.length]);

  const canZoomIn = useMemo(() => {
    return windowSize > minSize;
  }, [windowSize, minSize]);

  useEffect(() => {
    setWindowSize((prev) => Math.max(minSize, Math.min(prev, data.length)));
    setCenterIndex((prev) =>
      Math.max(0, Math.min(prev, Math.max(0, data.length - 1)))
    );
  }, [data.length, minSize]);

  const visibleData = useMemo(() => {
    if (data.length === 0) return [];

    const center = Math.floor(windowSize / 2);

    let start = centerIndex - center;
    let end = centerIndex + center;

    start = Math.max(start, 0);
    end = Math.min(end, data.length);

    return data.slice(start, end);
  }, [data, windowSize, centerIndex]);

  return { visibleData, zoomIn, zoomOut, reset, canZoomOut, canZoomIn };
}
