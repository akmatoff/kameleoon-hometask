import { motion } from "motion/react";
import type { TooltipContentProps } from "recharts";
import type {
  NameType,
  ValueType,
} from "recharts/types/component/DefaultTooltipContent";
import styles from "./ChartTooltip.module.scss";
import { IoCalendarClear } from "react-icons/io5";

export const ChartTooltip = ({
  active,
  payload,
  label,
}: TooltipContentProps<ValueType, NameType>) => {
  const formatPayloadValue = (value: number | string) => {
    if (typeof value === "number") {
      return new Intl.NumberFormat("de-DE", {
        maximumFractionDigits: 2,
      }).format(value);
    }

    return value;
  };

  if (active && payload && payload.length) {
    return (
      <motion.div className={styles.chartTooltip}>
        <div className={styles.header}>
          <IoCalendarClear size={20} />
          <p>{label}</p>
        </div>

        <div className={styles.content}>
          {payload.map((p) => (
            <div className={styles.contentItem} key={p.name}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span
                  className={styles.contentItemBadge}
                  style={{ backgroundColor: p.color }}
                ></span>
                <p className={styles.contentItemName}>{p.name}</p>
              </div>
              <p className={styles.contentItemValue}>
                {formatPayloadValue(p.value)}%
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    );
  }
};

export default ChartTooltip;
