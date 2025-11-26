import { FiSun, FiMoon } from "react-icons/fi";
import useTheme from "~/shared/hooks/useTheme";

import styles from "./ThemeToggle.module.scss";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={styles.button}>
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default ThemeToggle;
