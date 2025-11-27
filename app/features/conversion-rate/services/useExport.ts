import html2canvas from "html2canvas";
import type React from "react";

export default function useExport(ref: React.RefObject<HTMLDivElement | null>) {
  const exportPng = async () => {
    if (ref.current === null) {
      return;
    }

    const canvas = await html2canvas(ref.current);
    const dataUrl = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.download = "chart.png";
    link.href = dataUrl;
    link.click();
  };

  return {
    exportPng,
  };
}
