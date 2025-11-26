import { FiSun, FiMoon } from "react-icons/fi";
import useTheme from "~/shared/hooks/useTheme";

import styles from "./ThemeToggle.module.scss";
import { motion } from "motion/react";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className={styles.button}
    >
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </motion.button>
  );
};

export default ThemeToggle;
