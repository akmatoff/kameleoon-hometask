import { useCallback, useEffect, useState } from "react";
import { StorageKeys, type Theme } from "../types";

const getInitialTheme = (): Theme => {
  const saved = localStorage.getItem(StorageKeys.Theme);
  if (saved === "light" || saved === "dark") return saved;

  if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
};

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  useEffect(() => {
    localStorage.setItem(StorageKeys.Theme, theme);

    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return { theme, toggleTheme, setTheme };
}
