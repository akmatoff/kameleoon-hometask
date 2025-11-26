import { useCallback, useEffect, useState } from "react";
import { StorageKeys, type Theme } from "../types";

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>(
    localStorage.getItem(StorageKeys.Theme) as Theme
  );

  useEffect(() => {
    const savedTheme = localStorage.getItem(StorageKeys.Theme) as Theme | null;

    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    const root = document.body;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem(StorageKeys.Theme, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  return { theme, toggleTheme, setTheme };
}
