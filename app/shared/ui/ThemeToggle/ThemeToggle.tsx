import { FiSun, FiMoon } from "react-icons/fi";
import useTheme from "~/shared/hooks/useTheme";

import styles from "./ThemeToggle.module.scss";
import { motion } from "motion/react";
import Tooltip from "../Tooltip/Tooltip";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={toggleTheme}
        className={styles.button}
        data-tooltip-id="theme-toggle"
        data-tooltip-content="Switch theme"
      >
        {theme === "dark" ? <FiSun /> : <FiMoon />}
      </motion.button>
      <Tooltip id="theme-toggle" />
    </>
  );
};

export default ThemeToggle;
